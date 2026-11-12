import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coding Competition",
  description: "Join Upstairs Techno's coding competition to build programming skills, solve challenges, and earn recognition.",
  alternates: { canonical: "/education/coding-competition" },
};

export default function CodingCompetitionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
