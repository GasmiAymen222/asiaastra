import Image from "next/image";
import { projects } from "@/lib/projects";
import { site, whatsappHref } from "@/lib/site";
import { HeroGlobe } from "./hero-globe";
import { ServiceGrid } from "./service-grid";
import { ContactForm } from "./contact-form";
import {
  ArrowRight,
  Chat,
  Globe,
  Layers,
  Mail,
  Spark,
  Target,
} from "./icons";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] ${light ? "text-accent" : "text-brand"}`}>
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{text}</p>}
    </div>
  );
}

const btnPrimary =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-navy transition hover:bg-white";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10";

/* ---------------- Hero ---------------- */

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy pt-28 pb-20 sm:pt-32 lg:pb-28">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-brand/40 blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            ASIATLAS Digital Solutions
          </p>
          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Connecting the World <span className="text-gradient">Through Technologies</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{site.intro}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className={btnPrimary}>
              Explore Our Services
              <ArrowRight className="h-4.5 w-4.5 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className={btnGhost}>
              Contact Us
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ["6", "Service areas"],
              ["Web & Mobile", "Apps & platforms"],
              ["Africa ↔ Asia", "Our vision"],
            ].map(([k, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="text-base font-bold text-white sm:text-2xl">{k}</dd>
                <dd className="mt-1 text-xs text-white/55 sm:text-sm">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroGlobe />
      </Container>
    </section>
  );
}

/* ---------------- Page header (404 page) ---------------- */

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-20">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="absolute -top-32 right-10 h-80 w-80 rounded-full bg-brand/40 blur-[100px]" aria-hidden="true" />
      <Container className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{text}</p>}
      </Container>
    </section>
  );
}

/* ---------------- About ---------------- */

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About ASIATLAS" title="Turning ideas into digital experiences" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              ASIATLAS Digital Solutions is a technology brand focused on creating modern, reliable, and scalable
              digital solutions. We help businesses, startups, and entrepreneurs turn ideas into digital experiences
              through web development, mobile applications, artificial intelligence, automation, and digital products.
            </p>
            <p>
              With a vision of connecting <strong className="font-semibold text-navy">Africa and Asia</strong>, ASIATLAS
              aims to help clients improve their digital presence, streamline processes, and explore new opportunities
              through technology.
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { icon: Target, title: "Our Mission", text: "Deliver modern, reliable and scalable technology that helps our clients grow and succeed." },
            { icon: Globe, title: "Our Vision", text: "Connect Africa and Asia through technology, opening new digital opportunities across regions." },
            { icon: Layers, title: "What We Build", text: "Websites, mobile apps, AI and automation, digital products, security and cloud solutions." },
            { icon: Spark, title: "How We Work", text: "Close collaboration, clear communication and a focus on your real business goals." },
          ].map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className={`rounded-2xl border border-line p-6 ${i % 3 === 0 ? "bg-navy text-white" : "bg-mist"}`}
            >
              <Icon className={`h-8 w-8 ${i % 3 === 0 ? "text-accent" : "text-brand"}`} />
              <h3 className={`mt-4 text-lg font-bold ${i % 3 === 0 ? "text-white" : "text-navy"}`}>{title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${i % 3 === 0 ? "text-white/70" : "text-muted"}`}>{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Services ---------------- */

export function ServicesSection() {
  return (
    <section id="services" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          center
          eyebrow="Our Services"
          title="Digital solutions for every stage of growth"
          text="From your first website to AI-powered automation, we bring together the skills to design, build and scale your digital presence."
        />
        <div className="mt-14">
          <ServiceGrid />
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Why choose us ---------------- */

const reasons = [
  { icon: Spark, title: "Modern technology & innovation", text: "We work with current, proven tools and frameworks so your solution is built for today and ready for tomorrow." },
  { icon: Layers, title: "Reliable & scalable solutions", text: "Clean architecture and careful engineering mean systems that stay dependable as your business grows." },
  { icon: Target, title: "Focused on your goals", text: "Every decision starts with your needs and business objectives, not with technology for its own sake." },
  { icon: Globe, title: "Connecting Africa & Asia", text: "A cross-regional perspective that helps clients reach new markets and opportunities through technology." },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-brand/40 blur-[120px]" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          light
          center
          eyebrow="Why Choose ASIATLAS"
          title="A partner you can build with"
          text="We combine technical expertise with a genuine commitment to your success."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition hover:border-accent/40 hover:bg-white/[0.07]">
              <div className="flex items-center justify-between">
                <Icon className="h-9 w-9 text-accent" />
                <span className="text-sm font-bold text-white/25">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Projects ---------------- */

export function ProjectGrid() {
  const list = projects;

  if (list.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center sm:p-14">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-mist text-brand">
          <Layers className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy">Our portfolio is coming soon</h3>
        <p className="mx-auto mt-2 max-w-md text-muted">
          We&apos;re preparing case studies of our recent work. Get in touch and we&apos;ll be happy to share relevant
          examples for your project.
        </p>
        <a href="#contact" className="group mt-6 inline-flex items-center gap-2 font-semibold text-brand hover:text-navy">
          Ask about our work
          <ArrowRight className="h-4.5 w-4.5 transition group-hover:translate-x-1" />
        </a>
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p) => (
        <article key={p.name} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
          <div className="relative aspect-[16/10] bg-gradient-to-br from-navy to-brand">
            {p.image && <Image src={p.image} alt={`${p.name} screenshot`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg font-bold text-navy">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.overview}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <li key={t} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-brand">{t}</li>
              ))}
            </ul>
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-navy">
                View live project <ArrowRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Our Projects" title="Selected work" text="A look at some of the digital solutions we have delivered." />
        <div className="mt-12">
          <ProjectGrid />
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Contact ---------------- */

export function ContactDetails() {
  const items = [
    { icon: Globe, label: "Website", value: site.domain, href: site.url },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    ...site.whatsapp.map((w) => ({ icon: Chat, label: `WhatsApp · ${w.label}`, value: w.number, href: whatsappHref(w.number) })),
  ];
  return (
    <ul className="space-y-4">
      {items.map(({ icon: Icon, label, value, href }) => (
        <li key={value}>
          <a
            href={href}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition hover:border-accent/50 hover:shadow-md"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-accent transition group-hover:bg-brand group-hover:text-white">
              <Icon className="h-5.5 w-5.5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{label}</span>
              <span className="mt-0.5 block font-semibold break-all text-navy">{value}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ContactSection({ defaultService }: { defaultService?: string }) {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's build something together"
            text="Tell us about your idea or project. We'll get back to you to discuss how we can help."
          />
          <div className="mt-8">
            <ContactDetails />
          </div>
        </div>
        <ContactForm defaultService={defaultService} />
      </Container>
    </section>
  );
}
