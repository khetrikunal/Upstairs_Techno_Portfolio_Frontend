import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competition Registration",
  description: "Register for an Upstairs Techno coding competition.",
  alternates: { canonical: "/education/coding-competition/register" },
  robots: { index: false },
};

export default function CompetitionRegistrationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
