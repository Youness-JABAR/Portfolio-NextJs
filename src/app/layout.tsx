import "../styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "@/components/common/Providers/Providers";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Youness JABAR - Développeur Full-Stack | Passionné d'IA",
  description:
    "Bonjour, je suis Youness Jabar, développeur full-stack et passionné d'IA, spécialisé en React, Angular, Laravel et solutions IA. Découvrez mes projets et mon expérience.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Youness JABAR - Développeur Full-Stack | Passionné d'IA",
    description:
      "Bonjour, je suis Youness Jabar, développeur full-stack et passionné d'IA, spécialisé en React, Angular, Laravel et solutions IA. Découvrez mes projets et mon expérience.",
    url: "https://youness-jabar.vercel.app/",
    siteName: "Youness Jabar Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Youness JABAR - Développeur Full-Stack | Passionné d'IA",
    description:
      "Bonjour, je suis Youness Jabar, développeur full-stack et passionné d'IA, spécialisé en React, Angular, Laravel et solutions IA. Découvrez mes projets et mon expérience.",
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
    <html lang="fr">
      <body className={`${poppins.variable} tracking-[0.02em]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
