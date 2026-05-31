import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../ContentContext';
import { motion } from 'motion/react';
import { ChevronRight, MapPin, Clock, CheckCircle2, Upload, Send, ArrowLeft } from 'lucide-react';

const JobDetailPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const { content } = useContent();
  
  const job = content.jobs.find(j => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Stelle nicht gefunden</h1>
          <Link to="/karriere" className="text-accent hover:underline uppercase tracking-widest text-sm font-bold">
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[90px] min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bg-alt py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/karriere" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors mb-8">
              <ArrowLeft size={14} /> Zurück zur Übersicht
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tighter uppercase italic leading-tight mb-6">
              {job.title}
            </h1>
            <div className="flex flex-wrap gap-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-sm text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Arbeitsort</span>
                  <span className="block text-sm font-bold text-primary">{job.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded-sm text-accent">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Anstellungsart</span>
                  <span className="block text-sm font-bold text-primary">{job.type}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Job Details */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">Stellenbeschreibung</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{job.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-6">Deine Aufgaben</h4>
                  <ul className="space-y-4">
                    {job.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 font-medium leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-6">Das bringst du mit</h4>
                  <ul className="space-y-4">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 font-medium leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {job.qualifications.length > 0 && (
                <div className="pt-8">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-6">Qualifikationen</h4>
                  <div className="flex flex-wrap gap-3">
                    {job.qualifications.map((qual, i) => (
                      <span key={i} className="px-4 py-2 bg-gray-50 border border-gray-100 text-xs font-bold text-primary uppercase tracking-widest">
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {job.additionalTextBlocks?.map((block, i) => (
                <div key={i} className="pt-8">
                  <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">{block.title}</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{block.text}</p>
                </div>
              ))}
            </div>

            {/* Application Sidebar Form */}
            <div id="bewerben">
              <div className="sticky top-32">
                <div className="bg-white border border-gray-100 p-8 shadow-2xl rounded-sm">
                  <h3 className="text-xl font-bold text-primary mb-2 tracking-tight">Direkt bewerben</h3>
                  <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold mb-8">Sende uns deine Unterlagen</p>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Vorname</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-100 p-3 text-sm outline-none focus:border-accent" placeholder="Max" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nachname</label>
                        <input type="text" className="w-full bg-gray-50 border border-gray-100 p-3 text-sm outline-none focus:border-accent" placeholder="Mustermann" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">E-Mail</label>
                      <input type="email" className="w-full bg-gray-50 border border-gray-100 p-3 text-sm outline-none focus:border-accent" placeholder="max@beispiel.de" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Telefonnummer</label>
                      <input type="tel" className="w-full bg-gray-50 border border-gray-100 p-3 text-sm outline-none focus:border-accent" placeholder="+49 170 1234567" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nachricht / Anschreiben</label>
                      <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 p-3 text-sm outline-none focus:border-accent resize-none" placeholder="Was motiviert dich?" />
                    </div>

                    {/* Upload Areas */}
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Anhänge (Max. 5MB je Datei)</h4>
                      
                      {[
                        { id: 'bewerbung', label: 'Bewerbung' },
                        { id: 'lebenslauf', label: 'Lebenslauf' },
                        { id: 'qualifikationen', label: 'Qualifikationen' },
                        { id: 'abschluesse', label: 'Abschlüsse' }
                      ].map((u) => (
                        <div key={u.id} className="group cursor-pointer">
                          <label className="flex items-center justify-between p-3 border border-dashed border-gray-200 group-hover:border-accent group-hover:bg-gray-50 transition-all cursor-pointer">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-primary">{u.label}</span>
                            <Upload size={14} className="text-gray-300 group-hover:text-accent" />
                            <input type="file" className="hidden" />
                          </label>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-accent transition-all shadow-xl group">
                      Bewerbung absenden
                      <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <p className="text-[9px] text-gray-400 text-center uppercase tracking-widest">
                      Durch das Absenden akzeptieren Sie unsere <Link to="/datenschutz" className="underline">Datenschutzbestimmungen</Link>.
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetailPage;
