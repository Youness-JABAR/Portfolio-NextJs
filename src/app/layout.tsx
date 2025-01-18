import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Youness JABAR - Full-Stack Developer | AI Enthusiast",
  description:
    "Hi, I'm Youness Jabar, a full-stack developer and AI enthusiast specializing in React, Angular, Laravel, and AI-driven solutions. Explore my projects and experience.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Youness JABAR - Full-Stack Developer | AI Enthusiast",
    description:
      "Hi, I'm Youness Jabar, a full-stack developer and AI enthusiast specializing in React, Angular, Laravel, and AI-driven solutions. Explore my projects and experience.",
    url: "https://youness-jabar.vercel.app/",
    siteName: "Youness Jabar Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youness JABAR - Full-Stack Developer | AI Enthusiast",
    description:
      "Hi, I'm Youness Jabar, a full-stack developer and AI enthusiast specializing in React, Angular, Laravel, and AI-driven solutions. Explore my projects and experience.",
    site: "@youness-jabar",
    // creator: '@yourusername',
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} tracking-[0.02em]`}>
        {children}
      </body>
    </html>
  );
}
