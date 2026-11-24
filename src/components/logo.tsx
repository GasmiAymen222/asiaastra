import Image from "next/image";
import Link from "next/link";

// Logo artwork lives in /public/images (generated from assets/images/Asiatlas_logo.png):
//   asiatlas-mark.png  – the "A" globe mark only (used in the header)
//   asiatlas-logo.png  – the full stacked logo with wordmark and tagline

// Header logo: brand mark + wordmark text (text stays readable on dark backgrounds).
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/#home" className="group flex items-center gap-2.5" aria-label="ASIATLAS Digital Solutions home">
      <Image
        src="/images/asiatlas-mark.png"
        alt=""
        width={324}
        height={206}
        priority
        className="h-12 w-auto drop-shadow-[0_0_12px_rgba(8,169,232,0.35)]"
      />
      <span className="leading-none">
        <span className={`block text-lg font-extrabold tracking-[0.12em] ${light ? "text-white" : "text-navy"}`}>
          ASIATLAS
        </span>
        <span className={`mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] ${light ? "text-accent" : "text-brand"}`}>
          Digital Solutions
        </span>
      </span>
    </Link>
  );
}

// Full stacked logo exactly as supplied (navy text, so place it on a light background).
export function LogoFull({ className = "h-28 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/asiatlas-logo.png"
      alt="ASIATLAS Digital Solutions — Connecting the World Through Technologies"
      width={483}
      height={338}
      className={className}
    />
  );
}
