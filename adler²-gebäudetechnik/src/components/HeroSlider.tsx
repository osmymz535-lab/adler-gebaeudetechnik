import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../ContentContext';

export default function HeroSlider() {
  const { content } = useContent();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = content.slides;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 12000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2 }
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2 }
      }
    })
  };

  return (
    <section className="relative h-[320px] sm:h-[420px] md:h-[550px] lg:h-screen w-full overflow-hidden bg-black transition-all duration-500">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants as any}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image Layers */}
          <div className={`absolute inset-0 overflow-hidden ${['heizung', 'sanitaer', 'klima', 'solar', 'notdienst'].includes(slides[currentIndex].id) ? 'bg-white' : ''}`}>
            {['unternehmen', 'service'].includes(slides[currentIndex].id) ? (
              /* Original Cover Style for Unternehmen and Service */
              <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
              />
            ) : (
              /* New Contain Style with White Background for others - Optimized for mobile/tablet */
              <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 bg-center bg-no-repeat z-10 bg-[length:135%] md:bg-[length:115%] lg:bg-contain"
                style={{ 
                  backgroundImage: `url(${slides[currentIndex].image})`,
                }}
              />
            )}

            {/* Dark Overlay - Only for Cover slides to maintain contrast, or adjusted for white background slides */}
            <div 
              className="absolute inset-0 bg-primary z-20" 
              style={{ 
                opacity: ['unternehmen', 'service'].includes(slides[currentIndex].id) 
                  ? content.designSettings.heroOverlayOpacity 
                  : Math.max(0, content.designSettings.heroOverlayOpacity - 0.25) // Reduced overlay for white background slides on mobile
              }}
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-30 pt-8 md:pt-16 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-4xl"
            >
              <p className="text-accent uppercase tracking-[4px] text-[10px] md:text-xs font-bold mb-1 md:mb-4">
                {slides[currentIndex].subtitle}
              </p>
              <h1 
                className="text-3xl sm:text-5xl md:text-8xl font-extrabold mb-3 md:mb-6 tracking-tighter leading-none transition-colors duration-500"
                style={{ color: slides[currentIndex].titleColor || '#ffffff' }}
              >
                {slides[currentIndex].title}
              </h1>
              {slides[currentIndex].description && (
                <p className="text-white/80 text-[12px] sm:text-lg md:text-xl max-w-2xl mx-auto mb-4 md:mb-10 leading-relaxed font-light line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                  {slides[currentIndex].description}
                </p>
              )}
              <motion.a
                href={slides[currentIndex].link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 md:mt-12 inline-block px-6 md:px-10 py-2.5 md:py-4 bg-accent text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-custom hover:bg-accent/90 transition-all shadow-xl"
              >
                Leistungen entdecken
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white/30 hover:text-white transition-colors hidden md:block"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white/30 hover:text-white transition-colors hidden md:block"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Numbered Navigation */}
      <div className="absolute bottom-12 right-12 z-20 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className="group flex flex-col items-end gap-2"
          >
            <div className={`h-1 transition-all duration-500 ${
              index === currentIndex ? 'w-10 bg-accent' : 'w-6 bg-white/30 group-hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}
