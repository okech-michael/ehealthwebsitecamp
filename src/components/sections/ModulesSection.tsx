'use client'
import { useState } from 'react'
import {
  UserCircle, Monitor, Stethoscope, FlaskConical, Pill, CreditCard,
  LayoutDashboard, Settings, MapPin, ClipboardList, ChevronRight, ArrowRight
} from 'lucide-react'

const modules = [
  {
    id: 'patient',
    icon: UserCircle,
    title: 'Patient Portal',
    tagline: 'Digital-first patient experience',
    description: 'Patients book appointments, access medical records, receive notifications, and make payments through a mobile-friendly self-service portal.',
    features: ['Online appointment booking', 'Medical records access', 'Prescription refills', 'Lab result viewing', 'Insurance claim status'],
    color: 'brand',
    badge: 'Patient-facing',
  },
  {
    id: 'reception',
    icon: Monitor,
    title: 'Reception & Admissions',
    tagline: 'Smart front desk operations',
    description: 'Digitise patient registration, manage walk-ins and bookings, verify insurance eligibility in real time, and create visit encounters instantly.',
    features: ['Digital registration', 'Queue management', 'Insurance verification', 'Visit encounter creation', 'Appointment calendar'],
    color: 'emerald',
    badge: 'Core Module',
  },
  {
    id: 'triage',
    icon: ClipboardList,
    title: 'Triage & Nursing',
    tagline: 'Efficient clinical intake',
    description: 'Record vitals digitally, assign urgency levels, complete nursing assessments, and update patient flow status in real time.',
    features: ['Digital vitals capture', 'Urgency scoring', 'Nursing notes', 'Allergy recording', 'Patient flow updates'],
    color: 'purple',
    badge: 'Clinical',
  },
  {
    id: 'doctor',
    icon: Stethoscope,
    title: 'Doctor Dashboard',
    tagline: 'Intelligent clinical workspace',
    description: 'Clinicians see their full patient queue, access complete medical histories, write SOAP notes, order investigations, and issue prescriptions — all in one screen.',
    features: ['Patient queue view', 'Full EMR access', 'Clinical notes (SOAP)', 'Lab & radiology orders', 'E-prescribing'],
    color: 'brand',
    badge: 'Clinical',
  },
  {
    id: 'lab',
    icon: FlaskConical,
    title: 'Laboratory',
    tagline: 'Streamlined lab workflows',
    description: 'Receive digital test orders, capture results electronically, and send real-time notifications to requesting clinicians. Full audit trail included.',
    features: ['Order management', 'Result entry & validation', 'Reference ranges', 'Critical value alerts', 'Report generation'],
    color: 'orange',
    badge: 'Diagnostic',
  },
  {
    id: 'pharmacy',
    icon: Pill,
    title: 'Pharmacy',
    tagline: 'Intelligent dispensing system',
    description: 'Receive electronic prescriptions, manage drug inventory, track dispensing, and generate revenue reports with full SHA/NHIF integration.',
    features: ['E-prescription receiving', 'Inventory management', 'Drug interaction alerts', 'Dispensing records', 'Reorder alerts'],
    color: 'green',
    badge: 'Dispensing',
  },
  {
    id: 'billing',
    icon: CreditCard,
    title: 'Billing & Finance',
    tagline: 'Zero-leakage revenue capture',
    description: 'Automatically capture charges from all departments, generate itemised bills, process SHA/NHIF claims, and reconcile payments in real time.',
    features: ['Automated charge capture', 'SHA/NHIF claims', 'M-Pesa integration', 'Invoice management', 'Revenue reports'],
    color: 'yellow',
    badge: 'Finance',
  },
  {
    id: 'analytics',
    icon: LayoutDashboard,
    title: 'Supervisor Analytics',
    tagline: 'Real-time operational intelligence',
    description: 'C-suite and department heads get live dashboards showing patient flow, revenue, staff performance, bed occupancy, and operational KPIs.',
    features: ['Live KPI dashboards', 'Revenue analytics', 'Staff performance', 'Bed management', 'Custom reports'],
    color: 'brand',
    badge: 'Management',
  },
  {
    id: 'admin',
    icon: Settings,
    title: 'System Administration',
    tagline: 'Full platform control',
    description: 'IT administrators manage users, roles, permissions, system configurations, audit logs, and facility settings from a powerful admin console.',
    features: ['User & role management', 'Audit logs', 'System configuration', 'Data backup', 'Security settings'],
    color: 'slate',
    badge: 'Admin',
  },
  {
    id: 'homevisit',
    icon: MapPin,
    title: 'Medic Home Visit',
    tagline: 'Healthcare at your doorstep',
    description: 'Patients request home visits, get matched with available medics, track arrival in real time, and receive full digital care — from vitals to billing — at home.',
    features: ['Home visit requests', 'Medic matching', 'GPS tracking', 'Mobile clinical tools', 'Digital billing'],
    color: 'emerald',
    badge: 'Community',
  },
]

