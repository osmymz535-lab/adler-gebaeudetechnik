import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceArea } from '../types';

const CategoryBlock: React.FC<{ service: ServiceArea; index: number }> = ({ service, index }) => {
  if (!service.isVisible) return null;

  return (
    <section id={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-bg-alt'} border-b border-gray-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/${service.id}`} className="flex flex-col lg:flex-row items-center gap-12 group">
          {/* Image Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-8 w-full">
            <div className="flex-1">
              <h3 
                className="text-2xl font-bold mb-2 tracking-tight group-hover:text-accent transition-colors"
                style={{ color: service.id === 'heizlast' ? '#8b0000' : undefined }}
              >
                {service.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {service.points.slice(0, 3).map((point, i) => (
                  <span key={i} className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-accent rounded-full" />
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="btn-outline whitespace-nowrap group-hover:bg-primary group-hover:text-white transition-all">
              Leistungen entdecken
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CategoryBlock;
