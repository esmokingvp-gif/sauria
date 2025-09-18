
import { Landmark, History, BookOpen, FileText, FlaskConical, ClipboardCheck } from 'lucide-react';
import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'licenciamento-ambiental',
    title: 'Licenciamento Ambiental',
    shortDescription: 'Assessoria completa para obtenção de licenças ambientais (LP, LI, LO) para empreendimentos de todos os portes.',
    longDescription: 'Conduzimos todo o processo de licenciamento ambiental para seu empreendimento, desde os estudos iniciais até a obtenção das licenças (Prévia, de Instalação e de Operação), garantindo agilidade e segurança jurídica.',
    icon: ClipboardCheck,
  },
  {
    id: 'patrimonio-cultural',
    title: 'Gestão de Patrimônio Cultural',
    shortDescription: 'Elaboração de laudos, pareceres e projetos para a preservação e valorização do patrimônio cultural material e imaterial.',
    longDescription: 'Atuamos na identificação, valoração e gestão do patrimônio cultural. Realizamos pesquisas, inventários e desenvolvemos projetos de salvaguarda para bens culturais, em conformidade com as diretrizes do IPHAN.',
    icon: Landmark,
  },
  {
    id: 'arqueologia-preventiva',
    title: 'Arqueologia Preventiva',
    shortDescription: 'Estudos arqueológicos em áreas de empreendimentos para mitigar impactos sobre o patrimônio arqueológico.',
    longDescription: 'Executamos todas as fases do licenciamento arqueológico, desde o diagnóstico e prospecção até o resgate e monitoramento, assegurando a preservação de sítios arqueológicos e o cumprimento da legislação.',
    icon: History,
  },
  {
    id: 'eia-rima',
    title: 'Estudos de Impacto Ambiental (EIA/RIMA)',
    shortDescription: 'Elaboração de estudos complexos para avaliação de impactos ambientais de grandes projetos.',
    longDescription: 'Desenvolvemos Estudos e Relatórios de Impacto Ambiental (EIA/RIMA) com equipes multidisciplinares, fornecendo diagnósticos precisos e propondo medidas mitigadoras e compensatórias eficazes.',
    icon: FileText,
  },
  {
    id: 'educacao-patrimonial',
    title: 'Educação Patrimonial',
    shortDescription: 'Desenvolvimento de programas e ações educativas para aproximar a comunidade do seu patrimônio cultural e ambiental.',
    longDescription: 'Criamos e executamos projetos de educação patrimonial que promovem o reconhecimento e a valorização do legado cultural e ambiental, fortalecendo os laços de identidade e pertencimento da comunidade.',
    icon: BookOpen,
  },
  {
    id: 'monitoramento-ambiental',
    title: 'Monitoramento Ambiental',
    shortDescription: 'Coleta e análise de dados para monitoramento e controle da qualidade da água, solo, ar e biodiversidade.',
    longDescription: 'Implementamos programas de monitoramento ambiental para acompanhar a eficácia de medidas de controle e garantir a conformidade contínua com as normas e licenças ambientais vigentes.',
    icon: FlaskConical,
  },
];