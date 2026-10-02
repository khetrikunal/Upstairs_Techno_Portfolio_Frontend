import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HiringBanner from "@/components/HiringBanner";
import WhatWeDo from "@/components/WhatWeDo";
import CodingCompetitionBanner from "@/components/CodingCompetitionBanner";
import Domains from "@/components/Domains";
import Partners from "@/components/Partners";
import ProcessTimeline from "@/components/ProcessTimeline";
import Technologies from "@/components/Technologies";
import OfficeCollage from "@/components/OfficeCollage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HiringBanner />
        <WhatWeDo />
        <CodingCompetitionBanner />
        <Domains />
        <Partners />
        <OfficeCollage />
        <ProcessTimeline />
        <Technologies />
      </main>
      <Footer />
    </>
  );
}

