import type { SVGProps } from "react";
import type { IconName } from "@/lib/services";

type P = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const WebIcon = (p: P) => (
  <Base {...p}>
    <rect x="2.5" y="4" width="19" height="14" rx="2" />
    <path d="M2.5 8h19M6 6h.01M8.5 6h.01M9 12l-2 2 2 2M15 12l2 2-2 2M13 11l-2 6" />
  </Base>
);
export const MobileIcon = (p: P) => (
  <Base {...p}>
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M10.5 18.5h3M9 6.5h6M9 10h6M9 13.5h3.5" />
  </Base>
);
export const AiIcon = (p: P) => (
  <Base {...p}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9.5 15l1.5-6h1l1.5 6M10 13h3M15.5 9v6M9 2.5V6M15 2.5V6M9 18v3.5M15 18v3.5M2.5 9H6M2.5 15H6M18 9h3.5M18 15h3.5" />
  </Base>
);
export const ProductIcon = (p: P) => (
  <Base {...p}>
    <path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5L12 2.5z" />
    <path d="M3.5 7.25L12 12l8.5-4.75M12 12v9.5" />
  </Base>
);
export const ShieldIcon = (p: P) => (
  <Base {...p}>
    <path d="M12 2.5l7.5 3v6c0 4.6-3.2 8.6-7.5 10-4.3-1.4-7.5-5.4-7.5-10v-6l7.5-3z" />
    <path d="M8.75 12l2.25 2.25 4.25-4.5" />
  </Base>
);
export const CloudIcon = (p: P) => (
  <Base {...p}>
    <path d="M7 18.5a4.5 4.5 0 01-.5-8.97A6 6 0 0118 8.5a4.75 4.75 0 01-.5 10H7z" />
    <path d="M12 11.5v5M9.75 13.75L12 11.5l2.25 2.25" />
  </Base>
);

export const ToolsIcon = (p: P) => (
  <Base {...p}>
    <path d="M14.5 6.5a4 4 0 015.2-3.8l-2.7 2.7.6 2.4 2.4.6 2.7-2.7a4 4 0 01-5 5.1L9.5 18.9a2.1 2.1 0 01-3-3l8.1-8.1a4 4 0 01-.1-1.3z" />
  </Base>
);

export const serviceIcons: Record<IconName, (p: P) => React.JSX.Element> = {
  web: WebIcon,
  mobile: MobileIcon,
  ai: AiIcon,
  product: ProductIcon,
  shield: ShieldIcon,
  cloud: CloudIcon,
  tools: ToolsIcon,
};

export const ArrowRight = (p: P) => (
  <Base {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Base>
);
export const Check = (p: P) => (
  <Base {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Base>
);
export const Mail = (p: P) => (
  <Base {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M3 6.5l9 6.5 9-6.5" />
  </Base>
);
export const Globe = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5z" />
  </Base>
);
export const Chat = (p: P) => (
  <Base {...p}>
    <path d="M20.5 11.5a8.5 8.5 0 01-12.6 7.45L3.5 20.5l1.6-4.25A8.5 8.5 0 1120.5 11.5z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1c-1-.5-1.5-1-2-2l1-1-1-2L9 9.5z" />
  </Base>
);
export const Menu = (p: P) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);
export const Close = (p: P) => (
  <Base {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Base>
);
export const Spark = (p: P) => (
  <Base {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
  </Base>
);
export const Layers = (p: P) => (
  <Base {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5" />
  </Base>
);
export const Target = (p: P) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </Base>
);
