import React from 'react';
import { NavLink } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Award, Target, Users } from 'lucide-react';

const Home: React.FC = () => {

  const featuredServices = servicesData.slice(0, 3);

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white text-center bg-cover bg-center" 
        style={{ backgroundImage: `url('https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 tracking-tight leading-tight">
            Consultoria Ambiental, Cultural e Arqueológica para o Futuro
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
            Soluções integradas para guiar seu empreendimento à conformidade e à sustentabilidade em Joinville e Santa Catarina.
          </p>
          <NavLink to="/contato" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Solicitar Orçamento
          </NavLink>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-dark">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Soluções completas para os desafios ambientais, culturais e arqueológicos da sua empresa.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map(service => (
              <div key={service.id} className="bg-light p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                <NavLink to="/servicos" className="font-semibold text-primary hover:text-primary-dark transition-colors duration-300">
                  Saiba Mais &rarr;
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="bg-white p-5 rounded-full shadow-md mb-4">
                        <Target className="w-10 h-10 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2">Missão</h3>
                    <p className="text-gray-600">Oferecer soluções técnicas que equilibram desenvolvimento e conservação, com responsabilidade e excelência.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-white p-5 rounded-full shadow-md mb-4">
                        <Award className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2">Visão</h3>
                    <p className="text-gray-600">Ser referência em consultoria ambiental e cultural, reconhecida pela ética, inovação e compromisso com o futuro.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-white p-5 rounded-full shadow-md mb-4">
                        <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-2">Valores</h3>
                    <p className="text-gray-600">Integridade, sustentabilidade, inovação contínua, transparência e compromisso com o cliente.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Portfolio CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Resultados que Falam por Si</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">Explore nossos casos de sucesso e veja como transformamos desafios em oportunidades sustentáveis para nossos clientes e o meio ambiente.</p>
          <NavLink to="/portfolio" className="bg-white text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100">
            Ver Projetos
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;