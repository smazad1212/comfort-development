import React from 'react'
import Home1Banner from "@/components/banner/Home1banner";
import FeatureSection from '@/components/real-estate/FeatureSection'
import HighlightProjectSection from '@/components/architecture/ProjectSection'
import WhyChooseSection from '@/components/rnovation/WhyChooseSection'
import DiscoverMore from '@/components/sections/DiscoverMore'
import ProcessSection from '@/components/architecture/ProcessSection'
import ProjectSection from '@/components/architecture-project-components/ProjectSection'
import ScrollText from '@/components/common/ScrollText'

export default function Home() {
  return (
    <>
      <Home1Banner />
      <FeatureSection />
      <HighlightProjectSection />
      <WhyChooseSection />
      <DiscoverMore />
      <ProcessSection />
      <ProjectSection />
      <ScrollText />
    </>
  );
}
