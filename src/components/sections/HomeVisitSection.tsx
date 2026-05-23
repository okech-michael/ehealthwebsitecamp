'use client'
import { MapPin, Clock, Star, Phone, CheckCircle2, Navigation, Activity, CreditCard, Bell, User } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Phone,
    title: 'Patient Requests Visit',
    description: 'Patient opens the Ehealth app, describes symptoms, and requests a home visit. Location is auto-detected via GPS.',
    color: 'brand',
  },
  {
    step: '02',
    icon: User,
    title: 'Medic Matching',
    description: 'AI-powered algorithm matches the patient with the nearest available qualified medic based on specialty, location, and availability.',
    color: 'emerald',
  },
  {
    step: '03',
    icon: Navigation,
    title: 'Real-Time GPS Tracking',
    description: 'Patient receives live tracking of the medic\'s location. ETA updates in real time, with SMS and in-app notifications.',
    color: 'purple',
  },
  {
    step: '04',
    icon: Activity,
    title: 'Digital Clinical Assessment',
    description: 'Medic uses the mobile app to capture vitals, write clinical notes, record diagnoses, and order tests if needed.',
    color: 'orange',
  },
  {
    step: '05',
    icon: CreditCard,
    title: 'Instant Digital Billing',
    description: 'Bill is auto-generated from services rendered. Patient pays via M-Pesa, card, or insurance — all from the app.',
    color: 'brand',
  },
]

const colorConfig: Record<string, string> = {
  brand: 'text-brand-400 bg-brand-500/10 border-brand-500/30',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  purple: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
  orange: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
}

export default function HomeVisitSection() {
  return (
    <section className="section-pad relative overflow-hidden" id="home-visit">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#070e1c]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-pill mx-auto mb-4 w-fit">
            <MapPin className="w-3 h-3" />
            Medic Home Visit
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Healthcare Comes
            <br />
            <span className="gradient-text">To Your Doorstep</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto">
            Ehealth's Medic Home Visit module brings certified healthcare professionals to patients at home — with real-time tracking, digital assessments, and seamless billing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div className="space-y-5">
            {steps.map((step, i) => {
              const Icon = step.icon
              const c = colorConfig[step.color]
              return (
                <div key={step.step} className="flex gap-5 group">
                  {/* Step number & connector */}
                  <div className="flex flex-col items-center gap-0">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${c}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 mt-2 bg-gradient-to-b from-brand-500/30 to-transparent min-h-[2rem]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-600">{step.step}</span>
                      <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Mobile mockup */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute inset-0 bg-brand-500/10 rounded-full blur-3xl" />

            {/* Phone frame */}
            <div className="relative w-72">
              <div className="glass rounded-[3rem] border border-brand-500/30 overflow-hidden shadow-glow-md">
                {/* Status bar */}
                <div className="bg-[#050c18] px-6 pt-4 pb-3 flex items-center justify-between">
                  <span className="text-[11px] text-white font-medium">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-1.5 bg-white rounded-sm opacity-80" />
                    <div className="w-1 h-1.5 bg-white/40 rounded-sm" />
                  </div>
                </div>

                <div className="bg-[#070e1c] px-5 pb-6 space-y-4">
                  {/* App header */}
                  <div className="text-center mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-emerald-500 mx-auto flex items-center justify-center mb-2 shadow-glow-sm">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-[11px] text-slate-400">Ehealth Home Visit</p>
                  </div>

                  {/* Map mockup */}
                  <div className="relative rounded-2xl overflow-hidden h-36 bg-[#0a1a30]">
                    {/* Fake map grid */}
                    <div className="absolute inset-0 grid-bg opacity-50" />
                    {/* Roads */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 144" fill="none">
                      <line x1="0" y1="50" x2="280" y2="50" stroke="rgba(28,190,240,0.15)" strokeWidth="8" />
                      <line x1="0" y1="100" x2="280" y2="100" stroke="rgba(28,190,240,0.1)" strokeWidth="5" />
                      <line x1="80" y1="0" x2="80" y2="144" stroke="rgba(28,190,240,0.12)" strokeWidth="6" />
                      <line x1="180" y1="0" x2="180" y2="144" stroke="rgba(28,190,240,0.1)" strokeWidth="4" />
                      {/* Route */}
                      <path d="M40 120 Q80 100 100 80 Q140 50 160 50 Q200 50 220 40" stroke="#1cbef0" strokeWidth="2.5" strokeDasharray="6,4" fill="none" opacity="0.8" />
                    </svg>
                    {/* Medic marker */}
                    <div className="absolute top-[52%] left-[55%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 rounded-full bg-brand-500 border-2 border-white flex items-center justify-center shadow-glow-sm animate-pulse-slow">
                        <Activity className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                    {/* Patient marker */}
                    <div className="absolute top-[72%] left-[15%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                        <User className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    {/* ETA badge */}
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
                      <div className="text-[10px] text-slate-400">ETA</div>
                      <div className="text-sm font-bold text-brand-400 font-display">8 min</div>
                    </div>
                  </div>

                  {/* Medic info */}
                  <div className="glass rounded-xl p-3 border border-brand-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-emerald-600 flex items-center justify-center text-sm font-bold text-white">
                        DK
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">Dr. Kamau</div>
                        <div className="text-[11px] text-slate-400">General Practitioner · 4.9 ★</div>
                      </div>
                      <button className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                        <Phone className="w-3.5 h-3.5 text-brand-400" />
                      </button>
                    </div>
                  </div>

                  {/* Notification */}
                  <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                    <Bell className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-[11px] text-emerald-400 font-medium">Medic is on the way!</p>
                      <p className="text-[10px] text-slate-500">Arriving in approximately 8 minutes</p>
                    </div>
                  </div>

                  {/* Steps progress */}
                  <div className="space-y-2">
                    {[
                      { label: 'Request confirmed', done: true },
                      { label: 'Medic assigned', done: true },
                      { label: 'En route to you', done: true },
                      { label: 'Clinical visit', done: false },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center gap-2.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${s.done ? 'text-emerald-400' : 'text-slate-600'}`} />
                        <span className={`text-[11px] ${s.done ? 'text-slate-300' : 'text-slate-600'}`}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards around phone */}
            <div className="absolute top-8 -left-8 glass rounded-xl px-3 py-2.5 border border-brand-500/20 shadow-card animate-float">
              <div className="text-[10px] text-slate-400 mb-0.5">Daily Visits</div>
              <div className="font-display font-bold text-white text-lg">342</div>
              <div className="text-[10px] text-emerald-400">+28% this week</div>
            </div>

            <div className="absolute bottom-16 -right-8 glass rounded-xl px-3 py-2.5 border border-emerald-500/20 shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-1.5 mb-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] text-slate-400">Avg Rating</span>
              </div>
              <div className="font-display font-bold text-white text-lg">4.91</div>
              <div className="text-[10px] text-slate-500">from 12K+ visits</div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Home Visits Completed', value: '18,000+', icon: '🏠' },
            { label: 'Active Medics', value: '480+', icon: '👩‍⚕️' },
            { label: 'Average Response Time', value: '< 15 min', icon: '⚡' },
            { label: 'Patient Satisfaction', value: '96.4%', icon: '⭐' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 border border-white/5 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-display font-bold text-white text-xl mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
