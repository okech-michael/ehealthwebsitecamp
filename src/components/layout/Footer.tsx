import Link from 'next/link'
import { Activity, Twitter, Linkedin, Facebook, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const footerLinks = {
  platform: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Security', href: '/features#security' },
    { label: 'Integrations', href: '/features#integrations' },
    { label: 'API Access', href: '/features#api' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog & Insights', href: '/blog' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Partners', href: '/about#partners' },
    { label: 'Press Kit', href: '/about#press' },
  ],
  support: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Training', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Contact Support', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Data Processing', href: '#' },
    { label: 'Compliance', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#060f1e] border-t border-brand-500/10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="pt-16 pb-12 grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-white">
                E<span className="gradient-text">health</span>
              </span>
            </Link>

            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-xs">
              Transforming healthcare operations across Africa through intelligent, integrated digital solutions designed for the African healthcare ecosystem.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="mailto:hello@ehealth.africa" className="hover:text-white transition-colors">hello@ehealth.africa</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="tel:+254700000000" className="hover:text-white transition-colors">+254 700 000 000</a>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <span>Westlands, Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2.5">
                {footerLinks.platform.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">System Operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Ehealth Africa Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <span>🇰🇪</span>
              Made for Africa
            </span>
            <span className="text-slate-700">·</span>
            <span className="text-xs text-slate-500">SHA/NHIF Compliant</span>
            <span className="text-slate-700">·</span>
            <span className="text-xs text-slate-500">ISO 27001 Ready</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
