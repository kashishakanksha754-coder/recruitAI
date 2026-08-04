// Hyrix brand logomark — inline SVG, no external file needed.
// Uses site palette: coral #F0625A → purple #2D1B69 gradient.
export default function HyrixLogo({ size = 32 }: { size?: number }) {
  const id = "hxg";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-a`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0625A" />
          <stop offset="100%" stopColor="#2D1B69" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0625A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#2D1B69" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* Rounded background square */}
      <rect width="64" height="64" rx="14" fill={`url(#${id}-b)`} />

      {/* H letterform */}
      <rect x="13" y="14" width="8" height="36" rx="3" fill={`url(#${id}-a)`} />
      <rect x="43" y="14" width="8" height="36" rx="3" fill={`url(#${id}-a)`} />
      <rect x="13" y="28" width="38" height="8" rx="3" fill={`url(#${id}-a)`} />

      {/* Circuit dot top-right */}
      <circle cx="53" cy="13" r="3" fill="#F0625A" />
      <line x1="50" y1="13" x2="43" y2="13" stroke="#F0625A" strokeWidth="1.5" strokeLinecap="round" />

      {/* Spark star top-right */}
      <path
        d="M57 8 L58 11 L61 12 L58 13 L57 16 L56 13 L53 12 L56 11 Z"
        fill="#F0625A"
        opacity="0.85"
      />
    </svg>
  );
}
