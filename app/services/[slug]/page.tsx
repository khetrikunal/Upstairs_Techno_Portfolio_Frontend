import { notFound, redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { getService, services } from "@/lib/data/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Array.from(new Set([...services.map((service) => service.slug), "education", "freelancer-it"])).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  const displayTitle = service.slug === "btds"
    ? "BTDS – The Talent Development Division (TDD)"
    : service.title;

  return {
    title: `${displayTitle} | Services | Upstairs Techno`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;

  if (slug?.toLowerCase() === "education") {
    redirect("/what-we-do/services/education");
  }

  if (slug?.toLowerCase() === "freelancer-it") {
    redirect("/services/freelancer-it");
  }

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetailContent
        service={service}
        sectionLabel="Services"
        sectionHref="/services"
      />
      <Footer />
    </>
  );
}
