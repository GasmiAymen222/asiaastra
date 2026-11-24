// Central company details. Edit here and every page updates.
// TODO(before launch): confirm domain, email spelling and WhatsApp numbers (see README).

export const site = {
  name: "ASIATLAS",
  legalName: "ASIATLAS Digital Solutions",
  tagline: "Connecting the World Through Technologies",
  intro:
    "Innovative digital solutions to help businesses grow, transform, and succeed.",
  description:
    "ASIATLAS Digital Solutions is a technology brand focused on creating modern, reliable, and scalable digital solutions for businesses, startups, and entrepreneurs.",
  url: "https://asiatlas.com",
  domain: "asiatlas.com",
  email: "contact@asiaatlas.com",
  whatsapp: [
    { label: "Malaysia", number: "+60222222222" },
    { label: "Algeria", number: "+21366666666" },
  ],
  // Add real profile URLs to show them in the footer.
  social: [] as { label: string; href: string }[],
};

export const nav = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About Us", href: "/#about", id: "about" },
  { label: "Services", href: "/#services", id: "services" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact Us", href: "/#contact", id: "contact" },
];

export function whatsappHref(number: string) {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}
