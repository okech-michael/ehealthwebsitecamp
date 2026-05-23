import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Mail, Phone, MapPin, Clock, Calendar, Headphones, Users, ArrowRight, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Ehealth — Get in Touch',
  description: 'Book a demo, contact our sales team, or reach our support team. We\'re here to help you digitise your healthcare facility.',
}

const contactOptions = [
  {
    icon: Calendar,
    title: 'Book a Demo',
    desc: 'See Ehealth live with a guided walkthrough tailored to your facility type.',
    action: 'Schedule Now',
    color: 'brand',
  },
  {
    icon: Headphones,
    title: 'Talk to Sales',
    desc: 'Speak with our team about pricing, deployment timelines, and custom requirements.',
    action: 'Call Sales',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Partner With Us',
    desc: 'Become a distribution partner, system integrator, or implementation partner.',
    action: 'Partner Enquiry',
    color: 'purple',
  },
]

const offices = [
  {
    city: 'Kisii (HQ)',
    address: 'Kisii, Kenya',
    phone: '0741145911',
    email: 'infor@terraseptsolutions.com',
    flag: '🇰🇪',
  },
]

const colorConfig: Record<string, string> = {
  brand: 'text-brand-400 bg-brand-500/10 border-brand-500/30',
  emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  purple: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="tag-pill mx-auto mb-6 w-fit">
            <MessageSquare className="w-3 h-3" />
            Get in Touch
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Let's Transform Your
            <br />
            <span className="gradient-text">Facility Together</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Whether you're a clinic in Kisumu or a hospital group in Nairobi, our team is ready to help you get started.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="relative pb-16">
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
            {contactOptions.map((opt) => {
              const Icon = opt.icon
              const c = colorConfig[opt.color]
              return (
                <div key={opt.title} className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 group text-center">
                  <div className={`w-14 h-14 rounded-2xl ${c} border flex items-center justify-center mx-auto mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-white mb-2">{opt.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{opt.desc}</p>
                  <a
                    href="mailto:infor@terraseptsolutions.com"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${c.split(' ')[0]} hover:opacity-80`}
                  >
                    {opt.action} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )
            })}
          </div>

          {/* Main contact grid */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="glass rounded-3xl border border-brand-500/20 p-8">
              <h2 className="font-display text-xl font-bold text-white mb-2">Send us a Message</h2>
              <p className="text-sm text-slate-400 mb-6">We'll respond within 1 business day.</p>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="Jane"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 focus:bg-brand-500/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Mwangi"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="jane@hospitalname.co.ke"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Facility Name</label>
                  <input
                    type="text"
                    placeholder="Nairobi General Hospital"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Facility Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-brand-500/50 transition-all appearance-none">
                    <option value="" className="bg-[#0d1f3c]">Select type...</option>
                    <option value="hospital" className="bg-[#0d1f3c]">Hospital</option>
                    <option value="clinic" className="bg-[#0d1f3c]">Clinic / Health Centre</option>
                    <option value="lab" className="bg-[#0d1f3c]">Laboratory</option>
                    <option value="pharmacy" className="bg-[#0d1f3c]">Pharmacy</option>
                    <option value="government" className="bg-[#0d1f3c]">Government / County</option>
                    <option value="ngo" className="bg-[#0d1f3c]">NGO / Development Partner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your facility and what you're looking to achieve with Ehealth..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-500 to-emerald-500 hover:opacity-90 transition-opacity text-sm"
                >
                  Send Message
                </button>

                <p className="text-[11px] text-slate-600 text-center">
                  By submitting, you agree to our Privacy Policy and Terms of Service.
                </p>
              </div>
            </div>

            {/* Right: Offices + contact info */}
            <div className="space-y-5">
              {/* Direct contact */}
              <div className="glass rounded-2xl p-6 border border-white/8">
                <h3 className="font-semibold text-white mb-4">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-brand-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">General enquiries</div>
                      <a href="mailto:infor@terraseptsolutions.com" className="text-sm text-white hover:text-brand-400 transition-colors">infor@terraseptsolutions.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Sales hotline</div>
                      <a href="tel:0741145911" className="text-sm text-white hover:text-brand-400 transition-colors">0741145911</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-brand-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Business hours</div>
                      <div className="text-sm text-white">Mon–Fri, 8:00am – 6:00pm EAT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              {offices.map((office) => (
                <div key={office.city} className="glass rounded-2xl p-5 border border-white/8 hover:border-brand-500/20 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{office.flag}</span>
                    <h4 className="font-semibold text-white text-sm">{office.city}</h4>
                  </div>
                  <div className="space-y-2 text-xs text-slate-400">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-600 mt-0.5 flex-shrink-0" />
                      <span className="whitespace-pre-line">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                      <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">{office.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
