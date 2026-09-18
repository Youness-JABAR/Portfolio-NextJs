"use client";

import { useLanguage } from "@/context/LanguageContext";
import clsx from "clsx";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 sm:gap-1 rounded-full border border-gray-200 bg-white p-0.5 sm:p-1 text-xs sm:text-sm font-medium shadow-sm"
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className={clsx(
          "rounded-full px-2 sm:px-3 py-1 transition-colors",
          locale === "fr"
            ? "bg-primary text-white"
            : "text-gray-600 hover:text-primary"
        )}
        aria-pressed={locale === "fr"}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={clsx(
          "rounded-full px-2 sm:px-3 py-1 transition-colors",
          locale === "en"
            ? "bg-primary text-white"
            : "text-gray-600 hover:text-primary"
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
