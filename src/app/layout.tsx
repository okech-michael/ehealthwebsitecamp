import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Ehealth — Smart Hospital Management & Community Healthcare Platform',
  description: 'Transforming healthcare operations across Africa. A unified digital platform for hospitals, clinics, laboratories, pharmacies, and healthcare providers in Kenya and Africa.',
  keywords: ['healthcare', 'hospital management', 'Kenya', 'Africa', 'digital health', 'NHIF', 'SHA', 'telemedicine', 'EMR'],
  authors: [{ name: 'Ehealth Africa' }],
  openGraph: {
    title: 'Ehealth — Smart Hospital Management Platform',
    description: 'Transforming healthcare operations across Africa.',
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ehealth — Smart Hospital Management Platform',
    description: 'Transforming healthcare operations across Africa.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-navy-900 text-slate-200 font-body antialiased">
        {children}
      </body>
    </html>
  )
}
