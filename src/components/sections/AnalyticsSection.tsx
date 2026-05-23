'use client'
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts'

const patientFlowData = [
  { time: 'Mon', patients: 142, target: 120 },
  { time: 'Tue', patients: 158, target: 130 },
  { time: 'Wed', patients: 135, target: 125 },
  { time: 'Thu', patients: 187, target: 140 },
  { time: 'Fri', patients: 203, target: 150 },
  { time: 'Sat', patients: 168, target: 130 },
  { time: 'Sun', patients: 92, target: 90 },
]

const revenueData = [
  { month: 'Jan', revenue: 1.8, claims: 1.2 },
  { month: 'Feb', revenue: 2.1, claims: 1.5 },
  { month: 'Mar', revenue: 1.9, claims: 1.3 },
  { month: 'Apr', revenue: 2.4, claims: 1.8 },
  { month: 'May', revenue: 2.8, claims: 2.1 },
  { month: 'Jun', revenue: 3.2, claims: 2.4 },
]

const departmentData = [
  { name: 'OPD', value: 38, color: '#1cbef0' },
  { name: 'Lab', value: 24, color: '#10b981' },
  { name: 'Pharmacy', value: 20, color: '#8b5cf6' },
  { name: 'IPD', value: 12, color: '#f59e0b' },
  { name: 'Other', value: 6, color: '#64748b' },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0d1f3c]/95 border border-brand-500/20 rounded-xl p-3 shadow-lg backdrop-blur-sm">
        <p className="text-xs text-slate-400 mb-1">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} className="text-xs font-semibold" style={{ color: entry.color }}>
            {entry.name}: {entry.value}{entry.name === 'revenue' || entry.name === 'claims' ? 'M KES' : ''}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function AnalyticsSection() {
  return (
    <section className="section-pad relative overflow-hidden" id="analytics">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070e1c] to-[#0a1628]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-500/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-pill mx-auto mb-4 w-fit">Analytics & Intelligence</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Data-Driven Healthcare
            <br />
            <span className="gradient-text">Management at a Glance</span>
          </h2>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto">
            Premium dashboards give you real-time visibility into every aspect of your facility's performance — from patient flow to revenue intelligence.
          </p>
        </div>

        {/* Dashboard wrapper */}
        <div className="glass rounded-3xl border border-brand-500/20 overflow-hidden shadow-glow-sm">
          {/* Dashboard header */}
          <div className="bg-[#060e1b] px-6 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
              </div>
              <span className="text-xs text-slate-500 font-mono">Ehealth Analytics Dashboard — Nairobi General Hospital</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-600">Last 7 days</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400">Live</span>
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="p-6 space-y-6 bg-gradient-to-b from-[#0a1628]/80 to-[#060e1b]/80">
            {/* KPI row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Patients Today', value: '642', change: '+12%', icon: '👥', color: 'brand' },
                { label: 'Revenue (Today)', value: 'KES 384K', change: '+8%', icon: '💰', color: 'emerald' },
                { label: 'Avg Wait Time', value: '8.4 min', change: '-34%', icon: '⏱', color: 'purple' },
                { label: 'Bed Occupancy', value: '78%', change: '+5%', icon: '🛏', color: 'orange' },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-white/3 rounded-2xl p-4 border border-white/5">
                  <div className="text-xl mb-2">{kpi.icon}</div>
                  <div className="font-display font-bold text-white text-xl">{kpi.value}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 mb-2">{kpi.label}</div>
                  <span className={`text-[11px] font-medium ${kpi.change.startsWith('+') ? 'text-emerald-400' : 'text-brand-400'}`}>
                    {kpi.change} vs last week
                  </span>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Patient flow */}
              <div className="lg:col-span-2 bg-white/3 rounded-2xl p-4 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Patient Flow</h4>
                    <p className="text-[11px] text-slate-500">vs. daily targets</p>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-brand-400" /><span className="text-slate-400">Actual</span></div>
                    <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-slate-600" /><span className="text-slate-400">Target</span></div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={160}>
                  <AreaChart data={patientFlowData}>
                    <defs>
                      <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1cbef0" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#1cbef0" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                    <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="patients" stroke="#1cbef0" strokeWidth={2} fill="url(#colorPatients)" name="patients" />
                    <Line type="monotone" dataKey="target" stroke="#334155" strokeWidth={1.5} strokeDasharray="4 3" dot={false} name="target" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Department breakdown */}
              <div className="bg-white/3 rounded-2xl p-4 border border-white/5">
                <h4 className="text-sm font-semibold text-white mb-1">Revenue by Dept.</h4>
                <p className="text-[11px] text-slate-500 mb-4">Today's breakdown</p>
                <div className="flex justify-center">
                  <ResponsiveContainer width={140} height={140}>
                    <PieChart>
                      <Pie data={departmentData} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={3} dataKey="value">
                        {departmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-2">
                  {departmentData.map((d) => (
                    <div key={d.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                        <span className="text-[11px] text-slate-400">{d.name}</span>
                      </div>
                      <span className="text-[11px] font-medium text-white">{d.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue chart */}
            <div className="bg-white/3 rounded-2xl p-4 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">Monthly Revenue & SHA Claims</h4>
                  <p className="text-[11px] text-slate-500">KES Millions · Last 6 months</p>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-brand-400" /><span className="text-slate-400">Revenue</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded bg-emerald-400" /><span className="text-slate-400">Claims</span></div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={130}>
                <BarChart data={revenueData} barGap={4}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                  <XAxis dataKey="month" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="revenue" fill="#1cbef0" radius={[4, 4, 0, 0]} name="revenue" />
                  <Bar dataKey="claims" fill="#10b981" radius={[4, 4, 0, 0]} name="claims" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Real-Time Dashboards', desc: 'Live KPIs updated every 30 seconds' },
            { label: 'Custom Reports', desc: 'Build any report with drag-and-drop' },
            { label: 'Predictive Insights', desc: 'AI-powered demand forecasting' },
            { label: 'Export & Share', desc: 'PDF, Excel, and API access' },
          ].map((f) => (
            <div key={f.label} className="glass rounded-xl p-4 border border-white/5 text-center">
              <h4 className="text-sm font-semibold text-white mb-1">{f.label}</h4>
              <p className="text-xs text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
