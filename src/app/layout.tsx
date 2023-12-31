import '../styles/globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Youness JABAR Portfolio',
  description: "I'm a web Developer And Ai lover, Worked on various types of projects and I'm confident you'll enjoy working with me.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Youness JABAR Portfolio',
    description: "I'm a web Developer And Ai lover, Worked on various types of projects and I'm confident you'll enjoy working with me.",
    url: 'https://youness-jabar.vercel.app/',
    siteName: 'youness-jabar',
    images: [
      {
        url: '/favicon.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Youness JABAR Portfolio',
    description: "I'm a web Developer And Ai lover, Worked on various types of projects and I'm confident you'll enjoy working with me.",
    site: '@youness-jabar', 
    // creator: '@yourusername', 
    images: ['/favicon.png'],
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans tracking-[0.02em]`}>{children}</body>
    </html>
  )
}
