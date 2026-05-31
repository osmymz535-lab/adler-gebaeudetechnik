import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../ContentContext';
import { motion } from 'motion/react';
import { ChevronRight, Flame, Droplets, Snowflake, Sun, Siren, ArrowRight, CheckCircle2 } from 'lucide-react';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { content } = useContent();
  
  const service = content.services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Seite nicht gefunden</h1>
          <Link to="/" className="text-accent hover:underline uppercase tracking-widest text-sm font-bold">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  const detail = service.detailContent || {
    mainText: service.title,
    description: service.text,
    benefits: service.points,
    galleryImages: [service.image]
  };

  const titleColors: Record<string, string> = {
    'unternehmen': '#ffffff',
    'heizung': '#ff0000',
    'sanitaer': '#000080',
    'klima': '#a2d2ff',
    'solar': '#ff9100',
    'heizlast': '#ffffff',
    'notdienst': '#ffffff'
  };

  const titleColor = id ? titleColors[id] : '#ffffff';

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'heizung': return <Flame className="text-accent mt-1 flex-shrink-0" size={16} />;
      case 'sanitaer': return <Droplets className="text-accent mt-1 flex-shrink-0" size={16} />;
      case 'klima': return <Snowflake className="text-accent mt-1 flex-shrink-0" size={16} />;
      case 'solar': return <Sun className="text-accent mt-1 flex-shrink-0" size={16} />;
      case 'notdienst': return <Siren className="text-accent mt-1 flex-shrink-0" size={16} />;
      default: return <Flame className="text-accent mt-1 flex-shrink-0" size={16} />;
    }
  };

  return (
    <div className="pt-[90px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${service.image}")` }}
        >
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-[0.2em] mb-6 font-bold">
              <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
              <ChevronRight size={12} />
              <Link to="/#service" className="hover:text-white transition-colors">Leistungen</Link>
              <ChevronRight size={12} />
              <span className="text-accent">{service.title}</span>
            </nav>
            <h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-4"
              style={{ color: titleColor }}
            >
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-medium tracking-wide">
              {detail.mainText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 tracking-tight">Übersicht</h2>
              <p className="text-gray-500 leading-relaxed mb-10 whitespace-pre-wrap">
                {detail.description}
              </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {detail.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-primary leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>

              {/* Optional Specific Sections */}
              {detail.legalBasics && (
                <div className="mt-16 p-8 bg-gray-50 border-l-4 border-accent">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                    <Flame className="text-accent" size={20} />
                    Gesetzliche Grundlagen & Vorschriften
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap italic">
                    {detail.legalBasics}
                  </p>
                </div>
              )}

              {detail.professionalInfo && (
                <div className="mt-8 p-8 bg-white border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                    <ArrowRight className="text-accent" size={20} />
                    Fachliche Informationen
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                    {detail.professionalInfo}
                  </p>
                </div>
              )}

              {detail.customBlocks?.map((block, index) => (
                <div key={index} className="mt-16">
                  <h3 className="text-3xl font-bold text-primary mb-8 tracking-tight">{block.title}</h3>
                  {block.text.includes('- ') ? (
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {block.text.split('\n').filter(line => line.trim().startsWith('-')).map((line, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          {getServiceIcon(id || '')}
                          <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">
                            {line.replace(/^- /, '').trim()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                      {block.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
              <div className="bg-bg-alt p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-primary mb-6 tracking-tight">Experten-Beratung</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                  Sie planen ein Projekt oder haben Fragen zu unseren Leistungen im Bereich {service.title}? Wir beraten Sie gerne ausführlich und unverbindlich.
                </p>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                  className="btn-primary w-full text-center block"
                >
                  Beratungstermin aufnehmen
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {detail.galleryImages.map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden shadow-lg border border-gray-100">
                    <img 
                      src={img} 
                      alt={`${service.title} Gallery ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notdienst Banner if it's the Service or Notdienst page */}
      {(id === 'notdienst' || id === 'service') && (
        <section className="bg-danger py-16 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tighter mb-2 italic uppercase">24h Express Notdienst</h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-xs">Schnell. Zuverlässig. Kompetent.</p>
            </div>
            <a href={`tel:${content.emergencyPhone || content.phone}`} className="px-10 py-5 bg-white text-danger font-black text-xl tracking-tighter rounded-sm shadow-2xl hover:bg-white/90 transition-all">
              {content.emergencyPhone || content.phone}
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default DetailPage;
