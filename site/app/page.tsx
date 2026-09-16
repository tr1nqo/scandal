import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { AudienceSection } from '@/components/audience-section'
import { QuotesRibbon } from '@/components/quotes-ribbon'
import { FormatsSection } from '@/components/formats-section'
import { LevelsSection } from '@/components/levels-section'
import { CoursesSection } from '@/components/courses-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { AboutSection } from '@/components/about-section'
import { BrandsSection } from '@/components/brands-section'
import { PressSection } from '@/components/press-section'
import { TimelineSection } from '@/components/timeline-section'
import { FaqSection } from '@/components/faq-section'
import { ApplySection } from '@/components/apply-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AudienceSection />
        <QuotesRibbon />
        <FormatsSection />
        <LevelsSection />
        <CoursesSection />
        <PortfolioSection />
        <AboutSection />
        <BrandsSection />
        <PressSection />
        <TimelineSection />
        <FaqSection />
        <ApplySection />
      </main>
      <SiteFooter />
    </>
  )
}
