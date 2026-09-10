import InternshipServicePage from "../../career/services/[id]/page";

export async function generateMetadata() {
  return {
    title: "Internship Program | Upstairs Techno Education",
    description: "Enterprise engineering internship opportunities with real-world projects, mentorship, and experience letters.",
  };
}

export default async function EducationInternshipPage() {
  return <InternshipServicePage params={Promise.resolve({ id: "internship" })} />;
}
