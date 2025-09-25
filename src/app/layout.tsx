import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteTitle = 'Nordsight Analytics'
const siteDescription =
  'Nordsight Analytics transforms advanced AI research into predictive analytics, autonomous business intelligence, and operational insights that drive confident, data-led decisions.'

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: '%s | Nordsight Analytics',
  },
  description: siteDescription,
  applicationName: 'Nordsight Analytics',
  keywords: [
    'Nordsight Analytics',
    'AI consulting',
    'predictive analytics',
    'business intelligence',
    'data strategy',
    'applied AI research',
    'process optimization',
  ],
  authors: [{ name: 'Nordsight Analytics' }],
  creator: 'Nordsight Analytics',
  publisher: 'Nordsight Analytics',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName: 'Nordsight Analytics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
