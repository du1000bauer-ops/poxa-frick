import type { CSSProperties } from "react";
import { Chain, CrownMark, FiligreeCorner, Heart, Sparkle } from "./GothicOrnaments";
import { assets } from "../lib/assets";

function RightBooks() {
  return (
    <svg className="right-books" viewBox="0 0 520 360" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="book-cover" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#153b27" /><stop offset=".48" stopColor="#06150e" /><stop offset="1" stopColor="#020604" /></linearGradient>
        <linearGradient id="book-spine" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#25442d" /><stop offset=".5" stopColor="#0a1a11" /><stop offset="1" stopColor="#050b07" /></linearGradient>
        <linearGradient id="aged-pages" x1="0" y1="0" x2=".4" y2="1"><stop stopColor="#9c9877" /><stop offset=".4" stopColor="#443e2b" /><stop offset="1" stopColor="#b1a98b" /></linearGradient>
        <linearGradient id="old-metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#dfd2a2" /><stop offset=".45" stopColor="#788574" /><stop offset="1" stopColor="#e1ce83" /></linearGradient>
      </defs>
      <g className="book-layer book-top">
        <path d="m51 73 272-53 139 40-278 57L51 73Z" fill="url(#book-cover)" stroke="#69816c" strokeWidth="2" />
        <path d="m184 117 278-57v38l-279 58-132-44V73l133 44Z" fill="url(#aged-pages)" stroke="#9c997d" strokeWidth="1.5" />
        <path d="m184 117 278-57v31l-279 58-132-44V78l133 39Z" fill="url(#book-spine)" stroke="#879579" strokeWidth="2" />
        <path d="m62 78 122 40 267-54m-268 66 267-56" stroke="url(#old-metal)" strokeWidth="2" opacity=".72" />
        <path d="m76 78 4-17 11 20m-11-20 4-16 12 20m8 32v-31m30 40V64m27 51V60" stroke="#b6a87a" strokeWidth="1.3" opacity=".68" />
        <path d="m172 89 14 7 11-13 12 7 12-15 13 7 11-16 13 5 12-18 11 4 9-17 12 2 10-15 13 1" stroke="#8ba87e" strokeWidth="1.2" opacity=".56" />
        <path d="m178 121 12 3 13-16 11 8 12-16 11 8 11-17 12 6 13-17 11 6 12-15" stroke="#d6c58c" strokeWidth="1.2" opacity=".58" />
      </g>
      <g className="book-layer book-middle">
        <path d="m91 166 268-52 114 35-274 58-108-41Z" fill="url(#book-cover)" stroke="#9a8755" strokeWidth="2" />
        <path d="m199 207 274-58v34l-274 58-108-41v-34l108 41Z" fill="url(#aged-pages)" stroke="#b3a688" strokeWidth="1.5" />
        <path d="m199 207 274-58v29l-274 58-108-41v-29l108 41Z" fill="url(#book-spine)" stroke="#8a986f" strokeWidth="2" />
        <path d="m98 169 101 41 264-57m-265 70 264-57" stroke="url(#old-metal)" strokeWidth="2" opacity=".73" />
        <path d="m136 183 17-11 14 18-15 10Zm58-8 17-12 14 18-15 10Zm58-13 17-12 14 18-15 10Z" stroke="#82996e" strokeWidth="1.1" opacity=".62" />
        <path d="m215 222 15-13 12 8 13-17 14 9 13-18 14 9 13-16 13 8 13-15 13 7" stroke="#beac74" strokeWidth="1.2" opacity=".62" />
      </g>
      <g className="book-layer book-bottom">
        <path d="m45 254 270-54 174 43-279 61-165-50Z" fill="url(#book-cover)" stroke="#809875" strokeWidth="2" />
        <path d="m210 304 279-61v33l-278 65-166-50v-37l165 50Z" fill="url(#aged-pages)" stroke="#aa9d77" strokeWidth="1.5" />
        <path d="m210 304 279-61v28l-278 65-166-50v-29l165 50Z" fill="url(#book-spine)" stroke="#978651" strokeWidth="2" />
        <path d="m58 259 152 49 269-59m-270 72 269-59" stroke="url(#old-metal)" strokeWidth="2" opacity=".7" />
        <path d="m232 276 41-8 13 24-42 9-12-25Zm14 3 13 13m15-19-16 30m34-29 37-8 13 22-38 10-12-24Zm14 3 11 13m16-20-15 31" stroke="#93a477" strokeWidth="1.4" opacity=".7" />
        <path d="m388 254 12-18 11 16 17-14 10 16 18-11" stroke="#c3b579" strokeWidth="1.5" />
      </g>
      <g className="book-medallion" stroke="url(#old-metal)" opacity=".74">
        <path d="m436 111 12 8 12-8-2 20-10 7-10-7-2-20Z" strokeWidth="1.5" />
        <path d="m448 115 5 7-5 9-5-9 5-7Z" strokeWidth="1.3" />
      </g>
    </svg>
  );
}

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
        <RightBooks />
        <img className="right-rose" src={assets.emeraldRose} width="500" height="500" alt="" />
      </aside>
    </>
  );
}
