// Decorative connected-globe illustration for the hero (pure SVG + CSS).

const nodes = [
  { x: 150, y: 175, label: "Africa" },
  { x: 318, y: 150, label: "Asia" },
  { x: 230, y: 112 },
  { x: 112, y: 262 },
  { x: 286, y: 270 },
  { x: 210, y: 320 },
  { x: 365, y: 232 },
  { x: 205, y: 210 },
];

const arcs: [number, number][] = [
  [0, 1],
  [0, 2],
  [2, 1],
  [0, 3],
  [3, 5],
  [5, 4],
  [4, 6],
  [1, 6],
  [7, 4],
  [0, 7],
];

function arcPath(a: (typeof nodes)[number], b: (typeof nodes)[number]) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - Math.hypot(b.x - a.x, b.y - a.y) * 0.32;
  return `M${a.x},${a.y} Q${mx},${my} ${b.x},${b.y}`;
}

export function HeroGlobe() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] animate-float" aria-hidden="true">
      <div className="absolute inset-[12%] rounded-full bg-accent/25 blur-3xl" />
      <svg viewBox="0 0 480 480" className="relative h-full w-full">
        <defs>
          <radialGradient id="hg-sphere" cx="38%" cy="32%" r="75%">
            <stop offset="0" stopColor="#0d3a85" />
            <stop offset="0.6" stopColor="#0a2456" />
            <stop offset="1" stopColor="#050f2a" />
          </radialGradient>
          <linearGradient id="hg-arc" x1="0" x2="1">
            <stop offset="0" stopColor="#08A9E8" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#5fd3ff" />
            <stop offset="1" stopColor="#08A9E8" stopOpacity="0.2" />
          </linearGradient>
          <clipPath id="hg-clip">
            <circle cx="240" cy="240" r="190" />
          </clipPath>
        </defs>

        {/* orbit rings */}
        <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
          <ellipse cx="240" cy="240" rx="232" ry="232" fill="none" stroke="#08A9E8" strokeOpacity="0.18" strokeDasharray="2 10" />
        </g>
        <ellipse cx="240" cy="240" rx="225" ry="70" fill="none" stroke="#08A9E8" strokeOpacity="0.25" transform="rotate(-18 240 240)" />

        {/* sphere */}
        <circle cx="240" cy="240" r="190" fill="url(#hg-sphere)" />
        <g clipPath="url(#hg-clip)" fill="none" stroke="#08A9E8" strokeOpacity="0.22" strokeWidth="1">
          {[-140, -95, -48, 0, 48, 95, 140].map((dy) => (
            <ellipse key={`lat${dy}`} cx="240" cy={240 + dy} rx={Math.sqrt(190 ** 2 - dy ** 2)} ry={Math.max(4, 22 - Math.abs(dy) / 8)} />
          ))}
          {[190, 150, 100, 45].map((rx) => (
            <ellipse key={`lon${rx}`} cx="240" cy="240" rx={rx} ry="190" />
          ))}
          <line x1="240" y1="50" x2="240" y2="430" />
        </g>
        <circle cx="240" cy="240" r="190" fill="none" stroke="#08A9E8" strokeOpacity="0.5" strokeWidth="1.5" />

        {/* connections */}
        <g fill="none" stroke="url(#hg-arc)" strokeWidth="1.6" strokeLinecap="round">
          {arcs.map(([a, b], i) => (
            <path key={i} d={arcPath(nodes[a], nodes[b])} strokeDasharray="4 6">
              <animate attributeName="stroke-dashoffset" from="40" to="0" dur={`${2.5 + (i % 4) * 0.6}s`} repeatCount="indefinite" />
            </path>
          ))}
        </g>

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.label ? 11 : 7} fill="#08A9E8" fillOpacity="0.15" />
            <circle cx={n.x} cy={n.y} r="3.5" fill={n.label ? "#ffffff" : "#5fd3ff"} className="animate-pulse-dot" style={{ animationDelay: `${i * 0.35}s` }} />
          </g>
        ))}
        {nodes.filter((n) => n.label).map((n) => (
          <g key={n.label} transform={`translate(${n.x + 14} ${n.y - 16})`}>
            <rect width="62" height="22" rx="11" fill="#071B43" stroke="#08A9E8" strokeOpacity="0.6" />
            <text x="31" y="15" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ffffff" fontFamily="inherit">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
