import React from 'react';
import { useContent } from '../ContentContext';
import { motion } from 'motion/react';
import { ChevronRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const GalleryPage: React.FC = () => {
  const { content } = useContent();
  const visibleImages = content.gallery.filter(item => item.isVisible);

  return (
    <div className="pt-[90px] min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-bg-alt border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-[0.2em] mb-6 font-bold">
              <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
              <ChevronRight size={12} />
              <span className="text-accent underline">Unsere Arbeiten</span>
            </nav>
            <div className="flex items-center gap-4 mb-4">
              <Camera className="text-accent" size={24} />
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tighter uppercase italic">
                Unsere Referenzen
              </h1>
            </div>
            <p className="text-gray-500 max-w-2xl font-medium tracking-wide">
              Eindrücke unserer erfolgreich abgeschlossenen Projekte in den Bereichen Heizung, Sanitär, Klima und Solar. Qualität, die man sehen kann.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-100 border border-gray-100 shadow-sm"
              >
                <img 
                  src={item.image} 
                  alt={item.title || `Referenz ${index + 1}`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{item.title}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-4 tracking-tight">Ihr Projekt als nächste Referenz?</h2>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Wir freuen uns darauf, auch Ihr Bauvorhaben professionell und zuverlässig umzusetzen. Nehmen Sie jetzt Kontakt zu uns auf.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
            className="btn-primary inline-block"
          >
            Jetzt Beratungstermin aufnehmen
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
