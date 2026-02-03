import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

// Localized pathnames following i18n config
const localizedPaths = {
  servicios: { es: 'servicios', en: 'services' },
  precios: { es: 'precios', en: 'pricing' },
  auditoria: { es: 'auditoria', en: 'audit' },
  'sobre-moduloria': { es: 'sobre-moduloria', en: 'about' },
  recursos: { es: 'recursos', en: 'resources' },
  privacidad: { es: 'privacidad', en: 'privacy' },
  terminos: { es: 'terminos', en: 'terms' },
} as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://moduloria.com';
  const currentDate = new Date();
  const locales = ['es', 'en'] as const;

  // Get all blog posts for dynamic sitemap entries
  const posts = await getAllPosts();

  // Generate blog URLs for both locales
  const blogUrls: MetadataRoute.Sitemap = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/blog/${post.slug}`,
          en: `${baseUrl}/en/blog/${post.slug}`,
        },
      },
    }))
  );

  // Static pages with localized URLs
  const staticPages: MetadataRoute.Sitemap = [
    // Home pages
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    })),
    // Servicios
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${localizedPaths.servicios[locale]}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/es/servicios`,
          en: `${baseUrl}/en/services`,
        },
      },
    })),
    // Precios
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${localizedPaths.precios[locale]}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/es/precios`,
          en: `${baseUrl}/en/pricing`,
        },
      },
    })),
    // Auditoria
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${localizedPaths.auditoria[locale]}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/es/auditoria`,
          en: `${baseUrl}/en/audit`,
        },
      },
    })),
    // Blog index
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/es/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    })),
    // Newsletter
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/newsletter`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/es/newsletter`,
          en: `${baseUrl}/en/newsletter`,
        },
      },
    })),
    // Sobre ModulorIA
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${localizedPaths['sobre-moduloria'][locale]}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          es: `${baseUrl}/es/sobre-moduloria`,
          en: `${baseUrl}/en/about`,
        },
      },
    })),
    // Recursos
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${localizedPaths.recursos[locale]}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          es: `${baseUrl}/es/recursos`,
          en: `${baseUrl}/en/resources`,
        },
      },
    })),
    // Privacidad
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${localizedPaths.privacidad[locale]}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/es/privacidad`,
          en: `${baseUrl}/en/privacy`,
        },
      },
    })),
    // Terminos
    ...locales.map((locale) => ({
      url: `${baseUrl}/${locale}/${localizedPaths.terminos[locale]}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: {
          es: `${baseUrl}/es/terminos`,
          en: `${baseUrl}/en/terms`,
        },
      },
    })),
  ];

  return [...staticPages, ...blogUrls];
}
