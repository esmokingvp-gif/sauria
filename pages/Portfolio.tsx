import React, { useState, useMemo } from 'react';
import { portfolioData } from '../data/portfolioData';

const ALL_CATEGORIES = 'Todos';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_CATEGORIES);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(portfolioData.map(p => p.category));
    return [ALL_CATEGORIES, ...Array.from(uniqueCategories)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === ALL_CATEGORIES) {
      return portfolioData;
    }
    return portfolioData.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="bg-white animate-fade-in-up">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-dark">Portfólio de Projetos</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Conheça alguns dos nossos projetos e veja como ajudamos nossos clientes a alcançarem seus objetivos com sustentabilidade.</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 text-sm md:text-base font-medium rounded-full transition-all duration-300 ${
                activeFilter === category 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-light rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <img 
                  src={project.imageUrl} 
                  alt={`Projeto de ${project.category}: ${project.title}`} 
                  className="w-full h-56 object-cover" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                 <div className="absolute top-4 left-4 bg-primary/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-display text-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;