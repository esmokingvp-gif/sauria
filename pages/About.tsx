import React from 'react';
import { ShieldCheck, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-dark">Sobre a Sáuria Consultoria Ambiental</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Comprometidos com a excelência e a inovação em consultoria ambiental, cultural e arqueológica em Santa Catarina.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold font-display text-primary mb-4">Nossa História</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fundada por um grupo de especialistas apaixonados, a Sáuria Consultoria Ambiental nasceu com o propósito de oferecer soluções técnicas integradas que equilibram desenvolvimento e a conservação do patrimônio ambiental e cultural na região de Joinville e em todo o estado de Santa Catarina.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ao longo dos anos, nos consolidamos como uma empresa de referência no setor, atendendo clientes de diversos portes e segmentos. Nossa jornada é marcada pela busca contínua por conhecimento, pela adoção de metodologias inovadoras e, acima de tudo, pelo compromisso ético com nossos clientes, com a sociedade e com o legado histórico e ambiental.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src="https://images.pexels.com/photos/7745564/pexels-photo-7745564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Equipe de consultores ambientais da Sáuria realizando trabalho de campo em uma floresta." className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-dark">Por que nos escolher?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-light rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                    <ShieldCheck className="w-10 h-10 text-primary"/>
                </div>
            </div>
            <h3 className="text-xl font-bold font-display mb-2">Expertise Comprovada</h3>
            <p className="text-gray-600">Nossa equipe multidisciplinar possui vasta experiência e conhecimento técnico para lidar com os mais complexos desafios ambientais, garantindo segurança e conformidade para o seu negócio.</p>
          </div>
          <div className="text-center p-8 bg-light rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                    <Lightbulb className="w-10 h-10 text-primary"/>
                </div>
            </div>
            <h3 className="text-xl font-bold font-display mb-2">Soluções Inovadoras</h3>
            <p className="text-gray-600">Estamos sempre atentos às novas tecnologias e metodologias do setor para oferecer soluções personalizadas, eficientes e de vanguarda que otimizam recursos e minimizam impactos.</p>
          </div>
          <div className="text-center p-8 bg-light rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                    <Users className="w-10 h-10 text-primary"/>
                </div>
            </div>
            <h3 className="text-xl font-bold font-display mb-2">Parceria Estratégica</h3>
            <p className="text-gray-600">Atuamos como verdadeiros parceiros de nossos clientes. Entendemos suas necessidades e trabalhamos juntos para alcançar seus objetivos de sustentabilidade e crescimento.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;