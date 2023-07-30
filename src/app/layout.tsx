import '../styles/globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-openSans'
 })

export const metadata: Metadata = {
  title: 'Youness JABAR Portfolio',
  description: "I'm a web Developer And Ai lover, Worked on various types of projects and I'm confident you'll enjoy working with me.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans tracking-[0.02em]`}>{children}</body>
    </html>
  )
}
