import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Instagram, Facebook, MessageSquare, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '../ContentContext';

export default function Header() {
  const { content } = useContent();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  const shouldBeSolid = isScrolled || !isHome;

  const navItems = content.navigation.items
    .filter(item => item.isVisible)
    .sort((a, b) => a.order - b.order);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        shouldBeSolid ? 'bg-white shadow-sm' : 'bg-transparent'
      } ${shouldBeSolid ? 'border-gray-200' : 'border-white/10'}`}
      style={{ 
        height: isScrolled ? `calc(${content.designSettings.headerHeight} * 0.9)` : content.designSettings.headerHeight 
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo / Branding */}
          <Link to="/" className="flex items-center group">
           <img
            src="/logo.png"
            alt="Adler² Gebäudetechnik"
            className="h-14 w-auto object-contain"
            draggable={false}
           />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  text-[13px] font-semibold uppercase tracking-[0.5px] transition-colors hover:text-accent
                  ${isActive ? 'text-accent' : shouldBeSolid ? 'text-text-dark' : 'text-white/90'}
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={`flex items-center gap-4 ${shouldBeSolid ? 'text-gray-400' : 'text-white/60'}`}>
              <a href={content.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href={content.socialLinks.facebook} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
            <Link 
              to="/notdienst"
              className="btn-danger flex items-center gap-2"
            >
              <Phone size={14} />
              NOTDIENST
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`xl:hidden p-2 ${shouldBeSolid ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl xl:hidden border-t border-gray-100"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `
                    text-lg font-medium py-2 border-b border-gray-50
                    ${isActive ? 'text-black' : 'text-gray-600'}
                  `}
                >
                  {item.name}
                </NavLink>
              ))}
              <Link 
                to="/notdienst"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-red-600 text-white px-5 py-4 rounded-sm text-center font-bold flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                NOTDIENST ANRUFEN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
