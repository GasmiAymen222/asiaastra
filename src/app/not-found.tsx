import Link from "next/link";
import { PageHeader, Container } from "@/components/sections";

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="404" title="Page not found" text="The page you're looking for doesn't exist or has moved." />
      <Container className="py-16">
        <Link href="/" className="inline-flex rounded-full bg-brand px-7 py-3.5 font-semibold text-white hover:bg-navy">
          Back to home
        </Link>
      </Container>
    </>
  );
}
