import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Application",
  description: "Apply for an internship program with Upstairs Techno.",
  alternates: { canonical: "/career/services/internship/apply" },
  robots: { index: false },
};

export default function InternshipApplicationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
