import HomePage from "@/components/home/HomePage";
import { routing, type Locale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Page({ params: { locale } }: { params: { locale: Locale } }) {
  setRequestLocale(locale);
  return <HomePage />;
}
