export type Platform = "tiktok" | "instagram" | "spotify" | "livepix";

export interface SocialLink {
  id: string;
  platform: Platform;
  title: string;
  description: string;
  detail: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "tiktok-pessoal",
    platform: "tiktok",
    title: "TikTok",
    description: "Lives e conteúdo pessoal",
    detail: "@poxafrick",
    href: "https://www.tiktok.com/@poxafrick?_r=1&_t=ZS-9B72HUYwy1s",
  },
  {
    id: "tiktok-autora",
    platform: "tiktok",
    title: "TikTok",
    description: "Universo literário",
    detail: "@manufrick_autora",
    href: "https://www.tiktok.com/@manufrick_autora?_r=1&_t=ZS-9B72P4C0tm5",
  },
  {
    id: "instagram-pessoal",
    platform: "instagram",
    title: "Instagram",
    description: "Pessoal",
    detail: "@poxafrick",
    href: "https://www.instagram.com/poxafrick?mdxt=cXluOHI3bDlqZGdo",
  },
  {
    id: "instagram-autora",
    platform: "instagram",
    title: "Instagram",
    description: "Autora",
    detail: "@manufrick_autora",
    href: "https://www.instagram.com/manufrick_autora?exln=MTloanU3YnNuYWlqZQ==",
  },
  {
    id: "spotify-playlist",
    platform: "spotify",
    title: "Spotify",
    description: "Playlist",
    detail: "Minha playlist",
    href: "https://open.spotify.com/playlist/1GmOwyOXTcJiyZKNTqVjuu?si=sLJ6IfpEQWm0Ee5MfavRXQ&utm_source=copy-link&pi=St3OFmTZTdivs",
  },
  {
    id: "livepix",
    platform: "livepix",
    title: "Live Pix",
    description: "Apoie as lives",
    detail: "livepix.gg/poxafrick",
    href: "https://livepix.gg/poxafrick",
  },
];
