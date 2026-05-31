import React from 'react';
import { motion } from 'motion/react';
import { useContent } from '../ContentContext';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, User, Globe, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const { content } = useContent();

  return (
    <div className="pt-[100px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/contact/1920/1080" 
            alt="Kontakt" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Kontakt
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto"
          >
            Wir sind für Sie da – persönlich, kompetent und direkt in Ihrer Nähe.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xl rounded-sm overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4 block">Informationen</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 tracking-tight">Ansprechpartner & Standort</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-bg-alt flex items-center justify-center text-primary rounded-sm flex-shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Inhaber</h4>
                    <p className="text-lg font-bold text-primary">{content.ownerName}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-bg-alt flex items-center justify-center text-primary rounded-sm flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Anschrift</h4>
                    <p className="text-lg text-gray-600">
                      <strong>{content.companyName}</strong><br />
                      {content.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-bg-alt flex items-center justify-center text-primary rounded-sm flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Telefon</h4>
                    <p className="text-lg text-primary font-bold">{content.phone}</p>
                    <p className="text-sm text-gray-500 mt-1">Mo-Sa: 07:30 - 18:00</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-bg-alt flex items-center justify-center text-primary rounded-sm flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">E-Mail</h4>
                    <p className="text-lg text-primary">{content.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-alt p-12 rounded-sm border border-gray-100 h-fit">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">Einsatzgebiete</span>
              <h3 className="text-2xl font-bold text-primary mb-8">{content.location} & Umgebung</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Wir sind Ihr regionaler Fachbetrieb. Unsere Experten sind täglich für Sie im Einsatz in:
              </p>
              <ul className="space-y-4 mb-10">
                {content.serviceAreasRange.split(',').map((area, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary font-bold">
                    <ArrowRight size={16} className="text-accent" />
                    {area.trim()}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <Globe className="text-accent" size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Regional . Zuverlässig . Kompetent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
