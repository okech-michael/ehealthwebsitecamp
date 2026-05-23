'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Activity, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a1628]/95 backdrop-blur-xl border-b border-brand-500/10 shadow-xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center shadow-glow-sm">
              <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              E<span className="gradient-text">health</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-brand-400 bg-brand-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="relative px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-emerald-500 transition-all duration-300 group-hover:opacity-90" />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-brand-500 to-emerald-500" />
              <span className="relative">Request Demo</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a1628]/98 backdrop-blur-xl border-t border-brand-500/10 px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                pathname === link.href
                  ? 'text-brand-400 bg-brand-500/10 border border-brand-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-700 text-slate-300 hover:border-brand-500/50 transition-all"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-emerald-500"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
