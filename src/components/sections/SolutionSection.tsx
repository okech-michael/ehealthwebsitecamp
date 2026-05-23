'use client'
import { CheckCircle2, ArrowRight, Layers, Wifi, FileText, CreditCard, Smartphone, BarChart3, Users, Smartphone as SmartphoneIcon, Pill, Stethoscope, Microscope, DollarSign } from 'lucide-react'

const solutions = [
  {
    icon: Layers,
    title: 'Unified Platform',
    description: 'One system connecting all departments — reception, triage, doctors, lab, pharmacy, and billing. No more information silos.',
    items: ['All departments connected', 'Shared patient record', 'Cross-module notifications'],
  },
  {
    icon: Wifi,
    title: 'Real-Time Workflows',
    description: 'Instant updates as patients move through the facility. Status changes propagate instantly across all screens.',
    items: ['Live queue management', 'Instant alerts & notifications', 'Zero data lag'],
  },
  {
    icon: FileText,
    title: 'Digital Patient Records',
    description: 'Complete EMR/EHR system with patient history, visit notes, prescriptions, and lab results all in one place.',
    items: ['Full medical history', 'Structured clinical notes', 'Prescription management'],
  },
  {
    icon: CreditCard,
    title: 'SHA / NHIF Integration',
    description: 'Direct integration with SHA and NHIF for automated claim submissions, real-time eligibility checks, and faster reimbursements.',
    items: ['Automated claim filing', 'Eligibility verification', 'Reconciliation reports'],
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Access',
    description: 'Full functionality on any device — doctors can access patient records on tablets, medics can file home visit notes on phones.',
    items: ['iOS & Android apps', 'Offline capability', 'Low-bandwidth optimized'],
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Powerful dashboards give facility managers complete visibility into operations, revenue, and patient flow in real time.',
    items: ['Revenue intelligence', 'Operational KPIs', 'Predictive insights'],
  },
]

const workflowSteps = [
  { label: 'Patient Arrives', icon: Users, color: 'brand' },
  { label: 'Digital Registration', icon: SmartphoneIcon, color: 'emerald' },
  { label: 'Triage & Vitals', icon: Pill, color: 'purple' },
  { label: 'Doctor Consultation', icon: Stethoscope, color: 'brand' },
  { label: 'Lab / Pharmacy', icon: Microscope, color: 'orange' },
  { label: 'Smart Billing', icon: DollarSign, color: 'emerald' },
]

export default function SolutionSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#08142a]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-pill mx-auto mb-4 w-fit">
            The Solution
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            One Platform.
            <br />
            <span className="gradient-text">Complete Healthcare Intelligence.</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ehealth replaces fragmented paper systems with a single, intelligent platform that digitises every step of the patient journey and every corner of your facility.
          </p>
        </div>

        {/* Workflow connector */}
        <div className="mb-16 overflow-x-auto pb-4">
          <div className="flex items-center justify-center gap-0 min-w-max mx-auto px-4">
            {workflowSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl glass border border-brand-500/20 flex items-center justify-center text-2xl shadow-card hover:scale-110 transition-transform cursor-default">
                      <Icon className="w-6 h-6 text-slate-400" />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-2 text-center leading-tight max-w-[70px]">{step.label}</span>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="flex items-center mx-2 mb-5">
                      <div className="w-8 h-px bg-gradient-to-r from-brand-500/50 to-brand-500/20" />
                      <div className="w-1.5 h-1.5 rotate-45 border-t border-r border-brand-500/50 -ml-1" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <div className="text-center mt-4">
            <span className="text-xs text-slate-500 font-mono">Fully digitised patient journey · Real-time updates at every step</span>
          </div>
        </div>

        {/* Solution cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution, i) => {
            const Icon = solution.icon
            return (
              <div
                key={solution.title}
                className="group relative glass rounded-2xl p-6 border border-brand-500/10 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-card-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>

                  <h3 className="font-display font-semibold text-white mb-2">{solution.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{solution.description}</p>

                  <ul className="space-y-2">
                    {solution.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom feature highlight */}
        <div className="mt-16 rounded-3xl gradient-border p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="tag-pill mb-4 w-fit">Unique to Ehealth</div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                Built for Low-Bandwidth,<br />
                <span className="gradient-text">High-Impact Environments</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Ehealth is engineered to run smoothly even on 3G connections and low-powered devices — making it practical for rural clinics, community health centres, and facilities in underserved areas across Africa.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Works on 3G', 'Offline mode', 'Runs on Android tablets', 'Low-cost deployment', 'Swahili UI support'].map((f) => (
                  <span key={f} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">Network Performance</span>
                  <span className="text-xs text-emerald-400 font-mono">Optimised ✓</span>
                </div>
                {[
                  { label: 'Page Load Time', value: '1.2s', pct: 88 },
                  { label: 'Data Transfer', value: '32kb avg', pct: 95 },
                  { label: 'Offline Capability', value: '72hrs', pct: 70 },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-400">{m.label}</span>
                      <span className="text-white font-mono font-medium">{m.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full"
                        style={{ width: `${m.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
