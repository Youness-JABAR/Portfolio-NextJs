"use client";

import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
