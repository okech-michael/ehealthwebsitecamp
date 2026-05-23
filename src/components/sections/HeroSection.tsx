'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, TrendingUp, Users, Shield, Activity, HeartPulse, Zap, CheckCircle2, Star } from 'lucide-react'

const floatingCards = [
  {
    id: 1,
    icon: Users,
    label: 'Active Patients',
    value: '24,891',
    change: '+12%',
    color: 'brand',
    position: 'top-[18%] right-[8%]',
    delay: '0s',
  },
  {
    id: 2,
    icon: TrendingUp,
    label: 'Revenue Collected',
    value: 'KES 2.4M',
    change: '+18%',
    color: 'emerald',
    position: 'bottom-[25%] left-[4%]',
    delay: '1.5s',
  },
  {
    id: 3,
    icon: HeartPulse,
    label: 'Avg Wait Time',
    value: '8 mins',
    change: '-64%',
    color: 'purple',
    position: 'top-[45%] right-[5%]',
    delay: '0.8s',
  },
  {
    id: 4,
    icon: Shield,
    label: 'SHA Claims',
    value: '1,240',
    change: 'Processed',
    color: 'orange',
    position: 'bottom-[15%] right-[12%]',
    delay: '2s',
  },
]

const colorMap: Record<string, string> = {
  brand: 'text-brand-400 bg-brand-500/10 border-brand-500/20',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  purple: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  orange: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
}

const changeColorMap: Record<string, string> = {
  brand: 'text-brand-400',
  emerald: 'text-emerald-400',
  purple: 'text-emerald-400',
  orange: 'text-brand-400',
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-700/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="tag-pill">
                <Zap className="w-3 h-3" />
                Now with SHA / UHC Integration
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live in Kenya
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Transforming{' '}
              <span className="relative">
                <span className="gradient-text">Healthcare</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 300 4" fill="none">
                  <path d="M0 2 Q75 0 150 2 Q225 4 300 2" stroke="url(#underlineGrad)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1cbef0" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}Operations{' '}
              <br className="hidden sm:block" />
              <span className="text-slate-400">Across Africa</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
              Ehealth is the unified digital platform built for African healthcare — connecting hospitals, clinics, labs, and pharmacies with intelligent workflows, real-time analytics, and seamless SHA/NHIF integration.
            </p>

            {/* Trust signals */}
            <div className="mt-6 flex items-center flex-wrap gap-4">
              {[
                'SHA Compliant',
                'NHIF Ready',
                'ISO 27001',
                '99.9% Uptime',
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="relative group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-emerald-500" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-brand-400 to-emerald-400" />
                <span className="relative text-sm">Request Demo</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/10 text-slate-300 hover:text-white hover:border-brand-500/50 hover:bg-brand-500/5 transition-all duration-200"
              >
                Partner With Us
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-400 hover:text-brand-400 transition-colors"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-white/5 flex items-center flex-wrap gap-6">
              <div>
                <div className="stat-number text-2xl text-white">50+</div>
                <div className="text-xs text-slate-500 mt-0.5">Facilities Onboarded</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="stat-number text-2xl text-white">200K+</div>
                <div className="text-xs text-slate-500 mt-0.5">Patient Records</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="stat-number text-2xl text-white">98.5%</div>
                <div className="text-xs text-slate-500 mt-0.5">Customer Satisfaction</div>
              </div>
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-600 to-emerald-600 border-2 border-[#0a1628] flex items-center justify-center text-[10px] font-bold text-white">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="flex items-center gap-1 pl-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Main dashboard card */}
            <div className="relative">
              {/* Floating stat cards */}
              {floatingCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.id}
                    className={`absolute z-20 ${card.position} animate-float`}
                    style={{ animationDelay: card.delay }}
                  >
                    <div className={`glass rounded-2xl px-4 py-3 border ${colorMap[card.color]} min-w-[140px] shadow-card`}>
                      <div className={`flex items-center gap-2 mb-1.5`}>
                        <Icon className={`w-4 h-4 ${colorMap[card.color].split(' ')[0]}`} />
                        <span className="text-[11px] text-slate-400 font-medium">{card.label}</span>
                      </div>
                      <div className="text-white font-display font-bold text-lg">{card.value}</div>
                      <div className={`text-xs font-medium ${changeColorMap[card.color]} mt-0.5`}>{card.change} this week</div>
                    </div>
                  </div>
                )
              })}

              {/* Central dashboard mockup */}
              <div className="glass rounded-3xl border border-brand-500/20 overflow-hidden shadow-glow-sm">
                {/* Dashboard header */}
                <div className="bg-gradient-to-r from-brand-900/50 to-navy-800/50 px-5 py-4 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">ehealth-dashboard.local</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] text-emerald-400">Live</span>
                  </div>
                </div>

                {/* Dashboard body */}
                <div className="p-5 space-y-4 bg-gradient-to-b from-navy-800/40 to-navy-900/60">
                  {/* Top stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'OPD Today', value: '142', icon: '👥', up: true },
                      { label: 'IPD Beds', value: '28/40', icon: '🛏', up: null },
                      { label: 'Lab Tests', value: '89', icon: '🔬', up: true },
                    ].map((item) => (
                      <div key={item.label} className="bg-white/4 rounded-xl p-3 border border-white/5">
                        <div className="text-lg mb-1">{item.icon}</div>
                        <div className="text-white font-display font-bold text-lg">{item.value}</div>
                        <div className="text-[11px] text-slate-500">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="bg-white/4 rounded-xl p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-300">Patient Flow — Today</span>
                      <span className="text-xs text-brand-400">View All</span>
                    </div>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 45, 80, 60, 90, 75, 55, 85, 70, 95, 65].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            background: i === 9 ? 'linear-gradient(to top, #1cbef0, #10b981)' : 'rgba(28,190,240,0.25)',
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {['8am', '10am', '12pm', '2pm', '4pm', '6pm'].map((t) => (
                        <span key={t} className="text-[10px] text-slate-600">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Patient queue */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-300 mb-2">Current Queue</div>
                    {[
                      { name: 'Mary W.', status: 'In Consultation', time: 'Dr. Kamau', color: 'brand' },
                      { name: 'James O.', status: 'Lab Results Ready', time: 'Awaiting', color: 'emerald' },
                      { name: 'Fatuma A.', status: 'Waiting Triage', time: 'Queue #3', color: 'orange' },
                    ].map((p) => (
                      <div key={p.name} className="flex items-center justify-between bg-white/3 rounded-lg px-3 py-2.5 border border-white/5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-600 to-emerald-600 flex items-center justify-center text-[11px] font-bold text-white">
                            {p.name[0]}
                          </div>
                          <div>
                            <div className="text-xs font-medium text-white">{p.name}</div>
                            <div className="text-[10px] text-slate-500">{p.time}</div>
                          </div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium
                          ${p.color === 'brand' ? 'bg-brand-500/15 text-brand-400' : ''}
                          ${p.color === 'emerald' ? 'bg-emerald-500/15 text-emerald-400' : ''}
                          ${p.color === 'orange' ? 'bg-orange-500/15 text-orange-400' : ''}
                        `}>
                          {p.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-500/50 to-transparent" />
      </div>
    </section>
  )
}
