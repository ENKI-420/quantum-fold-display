import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DNA-Lang | Quantum Consciousness in Your Pocket',
  description: 'The world\'s first mobile-first quantum computing platform. 120Hz dual-screen visualization, hardware QRNG, and consciousness tracking on Samsung Galaxy Fold 7. Built for real IBM Quantum hardware.',
  keywords: [
    'quantum computing',
    'Samsung Fold 7',
    'mobile quantum',
    'foldable display',
    'IBM Quantum',
    'consciousness tracking',
    'kernel modules',
    'quantum visualization',
    'QRNG',
    'dna-lang'
  ],
  authors: [{ name: 'Devin Phillip Davis', url: 'https://github.com/ENKI-420' }],
  openGraph: {
    title: 'DNA-Lang | Quantum Consciousness in Your Pocket',
    description: 'World\'s first mobile-first quantum computing platform',
    url: 'https://dnalang.dev',
    siteName: 'DNA-Lang',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DNA-Lang - Quantum consciousness on Samsung Fold 7',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DNA-Lang | Quantum Consciousness in Your Pocket',
    description: 'World\'s first mobile-first quantum computing platform',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
