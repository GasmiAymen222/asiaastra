// Service content and pricing. Edit here and the service pages update.

export type IconName = "web" | "mobile" | "ai" | "product" | "shield" | "cloud" | "tools";

export type Subservice = {
  name: string;
  description: string;
  price: string; // starting price, e.g. "RM1,200"
  per?: "month" | "session"; // recurring / per-session pricing
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: IconName; // fallback line icon
  image?: string; // custom icon image in /public (shown instead of `icon` when set)
  intro: string;
  problems?: string[];
  subservices: Subservice[];
  note?: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    short: "Modern, Fast and Scalable Websites.",
    icon: "web",
    image: "/images/services/web-development.png",
    intro:
      "We design and build websites and web applications that load fast, work on every device, and grow with your business.",
    problems: [
      "An outdated website that doesn't reflect the quality of your business.",
      "Slow pages that lose visitors before they convert.",
      "A site that is hard to update or can't handle growth.",
    ],
    subservices: [
      { name: "Landing Page", description: "A modern single-page website designed to promote a business, product or service.", price: "RM500" },
      { name: "Business Website", description: "A professional website presenting your company, services and contact information.", price: "RM1,200" },
      { name: "Corporate Website", description: "A multi-page website with custom design and business-focused features.", price: "RM2,500" },
      { name: "E-commerce Website", description: "An online store with product listings, shopping cart and payment integration.", price: "RM2,500" },
      { name: "Website Redesign", description: "Improve an existing website's design, responsiveness and user experience.", price: "RM600" },
      { name: "Website Maintenance", description: "Regular updates, bug fixes, backups and technical support.", price: "RM100", per: "month" },
      { name: "Website SEO Setup", description: "Basic on-page SEO, metadata, sitemap and search engine indexing setup.", price: "RM250" },
      { name: "Booking Website", description: "An appointment or reservation website with booking management.", price: "RM1,500" },
    ],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    short: "iOS & Android Apps That Make an Impact.",
    icon: "mobile",
    intro:
      "We create mobile apps for iOS and Android that are intuitive to use, reliable in the field, and built to reach your customers wherever they are.",
    problems: [
      "Customers expect to reach you from their phone.",
      "Manual processes that could run from a simple app.",
      "Existing apps with poor reviews, crashes, or dated design.",
    ],
    subservices: [
      { name: "Android Application", description: "Develop an Android application for your business or service.", price: "RM3,000" },
      { name: "iOS Application", description: "Build an iPhone application with a modern user interface.", price: "RM3,500" },
      { name: "Cross-Platform App", description: "Develop one application for both Android and iOS using Flutter.", price: "RM5,000" },
      { name: "Business Application", description: "Custom mobile solutions for business operations and management.", price: "RM4,000" },
      { name: "E-commerce App", description: "A mobile shopping application with product catalogues and ordering.", price: "RM5,000" },
      { name: "App UI/UX Design", description: "Design application screens, navigation and user experiences.", price: "RM500" },
      { name: "API Integration", description: "Connect mobile applications with external APIs and backend systems.", price: "RM400" },
      { name: "App Maintenance", description: "Updates, bug fixes, compatibility improvements and support.", price: "RM150", per: "month" },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    short: "Intelligent Solutions for a Smarter Future.",
    icon: "ai",
    image: "/images/services/ai-solutions.png",
    intro:
      "We help organisations put artificial intelligence and automation to practical use, saving time, reducing errors, and unlocking insight from data.",
    problems: [
      "Teams spending hours on repetitive, manual tasks.",
      "Valuable data that sits unused.",
      "Customer questions that pile up faster than you can answer them.",
    ],
    subservices: [
      { name: "AI Chatbot", description: "Intelligent chatbot to answer customer questions automatically.", price: "RM800" },
      { name: "RAG Chatbot", description: "AI assistant that answers questions using company documents and knowledge bases.", price: "RM1,500" },
      { name: "Customer Support AI", description: "AI-powered customer support for handling common customer inquiries.", price: "RM1,500" },
      { name: "AI Workflow Automation", description: "Automate repetitive business tasks using AI-powered workflows.", price: "RM800" },
      { name: "AI API Integration", description: "Integrate AI models such as OpenAI, Gemini or other supported APIs into applications.", price: "RM500" },
      { name: "AI Document Processing", description: "Extract, organize and summarize information from business documents.", price: "RM1,000" },
      { name: "AI Recommendation System", description: "Personalized recommendations based on user preferences and available data.", price: "RM2,000" },
      { name: "Custom AI Solution", description: "Develop tailored AI solutions according to business requirements.", price: "RM3,000" },
    ],
  },
  {
    slug: "digital-products",
    title: "Digital Products",
    short: "From Idea to Product.",
    icon: "product",
    image: "/images/services/digital-products.png",
    intro:
      "We partner with founders and businesses to shape ideas into real digital products, from first concept through launch and beyond.",
    problems: [
      "A promising idea without a clear path to a working product.",
      "Uncertainty about scope, priorities and technology choices.",
      "Needing a working MVP to test the market or raise funding.",
    ],
    subservices: [
      { name: "MVP Development", description: "Transform a business idea into a functional minimum viable product.", price: "RM2,500" },
      { name: "SaaS Development", description: "Build subscription-based software products for businesses.", price: "RM4,000" },
      { name: "Admin Dashboard", description: "Develop dashboards to manage business data, users and operations.", price: "RM1,000" },
      { name: "Business Management System", description: "Digital systems for managing customers, inventory and daily operations.", price: "RM2,000" },
      { name: "Custom Web Application", description: "Develop web-based applications tailored to specific business needs.", price: "RM2,500" },
      { name: "Database Development", description: "Design and implement structured databases for digital products.", price: "RM500" },
      { name: "Product UI/UX Design", description: "Create user-friendly interfaces and prototypes for digital products.", price: "RM500" },
      { name: "Prototype Development", description: "Build an interactive prototype to demonstrate a product idea.", price: "RM700" },
    ],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity Services",
    short: "Secure, Reliable and Protected Systems.",
    icon: "shield",
    image: "/images/services/cybersecurity.png",
    intro:
      "We help protect your systems, data and customers with practical security measures suited to the size and needs of your business.",
    problems: [
      "Uncertainty about how exposed your systems really are.",
      "Customer data that must be protected and handled responsibly.",
      "Security added as an afterthought rather than built in.",
    ],
    subservices: [
      { name: "Website Security Assessment", description: "Review website security configurations and identify common vulnerabilities.", price: "RM300" },
      { name: "Vulnerability Assessment", description: "Scan authorized systems to identify potential security weaknesses.", price: "RM500" },
      { name: "Website Security Hardening", description: "Improve website protection through secure configurations and updates.", price: "RM400" },
      { name: "SSL Installation", description: "Configure SSL certificates and HTTPS for website security.", price: "RM100" },
      { name: "Malware Detection & Removal", description: "Identify and remove malware from eligible websites.", price: "RM300" },
      { name: "Security Monitoring", description: "Monitor website security events and suspicious activities.", price: "RM150", per: "month" },
      { name: "Backup & Recovery Setup", description: "Configure secure backups and basic recovery procedures.", price: "RM200" },
      { name: "Security Consultation", description: "Provide recommendations to improve an organization's cybersecurity practices.", price: "RM200", per: "session" },
    ],
    note:
      "Security assessments are only conducted with explicit written authorization from the system owner. These introductory services do not represent a full penetration test, certified security audit or compliance certification.",
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    short: "Flexible, Scalable and Reliable Cloud Solutions.",
    icon: "cloud",
    image: "/images/services/cloud-services.png",
    intro:
      "We help businesses move to, build on, and get the most from the cloud, with infrastructure that scales with demand and stays reliable.",
    problems: [
      "Servers that are costly to maintain or struggle under load.",
      "Downtime and slow deployments that hold the team back.",
      "Cloud bills that keep growing without clear reasons.",
    ],
    subservices: [
      { name: "Cloud Deployment", description: "Deploy websites and applications to cloud hosting platforms.", price: "RM300" },
      { name: "VPS Setup", description: "Configure a virtual private server for hosting applications and services.", price: "RM250" },
      { name: "Cloud Migration", description: "Move websites, applications or databases to cloud infrastructure.", price: "RM500" },
      { name: "Cloud Database Setup", description: "Configure cloud databases for business applications.", price: "RM300" },
      { name: "Server Configuration", description: "Configure Linux servers, web servers and application environments.", price: "RM250" },
      { name: "Cloud Backup", description: "Configure automated cloud backup and storage solutions.", price: "RM150" },
      { name: "Domain & DNS Configuration", description: "Configure domains, DNS records and hosting connections.", price: "RM100" },
      { name: "Cloud Monitoring", description: "Monitor server availability, performance and resource usage.", price: "RM100", per: "month" },
      { name: "Cloud Maintenance", description: "Regular server updates, configuration checks and technical support.", price: "RM200", per: "month" },
      { name: "CI/CD Deployment", description: "Configure automated application testing and deployment pipelines.", price: "RM500" },
    ],
  },
];

