"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { visibleById } from "@/lib/dom";
import { Logo } from "./logo";
import { Close, Menu } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [spy, setSpy] = useState("home");
  // On sub-pages (e.g. /services/...) highlight the matching menu item.
  const current = onHome ? spy : pathname.startsWith("/services") ? "services" : "";

  // Background on scroll + highlight the section currently in view.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const line = window.innerHeight * 0.35;
      let active = "home";
      for (const item of nav) {
        const el = visibleById(item.id);
        if (el && el.getBoundingClientRect().top <= line) active = item.id;
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        active = nav[nav.length - 1].id;
      }
      setSpy(active);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = nav.filter((n) => n.id !== "contact");
  const contact = nav.find((n) => n.id === "contact")!;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-navy/95 shadow-lg shadow-navy-900/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo light />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={current === item.id ? "location" : undefined}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                current === item.id ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`mx-auto mt-0.5 block h-0.5 rounded-full bg-accent transition-all ${
                  current === item.id ? "w-4" : "w-0"
                }`}
              />
            </Link>
          ))}
          <Link
            href={contact.href}
            className="ml-3 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-white"
          >
            {contact.label}
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-5 pb-6 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={current === item.id ? "location" : undefined}
              className={`block rounded-lg px-3 py-3 text-base font-medium ${
                current === item.id ? "bg-white/10 text-white" : "text-white/75"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
