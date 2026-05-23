import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CTASection } from '@/components/sections/TestimonialsAndCTA'
import { Activity, Heart, Globe, Target, Users, Lightbulb, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Ehealth — Our Mission to Transform African Healthcare',
  description: 'Learn about Ehealth\'s mission, team, and vision to digitise healthcare operations across Africa.',
}

const values = [
  { icon: Heart, title: 'Patient-Centred', desc: 'Every feature we build starts with one question: how does this improve patient outcomes?' },
  { icon: Globe, title: 'Africa-First', desc: 'Designed for African realities — low bandwidth, local languages, local insurance systems.' },
  { icon: Target, title: 'Impact-Driven', desc: 'We measure success in lives improved, not just lines of code or contracts signed.' },
  { icon: Lightbulb, title: 'Continuously Innovating', desc: 'Healthcare challenges evolve. Our platform evolves faster, driven by real clinician feedback.' },
]

const team = [
  { name: 'Dr. Amina Hassan', role: 'CEO & Co-Founder', bg: 'AH', desc: 'Former MOH digital health advisor. 15+ years in healthcare systems.' },
  { name: 'Brian Otieno', role: 'CTO & Co-Founder', bg: 'BO', desc: 'Ex-Andela engineer. Built health-tech platforms serving 2M+ users.' },
  { name: 'Grace Wambui', role: 'Chief Product Officer', bg: 'GW', desc: 'Product lead at 2 successful health startups. Certified nurse informaticist.' },
  { name: 'James Kariuki', role: 'Chief Revenue Officer', bg: 'JK', desc: 'Previously scaled SaaS to KES 200M ARR across East Africa.' },
]

const milestones = [
  { year: '2021', event: 'Founded in Nairobi with a mission to digitise African healthcare', icon: '🌱' },
  { year: '2022', event: 'First 5 pilot facilities go live. Patient flow improvements of 60%+ recorded', icon: '🚀' },
  { year: '2023', event: 'SHA integration completed. KES 50M+ in claims processed', icon: '🏆' },
  { year: '2024', event: '50 facilities across Kenya. Medic Home Visit module launched', icon: '📍' },
  { year: '2025', event: 'East Africa expansion. Uganda and Tanzania pilots begin', icon: '🌍' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag-pill mx-auto mb-6 w-fit">About Ehealth</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            We Believe Every African
            <br />
            <span className="gradient-text">Deserves World-Class Healthcare</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Ehealth was born out of a simple observation: Africa's healthcare facilities are filled with dedicated, skilled professionals — being held back by outdated, paper-based systems. We built the platform to set them free.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag-pill mb-4 w-fit">Our Mission</div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Digitising Healthcare,
                <br />
                <span className="gradient-text">One Facility at a Time</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our mission is to build Africa's most trusted and impactful healthcare technology platform — one that works for the nurse in a rural clinic, the doctor in a city hospital, and the patient who just needs to feel better faster.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                We combine deep healthcare domain expertise with world-class engineering to deliver solutions that are not only technically excellent, but operationally transformative for African healthcare providers.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Founded', value: '2021' },
                  { label: 'Team Size', value: '60+' },
                  { label: 'Based in', value: 'Nairobi, KE' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="font-display font-bold text-white text-xl">{item.value}</div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl border border-brand-500/20 p-8 space-y-5">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1">{v.title}</h3>
                      <p className="text-sm text-slate-400">{v.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-[#080f1d]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag-pill mx-auto mb-4 w-fit">Our Journey</div>
            <h2 className="font-display text-3xl font-bold text-white">From Vision to Impact</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-8 items-start pl-4">
                  <div className="relative z-10 w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center flex-shrink-0 text-sm">
                    {m.icon}
                  </div>
                  <div className="glass rounded-xl p-4 border border-white/5 flex-1 -mt-1">
                    <span className="text-xs font-mono text-brand-400 font-bold">{m.year}</span>
                    <p className="text-sm text-slate-300 mt-1">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad relative">
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="tag-pill mx-auto mb-4 w-fit">Leadership Team</div>
            <h2 className="font-display text-3xl font-bold text-white">
              Built by Healthcare & Tech
              <br />
              <span className="gradient-text">Veterans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member) => (
              <div key={member.name} className="glass rounded-2xl p-6 border border-white/8 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-600 flex items-center justify-center text-xl font-bold text-white mx-auto mb-4">
                  {member.bg}
                </div>
                <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-xs text-brand-400 mb-3 font-medium">{member.role}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
