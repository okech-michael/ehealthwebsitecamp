import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CTASection } from '@/components/sections/TestimonialsAndCTA'
import {
  UserCircle, Monitor, Stethoscope, FlaskConical, Pill, CreditCard,
  LayoutDashboard, Settings, MapPin, ClipboardList, Shield, Wifi,
  Smartphone, BarChart3, Bell, FileText, CheckCircle2, ArrowRight, Zap
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features — Ehealth Platform Capabilities',
  description: 'Explore every feature of the Ehealth platform — from patient management and EMR to SHA billing, analytics, and home visit dispatch.',
}

const featureCategories = [
  {
    id: 'patient-management',
    label: 'Patient Management',
    icon: UserCircle,
    color: 'brand',
    headline: 'Complete Patient Lifecycle Management',
    description: 'From first visit to ongoing care, Ehealth manages every touchpoint of the patient journey with precision and ease.',
    features: [
      'Digital patient registration with auto-ID generation',
      'Comprehensive demographics and contact management',
      'Insurance and SHA/NHIF member verification',
      'Appointment booking, reminders, and rescheduling',
      'Visit history and encounter tracking',
      'Patient portal with self-service access',
      'Next-of-kin and emergency contact management',
      'Multi-facility patient record sharing',
    ],
  },
  {
    id: 'emr',
    label: 'Electronic Medical Records',
    icon: FileText,
    color: 'emerald',
    headline: 'Structured, Searchable, Always Available',
    description: 'Complete EMR/EHR capabilities designed for African clinical workflows — fast, structured, and accessible from any device.',
    features: [
      'SOAP note documentation with templates',
      'Diagnosis coding (ICD-10)',
      'Allergy and medication records',
      'Vital signs history and trending',
      'Problem list and chronic disease tracking',
      'Clinical decision support alerts',
      'Referral letter generation',
      'Medical certificate and document templates',
    ],
  },
  {
    id: 'laboratory',
    label: 'Laboratory',
    icon: FlaskConical,
    color: 'orange',
    headline: 'End-to-End Lab Workflow Automation',
    description: 'Receive orders, process samples, capture results, and notify clinicians — all digitally, all in real time.',
    features: [
      'Electronic test order receipt from doctors',
      'Sample tracking with barcode support',
      'Result entry with reference ranges',
      'Critical value alerting system',
      'Panel and profile test grouping',
      'Result validation and authorisation workflow',
      'Report generation and printing',
      'Lab revenue and turnaround time analytics',
    ],
  },
  {
    id: 'pharmacy',
    label: 'Pharmacy',
    icon: Pill,
    color: 'green',
    headline: 'Intelligent Drug Dispensing & Inventory',
    description: 'Receive prescriptions electronically, manage stock in real time, and prevent dangerous drug interactions automatically.',
    features: [
      'Electronic prescription receiving',
      'Drug interaction and allergy checking',
      'Inventory management with reorder alerts',
      'Dispensing records and audit trail',
      'Expiry date tracking and alerts',
      'SHA/NHIF drug formulary integration',
      'Pharmacy revenue reporting',
      'Multi-location stock management',
    ],
  },
  {
    id: 'billing',
    label: 'Billing & Finance',
    icon: CreditCard,
    color: 'yellow',
    headline: 'Zero-Leakage Revenue Capture',
    description: 'Every service rendered is automatically captured and billed — from consultations to lab tests to pharmacy dispenses.',
    features: [
      'Automatic charge capture from all departments',
      'SHA/NHIF claim generation and submission',
      'M-Pesa and card payment integration',
      'Itemised invoice generation',
      'Credit and insurance reconciliation',
      'Outstanding balance tracking',
      'Revenue dashboards and financial reports',
      'Audit trail for all financial transactions',
    ],
  },
  {
    id: 'analytics',
    label: 'Analytics & Reporting',
    icon: BarChart3,
    color: 'purple',
    headline: 'Intelligence for Every Level of Leadership',
    description: 'From department heads to facility directors, Ehealth delivers the right data to the right person at the right time.',
    features: [
      'Real-time operational KPI dashboards',
      'Patient flow and queue analytics',
      'Revenue and claims intelligence',
      'Staff performance tracking',
      'Department utilisation reports',
      'Disease surveillance and epidemiology reports',
      'Custom report builder',
      'Scheduled report delivery via email',
    ],
  },
  {
    id: 'security',
    label: 'Security & Compliance',
    icon: Shield,
    color: 'brand',
    headline: 'Enterprise Security. Healthcare Trust.',
    description: 'Built to meet the highest standards of data protection required for healthcare environments across Africa.',
    features: [
      'AES-256 encryption at rest and in transit',
      'Role-based access control (RBAC)',
      'Complete audit logs for all user actions',
      'Multi-factor authentication (MFA)',
      'Kenya Data Protection Act compliance',
      'GDPR-aligned data handling',
      'Automated daily backups',
      'ISO 27001-ready infrastructure',
    ],
  },
  {
    id: 'integrations',
    label: 'Integrations & APIs',
    icon: Wifi,
    color: 'emerald',
    headline: 'Connect Everything in Your Ecosystem',
    description: 'Ehealth integrates with the tools and systems that matter most to African healthcare providers.',
    features: [
      'SHA (Social Health Authority) API',
      'NHIF claims and eligibility API',
      'M-Pesa STK Push and paybill',
      'Safaricom SMS notifications',
      'HL7 FHIR data exchange',
      'KEMR national patient registry',
      'Laboratory analysers (HL7)',
      'REST API for custom integrations',
    ],
  },
]

