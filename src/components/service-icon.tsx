import Image from "next/image";
import type { Service } from "@/lib/services";
import { serviceIcons } from "./icons";

const sizes = {
  sm: { box: "h-10 w-10 rounded-lg", pad: "p-1", svg: "h-5 w-5", px: 40 },
  md: { box: "h-16 w-16 rounded-xl", pad: "p-1.5", svg: "h-8 w-8", px: 64 },
  lg: { box: "h-20 w-20 rounded-2xl", pad: "p-2", svg: "h-10 w-10", px: 80 },
  xl: { box: "h-28 w-28 rounded-3xl", pad: "p-2.5", svg: "h-14 w-14", px: 112 },
} as const;

// Shows the service's custom image (on a white tile) when one is set,
// otherwise falls back to the built-in line icon.
export function ServiceIcon({ service, size = "md" }: { service: Service; size?: keyof typeof sizes }) {
  const s = sizes[size];

  if (service.image) {
    return (
      <span className={`relative grid shrink-0 place-items-center overflow-hidden bg-white shadow-md shadow-brand/15 ring-1 ring-line ${s.box} ${s.pad}`}>
        <Image src={service.image} alt="" width={s.px * 2} height={s.px * 2} className="h-full w-full object-contain" />
      </span>
    );
  }

  const Icon = serviceIcons[service.icon];
  return (
    <span className={`grid shrink-0 place-items-center bg-gradient-to-br from-brand to-accent text-white shadow-lg shadow-brand/25 ${s.box}`}>
      <Icon className={s.svg} />
    </span>
  );
}
