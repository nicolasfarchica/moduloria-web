
import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Sobre ModulorIA | Expertos en IA para Construcción Modular',
  description: 'Conoce ModulorIA: La agencia especializada en automatización e Inteligencia Artificial exclusivamente para el sector de la construcción modular e industrializada.',
  openGraph: {
    title: 'Sobre ModulorIA | Expertos en IA para Construcción Modular',
    description: 'Transformamos empresas de construcción modular mediante automatización inteligente y flujos de trabajo optimizados.',
  },
};

export default function SobreNicolasPage() {
  return <AboutClient />;
}
