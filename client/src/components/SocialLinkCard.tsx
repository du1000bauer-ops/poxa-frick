import PlatformIcon from "./PlatformIcon";
import { Sparkle } from "./GothicOrnaments";
import type { SocialLink } from "../lib/socialLinks";

export default function SocialLinkCard({ link }: { link: SocialLink }) {
  return (
    <a
      className="social-link"
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.title}: ${link.description}, ${link.detail}. Abre em nova aba.`}
    >
      <span className="link-end link-end-left" aria-hidden="true" />
      <span className="platform-icon"><PlatformIcon platform={link.platform} /></span>
      <span className="link-copy">
        <span className="link-heading"><strong>{link.title}</strong><span className="heading-separator" aria-hidden="true">|</span><span>{link.description}</span></span>
        <span className="link-detail">{link.detail}</span>
      </span>
      <Sparkle className="link-sparkle" />
      <span className="link-end link-end-right" aria-hidden="true" />
    </a>
  );
}
