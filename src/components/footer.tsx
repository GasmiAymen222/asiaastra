import Link from "next/link";
import { nav, site, whatsappHref } from "@/lib/site";
import { services } from "@/lib/services";
import { LogoFull } from "./logo";
import { Chat, Mail } from "./icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white/70">
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/#home" aria-label="ASIATLAS Digital Solutions home" className="inline-block rounded-2xl bg-white px-5 py-4 shadow-lg shadow-black/20 transition hover:shadow-accent/20">
            <LogoFull className="h-24 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-accent">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition hover:text-accent">
                <Mail className="h-4.5 w-4.5 shrink-0 text-accent" />
                {site.email}
              </a>
            </li>
            {site.whatsapp.map((w) => (
              <li key={w.number}>
                <a
                  href={whatsappHref(w.number)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-accent"
                >
                  <Chat className="h-4.5 w-4.5 shrink-0 text-accent" />
                  {w.number}
                  <span className="text-white/40">· {w.label}</span>
                </a>
              </li>
            ))}
          </ul>
          {site.social.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-3 text-sm">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 {site.legalName}. All rights reserved.</p>
          <p className="text-white/40">Connecting Africa and Asia through technology.</p>
        </div>
      </div>
    </footer>
  );
}
