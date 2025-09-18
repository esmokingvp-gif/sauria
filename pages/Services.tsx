import React from 'react';
import { servicesData } from '../data/servicesData';

const servicesImages: { [key: string]: string } = {
  'licenciamento-ambiental': 'https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'patrimonio-cultural': 'https://images.pexels.com/photos/172981/pexels-photo-172981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'arqueologia-preventiva': 'https://images.pexels.com/photos/4557853/pexels-photo-4557853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'eia-rima': 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'educacao-patrimonial': 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'monitoramento-ambiental': 'https://images.pexels.com/photos/236166/pexels-photo-236166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};

const Services: React.FC = () => {
  return (
    <div className="bg-light animate-fade-in-up">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-dark">Nossos Serviços</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Oferecemos um portfólio completo de serviços para atender às demandas ambientais do seu negócio, da concepção à operação.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {servicesData.map((service, index) => (
            <div key={service.id} className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10">
                        <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold font-display text-primary">{service.title}</h2>
                 </div>
                <p className="text-gray-700 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src={servicesImages[service.id]}
                  alt={`Serviço de ${service.title} oferecido pela Sáuria Consultoria Ambiental em Joinville.`} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;