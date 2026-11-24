import Link from "next/link";
import { additionalServices, lowestPrice, services } from "@/lib/services";
import { ArrowRight } from "./icons";
import { ServiceIcon } from "./service-icon";

export function ServiceGrid() {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-line bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-brand/10"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand to-accent transition-transform duration-300 group-hover:scale-x-100" />
              <ServiceIcon service={s} size="xl" />
              <h3 className="mt-6 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{s.short}</p>
              <div className="mt-6 flex items-center justify-between self-stretch border-t border-line pt-4 text-left">
                <span className="text-sm text-muted">
                  From <span className="font-bold text-navy">{lowestPrice(s).price}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  View services &amp; pricing
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <Link
        href={`/services/${additionalServices.slug}`}
        className="group mt-6 flex flex-col gap-4 rounded-2xl border border-dashed border-brand/30 bg-white/60 p-6 transition hover:border-accent hover:bg-white sm:flex-row sm:items-center"
      >
        <ServiceIcon service={additionalServices} />
        <span className="flex-1">
          <span className="block font-bold text-navy">{additionalServices.title}</span>
          <span className="mt-0.5 block text-sm text-muted">
            UI/UX and technical consultation, API development, documentation, software testing and IT support.
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          View pricing
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </Link>
    </>
  );
}
