// Portfolio entries. Only add real, approved projects.
// Put screenshots in /public/projects/ and reference them as "/projects/file.png".

export type Project = {
  name: string;
  overview: string;
  technologies: string[];
  image?: string;
  url?: string;
  service?: string; // a service slug from services.ts, e.g. "web-development"
};

export const projects: Project[] = [
  // Example:
  // {
  //   name: "Project name",
  //   overview: "One or two sentences about the client problem and what was delivered.",
  //   technologies: ["Next.js", "PostgreSQL"],
  //   image: "/projects/project-name.png",
  //   url: "https://example.com",
  //   service: "web-development",
  // },
];
