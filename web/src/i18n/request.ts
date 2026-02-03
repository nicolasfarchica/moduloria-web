import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  // Load all message files with their namespaces
  const common = (await import(`./locales/${locale}/common.json`)).default;
  const home = (await import(`./locales/${locale}/home.json`)).default;
  const services = (await import(`./locales/${locale}/services.json`)).default;
  const pricing = (await import(`./locales/${locale}/pricing.json`)).default;
  const faq = (await import(`./locales/${locale}/faq.json`)).default;
  const audit = (await import(`./locales/${locale}/audit.json`)).default;
  const blog = (await import(`./locales/${locale}/blog.json`)).default;
  const chat = (await import(`./locales/${locale}/chat.json`)).default;
  const metadata = (await import(`./locales/${locale}/metadata.json`)).default;
  const legal = (await import(`./locales/${locale}/legal.json`)).default;

  return {
    locale,
    messages: {
      // Spread common messages at root level for nav, footer, cta, language
      ...common,
      // Add namespaced messages
      home,
      services,
      pricing,
      faq,
      audit,
      blog,
      chat,
      metadata,
      legal,
    },
  };
});
