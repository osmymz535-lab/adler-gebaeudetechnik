import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, User, Globe } from 'lucide-react';
import { useContent } from '../ContentContext';

export default function ContactModal() {
  const { content } = useContent();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-modal', handleOpen);
    return () => window.removeEventListener('open-contact-modal', handleOpen);
  }, []);

  const formConfig = content.forms.contactForm;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const close = () => {
    setIsOpen(false);
    setTimeout(() => setStatus('idle'), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-primary/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              onClick={close}
              className="absolute top-6 right-6 z-20 p-2 bg-white/10 hover:bg-accent text-primary lg:text-white lg:bg-primary/20 transition-all rounded-sm"
            >
              <X size={24} />
            </button>

            {/* Content Sidebar (Info) */}
            <div className="w-full lg:w-2/5 bg-primary p-8 md:p-12 text-white flex flex-col justify-between overflow-y-auto">
              <div className="space-y-12">
                <div>
                  <div className="h-px w-8 bg-accent mb-6" />
                  <h2 
                    className="text-3xl md:text-5xl font-extrabold tracking-tighter leading-none italic uppercase mb-6"
                    style={{ color: '#D4AF37' }}
                  >
                    Für Qualität <br />
                    <span>und Zuverlässigkeit</span>
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed max-w-sm">
                    {content.tagline}
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                      <User size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Inhaber</p>
                      <p className="font-bold text-white text-lg">{content.ownerName}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Telefon</p>
                      <a href={`tel:${content.phone}`} className="font-bold text-white text-lg hover:text-accent transition-colors">{content.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">E-Mail</p>
                      <a href={`mailto:${content.email}`} className="font-bold text-white text-lg hover:text-accent transition-colors break-all">{content.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Standort</p>
                      <p className="font-bold text-white text-lg">{content.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                      <Globe size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Einsatzgebiet</p>
                      <p className="font-bold text-white text-lg">{content.serviceAreasRange}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10 text-white/40 italic text-sm">
                Adler² Gebäudetechnik - Qualität im Quadrat
              </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-3/5 p-8 md:p-12 bg-white overflow-y-auto">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-primary">Vielen Dank!</h3>
                    <p className="text-gray-500 text-lg max-w-sm mx-auto mb-10 leading-relaxed">{formConfig.successMessage}</p>
                    <button 
                      onClick={close}
                      className="btn-primary"
                    >
                      Fenster schließen
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="md:col-span-2 mb-4">
                      <h3 className="text-2xl font-bold text-primary tracking-tight italic uppercase">Anfrage senden</h3>
                      <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mt-1">Wir beraten Sie gerne unverbindlich</p>
                    </div>

                    {formConfig.fields.map((field) => (
                      <div 
                        key={field.id} 
                        className={`flex flex-col gap-2 ${field.type === 'textarea' || field.id === 'name' ? 'md:col-span-2' : ''}`}
                      >
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 px-1">{field.label}</label>
                        
                        {field.type === 'textarea' ? (
                          <textarea 
                            required={field.required}
                            rows={5}
                            placeholder={field.placeholder}
                            value={formData[field.id] || ''}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:border-accent focus:bg-white transition-all outline-none resize-none text-sm font-medium"
                          />
                        ) : field.type === 'select' ? (
                           <select 
                            required={field.required}
                            value={formData[field.id] || ''}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:border-accent focus:bg-white transition-all outline-none appearance-none text-sm font-medium"
                          >
                            <option value="">{field.placeholder || 'Bitte wählen...'}</option>
                            {field.options?.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input 
                            required={field.required}
                            type={field.type} 
                            placeholder={field.placeholder}
                            value={formData[field.id] || ''}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 focus:border-accent focus:bg-white transition-all outline-none text-sm font-medium"
                          />
                        )}
                      </div>
                    ))}
                    
                    <div className="md:col-span-2 mt-8">
                      <button
                        disabled={status === 'submitting'}
                        type="submit"
                        className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-accent transition-all duration-500 flex items-center justify-center gap-3 disabled:bg-gray-400 shadow-xl relative group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 flex items-center gap-3">
                          {status === 'submitting' ? 'Wird gesendet...' : (
                            <>
                              {formConfig.submitButtonText}
                              <Send size={16} />
                            </>
                          )}
                        </span>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
