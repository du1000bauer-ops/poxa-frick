import type { CSSProperties } from "react";
import { Chain, CrownMark, FiligreeCorner, Heart, Sparkle } from "./GothicOrnaments";
import { assets } from "../lib/assets";
export default function DecorativeScene() {
  return (
    <>
      <div className="atmosphere" aria-hidden="true">
        <div className="mist mist-one" /><div className="mist mist-two" />
        <div className="velvet velvet-left" /><div className="velvet velvet-right" />
        <svg className="light-ribbons" viewBox="0 0 1536 1024" preserveAspectRatio="none"><defs><linearGradient id="ribbon-light"><stop stopColor="#024a32" stopOpacity="0" /><stop offset=".45" stopColor="#4affc2" stopOpacity=".55" /><stop offset="1" stopColor="#06402d" stopOpacity="0" /></linearGradient></defs><path d="M-80 700C280 530 285 790 560 889S1060 1080 1570 585" /><path d="M-90 596C250 475 124 935 551 1030M900 1080C1050 850 1475 740 1620 428" /></svg>
        {Array.from({ length: 13 }, (_, index) => <span key={index} className="dust-particle" style={{ "--x": `${(index * 37 + 9) % 100}%`, "--y": `${(index * 23 + 7) % 100}%`, "--delay": `${index * -1.7}s`, "--duration": `${11 + index % 5}s` } as CSSProperties} />)}
        <Sparkle className="scene-star star-one" /><Sparkle className="scene-star star-two" /><Sparkle className="scene-star star-three" />
      </div>
      <div className="ornate-frame" aria-hidden="true">
        <FiligreeCorner className="frame-corner corner-tl" /><FiligreeCorner className="frame-corner corner-tr" />
        <FiligreeCorner className="frame-corner corner-bl" /><FiligreeCorner className="frame-corner corner-br" />
      </div>
      <aside className="left-scene" aria-label="Entre sombras e promessas">
        <Chain className="chain chain-left" />
        <img className="left-rose" src={assets.emeraldRose} width="400" height="400" alt="" />
        <img className="literary-scene" src={assets.literaryScene} width="600" height="900" alt="" />
        <p className="literary-quote">Entre sombras<br />e promessas</p>
      </aside>
      <aside className="right-scene" aria-label="Dentro do círculo, somos Bests">
        <Chain className="chain chain-right" />
        <p className="live-quote">Não é só uma live,<br />é o nosso lugar <Heart /></p>
        <div className="bests-signature"><CrownMark className="bests-crown" /><h2>BESTS</h2><span className="bests-underline" /></div>
        <p className="bests-quote">Dentro do círculo,<br />somos Bests. <Heart /></p>
        <img className="right-books" src={assets.rightBookStack} width="640" height="480" alt="" />
        <img className="right-rose" src={assets.rightRose} width="500" height="500" alt="" />
      </aside>
    </>
  );
}
