import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OASIA - Luxury Villas in Sheikh Zayed, Egypt',
  description: 'OASIA is a green sanctuary in the heart of Zayed, where modern design and rich landscapes come together in harmony. Experience luxury living with nature-inspired architecture.',
  keywords: 'luxury villas, Sheikh Zayed, Egypt, real estate, modern architecture, nature-inspired design, OASIA',
  authors: [{ name: 'OASIA Development' }],
  openGraph: {
    title: 'OASIA - Luxury Villas in Sheikh Zayed',
    description: 'A green sanctuary where modern design and rich landscapes come together in harmony.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OASIA - Luxury Villas',
    description: 'Experience luxury living with nature-inspired architecture in Sheikh Zayed, Egypt.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#6b876b',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

