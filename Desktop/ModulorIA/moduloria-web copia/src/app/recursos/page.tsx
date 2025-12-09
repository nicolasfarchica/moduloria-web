import { Metadata } from 'next';
import RecursosClient from './RecursosClient';

export const metadata: Metadata = {
  title: 'Recursos Gratuitos para Automatizar tu Empresa Modular | ModulorIA',
  description: 'Guías, plantillas y calculadora ROI gratuita para empresas de construcción modular/industrializada. Descubre el potencial de automatización en tu negocio.',
};

export default function RecursosPage() {
  return <RecursosClient />;
}
