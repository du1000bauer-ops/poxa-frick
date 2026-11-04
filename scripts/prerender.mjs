import { build } from "esbuild";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";

const temporaryDirectory = resolve(".prerender");
await mkdir(temporaryDirectory, { recursive: true });
const bundlePath = resolve(temporaryDirectory, "App.mjs");
try {
  await build({
    entryPoints: ["client/src/App.tsx"],
    outfile: bundlePath,
    bundle: true,
    platform: "node",
    packages: "external",
    format: "esm",
    jsx: "automatic",
    logLevel: "warning",
    alias: { "@": resolve("client/src") },
  });
  const { default: App } = await import(pathToFileURL(bundlePath).href);
  const markup = renderToString(React.createElement(App, { ssrPath: "/" }));
  const htmlPath = resolve("dist/public/index.html");
  const html = await readFile(htmlPath, "utf8");
  if (!html.includes('<div id="root"></div>')) throw new Error("Ponto de montagem estático ausente.");
  await writeFile(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
  console.log("HTML pré-renderizado: identidade, textos e seis links disponíveis sem JavaScript.");
} finally {
  await rm(temporaryDirectory, { recursive: true, force: true });
}
