import type { WorkTag } from "@/app/content/work";

const volt = "#ffc21a";
const ink = "#0f1b2d";
const panel = "#16273f";
const edge = "#2a3e5c";

function Dispatch() {
  return (
    <>
      <rect x="40" y="38" width="240" height="164" rx="14" fill={panel} stroke={edge} />
      <rect x="60" y="58" width="78" height="10" rx="5" fill={volt} />
      {[0.82, 0.55, 0.9, 0.38].map((fill, i) => (
        <g key={fill}>
          <rect x="60" y={88 + i * 28} width="200" height="16" rx="8" fill={ink} />
          <rect x="60" y={88 + i * 28} width={200 * fill} height="16" rx="8" fill={volt} opacity={0.35 + i * 0.15} />
        </g>
      ))}
    </>
  );
}

function Payments() {
  return (
    <>
      <rect x="28" y="84" width="92" height="72" rx="12" fill={panel} stroke={edge} />
      <rect x="200" y="84" width="92" height="72" rx="12" fill={panel} stroke={edge} />
      <rect x="44" y="102" width="40" height="8" rx="4" fill={volt} />
      <rect x="44" y="120" width="60" height="8" rx="4" fill={edge} />
      <rect x="216" y="102" width="40" height="8" rx="4" fill={volt} />
      <rect x="216" y="120" width="60" height="8" rx="4" fill={edge} />
      <line x1="124" y1="120" x2="196" y2="120" stroke={volt} strokeWidth="2" strokeDasharray="4 6" />
      <circle cx="160" cy="120" r="18" fill={volt} />
      <path d="m151 120 6 6 12-13" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function Servers() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="70" y={46 + i * 56} width="180" height="44" rx="10" fill={panel} stroke={edge} />
          <circle cx="94" cy={68 + i * 56} r="5" fill={i === 1 ? volt : "#3b5478"} />
          <rect x="112" y={63 + i * 56} width="70" height="10" rx="5" fill={edge} />
          <rect x="206" y={63 + i * 56} width="28" height="10" rx="5" fill={ink} />
        </g>
      ))}
    </>
  );
}

const art: Record<WorkTag, () => React.ReactNode> = {
  Build: Dispatch,
  Integrate: Payments,
  Maintain: Servers,
};

export default function WorkArt({ tag }: { tag: WorkTag }) {
  const Art = art[tag];
  return (
    <svg
      viewBox="0 0 320 240"
      aria-hidden="true"
      className="size-full transition-transform duration-500 group-hover:motion-safe:scale-105"
      preserveAspectRatio="xMidYMid slice"
    >
      <Art />
    </svg>
  );
}
