import { Suspense, lazy } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'

// Lazy load heavy sections
const SolutionSection = lazy(() => import('@/components/sections/SolutionSection'))
const ModulesSection = lazy(() => import('@/components/sections/ModulesSection'))
const BenefitsSection = lazy(() => import('@/components/sections/BenefitsSection'))
const HomeVisitSection = lazy(() => import('@/components/sections/HomeVisitSection'))
const AnalyticsSection = lazy(() => import('@/components/sections/AnalyticsSection'))
const MarketAndSecuritySections = lazy(() => import('@/components/sections/MarketAndSecurityWrapper'))
const TestimonialsAndCTASections = lazy(() => import('@/components/sections/TestimonialsAndCTAWrapper'))

function SectionLoader() {
  return <div className="min-h-screen bg-navy-900" />
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      
      <Suspense fallback={<SectionLoader />}>
        <SolutionSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ModulesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HomeVisitSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AnalyticsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <MarketAndSecuritySections />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsAndCTASections />
      </Suspense>

      <Footer />
    </main>
  )
}
