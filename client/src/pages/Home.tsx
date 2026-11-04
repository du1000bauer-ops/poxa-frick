import { Heart, OrnamentalRule, Sparkle } from "../components/GothicOrnaments";
import DecorativeScene from "../components/DecorativeScene";
import SocialLinkCard from "../components/SocialLinkCard";
import { socialLinks } from "../lib/socialLinks";
import { assets } from "../lib/assets";

export default function Home() {
  return (
    <div className="gothic-world">
      <a className="skip-link" href="#meus-links">Ir para meus links</a>
      <DecorativeScene />
      <main className="identity-column">
        <header className="identity-header">
          <img className="royal-crown" src={assets.crown} width="260" height="174" alt="" fetchPriority="high" />
          <div className="wordmark-wrap">
            <div className="emerald-orbit" aria-hidden="true"><Sparkle className="orbit-star" /></div>
            <h1 className="wordmark"><span>POXA</span><span>FRICK</span></h1>
            <Heart className="identity-heart" />
          </div>
          <p className="essence">MEU UNIVERSO <span aria-hidden="true">•</span> MINHA ESSÊNCIA</p>
          <OrnamentalRule className="identity-rule" />
          <p className="identity-subtitle">Criadora de conteúdo <span>•</span> Escritora <span>•</span> Lives</p>
        </header>
        <nav className="social-links" id="meus-links" aria-label="Redes sociais, playlist e apoio às lives">
          {socialLinks.map((link) => <SocialLinkCard key={link.id} link={link} />)}
        </nav>
        <footer className="identity-footer">
          <div className="thanks"><span aria-hidden="true" /> <p>OBRIGADA POR ESTAR AQUI</p> <span aria-hidden="true" /></div>
          <div className="footer-heart-row"><i aria-hidden="true" /><Heart className="footer-heart" /><i aria-hidden="true" /></div>
          <p className="mobile-bests">Dentro do círculo, somos Bests. <Heart /></p>
        </footer>
      </main>
    </div>
  );
}
