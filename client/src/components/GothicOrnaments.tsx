import { useId } from "react";

type OrnamentProps = { className?: string };

/** Small four-point glint for use as a decorative accent. */
export function Sparkle({ className }: OrnamentProps) {
  return (
    <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 32 32" fill="none">
      <path d="M16 1.8c1.9 8.2 5.8 12.3 14.2 14.2C21.8 17.9 17.9 21.8 16 30.2 14.1 21.8 10.2 17.9 1.8 16 10.2 14.1 14.1 10 16 1.8Z" fill="currentColor" />
      <circle cx="26.5" cy="5.5" r="1.5" fill="currentColor" opacity=".62" />
    </svg>
  );
}

/** Fine, flowing heart outline. */
export function Heart({ className }: OrnamentProps) {
  return (
    <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 48 44" fill="none">
      <path d="M24 39.6 7.2 23.5C-1 15.4 4.2 4.7 12.8 4.7c5 0 8.8 3.2 11.2 7.1 2.4-3.9 6.2-7.1 11.2-7.1 8.6 0 13.8 10.7 5.6 18.8L24 39.6Z" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.1 10.3c-2.3 2.6-2.1 6.3.1 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity=".52" />
    </svg>
  );
}

/** Gothic crown-shaped wordmark accent. */
export function CrownMark({ className }: OrnamentProps) {
  return (
    <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 64 42" fill="none">
      <path d="m6 11 13 10L31.8 4 45 21 58 11l-5 24H11L6 11Z" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 30h40M16 35h32M6 11l5 24m47-24-5 24M19 21l4 9m22-9-4 9M31.8 4V30" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="9" r="2.3" fill="currentColor" /><circle cx="31.8" cy="3.4" r="2.3" fill="currentColor" /><circle cx="58" cy="9" r="2.3" fill="currentColor" />
    </svg>
  );
}

/** Engraved old-book corner with curling stems, leaves, and tendrils. */
export function FiligreeCorner({ className }: OrnamentProps) {
  return (
    <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 140 140" fill="none">
      <path d="M8 132C9 98 7 53 10 10c43-3 88-1 122-2M13 125c23-1 44 0 65-3M15 13c-1 27 0 49 2 69" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 122c18-10 31-20 39-35 7-13 8-26 3-38-4-10-14-16-23-12-8 4-9 14-3 20 5 5 13 3 14-3 .8-4-2-7-5-7M18 82c14-3 25-1 34 5 10 7 14 18 11 29-2 8-9 13-16 10-6-3-6-11-1-14 4-2 8 .2 8 4M15 109c-2-13-7-21-12-27m47 7c-4-12-4-23 0-34m11 61c11-8 20-10 30-8" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 47c-9-7-17-8-24-5 3 9 9 15 19 18m16-1c-1-11 2-19 9-25 4 8 4 16-1 24M53 89c10-7 20-9 29-6-4 9-11 14-22 16m3 17c7-9 16-13 26-13-2 10-8 17-19 20M11 83c-7 2-11 7-12 14 7-1 12-5 15-12m33 30c-9 1-15 5-18 12 9 1 16-2 21-9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29 49c4 3 7 6 9 10M51 30c1 5 1 10-1 15m12 48c5-1 10-1 15 1m-15 21c4-4 8-6 13-7M12 85l5 4m-4-76 4 4m111-5-4 4" stroke="currentColor" strokeWidth=".9" strokeLinecap="round" opacity=".72" />
      <circle cx="10" cy="10" r="2" fill="currentColor" /><circle cx="132" cy="8" r="2" fill="currentColor" />
    </svg>
  );
}

/** A vertical strand of eight softly highlighted interlinked metal ovals. */
export function Chain({ className }: OrnamentProps) {
  const gradientId = `chain-metal-${useId().replace(/:/g, "")}`;
  return (
    <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 100 460" fill="none">
      <defs>
        <linearGradient id={gradientId} x1="20" y1="0" x2="81" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity=".48" /><stop offset=".28" stopColor="currentColor" /><stop offset=".52" stopColor="#fff" stopOpacity=".78" /><stop offset=".72" stopColor="currentColor" stopOpacity=".88" /><stop offset="1" stopColor="currentColor" stopOpacity=".38" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradientId})`} strokeWidth="5.2">
        {Array.from({ length: 8 }, (_, index) => (
          <ellipse key={index} cx="50" cy={32 + index * 52} rx={index % 2 === 0 ? 17 : 10} ry="29" />
        ))}
      </g>
      <g stroke="currentColor" strokeWidth="1" opacity=".42">
        {Array.from({ length: 8 }, (_, index) => (
          <path key={index} d={`M${index % 2 === 0 ? 38 : 43} ${14 + index * 52}c2-5 4-7 8-8`} strokeLinecap="round" />
        ))}
      </g>
    </svg>
  );
}

/** Slim ornamental divider with a centered engraved lozenge. */
export function OrnamentalRule({ className }: OrnamentProps) {
  return (
    <svg aria-hidden="true" focusable="false" className={className} viewBox="0 0 360 24" fill="none" preserveAspectRatio="none">
      <path d="M4 12h140m72 0h140" stroke="currentColor" strokeWidth="1" opacity=".72" />
      <path d="m180 3 8 9-8 9-8-9 8-9Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="m180 7 4.5 5-4.5 5-4.5-5 4.5-5Z" fill="currentColor" fillOpacity=".3" />
      <path d="M145 12c5-5 10-5 15 0-5 5-10 5-15 0Zm70 0c5-5 10-5 15 0-5 5-10 5-15 0Z" stroke="currentColor" strokeWidth="1" />
      <circle cx="4" cy="12" r="2" fill="currentColor" /><circle cx="356" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}
