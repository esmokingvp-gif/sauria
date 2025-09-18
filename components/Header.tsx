import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/portfolio', label: 'Portfólio' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);


  const baseLinkClasses = "px-4 py-2 text-gray-700 transition duration-300 font-medium";
  const desktopLinkClasses = "hover:text-primary";
  const mobileLinkClasses = "block text-center py-4 text-lg hover:bg-green-50";
  const activeLinkClasses = "text-primary border-b-2 border-primary";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold font-display text-primary">
            <Leaf className="w-8 h-8"/>
            <span>Sáuria Ambiental</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                className={({ isActive }) => `${baseLinkClasses} ${desktopLinkClasses} ${isActive ? activeLinkClasses : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contato" className="ml-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Contato
            </NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                className={({ isActive }) => `${baseLinkClasses} ${mobileLinkClasses} ${isActive ? 'bg-green-100 text-primary' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink to="/contato" className="bg-primary hover:bg-primary-dark text-white text-center font-bold py-4 text-lg transition duration-300">
              Contato
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;