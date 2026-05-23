'use client'
import Link from 'next/link'
import { Star, Quote, ArrowRight, Calendar, Users, Headphones } from 'lucide-react'

const testimonials = [
  {
    quote: "Ehealth transformed our billing process entirely. We recovered over KES 1.8M in missed charges in the first month alone. The SHA integration is seamless and our reimbursements now arrive in days, not months.",
    name: "Dr. Wanjiku Muthoni",
    role: "Medical Director",
    facility: "Nairobi East Medical Centre",
    rating: 5,
    initials: "WM",
  },
  {
    quote: "Our nurses used to spend 3 hours per shift on paperwork. With Ehealth, they're spending that time on patients. The triage and nursing modules are intuitive enough that training took less than a day.",
    name: "Susan Achieng",
    role: "Head of Nursing",
    facility: "Kisumu County Referral Hospital",
    rating: 5,
    initials: "SA",
  },
  {
    quote: "The analytics dashboard is a game-changer. I can see our bed occupancy, revenue, and patient flow from my phone. We identified operational bottlenecks we never knew existed and fixed them within a week.",
    name: "James Kipkoech",
    role: "Hospital Administrator",
    facility: "Eldoret Faith Mission Hospital",
    rating: 5,
    initials: "JK",
  },
]

const partners = [
  { name: 'Ministry of Health Kenya', abbr: 'MOH', color: 'brand' },
  { name: 'Social Health Authority', abbr: 'SHA', color: 'emerald' },
  { name: 'NHIF Kenya', abbr: 'NHIF', color: 'purple' },
  { name: 'Kenya Medical Research', abbr: 'KEMRI', color: 'orange' },
  { name: 'AMREF Health Africa', abbr: 'AMREF', color: 'brand' },
  { name: 'Safaricom M-Pesa', abbr: 'MPESA', color: 'emerald' },
]

export function TestimonialsSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#070e1c]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <div className="tag-pill mx-auto mb-4 w-fit">From Our Clients</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            Trusted by Healthcare Leaders
            <br />
            <span className="gradient-text">Across Kenya</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 group">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-6 h-6 text-brand-500/30 mb-3" />
              <p className="text-sm text-slate-400 leading-relaxed mb-6">"{t.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-emerald-600 flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.role} · {t.facility}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div>
          <p className="text-xs text-slate-600 text-center mb-6 uppercase tracking-widest">Partners & Integrations</p>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <div
                key={p.name}
                className="glass rounded-xl px-5 py-3 border border-white/5 hover:border-brand-500/20 transition-colors cursor-default"
              >
                <div className="text-xs font-bold text-slate-300">{p.abbr}</div>
                <div className="text-[10px] text-slate-600 mt-0.5">{p.name}</div>
              </div>
            ))}
            <div className="glass rounded-xl px-5 py-3 border border-dashed border-white/10 flex items-center justify-center">
              <span className="text-xs text-slate-600">+ More coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e1c] to-[#0a1628]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl border border-brand-500/20 p-10 lg:p-16 shadow-glow-sm">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Currently onboarding new facilities in Kenya
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Digitise Your
            <br />
            <span className="gradient-text">Healthcare Facility?</span>
          </h2>

          <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Join 50+ facilities already transforming their operations with Ehealth. Our team will guide you from onboarding to full deployment — typically in under 2 weeks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link
              href="/contact"
              className="relative group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-emerald-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-brand-400 to-emerald-400" />
              <Calendar className="relative w-4 h-4" />
              <span className="relative">Book a Demo</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-white/15 text-slate-300 hover:border-brand-500/50 hover:text-white hover:bg-brand-500/5 transition-all"
            >
              <Headphones className="w-4 h-4" />
              Contact Sales Team
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/5 transition-all"
            >
              <Users className="w-4 h-4" />
              Become a Partner
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
            {[
              '✓ No credit card required',
              '✓ Free pilot deployment',
              '✓ 2-week onboarding',
              '✓ 24/7 local support',
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
