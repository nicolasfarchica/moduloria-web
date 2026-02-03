import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

// Mapeo de rutas localizadas
export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/servicios': {
    es: '/servicios',
    en: '/services',
  },
  '/precios': {
    es: '/precios',
    en: '/pricing',
  },
  '/auditoria': {
    es: '/auditoria',
    en: '/audit',
  },
  '/sobre-moduloria': {
    es: '/sobre-moduloria',
    en: '/about',
  },
  '/blog': '/blog',
  '/blog/[slug]': '/blog/[slug]',
  '/recursos': {
    es: '/recursos',
    en: '/resources',
  },
  '/newsletter': '/newsletter',
  '/privacidad': {
    es: '/privacidad',
    en: '/privacy',
  },
  '/terminos': {
    es: '/terminos',
    en: '/terms',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

// Labels para el selector de idioma
export const localeLabels: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

// Flags para el selector de idioma
export const localeFlags: Record<Locale, string> = {
  es: '🇪🇸',
  en: '🇬🇧',
};
