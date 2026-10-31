import { useId } from "react";
// Coroa da marca (SVG inline, sem arquivo externo).
export default function Crown({ className }) {
  const id = "g" + useId().replace(/:/g, "");
  return (
    <svg className={className} viewBox="0 0 64 50" role="img" aria-label="Coroa" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6dd8b" /><stop offset=".55" stopColor="#d4af37" /><stop offset="1" stopColor="#9c7420" />
        </linearGradient>
      </defs>
      <path d="M6 38 L9 15 L21 27 L32 9 L43 27 L55 15 L58 38 Z" fill={`url(#${id})`} />
      <rect x="7" y="41" width="50" height="6" rx="1.5" fill={`url(#${id})`} />
      <circle cx="9" cy="12.5" r="3.2" fill={`url(#${id})`} /><circle cx="32" cy="6" r="3.6" fill={`url(#${id})`} /><circle cx="55" cy="12.5" r="3.2" fill={`url(#${id})`} />
      <circle cx="32" cy="32" r="2.6" fill="#0b0b0b" /><circle cx="19" cy="34" r="1.8" fill="#0b0b0b" /><circle cx="45" cy="34" r="1.8" fill="#0b0b0b" />
    </svg>
  );
}
