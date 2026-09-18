"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

function LocaleLink({
  targetLocale,
  hash,
  children,
  isActive,
}: {
  targetLocale: Locale;
  hash: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={`${pathname}${hash}`}
      locale={targetLocale}
      scroll={false}
      className={clsx(
        "rounded-full px-2 sm:px-3 py-1 transition-colors",
        isActive
          ? "bg-primary text-white"
          : "text-gray-600 hover:text-primary"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);

    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div
      className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-gray-200 bg-white p-0.5 sm:p-1 text-xs sm:text-sm font-medium shadow-sm"
      role="group"
      aria-label="Language selector"
    >
      <LocaleLink targetLocale="fr" hash={hash} isActive={locale === "fr"}>
        FR
      </LocaleLink>
      <LocaleLink targetLocale="en" hash={hash} isActive={locale === "en"}>
        EN
      </LocaleLink>
    </div>
  );
}
