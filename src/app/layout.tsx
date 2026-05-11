import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ProcessNavigation from '@/components/ProcessNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UX Strategist Portfolio',
  description: "I'm a UX strategist who helps make complex systems feel intuitive and actionable. My sweet spot sits at the intersection of data, storytelling, and product strategy. I'm motivated by tough problems and thrive on turning user insights into scalable systems and experiences that boost clarity, consistency, and adoption.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ProcessNavigation />
      </body>
    </html>
  )
}
