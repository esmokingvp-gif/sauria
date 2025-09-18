
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, Bot, PhoneCall } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = React.useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setMessage('');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulate success/error
        if (Math.random() > 0.1) { // 90% success rate
            setStatus('success');
            setMessage('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
            (e.target as HTMLFormElement).reset();
        } else {
            setStatus('error');
            setMessage('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"></textarea>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-2"><Bot size={14} /> Este site é protegido por medidas anti-spam.</p>
            <div>
                <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400"
                >
                    {status === 'submitting' ? 'Enviando...' : <>Enviar Mensagem <Send size={18} /></>}
                </button>
            </div>
            {message && (
                <div className={`p-4 rounded-md text-sm ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {message}
                </div>
            )}
        </form>
    );
};


const Contact: React.FC = () => {
  return (
    <div className="bg-light animate-fade-in-up">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-dark">Entre em Contato</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Estamos prontos para ouvir sobre seus desafios e propor as melhores soluções ambientais.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-xl">
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold font-display text-primary mb-4">Informações de Contato</h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <span>Rua Walter Eichholz, 545 - Petrópolis<br/>Joinville - Santa Catarina</span>
                </p>
                <p className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <a href="mailto:contato@sauriaambiental.com.br" className="hover:text-primary">contato@sauriaambiental.com.br</a>
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <a href="tel:+554734299271" className="hover:text-primary">(47) 3429-9271</a>
                </p>
                <p className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>Segunda a Sexta, das 8h às 18h</span>
                </p>
              </div>
            </div>
            
            <div>
                <h3 className="text-xl font-bold font-display text-primary mb-4">Contato Rápido</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/554734299271" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                        <Bot size={20} /> WhatsApp
                    </a>
                    <a href="tel:+554734299271" className="flex-1 flex items-center justify-center gap-2 bg-secondary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition duration-300">
                        <PhoneCall size={20} /> Ligar Agora
                    </a>
                </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.653428255018!2d-48.8378875!3d-26.3697963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deaf7a58406797%3A0x44619a911a3b11d0!2sR.%20Walter%20Eichholz%2C%20545%20-%20Petr%C3%B3polis%2C%20Joinville%20-%20SC%2C%2089208-620!5e0!3m2!1spt-BR!2sbr!4v1622557889151!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Sáuria Consultoria Ambiental"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;