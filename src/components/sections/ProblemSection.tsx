'use client'
import { useState, useRef, useEffect } from 'react'
import { FileX, Clock, TrendingDown, AlertCircle, Users2, BarChart3, ArrowRight } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Endless Patient Queues',
    stat: '3–5 hrs',
    statLabel: 'average wait time',
    description: 'Patients spend hours waiting due to manual registration, paper-based workflows, and poor queue management systems.',
    color: 'red',
  },
  {
    icon: FileX,
    title: 'Paper-Based Records',
    stat: '73%',
    statLabel: 'of facilities still use paper',
    description: 'Critical patient data is lost, misplaced, or inaccessible at the point of care, leading to repeated tests and poor treatment decisions.',
    color: 'orange',
  },
  {
    icon: TrendingDown,
    title: 'Revenue Leakage',
    stat: '40%',
    statLabel: 'of billings go untracked',
    description: 'Facilities lose substantial revenue through billing gaps, unrecorded services, and poor reconciliation of pharmacy and lab charges.',
    color: 'yellow',
  },
  {
    icon: AlertCircle,
    title: 'Slow Insurance Claims',
    stat: '60+ days',
    statLabel: 'for SHA/NHIF reimbursements',
    description: 'Manual claim submissions, missing documentation, and no digital audit trail leads to rejected or delayed insurance reimbursements.',
    color: 'purple',
  },
  {
    icon: Users2,
    title: 'Poor Coordination',
    stat: '5+ steps',
    statLabel: 'to locate patient info',
    description: 'Information silos between reception, nurses, doctors, labs, and pharmacies create dangerous delays and communication breakdowns.',
    color: 'brand',
  },
  {
    icon: BarChart3,
    title: 'Zero Analytics',
    stat: '0%',
    statLabel: 'data-driven decisions',
    description: 'Without real-time dashboards, administrators manage blind — unable to track performance, forecast capacity, or prevent waste.',
    color: 'emerald',
  },
]

const colorConfig: Record<string, { icon: string, stat: string, border: string, glow: string, badge: string }> = {
  red: {
    icon: 'text-red-400 bg-red-500/10',
    stat: 'text-red-300',
    border: 'border-red-500/20',
    glow: 'group-hover:shadow-red-500/10',
    badge: 'bg-red-500/10 text-red-400 border-red-500/20',
  },
  orange: {
    icon: 'text-orange-400 bg-orange-500/10',
    stat: 'text-orange-300',
    border: 'border-orange-500/20',
    glow: 'group-hover:shadow-orange-500/10',
    badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  },
  yellow: {
    icon: 'text-yellow-400 bg-yellow-500/10',
    stat: 'text-yellow-300',
    border: 'border-yellow-500/20',
    glow: 'group-hover:shadow-yellow-500/10',
    badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  },
  purple: {
    icon: 'text-violet-400 bg-violet-500/10',
    stat: 'text-violet-300',
    border: 'border-violet-500/20',
    glow: 'group-hover:shadow-violet-500/10',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  },
  brand: {
    icon: 'text-brand-400 bg-brand-500/10',
    stat: 'text-brand-300',
    border: 'border-brand-500/20',
    glow: 'group-hover:shadow-brand-500/10',
    badge: 'bg-brand-500/10 text-brand-400 border-brand-500/20',
  },
  emerald: {
    icon: 'text-emerald-400 bg-emerald-500/10',
    stat: 'text-emerald-300',
    border: 'border-emerald-500/20',
    glow: 'group-hover:shadow-emerald-500/10',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
}

export default function ProblemSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#080f1d] to-[#0a1628]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-pill mx-auto mb-4 w-fit">
            The Challenge
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            African Healthcare is Broken.
            <br />
            <span className="gradient-text">We're Fixing It.</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Over 12,000 health facilities in Kenya alone struggle with fragmented, manual, and inefficient systems that compromise patient care and facility revenue.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, i) => {
            const Icon = problem.icon
            const c = colorConfig[problem.color]
            return (
              <div
                key={problem.title}
                className={`group relative glass-light rounded-2xl p-6 border ${c.border} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.glow} cursor-default`}
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 text-[11px] font-mono text-slate-600 font-medium">
                  0{i + 1}
                </div>

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center mb-5`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Stat */}
                <div className={`font-display text-3xl font-bold ${c.stat} leading-none mb-1`}>
                  {problem.stat}
                </div>
                <div className="text-xs text-slate-500 mb-4">{problem.statLabel}</div>

                {/* Title */}
                <h3 className="font-semibold text-white mb-2 text-sm">{problem.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed">{problem.description}</p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-slate-400">
            <span>These challenges cost African healthcare systems</span>
            <span className="font-display font-bold text-white text-lg">$4.7B+</span>
            <span>annually in lost revenue and preventable errors</span>
          </div>
          <div className="mt-4">
            <button className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-medium transition-colors">
              See how Ehealth solves this
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
