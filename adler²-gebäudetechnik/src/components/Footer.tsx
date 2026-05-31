import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUp, Linkedin } from 'lucide-react';
import { useContent } from '../ContentContext';

export default function Footer() {
  const { content } = useContent();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="pt-24 pb-12 transition-colors duration-500"
      style={{ 
        backgroundColor: content.designSettings?.footerBgColor || '#0a1e36',
        color: content.designSettings?.footerTextColor || 'rgba(255,255,255,0.6)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Adler² Gebäudetechnik"
                className="h-12 w-auto object-contain"
                draggable={false}
              />
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              Ihr kompetenter Fachbetrieb für Heizung, Sanitär, Klima und Solar in Mannheim, Ludwigshafen und Umgebung.
            </p>
            <div className="flex items-center gap-4">
              {content.sectionVisibility.social && (
                <>
                  {content.socialLinks.instagram && (
                    <a href={content.socialLinks.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all">
                      <Instagram size={18} />
                    </a>
                  )}
                  {content.socialLinks.facebook && (
                    <a href={content.socialLinks.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all">
                      <Facebook size={18} />
                    </a>
                  )}
                  {content.socialLinks.linkedin && (
                    <a href={content.socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all">
                      <Linkedin size={18} />
                    </a>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ color: content.designSettings?.footerTextColor || '#ffffff' }}>Navigation</h4>
            <ul className="flex flex-col gap-4">
              {content.navigation.items
                .filter(item => item.isVisible && ['heizung', 'sanitaer', 'klima', 'solar'].includes(item.id))
                .sort((a, b) => a.order - b.order)
                .map((item) => (
                  <li key={item.id}>
                    <Link to={item.path} className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ color: content.designSettings?.footerTextColor || '#ffffff' }}>Leistungen</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/heizung" className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">Heizungstechnik</Link></li>
              <li><Link to="/sanitaer" className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">Sanitärinstallation</Link></li>
              <li><Link to="/klima" className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">Klimatechnik</Link></li>
              <li><Link to="/solar" className="text-sm hover:text-accent transition-colors opacity-80 hover:opacity-100">Solarenergie</Link></li>
              <li><Link to="/notdienst" className="text-sm text-danger font-bold hover:text-danger/80 transition-colors opacity-80 hover:opacity-100">24h Notdienst</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8" style={{ color: content.designSettings?.footerTextColor || '#ffffff' }}>Kontakt</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-accent mt-1" />
                <span className="text-sm opacity-80">{content.address}</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-accent" />
                  <a href={`tel:${content.phone}`} className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">{content.phone}</a>
                </div>
                <span className="text-[10px] uppercase tracking-widest opacity-60 ml-9">Mo-Sa: 07:30 - 18:00</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-accent" />
                <a href={`mailto:${content.email}`} className="text-sm hover:text-white transition-colors opacity-80 hover:opacity-100">{content.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 min-h-[60px]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-[11px] uppercase tracking-widest opacity-60">
            <span>© {new Date().getFullYear()} Adler² Gebäudetechnik GmbH</span>
            <Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[11px] uppercase tracking-widest hover:text-accent transition-colors opacity-60 hover:opacity-100"
          >
            Nach oben
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
