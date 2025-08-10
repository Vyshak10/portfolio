import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vyshak Krishna KS - Flutter Developer & Data Analyst',
  description: 'Portfolio of Vyshak Krishna KS - B.Tech IT student specializing in Flutter development, full-stack web development, and data analysis with expertise in Power BI, Python, and Machine Learning.',
  keywords: 'Flutter Developer, Data Analyst, Full Stack Developer, Python, Power BI, Machine Learning, React.js, Mobile App Development',
  authors: [{ name: 'Vyshak Krishna KS' }],
  openGraph: {
    title: 'Vyshak Krishna KS - Flutter Developer & Data Analyst',
    description: 'Professional portfolio showcasing Flutter development, data analysis, and full-stack web development projects.',
    type: 'website',
    url: 'https://vyshakkrishna.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export {};
import React from 'react';


