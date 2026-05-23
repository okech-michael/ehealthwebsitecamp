'use client'
import { useEffect, useRef, useState } from 'react'
import { Shield, Lock, Eye, Server, UserCheck, FileCheck, Globe, TrendingUp, Building2, Users, DollarSign, Target } from 'lucide-react'

function useCountUp(target: number, duration: number = 2000, start: boolean = true) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

const marketStats = [
  { value: 12000, suffix: '+', label: 'Health Facilities in Kenya', icon: Building2, color: 'brand' },
  { value: 54, suffix: 'M+', label: 'Kenyan Population to Serve', icon: Users, color: 'emerald' },
  { value: 1400, suffix: 'M', label: 'East African Digital Health Market (USD)', icon: DollarSign, color: 'purple' },
  { value: 97, suffix: '%', label: 'SHA/UHC Digital Transformation Target', icon: Target, color: 'orange' },
]

const securityFeatures = [
  { icon: Lock, title: 'End-to-End Encryption', desc: 'All patient data encrypted at rest and in transit using AES-256 and TLS 1.3.' },
  { icon: Eye, title: 'Complete Audit Trails', desc: 'Every action logged with user ID, timestamp, and IP — full accountability at all times.' },
  { icon: Server, title: 'Secure Cloud Hosting', desc: 'Hosted on ISO 27001-certified infrastructure with 99.9% SLA and automated backups.' },
  { icon: UserCheck, title: 'Role-Based Access Control', desc: 'Granular permissions ensure staff only access data relevant to their role.' },
  { icon: Globe, title: 'Low-Bandwidth Optimised', desc: 'Designed to perform on 2G/3G networks — practical for underserved areas.' },
  { icon: FileCheck, title: 'Regulatory Compliance', desc: 'Aligned with Kenya Data Protection Act, SHA/NHIF requirements, and GDPR principles.' },
]

function CounterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const c1 = useCountUp(12000, 2000, visible)
  const c2 = useCountUp(54, 1500, visible)
  const c3 = useCountUp(1400, 2200, visible)
  const c4 = useCountUp(97, 1800, visible)

  const values = [c1, c2, c3, c4]

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {marketStats.map((stat, i) => {
        const IconComp = stat.icon
        return (
          <div key={stat.label} className="glass rounded-2xl p-6 border border-white/5 text-center hover:-translate-y-1 transition-transform duration-300">
            <div className="mb-3 flex justify-center">
              <IconComp className="w-8 h-8 text-slate-400" />
            </div>
            <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">
              {values[i].toLocaleString()}{stat.suffix}
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">{stat.label}</div>
          </div>
        )
      })}
    </div>
  )
}

export function MarketSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#070e1c]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="tag-pill mx-auto mb-4 w-fit">
            <Globe className="w-3 h-3" />
            Market Opportunity
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The African Digital Health
            <br />
            <span className="gradient-text">Revolution is Now</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto">
            Kenya and East Africa represent one of the world's fastest-growing digital health markets. Ehealth is positioned at the epicentre of this transformation.
          </p>
        </div>

        <CounterSection />

        <div className="mt-12 glass rounded-3xl border border-brand-500/20 p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                SHA Universal Health Coverage
                <br />
                <span className="gradient-text">Digital Mandate</span>
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Kenya's Social Health Authority (SHA) is mandating digital integration across all registered health facilities. Ehealth is already SHA-certified and ready to help your facility comply — and thrive.
              </p>
              <div className="space-y-3">
                {[
                  'Official SHA system integration',
                  'Automated claims submission',
                  'Real-time eligibility verification',
                  'Digital reconciliation reports',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-5 border border-emerald-500/20 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">SHA Integration Status</span>
                <span className="text-xs text-emerald-400 font-medium">Certified ✓</span>
              </div>
              {[
                { label: 'Member Verification', status: 'Live', pct: 100 },
                { label: 'Claims Submission', status: 'Live', pct: 100 },
                { label: 'Preauthorisation', status: 'Live', pct: 100 },
                { label: 'Reconciliation API', status: 'Beta', pct: 85 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{item.label}</span>
                    <span className={`font-medium ${item.status === 'Live' ? 'text-emerald-400' : 'text-brand-400'}`}>{item.status}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-brand-500 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SecuritySection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e1c] to-[#0a1628]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="tag-pill mx-auto mb-4 w-fit">
            <Shield className="w-3 h-3" />
            Security & Trust
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Enterprise-Grade Security.
            <br />
            <span className="gradient-text">Healthcare-Level Trust.</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto">
            Patient data is sacred. Ehealth is built with security-first architecture, ensuring your facility meets the highest data protection standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {securityFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="glass rounded-2xl p-6 border border-brand-500/10 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-11 h-11 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-brand-400" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Trust badges */}
        <div className="glass rounded-2xl border border-white/5 p-6">
          <p className="text-xs text-slate-500 text-center mb-5 uppercase tracking-widest">Compliance & Standards</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'ISO 27001 Ready',
              'Kenya Data Protection Act',
              'SHA Certified',
              'NHIF Integrated',
              'GDPR Aligned',
              'SSL/TLS Encrypted',
              'SOC 2 Roadmap',
              'HL7 FHIR Compatible',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/3 border border-white/8 text-xs text-slate-400">
                <Shield className="w-3 h-3 text-brand-400" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
