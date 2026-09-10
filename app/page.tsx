import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HiringBanner from "@/components/HiringBanner";
import WhatWeDo from "@/components/WhatWeDo";
import CodingCompetitionBanner from "@/components/CodingCompetitionBanner";
import FeaturedProjects from "@/components/FeaturedProjects";
import Partners from "@/components/Partners";
import ProcessTimeline from "@/components/ProcessTimeline";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HiringBanner />
        <WhatWeDo />
        <CodingCompetitionBanner />
        <FeaturedProjects />
        <Partners />
        <ProcessTimeline />
        <Technologies />
        <Contact />
      </main>
    </>
  );
}
