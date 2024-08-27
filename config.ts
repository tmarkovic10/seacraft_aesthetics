export const locales = ["hr", "en"] as const;

export const defaultLocale: Locale = "hr";

export type Locale = (typeof locales)[number];
