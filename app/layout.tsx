import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AudioPlayer } from '@/components/audio-player'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Herimax | omnipresente.sol',
  description: 'El poeta que hace cantar a la blockchain - Powered by sol.site',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '1024x1024',
      },
    ],
    apple: [
      {
        url: '/apple-icon.png',
        type: 'image/png',
        sizes: '1024x1024',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background min-h-screen">
        {children}
        <AudioPlayer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
