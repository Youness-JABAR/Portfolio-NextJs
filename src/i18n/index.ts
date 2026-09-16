import en from "./locales/en";
import fr from "./locales/fr";

export type Locale = "fr" | "en";

export const defaultLocale: Locale = "fr";

export type Translations = typeof fr;

export const locales: Record<Locale, Translations> = { fr, en };

export function isValidLocale(value: string): value is Locale {
  return value === "fr" || value === "en";
}