const colorConfig: Record<string, { icon: string, border: string, activeBorder: string, badge: string, glow: string }> = {
  brand: { icon: 'text-brand-400 bg-brand-500/10', border: 'border-brand-500/20', activeBorder: 'border-brand-500/60', badge: 'bg-brand-500/10 text-brand-400 border-brand-500/20', glow: 'shadow-brand-500/10' },
  emerald: { icon: 'text-emerald-400 bg-emerald-500/10', border: 'border-emerald-500/20', activeBorder: 'border-emerald-500/60', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', glow: 'shadow-emerald-500/10' },
  purple: { icon: 'text-violet-400 bg-violet-500/10', border: 'border-violet-500/20', activeBorder: 'border-violet-500/60', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20', glow: 'shadow-violet-500/10' },
  orange: { icon: 'text-orange-400 bg-orange-500/10', border: 'border-orange-500/20', activeBorder: 'border-orange-500/60', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20', glow: 'shadow-orange-500/10' },
  green: { icon: 'text-green-400 bg-green-500/10', border: 'border-green-500/20', activeBorder: 'border-green-500/60', badge: 'bg-green-500/10 text-green-400 border-green-500/20', glow: 'shadow-green-500/10' },
  yellow: { icon: 'text-yellow-400 bg-yellow-500/10', border: 'border-yellow-500/20', activeBorder: 'border-yellow-500/60', badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', glow: 'shadow-yellow-500/10' },
  slate: { icon: 'text-slate-400 bg-slate-500/10', border: 'border-slate-500/20', activeBorder: 'border-slate-500/60', badge: 'bg-slate-500/10 text-slate-400 border-slate-500/20', glow: 'shadow-slate-500/10' },
}

export default function ModulesSection() {
  const [activeModule, setActiveModule] = useState<string | null>(null)

  return (
    <section className="section-pad relative overflow-hidden" id="modules">
      <div className="absolute inset-0 bg-gradient-to-b from-[#08142a] via-[#0a1628] to-[#08142a]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-pill mx-auto mb-4 w-fit">Platform Modules</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Every Role. Every Department.
            <br />
            <span className="gradient-text">Fully Connected.</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto">
            10 purpose-built modules designed for every role in your facility, working together as one unified healthcare operating system.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {modules.map((module) => {
            const Icon = module.icon
            const c = colorConfig[module.color]
            const isActive = activeModule === module.id

            return (
              <div
                key={module.id}
                className={`group relative glass-light rounded-2xl p-5 border transition-all duration-300 cursor-pointer
                  ${isActive ? `${c.activeBorder} shadow-lg ${c.glow}` : `${c.border} hover:${c.activeBorder}`}
                  hover:-translate-y-1 module-card
                `}
                onClick={() => setActiveModule(isActive ? null : module.id)}
              >
                {/* Badge */}
                <div className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${c.badge}`}>
                  {module.badge}
                </div>

                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-white text-sm mb-1 leading-tight">{module.title}</h3>
                <p className="text-[11px] text-slate-500 mb-3">{module.tagline}</p>

                {/* Expand indicator */}
                <div className={`flex items-center gap-1 text-[11px] font-medium transition-colors ${isActive ? c.badge.split(' ')[1] : 'text-slate-600'}`}>
                  <span>{isActive ? 'Less info' : 'Learn more'}</span>
                  <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </div>

                {/* Expanded details */}
                {isActive && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{module.description}</p>
                    <ul className="space-y-1.5">
                      {module.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                          <div className={`w-1 h-1 rounded-full ${c.icon.split(' ')[0].replace('text-', 'bg-')}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="/features"
            className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium transition-colors"
          >
            Explore all platform features in detail
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
