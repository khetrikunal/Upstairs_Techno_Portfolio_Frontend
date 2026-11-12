import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "National Olympiad",
  description: "Learn about Upstairs Techno's national Olympiad exam, including online and school-based examination options.",
  alternates: { canonical: "/education/olympiad" },
};

export default function OlympiadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
