
import { notFound } from 'next/navigation';
import { ALL_PROBLEMS } from '../../../lib/problems';
import ProblemClient from './ProblemClient';
import { Metadata } from 'next';

// Generate static params for all problem slugs
export async function generateStaticParams() {
  return ALL_PROBLEMS.map((problem) => ({
    slug: problem.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const problem = ALL_PROBLEMS.find((p) => p.slug === params.slug);

  if (!problem) {
    return {
      title: 'Problema no encontrado | ModulorIA',
      description: 'El problema solicitado no existe.',
    };
  }

  return {
    title: `${problem.title} - Soluciones de Automatización | ModulorIA`,
    description: `${problem.subtitle}. ${problem.longDescription.substring(0, 150)}...`,
    openGraph: {
      title: problem.title,
      description: problem.subtitle,
    },
  };
}

export default function ProblemPage({ params }: { params: { slug: string } }) {
  const problem = ALL_PROBLEMS.find((p) => p.slug === params.slug);

  if (!problem) {
    notFound();
  }

  return <ProblemClient problem={problem} />;
}