// Optional complementary services (own page, not shown as a main card).
export const additionalServices: Service = {
  slug: "additional-services",
  title: "Additional Services",
  short: "Expert support to complement your project.",
  icon: "tools",
  intro:
    "Complementary services that support your projects from planning to launch, including consultation, APIs, documentation, testing and ongoing IT support.",
  subservices: [
    { name: "UI/UX Consultation", description: "Recommendations to improve digital product usability.", price: "RM200" },
    { name: "Technical Consultation", description: "Technology guidance and solution planning for businesses.", price: "RM200", per: "session" },
    { name: "API Development", description: "Develop APIs to connect applications and business systems.", price: "RM500" },
    { name: "Technical Documentation", description: "Prepare technical documentation for software projects.", price: "RM200" },
    { name: "Software Testing", description: "Functional testing and basic quality assurance.", price: "RM300" },
    { name: "IT Support", description: "Remote troubleshooting and technical assistance.", price: "RM100", per: "session" },
  ],
};

export const allServices = [...services, additionalServices];

export function getService(slug: string) {
  return allServices.find((s) => s.slug === slug);
}

export function lowestPrice(s: Service) {
  const oneOff = s.subservices.filter((x) => !x.per);
  const list = oneOff.length ? oneOff : s.subservices;
  return list.reduce((min, x) =>
    Number(x.price.replace(/\D/g, "")) < Number(min.price.replace(/\D/g, "")) ? x : min,
  );
}
