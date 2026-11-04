import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUsExperience from "@/components/ContactUsExperience";

export const metadata: Metadata = {
  title: "Contact Upstairs Techno",
  description: "Contact Upstairs Techno about software development, IT consulting, AI and automation, careers, training, and partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Let’s Connect | Upstairs Techno",
    description: "Talk with Upstairs Techno about technology services, careers, education, and partnerships.",
    url: "/contact",
    siteName: "Upstairs Techno",
    type: "website",
  },
};

export default function ContactPage() {
  return <><Navbar /><ContactUsExperience /><Footer /></>;
}
