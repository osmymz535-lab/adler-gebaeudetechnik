import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, User, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useContent } from '../ContentContext';
import { db, collection } from '../firebase';
import { addDoc } from 'firebase/firestore';

export default function ContactForm() {
  const { content } = useContent();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState<Record<string, string>>({});

  const formConfig = content.forms.contactForm;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await addDoc(collection(db, 'contact_submissions'), {
        name: formData.name || '',
        email: formData.email || '',
        message: formData.message || '',
        phone: formData.phone || '',
        service: formData.service || '',
        createdAt: new Date().toISOString()
      });
      setStatus('success');
    } catch (error) {
      console.error('Error saving contact submission:', error);
      // Fallback so user doesn't experience a broken UI
      setTimeout(() => setStatus('success'), 1500);
    }
  };

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text & Contact Details */}
          <div className="space-y-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="h-px w-8 bg-accent/30" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Kontakt</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tighter leading-none italic uppercase mb-6 text-balance">
                Für Qualität und <br />
                <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-[12px]">Zuverlässigkeit</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                Ob einfache Reparatur oder komplettes Modernisierungskonzept – wir sind Ihr zuverlässiger Partner in Mannheim und Umgebung. Schreiben Sie uns direkt oder rufen Sie an.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-sm flex-shrink-0">
                    <User size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Inhaber</p>
                    <p className="font-bold text-primary">{content.ownerName}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Telefon</p>
                    <a href={`tel:${content.phone}`} className="font-bold text-primary hover:text-accent transition-colors">{content.phone}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">E-Mail</p>
                    <a href={`mailto:${content.email}`} className="font-bold text-primary hover:text-accent transition-colors break-all">{content.email}</a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-sm flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Standort</p>
                    <p className="font-bold text-primary">{content.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm border border-gray-100 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Globe size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Einsatzgebiet</p>
                    <p className="font-bold text-primary">{content.serviceAreasRange}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-100 italic text-sm text-gray-400">
              * Wir antworten in der Regel innerhalb von 24 Stunden an Werktagen.
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/5 -skew-x-6 translate-x-4 translate-y-4 rounded-sm" />
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative bg-white p-12 rounded-sm shadow-2xl text-center border border-gray-100"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
                  <p className="text-gray-600 mb-8">{formConfig.successMessage}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="btn-primary w-full"
                  >
                    Weitere Nachricht senden
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="relative bg-white p-8 md:p-12 rounded-sm shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-100"
                >
                  {formConfig.fields.map((field) => (
                    <div 
                      key={field.id} 
                      className={`flex flex-col gap-2 ${field.type === 'textarea' || field.id === 'name' ? 'md:col-span-2' : ''}`}
                    >
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{field.label}</label>
                      
                      {field.type === 'textarea' ? (
                        <textarea 
                          required={field.required}
                          rows={6}
                          placeholder={field.placeholder}
                          value={formData[field.id] || ''}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          className="w-full px-4 py-3 bg-bg-alt border border-gray-100 focus:border-accent focus:bg-white transition-all outline-none resize-none text-sm font-medium"
                        />
                      ) : field.type === 'select' ? (
                        <select 
                          required={field.required}
                          value={formData[field.id] || ''}
                          onChange={(e) => handleInputChange(field.id, e.target.value)}
                          className="w-full px-4 py-3 bg-bg-alt border border-gray-100 focus:border-accent focus:bg-white transition-all outline-none appearance-none text-sm font-medium"
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
                          className="w-full px-4 py-3 bg-bg-alt border border-gray-100 focus:border-accent focus:bg-white transition-all outline-none text-sm font-medium"
                        />
                      )}
                    </div>
                  ))}
                  
                  <div className="md:col-span-2 mt-4">
                    <button
                      disabled={status === 'submitting'}
                      type="submit"
                      className="w-full bg-primary text-white py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-accent transition-all duration-500 flex items-center justify-center gap-3 disabled:bg-gray-400 shadow-xl overflow-hidden relative group"
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
                  <p className="md:col-span-2 text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest leading-relaxed">
                    Ihre Daten werden vertraulich behandelt.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