const colorConfig: Record<string, { accent: string, iconBg: string, border: string, tag: string }> = {
  brand: { accent: 'text-brand-400', iconBg: 'bg-brand-500/10 border-brand-500/20', border: 'border-brand-500/20', tag: 'bg-brand-500/10 text-brand-400 border-brand-500/20' },
  emerald: { accent: 'text-emerald-400', iconBg: 'bg-emerald-500/10 border-emerald-500/20', border: 'border-emerald-500/20', tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  orange: { accent: 'text-orange-400', iconBg: 'bg-orange-500/10 border-orange-500/20', border: 'border-orange-500/20', tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  green: { accent: 'text-green-400', iconBg: 'bg-green-500/10 border-green-500/20', border: 'border-green-500/20', tag: 'bg-green-500/10 text-green-400 border-green-500/20' },
  yellow: { accent: 'text-yellow-400', iconBg: 'bg-yellow-500/10 border-yellow-500/20', border: 'border-yellow-500/20', tag: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  purple: { accent: 'text-violet-400', iconBg: 'bg-violet-500/10 border-violet-500/20', border: 'border-violet-500/20', tag: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill mx-auto mb-6 w-fit">
            <Zap className="w-3 h-3" />
            Full Platform Overview
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Every Feature Your Facility
            <br />
            <span className="gradient-text">Will Ever Need</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Ehealth is a complete healthcare operating system — not a collection of disconnected tools. Every module shares one patient record, one billing engine, and one analytics layer.
          </p>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="relative pb-20">
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick nav */}
          <div className="flex overflow-x-auto gap-2 pb-6 mb-12 scrollbar-hide">
            {featureCategories.map((cat) => {
              const c = colorConfig[cat.color] || colorConfig.brand
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${c.tag}`}
                >
                  {cat.label}
                </a>
              )
            })}
          </div>

          {/* Feature sections */}
          <div className="space-y-16">
            {featureCategories.map((cat, i) => {
              const Icon = cat.icon
              const c = colorConfig[cat.color] || colorConfig.brand
              const isEven = i % 2 === 0
              return (
                <div key={cat.id} id={cat.id} className="scroll-mt-24">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Text */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold mb-4 ${c.tag}`}>
                        <Icon className="w-3.5 h-3.5" />
                        {cat.label}
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">{cat.headline}</h2>
                      <p className="text-slate-400 leading-relaxed mb-8">{cat.description}</p>
                      <a
                        href="/contact"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${c.accent} hover:opacity-80 transition-opacity`}
                      >
                        See live demo <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Features list */}
                    <div className={`glass rounded-2xl p-6 border ${c.border} ${isEven ? '' : 'lg:col-start-1'}`}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cat.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 ${c.accent} flex-shrink-0 mt-0.5`} />
                            <span className="text-sm text-slate-300 leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {i < featureCategories.length - 1 && (
                    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
