import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale, pathnames, localePrefix } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames,
  localePrefix,
});

// Hooks y componentes de navegación localizados
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
