# ASIATLAS Digital Solutions — Website

*Connecting the World Through Technologies*

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and TypeScript.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start
```

## Where to edit content

| What | File |
| --- | --- |
| Company name, tagline, email, WhatsApp, social links | `src/lib/site.ts` |
| Services, sub-services and starting prices | `src/lib/services.ts` |
| Service icon images (set `image` per service in `services.ts`) | `public/images/services/` |
| Portfolio projects (screenshots go in `public/projects/`) | `src/lib/projects.ts` |
| Colors / fonts / design tokens | `src/app/globals.css` (`@theme`) |
| Logo (source: `assets/images/Asiatlas_logo.png`) | `public/images/asiatlas-logo.png` (full), `public/images/asiatlas-mark.png` (header mark), `src/app/icon.png` (favicon) |

## Structure

- `/` — single-page home; the menu scrolls to each section (`#home`, `#about`, `#services`, `#why-us`, `#projects`, `#contact`).
- `/services/[slug]` — one page per service with description, sub-services and starting prices (RM):
  web-development, mobile-applications, ai-solutions, digital-products, cybersecurity, cloud-services, additional-services.
  "Request a quote" on any sub-service pre-fills the contact form on that page.

## Contact form

The form posts to a server action (`src/app/actions/contact.ts`) with validation and a spam honeypot.
Email delivery uses [Resend](https://resend.com) — copy `.env.example` to `.env.local` and set `RESEND_API_KEY`
(and `CONTACT_FROM_EMAIL` with a verified domain). Without a key, submissions are logged to the console in development;
in production the form asks visitors to email directly.

## Before launch — to confirm

- [ ] Official domain (`asiatlas.com`) — also set in `site.url`
- [ ] Email spelling: profile says `contact@asiaatlas.com` (double "a") but the domain is `asiatlas.com`
- [ ] Both WhatsApp numbers (`+60222222222`, `+21366666666`) look like placeholders
- [x] Official logo added
- [ ] Real projects + screenshots in `src/lib/projects.ts`
- [ ] Approve service deliverables in `src/lib/services.ts`
- [ ] Social media links

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com) (zero config), adding the environment variables above.
