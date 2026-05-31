import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../ContentContext';
import HeroSlider from '../components/HeroSlider';
import CategoryBlock from '../components/CategoryBlock';
import ContactForm from '../components/ContactForm';
import { ArrowRight, Phone, Mail, MapPin, Users, Settings, Zap, Image as ImageIcon, Briefcase, BookOpen, ChevronRight, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FireWaterIcon } from '../components/Icons';

export default function Home() {
  const { content } = useContent();

  const sections = [
    { id: 'hero', component: <HeroSlider key="hero" /> },
    { id: 'intro', component: content.sectionVisibility.intro && (
      <section key="intro" className={`py-20 bg-white ${content.layout?.intro?.alignment === 'center' ? 'text-center' : content.layout?.intro?.alignment === 'right' ? 'text-right' : 'text-left'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${content.layout?.intro?.alignment === 'center' ? 'items-center' : content.layout?.intro?.alignment === 'right' ? 'items-end' : 'items-start'}`}
          >
            {content.layout?.intro?.showTitle && (
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tighter">
                {content.companyName}
              </h1>
            )}
            <div className={`space-y-4 max-w-3xl ${content.layout?.intro?.alignment === 'center' ? 'border-t-4 pt-8' : content.layout?.intro?.alignment === 'right' ? 'border-r-4 pr-8' : 'border-l-4 pl-8'} border-accent py-2`}>
              <h2 className="text-xl font-bold text-primary uppercase tracking-widest">Unser Unternehmen</h2>
              <p className="text-[16px] text-gray-500 leading-[1.7]">
                {content.introText}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )},
    { id: 'service', component: (
       <div key="service" className="categories-container" id="service">
        {content.services.map((service: any, index: number) => (
          <CategoryBlock key={service.id} service={service} index={index} />
        ))}
      </div>
    )},
    { id: 'unternehmen', component: null },
    { id: 'highlights', component: content.sectionVisibility.highlights && (
      <section key="highlights" className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/HeizlastundhydraulicherabgleichRatgeber.png" alt="Hydraulischer Abgleich und Normheizlast" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <h2 
            className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tighter"
            style={{ color: '#ffffff' }}
          >
            Hydraulischer Abgleich und Normheizlast
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
            Maximieren Sie die Effizienz Ihrer Heizungsanlage. Wir führen präzise Berechnungen durch, um Energie zu sparen und den Wohnkomfort zu steigern.
          </p>
          <div className={`flex flex-wrap gap-6 ${content.layout?.highlights?.alignment === 'center' ? 'justify-center' : content.layout?.highlights?.alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
              className="bg-accent text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-accent/90 transition-all shadow-xl"
            >
              Beratungstermin aufnehmen
            </button>
            <Link to="/heizlast" className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
              Mehr Informationen
            </Link>
          </div>
        </div>
      </section>
    )},
    { id: 'referenzen', component: content.sectionVisibility.referenzen && (
      <section key="referenzen" id="projekte" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row justify-between items-end mb-12 gap-6 ${content.layout?.referenzen?.alignment === 'right' ? 'md:flex-row-reverse' : ''}`}>
            <div className={content.layout?.referenzen?.alignment === 'right' ? 'text-right' : ''}>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Referenzen</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Unsere Arbeiten</h2>
            </div>
            <Link to="/galerie" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
              Alle Projekte ansehen <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 h-[400px] relative group overflow-hidden">
              <img src="https://picsum.photos/seed/ref1/1200/800" alt="Referenz 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest">Modernes Bad Mannheim</span>
              </div>
            </div>
            <div className="h-[400px] relative group overflow-hidden">
              <img src="https://picsum.photos/seed/ref2/800/800" alt="Referenz 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-widest">Wärmepumpe Ludwigshafen</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )},
    { id: 'karriere', component: content.sectionVisibility.karriere && (
      <section key="karriere" id="karriere" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${content.layout?.karriere?.imagePosition === 'right' ? '' : 'lg:flex-row-reverse'}`}>
            <div className={content.layout?.karriere?.alignment === 'center' ? 'text-center flex flex-col items-center' : content.layout?.karriere?.alignment === 'right' ? 'text-right flex flex-col items-end' : ''}>
              <Briefcase size={48} className="text-accent mb-8" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Werde Teil unseres Teams</h2>
              <p className="text-white/60 mb-10 leading-relaxed">
                Wir suchen motivierte Anlagenmechaniker, Meister und Azubis, die Lust auf spannende Projekte und ein tolles Team haben. Bei uns erwarten dich faire Bezahlung, moderne Ausstattung und echte Wertschätzung.
              </p>
              <Link to="/karriere" className="btn-accent inline-block px-8 py-4 font-bold uppercase tracking-widest text-xs">
                Offene Stellen ansehen
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/job1/600/600" alt="Job 1" className="w-full aspect-square object-cover rounded-sm" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/job2/600/600" alt="Job 2" className="w-full aspect-square object-cover rounded-sm mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    )},
    { id: 'blog', component: null },
    { id: 'ratgeber', component: content.sectionVisibility.ratgeber && (
      <section key="ratgeber" id="ratgeber" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${content.layout?.ratgeber?.alignment === 'left' ? 'text-left' : content.layout?.ratgeber?.alignment === 'right' ? 'text-right' : ''}`}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">Magazin</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">Aktueller Ratgeber</h2>
            <p className="text-gray-600">Wichtige Informationen und moderne Standards für Ihre Haustechnik.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {content.ratgeberCards.filter(c => c.isVisible !== false).map((card) => (
              <Link key={card.id} to={card.link} className="group flex flex-col h-full bg-white border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video overflow-hidden mb-8 relative">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">{card.intro}</p>
                <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-primary group-hover:text-accent">
                  Zum Ratgeber <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/blog" className="btn-outline inline-flex items-center gap-2">
              Alle Ratgeber ansehen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    )},
    { id: 'contact_bar', component: null },
    { id: 'service_promise', component: content.sectionVisibility.service_promise && (
      <section key="service_promise" id="service-verspechen" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${content.layout?.services?.alignment === 'left' ? 'text-left' : content.layout?.services?.alignment === 'right' ? 'text-right' : ''}`}>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Was wir bieten</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">Unser Service-Versprechen</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Wir begleiten Sie von der ersten Idee bis zur fertigen Installation und darüber hinaus.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'beratung', icon: <Settings />, title: 'Beratung & Planung', text: 'Individuelle Lösungen für Ihr Zuhause.' },
              { id: 'installation', icon: <FireWaterIcon />, title: 'Installation', text: 'Fachgerechte Ausführung durch Experten.' },
              { id: 'wartung', icon: <BookOpen />, title: 'Wartung', text: 'Regelmäßige Checks für Langlebigkeit.' },
              { id: 'notdienst', icon: <Phone />, title: '24h Notdienst', text: 'Immer für Sie da, wenn es brennt.' }
            ].map((item, i) => (
              <Link key={i} to={`/${item.id}`} className="p-10 bg-gray-50 hover:bg-black hover:text-white transition-all duration-500 group">
                <div className="mb-6 text-black group-hover:text-white transition-colors">
                  {React.isValidElement(item.icon) ? React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 }) : item.icon}
                </div>
                <h4 className="text-lg font-bold mb-4 uppercase tracking-wider">{item.title}</h4>
                <p className="text-sm text-gray-500 group-hover:text-white/70 transition-colors leading-relaxed">{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/service" className="btn-outline inline-flex items-center gap-2">
              Alle Service-Leistungen <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    )},
    { id: 'contact_info', component: (
      <section key="contact_info" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-sm">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">Schreiben Sie uns</h4>
              <p className="text-sm text-gray-500 mb-4">Wir antworten innerhalb von 24h.</p>
              <a href={`mailto:${content.email}`} className="text-black font-bold hover:underline">{content.email}</a>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-black text-white rounded-sm shadow-2xl scale-105 z-10">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">Schnell anrufen</h4>
              <a href={`tel:${content.phone}`} className="text-2xl font-bold hover:text-white/80 transition-colors">{content.phone}</a>
              <p className="text-white/60 text-sm mt-2 font-medium">Mo-Sa: 07:30 - 18:00</p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-sm">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">Besuchen Sie uns</h4>
              <p className="text-sm text-gray-500 mb-4">Standort Mannheim & Umgebung</p>
              <span className="text-black font-bold">{content.address}</span>
            </div>
          </div>
        </div>
      </section>
    )},
    { id: 'contact_form', component: <ContactForm key="contact_form" /> }
  ];

  const sortedSections = [...sections]
    .filter(s => s.component) // Remove nulls from invisible sections
    .sort((a, b) => {
      const orderA = content.layout?.[a.id]?.order ?? 99;
      const orderB = content.layout?.[b.id]?.order ?? 99;
      return orderA - orderB;
    });

  return (
    <main className="pt-0">
      {sortedSections.map(section => section.component)}
    </main>
  );
}
