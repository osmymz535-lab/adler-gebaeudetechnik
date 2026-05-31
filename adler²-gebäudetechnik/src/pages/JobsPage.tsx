import React from 'react';
import { useContent } from '../ContentContext';
import { motion } from 'motion/react';
import { ChevronRight, Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobsPage: React.FC = () => {
  const { content } = useContent();
  const visibleJobs = content.jobs.filter(job => job.isVisible);

  return (
    <div className="pt-[90px] min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/career_hero/1920/600)' }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <nav className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-[0.2em] mb-6 font-bold">
              <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
              <ChevronRight size={12} />
              <span className="text-accent underline">Karriere</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter uppercase leading-none italic mb-4">
              Werde Teil unseres Teams
            </h1>
            <p className="text-white/70 max-w-2xl font-medium tracking-wide">
              Wir suchen Verstärkung! Entdecke unsere aktuellen Stellenangebote und bewirb dich bei einem modernen Fachbetrieb in Mannheim.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-16 bg-bg-alt border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Moderne Ausstattung', value: 'High-End Tools' },
              { label: 'Faire Vergütung', value: 'Attraktives Gehalt' },
              { label: 'Teamspirit', value: 'Tolles Klima' },
              { label: 'Einsatzort', value: 'Metropolregion' }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{stat.label}</span>
                <span className="block text-sm font-black text-primary uppercase tracking-tight">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 tracking-tight flex items-center gap-4">
            <Briefcase className="text-accent" size={28} />
            Aktuelle Stellenangebote
          </h2>

          <div className="space-y-6">
            {visibleJobs.length > 0 ? (
              visibleJobs.map((job) => (
                <Link 
                  key={job.id} 
                  to={`/karriere/${job.id}`}
                  className="group block bg-white border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-accent transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-1 bg-accent h-0 group-hover:h-full transition-all duration-300" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-6">
                        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                          <MapPin size={14} className="text-accent" /> {job.location}
                        </span>
                        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                          <Clock size={14} className="text-accent" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                      Details & Bewerbung <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-12 text-center bg-gray-50 border border-dashed border-gray-200">
                <p className="text-gray-500 font-medium">Aktuell sind leider keine Stellen ausgeschrieben.</p>
                <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Schau bald wieder vorbei!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 tracking-tight">Nichts passendes dabei?</h2>
          <p className="text-white/60 mb-10 leading-relaxed font-medium">
            Wir sind immer an motivierten Talenten interessiert. Senden Sie uns gerne eine Initiativbewerbung an <a href={`mailto:${content.email}`} className="text-accent hover:underline font-bold">{content.email}</a>.
          </p>
          <Link to="/kontakt" className="btn-accent inline-block">
            Allgemeine Anfrage
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;
