import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CTASection } from '@/components/sections/TestimonialsAndCTA'
import { CheckCircle2, X, Zap, Building2, Globe, ArrowRight, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing — Ehealth Platform Plans',
  description: 'Transparent, facility-size-based pricing for the Ehealth platform. No hidden fees. Includes SHA/NHIF integration at every tier.',
}

const plans = [
  {
    id: 'clinic',
    name: 'Clinic',
    icon: '🏥',
    tagline: 'For small clinics & dispensaries',
    price: 'KES 15,000',
    period: '/month',
    description: 'Everything a small facility needs to go fully digital — from registration to billing.',
    cta: 'Start Free Pilot',
    highlighted: false,
    badge: null,
    features: [
      { label: 'Up to 3 user accounts', included: true },
      { label: 'Patient registration & EMR', included: true },
      { label: 'Basic billing & invoicing', included: true },
      { label: 'SHA/NHIF claim generation', included: true },
      { label: 'Appointment scheduling', included: true },
      { label: 'SMS notifications (500/mo)', included: true },
      { label: 'Lab & pharmacy modules', included: false },
      { label: 'Analytics dashboard', included: false },
      { label: 'Home visit module', included: false },
      { label: 'Multi-facility support', included: false },
      { label: 'Dedicated support manager', included: false },
      { label: 'Custom integrations', included: false },
    ],
  },
  {
    id: 'hospital',
    name: 'Hospital',
    icon: '🏨',
    tagline: 'For hospitals & health centres',
    price: 'KES 45,000',
    period: '/month',
    description: 'The full Ehealth suite for facilities needing complete departmental integration.',
    cta: 'Book a Demo',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      { label: 'Up to 25 user accounts', included: true },
      { label: 'Patient registration & EMR', included: true },
      { label: 'Advanced billing & SHA claims', included: true },
      { label: 'SHA/NHIF real-time integration', included: true },
      { label: 'Appointment scheduling', included: true },
      { label: 'SMS notifications (2,000/mo)', included: true },
      { label: 'Lab & pharmacy modules', included: true },
      { label: 'Full analytics dashboard', included: true },
      { label: 'Home visit module', included: true },
      { label: 'Multi-facility support', included: false },
      { label: 'Dedicated support manager', included: false },
      { label: 'Custom integrations', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: '🌐',
    tagline: 'For hospital groups & governments',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored deployment for hospital networks, county governments, and healthcare enterprises.',
    cta: 'Contact Sales',
    highlighted: false,
    badge: 'Custom',
    features: [
      { label: 'Unlimited user accounts', included: true },
      { label: 'Patient registration & EMR', included: true },
      { label: 'Advanced billing & SHA claims', included: true },
      { label: 'SHA/NHIF real-time integration', included: true },
      { label: 'Appointment scheduling', included: true },
      { label: 'Unlimited SMS notifications', included: true },
      { label: 'Lab & pharmacy modules', included: true },
      { label: 'Full analytics dashboard', included: true },
      { label: 'Home visit module', included: true },
      { label: 'Multi-facility support', included: true },
      { label: 'Dedicated support manager', included: true },
      { label: 'Custom integrations', included: true },
    ],
  },
]

const faqs = [
  {
    q: 'Is there a free trial or pilot available?',
    a: 'Yes. Every new facility gets a free 30-day pilot deployment with full support. No credit card required. We want you to experience Ehealth risk-free.',
  },
  {
    q: 'What does onboarding look like?',
    a: 'Our team handles the full onboarding — data migration, staff training, and system configuration. Most facilities are fully live within 2 weeks.',
  },
  {
    q: 'Can I add more users later?',
    a: 'Absolutely. User accounts can be added at any time. Additional users beyond plan limits are billed at KES 2,000 per user per month.',
  },
  {
    q: 'Is SHA/NHIF integration included in all plans?',
    a: 'Yes. SHA integration is a core feature included in all Ehealth plans. We believe every facility deserves seamless insurance claims processing.',
  },
  {
    q: 'What happens to our data if we cancel?',
    a: 'Your data is yours. On cancellation, we provide a full export of all patient and financial records in standard formats. We retain anonymised backups for 90 days.',
  },
  {
    q: 'Do you support county government and NGO procurement?',
    a: 'Yes. We support LPO-based procurement, government tender processes, and NGO grant-funded deployments. Contact our sales team for details.',
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill mx-auto mb-6 w-fit">Transparent Pricing</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Simple, Scalable Pricing
            <br />
            <span className="gradient-text">For Every Facility Size</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-6">
            No hidden fees. No per-patient charges. Just straightforward monthly pricing that scales as your facility grows.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <Zap className="w-4 h-4" />
            All plans include free 30-day pilot
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative pb-20">
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? 'gradient-border shadow-glow-sm'
                    : 'glass border border-white/8'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${
                    plan.highlighted ? 'bg-gradient-to-r from-brand-500 to-emerald-500' : 'bg-slate-700'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <div className="text-3xl mb-3">{plan.icon}</div>
                  <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/8">
                  <div className="flex items-end gap-1">
                    <span className="font-display text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{plan.description}</p>
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className={`block text-center py-3 rounded-xl text-sm font-semibold mb-6 transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-brand-500 to-emerald-500 text-white hover:opacity-90'
                      : 'border border-white/15 text-slate-300 hover:border-brand-500/50 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.label} className="flex items-center gap-2.5">
                      {feature.included ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-slate-700 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-slate-300' : 'text-slate-600'}`}>
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="glass rounded-3xl border border-white/8 p-8 mb-20">
            <h3 className="font-display text-xl font-bold text-white mb-6 text-center">Available Add-Ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Additional Users', price: 'KES 2,000/user/mo', desc: 'Add more staff accounts' },
                { name: 'SMS Bundle Top-Up', price: 'KES 3,000/1,000 SMS', desc: 'Extra notification credits' },
                { name: 'Advanced Radiology', price: 'KES 10,000/mo', desc: 'DICOM image integration' },
                { name: 'Custom Integrations', price: 'From KES 25,000', desc: 'Connect your existing tools' },
              ].map((addon) => (
                <div key={addon.name} className="bg-white/3 rounded-xl p-4 border border-white/5">
                  <h4 className="text-sm font-semibold text-white mb-1">{addon.name}</h4>
                  <div className="text-brand-400 text-sm font-bold mb-1">{addon.price}</div>
                  <p className="text-xs text-slate-500">{addon.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass rounded-xl p-5 border border-white/8">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">{faq.q}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
