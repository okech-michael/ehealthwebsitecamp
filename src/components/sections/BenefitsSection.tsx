'use client'
import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Eye, Zap, Clock, FileText, Users, Timer, Calendar, Heart, Building2, Stethoscope } from 'lucide-react'

const benefitGroups = [
  {
    audience: 'Facility Owners',
    icon: Building2,
    color: 'brand',
    description: 'Protect your revenue and gain complete operational control',
    benefits: [
      { icon: TrendingUp, title: 'Reduce Revenue Leakage', value: '40%', desc: 'reduction in missed billing charges', detail: 'All services auto-captured from lab, pharmacy, procedures, and consultations.' },
      { icon: Eye, title: 'Real-Time Visibility', value: '360°', desc: 'operational intelligence dashboard', detail: 'Live dashboards show bed occupancy, staff performance, revenue, and patient flow.' },
      { icon: Zap, title: 'Automated Billing', value: '10×', desc: 'faster claims processing', detail: 'SHA/NHIF claims auto-generated and submitted with zero manual data entry.' },
      { icon: TrendingUp, title: 'Efficiency Gains', value: '65%', desc: 'reduction in administrative overhead', detail: 'Digital workflows eliminate paper, reduce errors, and free staff for patient care.' },
    ],
  },
  {
    audience: 'Healthcare Staff',
    icon: Stethoscope,
    color: 'emerald',
    description: 'Spend less time on paperwork, more time on patients',
    benefits: [
      { icon: FileText, title: 'Reduced Paperwork', value: '90%', desc: 'less manual documentation', detail: 'Structured digital forms replace handwritten notes across all clinical workflows.' },
      { icon: Zap, title: 'Faster Workflows', value: '3×', desc: 'faster patient processing', detail: 'From registration to discharge, every step is streamlined and connected.' },
      { icon: Users, title: 'Team Coordination', value: 'Real-time', desc: 'cross-department updates', detail: 'Instant notifications keep doctors, nurses, lab, and pharmacy in sync.' },
      { icon: Eye, title: 'Clinical Intelligence', value: 'Instant', desc: 'access to patient history', detail: 'Complete patient records — past visits, allergies, medications — at your fingertips.' },
    ],
  },
  {
    audience: 'Patients',
    icon: Users,
    color: 'purple',
    description: 'Better healthcare experience at every touchpoint',
    benefits: [
      { icon: Timer, title: 'Shorter Wait Times', value: '70%', desc: 'reduction in average wait time', detail: 'Smart queue management and pre-registration cut waiting times dramatically.' },
      { icon: Calendar, title: 'Easy Booking', value: '24/7', desc: 'online appointment access', detail: 'Book appointments, select doctors, and get reminders from your phone.' },
      { icon: Heart, title: 'Continuity of Care', value: 'Always', desc: 'connected medical history', detail: 'Your records follow you across facilities — no more repeated tests or lost files.' },
      { icon: FileText, title: 'Digital Records', value: '100%', desc: 'access to your health data', detail: 'Download lab results, prescriptions, and visit summaries from the patient app.' },
    ],
  },
]

const colorConfig: Record<string, { accent: string, iconBg: string, border: string, badge: string }> = {
  brand: { accent: 'text-brand-400', iconBg: 'bg-brand-500/10 border-brand-500/20', border: 'border-brand-500/20', badge: 'bg-brand-500/10 text-brand-400 border-brand-500/20' },
  emerald: { accent: 'text-emerald-400', iconBg: 'bg-emerald-500/10 border-emerald-500/20', border: 'border-emerald-500/20', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  purple: { accent: 'text-violet-400', iconBg: 'bg-violet-500/10 border-violet-500/20', border: 'border-violet-500/20', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
}

export default function BenefitsSection() {
  const [activeGroup, setActiveGroup] = useState(0)

  return (
    <section className="section-pad relative overflow-hidden" id="benefits">
      <div className="absolute inset-0 bg-gradient-to-b from-[#08142a] to-[#0a1628]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="tag-pill mx-auto mb-4 w-fit">Why Ehealth</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for Everyone in
            <br />
            <span className="gradient-text">Your Healthcare Ecosystem</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto">
            Ehealth delivers measurable impact at every level — for facility owners, clinical staff, and patients alike.
          </p>
        </div>

        {/* Audience tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {benefitGroups.map((group, i) => {
            const c = colorConfig[group.color]
            const IconComp = group.icon
            return (
              <button
                key={group.audience}
                onClick={() => setActiveGroup(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border
                  ${activeGroup === i
                    ? `${c.badge} ${c.border}`
                    : 'text-slate-400 border-white/10 hover:border-white/20 hover:text-white bg-white/3'
                  }`}
              >
                <IconComp className="w-4 h-4" />
                {group.audience}
              </button>
            )
          })}
        </div>

        {/* Active group */}
        {benefitGroups.map((group, gi) => {
          if (gi !== activeGroup) return null
          const c = colorConfig[group.color]
          return (
            <div key={group.audience}>
              <p className="text-center text-slate-400 text-sm mb-8">{group.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.benefits.map((benefit) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={benefit.title}
                      className={`group glass rounded-2xl p-6 border ${c.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${c.iconBg} border flex items-center justify-center mb-5`}>
                        <Icon className={`w-5 h-5 ${c.accent}`} />
                      </div>

                      <div className={`font-display text-3xl font-bold ${c.accent} leading-none mb-1`}>
                        {benefit.value}
                      </div>
                      <div className="text-xs text-slate-500 mb-4">{benefit.desc}</div>

                      <h3 className="font-semibold text-white text-sm mb-2">{benefit.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{benefit.detail}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* ROI Calculator teaser */}
        <div className="mt-16 glass rounded-3xl border border-brand-500/20 p-8 text-center">
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Calculate Your ROI with Ehealth
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            A 100-bed hospital using Ehealth typically recovers <span className="text-white font-semibold">KES 2–5M per month</span> in previously lost revenue within the first 90 days.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-6">
            {[
              { label: 'Month 1', value: '+KES 1.2M' },
              { label: 'Month 3', value: '+KES 3.4M' },
              { label: 'Month 6', value: '+KES 7.8M' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display font-bold text-brand-400 text-lg">{item.value}</div>
                <div className="text-xs text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-emerald-500 hover:opacity-90 transition-opacity"
          >
            Get Your Custom ROI Report
          </a>
        </div>
      </div>
    </section>
  )
}
