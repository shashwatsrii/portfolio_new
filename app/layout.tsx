import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shashwat Srivastava - Software Engineer',
  description: 'Full-stack developer specializing in backend development with experience in SpringBoot, React, and cloud technologies. Building scalable solutions with modern tech stacks.',
  keywords: ['Software Engineer', 'Backend Developer', 'Full Stack', 'SpringBoot', 'React', 'Java', 'Python'],
  authors: [{ name: 'Shashwat Srivastava' }],
  creator: 'Shashwat Srivastava',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shashwatsrivastava.com',
    siteName: 'Shashwat Srivastava Portfolio',
    title: 'Shashwat Srivastava - Software Engineer',
    description: 'Full-stack developer specializing in backend development',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shashwat Srivastava - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashwat Srivastava - Software Engineer',
    description: 'Full-stack developer specializing in backend development',
    creator: '@shashwatsrii',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://shashwatsrivastava.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}