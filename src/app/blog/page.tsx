import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CTASection } from '@/components/sections/TestimonialsAndCTA'
import { ArrowRight, Clock, Tag, TrendingUp, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Insights — Ehealth Africa',
  description: 'Healthcare technology insights, industry news, and updates from the Ehealth team.',
}

const featured = {
  title: 'How SHA Integration is Transforming Hospital Revenue Cycles in Kenya',
  excerpt: 'The Social Health Authority\'s digital mandate is reshaping how Kenyan hospitals manage claims, reimbursements, and patient verification. Here\'s what facility managers need to know now.',
  category: 'Industry Insights',
  readTime: '8 min read',
  date: 'May 12, 2025',
  author: { name: 'Dr. Amina Hassan', role: 'CEO, Ehealth Africa', initials: 'AH' },
  tag: 'SHA / UHC',
  color: 'brand',
}

const posts = [
  {
    title: '5 Ways Digital Triage is Cutting Patient Wait Times by 70% in Kenyan Hospitals',
    excerpt: 'Facilities using Ehealth\'s digital triage module have seen dramatic reductions in queue times. We break down the data and the workflow changes driving results.',
    category: 'Product',
    readTime: '5 min read',
    date: 'Apr 28, 2025',
    tag: 'Triage',
    color: 'emerald',
  },
  {
    title: 'The Hidden Cost of Paper Records: KES 4M+ Lost per Hospital Annually',
    excerpt: 'A deep dive into revenue leakage caused by paper-based clinical documentation — and how digitisation closes the gap immediately.',
    category: 'Research',
    readTime: '6 min read',
    date: 'Apr 15, 2025',
    tag: 'Revenue',
    color: 'orange',
  },
  {
    title: 'Medic Home Visit: Building Healthcare Infrastructure for the Last Mile',
    excerpt: 'How Ehealth\'s home visit dispatch system is bringing certified healthcare to peri-urban and rural communities across Kenya.',
    category: 'Community Health',
    readTime: '7 min read',
    date: 'Mar 30, 2025',
    tag: 'Home Visit',
    color: 'purple',
  },
  {
    title: 'NHIF to SHA: Everything Healthcare Facilities Need to Know About the Transition',
    excerpt: 'A complete guide to Kenya\'s health insurance transition — deadlines, compliance requirements, and how Ehealth keeps your facility ahead.',
    category: 'Compliance',
    readTime: '10 min read',
    date: 'Mar 10, 2025',
    tag: 'SHA/NHIF',
    color: 'brand',
  },
  {
    title: 'Building a Data-Driven Culture in Your Healthcare Facility',
    excerpt: 'Most healthcare managers have access to data. Very few use it effectively. Here\'s a practical playbook for using analytics to improve operations.',
    category: 'Management',
    readTime: '6 min read',
    date: 'Feb 22, 2025',
    tag: 'Analytics',
    color: 'emerald',
  },
  {
    title: 'Why African Healthcare Needs Mobile-First, Not Mobile-Friendly Technology',
    excerpt: 'There\'s a critical difference between apps that work on mobile and platforms built mobile-first. In African healthcare, that difference saves lives.',
    category: 'Technology',
    readTime: '5 min read',
    date: 'Feb 5, 2025',
    tag: 'Mobile Health',
    color: 'purple',
  },
]

const colorConfig: Record<string, { tag: string, dot: string }> = {
  brand: { tag: 'bg-brand-500/10 text-brand-400 border-brand-500/20', dot: 'bg-brand-400' },
  emerald: { tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', dot: 'bg-emerald-400' },
  orange: { tag: 'bg-orange-500/10 text-orange-400 border-orange-500/20', dot: 'bg-orange-400' },
  purple: { tag: 'bg-violet-500/10 text-violet-400 border-violet-500/20', dot: 'bg-violet-400' },
}

const categories = ['All', 'Industry Insights', 'Product', 'Research', 'Community Health', 'Compliance', 'Technology', 'Management']

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="tag-pill mx-auto mb-6 w-fit">
            <BookOpen className="w-3 h-3" />
            Blog & Insights
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Healthcare Intelligence
            <br />
            <span className="gradient-text">From the Frontlines</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Research, case studies, product updates, and industry perspectives from Ehealth's team and Kenya's healthcare community.
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category filter */}
          <div className="flex overflow-x-auto gap-2 pb-6 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  i === 0
                    ? 'bg-brand-500/10 text-brand-400 border-brand-500/30'
                    : 'text-slate-500 border-white/8 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="gradient-border rounded-3xl p-8 mb-12 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colorConfig[featured.color].tag}`}>
                    Featured
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${colorConfig[featured.color].tag}`}>
                    {featured.tag}
                  </span>
                </div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight mb-4 group-hover:text-brand-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-600 to-emerald-600 flex items-center justify-center text-xs font-bold text-white">
                      {featured.author.initials}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{featured.author.name}</div>
                      <div className="text-[10px] text-slate-500">{featured.author.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="glass rounded-2xl p-6 border border-brand-500/20 space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-brand-400" />
                    <span className="text-xs font-semibold text-slate-300">Key Takeaways</span>
                  </div>
                  {[
                    'SHA integration reduces claim rejection by 78%',
                    'Real-time eligibility cuts billing disputes by 60%',
                    'Digital audit trails accelerate reimbursements to 7 days',
                    'Facilities gain full SHA compliance in under 2 weeks',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-2 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                  <button className="w-full mt-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-brand-500 to-emerald-500 hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.map((post) => {
              const c = colorConfig[post.color]
              return (
                <article
                  key={post.title}
                  className="glass rounded-2xl p-6 border border-white/8 hover:border-brand-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border ${c.tag}`}>
                      {post.tag}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-600">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white text-sm leading-snug mb-3 group-hover:text-brand-300 transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-[11px] text-slate-600">{post.date}</span>
                    <span className={`text-[11px] font-semibold flex items-center gap-1 ${c.tag.split(' ')[1]}`}>
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Load more */}
          <div className="text-center">
            <button className="px-8 py-3 rounded-xl border border-white/10 text-sm font-semibold text-slate-400 hover:border-brand-500/40 hover:text-white transition-all">
              Load More Articles
            </button>
          </div>

          {/* Newsletter */}
          <div className="mt-20 glass rounded-3xl border border-brand-500/20 p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-2">Stay Ahead in Digital Health</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
              Join 2,000+ healthcare professionals receiving weekly insights on digital health, SHA compliance, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@hospital.co.ke"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-brand-500/50 transition-all"
              />
              <button className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-emerald-500 hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe Free
              </button>
            </div>
            <p className="text-[11px] text-slate-600 mt-3">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
