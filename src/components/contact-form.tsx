"use client";

import { useActionState, useId } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { allServices } from "@/lib/services";
import { ArrowRight, Check } from "./icons";

const initial: ContactState = { status: "idle", message: "" };

const inputCls =
  "mt-1.5 block w-full rounded-xl border bg-white px-4 py-3 text-ink shadow-sm outline-none transition placeholder:text-muted/60 focus:border-accent focus:ring-4 focus:ring-accent/15";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [state, action, pending] = useActionState(submitContact, initial);
  const uid = useId();
  const id = (k: string) => `${uid}-${k}`;

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-center rounded-2xl border border-line bg-white p-10 text-center shadow-sm">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-brand">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy">Message received</h3>
        <p className="mt-2 max-w-sm text-muted">{state.message}</p>
      </div>
    );
  }

  const v = state.values ?? {};
  const err = state.errors ?? {};
  const border = (k: keyof typeof err) => (err[k] ? "border-red-400" : "border-line");

  return (
    <form action={action} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
      <div className="hidden" aria-hidden="true">
        <label>
          Website <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className="text-sm font-semibold text-navy">Name</label>
          <input id={id("name")} name="name" autoComplete="name" required defaultValue={v.name} placeholder="Your full name"
            aria-invalid={!!err.name} aria-describedby={err.name ? id("name-err") : undefined} className={`${inputCls} ${border("name")}`} />
          {err.name && <p id={id("name-err")} className="mt-1.5 text-sm text-red-600">{err.name}</p>}
        </div>
        <div>
          <label htmlFor={id("email")} className="text-sm font-semibold text-navy">Email</label>
          <input id={id("email")} name="email" type="email" autoComplete="email" required defaultValue={v.email} placeholder="you@company.com"
            aria-invalid={!!err.email} aria-describedby={err.email ? id("email-err") : undefined} className={`${inputCls} ${border("email")}`} />
          {err.email && <p id={id("email-err")} className="mt-1.5 text-sm text-red-600">{err.email}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("service")} className="text-sm font-semibold text-navy">Service of interest</label>
          <select id={id("service")} name="service" required defaultValue={v.service ?? defaultService ?? ""}
            aria-invalid={!!err.service} aria-describedby={err.service ? id("service-err") : undefined} className={`${inputCls} ${border("service")}`}>
            <option value="" disabled>Select a service</option>
            {allServices.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Other / not sure">Other / not sure</option>
          </select>
          {err.service && <p id={id("service-err")} className="mt-1.5 text-sm text-red-600">{err.service}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("message")} className="text-sm font-semibold text-navy">Message</label>
          <textarea id={id("message")} name="message" rows={5} required defaultValue={v.message} placeholder="Tell us about your project or idea…"
            aria-invalid={!!err.message} aria-describedby={err.message ? id("message-err") : undefined} className={`${inputCls} ${border("message")} resize-y`} />
          {err.message && <p id={id("message-err")} className="mt-1.5 text-sm text-red-600">{err.message}</p>}
        </div>
      </div>

      {state.status === "error" && (
        <p role="alert" className="mt-5 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{state.message}</p>
      )}

      <button type="submit" disabled={pending}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-semibold text-white transition hover:bg-navy disabled:cursor-wait disabled:opacity-70 sm:w-auto">
        {pending ? "Sending…" : "Send message"}
        {!pending && <ArrowRight className="h-4.5 w-4.5 transition group-hover:translate-x-1" />}
      </button>
    </form>
  );
}
