import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import SolutionSection from '@/components/sections/SolutionSection'
import ModulesSection from '@/components/sections/ModulesSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import HomeVisitSection from '@/components/sections/HomeVisitSection'
import AnalyticsSection from '@/components/sections/AnalyticsSection'
import { MarketSection, SecuritySection } from '@/components/sections/MarketAndSecurity'
import { TestimonialsSection, CTASection } from '@/components/sections/TestimonialsAndCTA'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ModulesSection />
      <BenefitsSection />
      <HomeVisitSection />
      <AnalyticsSection />
      <MarketSection />
      <SecuritySection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
