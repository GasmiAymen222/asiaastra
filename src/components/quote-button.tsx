"use client";

import { visibleById } from "@/lib/dom";
import { ArrowRight } from "./icons";

// Pre-fills the contact form on the same page and scrolls to it.
export function QuoteButton({ service, subservice }: { service: string; subservice: string }) {
  function onClick() {
    const section = visibleById("contact");
    const select = section?.querySelector<HTMLSelectElement>('select[name="service"]');
    const message = section?.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
    if (select) select.value = service;
    if (message && !message.value.trim()) {
      message.value = `Hello, I'm interested in ${subservice}. `;
    }
    section?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => section?.querySelector<HTMLInputElement>('input[name="name"]')?.focus({ preventScroll: true }), 600);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-navy"
    >
      Request a quote
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}
