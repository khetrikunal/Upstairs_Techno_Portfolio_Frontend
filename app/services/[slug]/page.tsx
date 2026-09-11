import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { getService, services } from "@/lib/data/services";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
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
