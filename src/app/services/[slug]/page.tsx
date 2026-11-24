import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ContactSection, Container } from "@/components/sections";
import { QuoteButton } from "@/components/quote-button";
import { ArrowRight, Check } from "@/components/icons";
import { ServiceIcon } from "@/components/service-icon";
import { allServices, getService, lowestPrice } from "@/lib/services";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Services & Pricing`,
    description: `${service.intro} Starting from ${lowestPrice(service).price}.`,
  };
}

// The slug comes from the URL, so it's read inside <Suspense>. The shell
// (header placeholder) shows instantly while the page content streams in.
export default function ServicePage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={<ServicePageSkeleton />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

function ServicePageSkeleton() {
  return (
    <div aria-busy="true" aria-label="Loading service">
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <Container className="relative animate-pulse">
          <div className="h-4 w-56 rounded bg-white/10" />
          <div className="mt-8 h-16 w-16 rounded-2xl bg-white/10" />
          <div className="mt-6 h-4 w-64 rounded bg-white/10" />
          <div className="mt-3 h-12 w-80 max-w-full rounded-lg bg-white/15" />
          <div className="mt-5 h-5 w-full max-w-2xl rounded bg-white/10" />
          <div className="mt-2 h-5 w-2/3 max-w-xl rounded bg-white/10" />
        </Container>
      </section>
      <section className="bg-mist py-20">
        <Container className="grid animate-pulse gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="h-56 rounded-2xl border border-line bg-white" />
          ))}
        </Container>
      </section>
    </div>
  );
}

async function ServiceContent({ params }: { params: PageProps<"/services/[slug]">["params"] }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = allServices.filter((s) => s.slug !== service.slug);
  const from = lowestPrice(service);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-16 sm:pt-36 sm:pb-20">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -top-32 right-10 h-80 w-80 rounded-full bg-brand/40 blur-[100px]" aria-hidden="true" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/#services" className="hover:text-white">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-accent">{service.title}</li>
            </ol>
          </nav>
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <ServiceIcon service={service} size="lg" />
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{service.short}</p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{service.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-white/75">{service.intro}</p>
            </div>
            <div className="shrink-0 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm text-white/60">Starting from</p>
              <p className="mt-1 text-4xl font-extrabold text-white">{from.price}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-navy transition hover:bg-white">
                Get a quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      {service.problems && (
        <section className="border-b border-line py-14">
          <Container className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <h2 className="text-2xl font-extrabold text-navy">Challenges we help solve</h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {service.problems.map((p) => (
                <li key={p} className="flex gap-3 rounded-xl bg-mist p-4 text-sm leading-relaxed text-muted">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Pricing */}
      <section id="pricing" className="bg-mist py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
              <span className="h-px w-6 bg-current" />
              Services &amp; Pricing
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">What we offer</h2>
            <p className="mt-4 text-lg text-muted">
              Transparent starting prices. Every project is different, so we&apos;ll confirm a final quote once we understand your requirements.
            </p>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {service.subservices.map((sub) => (
              <li
                key={sub.name}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg hover:shadow-brand/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-navy">{sub.name}</h3>
                  {sub.per && (
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand">
                      {sub.per === "month" ? "Monthly" : "Per session"}
                    </span>
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{sub.description}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">Starting from</p>
                  <p className="mt-1 text-2xl font-extrabold text-navy">
                    {sub.price}
                    {sub.per && <span className="text-sm font-semibold text-muted"> / {sub.per}</span>}
                  </p>
                  <div className="mt-3">
                    <QuoteButton service={service.title} subservice={sub.name} />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {service.note && (
            <div role="note" className="mt-10 flex gap-3 rounded-2xl border border-amber-300/60 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
              <span aria-hidden="true" className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-400 text-xs font-bold text-white">!</span>
              <p><strong className="font-semibold">Important:</strong> {service.note}</p>
            </div>
          )}

          <p className="mt-8 text-sm text-muted">
            All prices are in Malaysian Ringgit (RM) and are starting prices. The final cost depends on project scope, features and timeline.
          </p>
        </Container>
      </section>

      <ContactSection defaultService={service.title} />

      {/* Other services */}
      <section className="border-t border-line bg-mist py-16">
        <Container>
          <h2 className="text-xl font-bold text-navy">Explore other services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => {
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5 transition hover:border-accent/50 hover:shadow-md"
                  >
                    <ServiceIcon service={s} size="sm" />
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-navy">{s.title}</span>
                      <span className="block text-xs text-muted">From {lowestPrice(s).price}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand transition group-hover:translate-x-1" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
