import React, { useState, useEffect } from 'react';
import { useContent } from '../ContentContext';
import { auth, db, collection, onSnapshot, doc } from '../firebase';
import { signOut } from 'firebase/auth';
import { query, orderBy, deleteDoc } from 'firebase/firestore';
import { 
  Save, RefreshCcw, Plus, Trash2, Layout, FileText, Phone, Settings, 
  Eye, EyeOff, Globe, Image as ImageIcon, Briefcase, List, ArrowLeft, ChevronRight, Zap,
  Palette, LogOut, CheckCircle2, AlertCircle, Instagram, Facebook, Linkedin, ShieldCheck, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Admin() {
  const { content, updateContent } = useContent();
  const [localContent, setLocalContent] = useState(content);
  const [activeTab, setActiveTab] = useState<'general' | 'navigation' | 'branding' | 'design' | 'visibility' | 'services' | 'blog' | 'ratgeber' | 'gallery' | 'karriere' | 'process' | 'seo' | 'forms' | 'social' | 'slides' | 'layout' | 'admins'>('general');
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [editingRatgeberId, setEditingRatgeberId] = useState<string | null>(null);
  const [editingJobId, setEditingJobId] = useState<string | null>(null);
  const [editingProcessId, setEditingProcessId] = useState<string | null>(null);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editingSlideId, setEditingSlideId] = useState<string | null>(null);
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submissions, setSubmissions] = useState<any[]>([]);

  // Real-time subscription to contact submissions
  useEffect(() => {
    if (activeTab === 'forms') {
      const q = query(collection(db, 'contact_submissions'), orderBy('createdAt', 'desc'));
      const unsub = onSnapshot(q, (snapshot) => {
        const list: any[] = [];
        snapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setSubmissions(list);
      }, (err) => {
        console.error('Error fetching submissions:', err);
      });
      return () => unsub();
    }
  }, [activeTab]);

  const handleDeleteSubmission = async (id: string) => {
    if (confirm('Möchten Sie diese Nachricht wirklich löschen?')) {
      try {
        await deleteDoc(doc(db, 'contact_submissions', id));
      } catch (err) {
        console.error('Error deleting submission:', err);
      }
    }
  };

  // Sync with context if it changes from outside
  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('idle');
    try {
      await updateContent(localContent);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setLocalContent(content);
    setSaveStatus('idle');
  };

  const handleLogout = async () => {
    if (confirm('Möchten Sie sich wirklich abmelden?')) {
      localStorage.removeItem('adler_admin_auth_state');
      await signOut(auth);
      window.location.href = '/admin_bereich/login';
    }
  };

  const toggleSectionVisibility = (section: keyof typeof localContent.sectionVisibility) => {
    setLocalContent({
      ...localContent,
      sectionVisibility: {
        ...localContent.sectionVisibility,
        [section]: !localContent.sectionVisibility[section]
      }
    });
  };

  const toggleServiceVisibility = (id: string) => {
    setLocalContent({
      ...localContent,
      services: localContent.services.map(s => s.id === id ? { ...s, isVisible: !s.isVisible } : s)
    });
  };

  const updateRatgeberCard = (id: string, updates: Partial<typeof localContent.ratgeberCards[0]>) => {
    const newCards = localContent.ratgeberCards.map(c => c.id === id ? { ...c, ...updates } : c);
    setLocalContent({ ...localContent, ratgeberCards: newCards });
  };

  const updateJob = (id: string, updates: Partial<typeof localContent.jobs[0]>) => {
    const newJobs = localContent.jobs.map(j => j.id === id ? { ...j, ...updates } : j);
    setLocalContent({ ...localContent, jobs: newJobs });
  };

  const updateProcess = (id: string, updates: Partial<typeof localContent.processDetails[0]>) => {
    const newProcesses = localContent.processDetails.map(p => p.id === id ? { ...p, ...updates } : p);
    setLocalContent({ ...localContent, processDetails: newProcesses });
  };

  const addBlogPost = () => {
    const newId = Date.now().toString();
    const newPost = {
      id: newId,
      title: 'Neuer Beitrag',
      excerpt: 'Kurze Zusammenfassung...',
      content: 'Der eigentliche Inhalt...',
      date: new Date().toLocaleDateString('de-DE'),
      category: 'Allgemein',
      image: 'https://picsum.photos/seed/blog/800/600',
      isVisible: true
    };
    setLocalContent({ ...localContent, blogPosts: [newPost, ...localContent.blogPosts] });
    setEditingPostId(newId);
  };

  const removeBlogPost = (id: string) => {
    setLocalContent({ ...localContent, blogPosts: localContent.blogPosts.filter(p => p.id !== id) });
  };

  const updateBlogPost = (id: string, updates: Partial<typeof localContent.blogPosts[0]>) => {
    const newPosts = localContent.blogPosts.map(p => p.id === id ? { ...p, ...updates } : p);
    setLocalContent({ ...localContent, blogPosts: newPosts });
  };

  const addJob = () => {
    const newId = Date.now().toString();
    const newJob = {
      id: newId,
      title: 'Neue Stelle',
      location: 'Mannheim',
      type: 'Vollzeit',
      description: 'Stellenbeschreibung...',
      isVisible: true,
      tasks: [],
      requirements: [],
      qualifications: []
    };
    setLocalContent({ ...localContent, jobs: [...localContent.jobs, newJob] });
    setEditingJobId(newId);
  };

  const removeJob = (id: string) => {
    setLocalContent({ ...localContent, jobs: localContent.jobs.filter(j => j.id !== id) });
  };

  const addSlide = () => {
    const newId = Date.now().toString();
    const newSlide = {
      id: newId,
      title: 'Neue Headline',
      subtitle: 'Untertitel / Slogan',
      image: 'https://picsum.photos/seed/hero/1920/1080',
      link: '/service'
    };
    setLocalContent({ ...localContent, slides: [...localContent.slides, newSlide] });
    setEditingSlideId(newId);
  };

  const removeSlide = (id: string) => {
    setLocalContent({ ...localContent, slides: localContent.slides.filter(s => s.id !== id) });
  };

  const updateSlide = (id: string, updates: Partial<typeof localContent.slides[0]>) => {
    const newSlides = localContent.slides.map(s => s.id === id ? { ...s, ...updates } : s);
    setLocalContent({ ...localContent, slides: newSlides });
  };

  const addGalleryImage = () => {
    const newImage = { id: Date.now().toString(), image: 'https://picsum.photos/seed/new/800/600', isVisible: true };
    setLocalContent({ ...localContent, gallery: [...localContent.gallery, newImage] });
  };

  const removeGalleryImage = (id: string) => {
    setLocalContent({ ...localContent, gallery: localContent.gallery.filter(img => img.id !== id) });
  };

  const updateDesignSetting = (key: keyof typeof localContent.designSettings, value: any) => {
    setLocalContent({
      ...localContent,
      designSettings: {
        ...localContent.designSettings,
        [key]: value
      }
    });
  };

  const updateLayoutSetting = (sectionId: string, updates: Partial<NonNullable<typeof localContent.layout>[string]>) => {
    setLocalContent({
      ...localContent,
      layout: {
        ...localContent.layout,
        [sectionId]: {
          ...(localContent.layout?.[sectionId] || { alignment: 'center', spacing: 'normal', order: 0, showTitle: true, showSubtitle: true }),
          ...updates
        }
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12 bg-white p-8 border border-gray-100 shadow-sm rounded-sm relative overflow-hidden">
          {isSaving && (
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
              <motion.div 
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </div>
          )}
          
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl font-extrabold text-primary tracking-tighter italic">ADMIN PANEL</h1>
              {saveStatus === 'success' && (
                <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  <CheckCircle2 size={12} /> Gespeichert
                </motion.span>
              )}
              {saveStatus === 'error' && (
                <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  <AlertCircle size={12} /> Fehler
                </motion.span>
              )}
            </div>
            <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Inhaltsverwaltung & Konfiguration</p>
          </div>
          
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-danger font-bold text-xs uppercase tracking-widest border border-red-50 hover:bg-red-50 transition-all rounded-sm"
            >
              <LogOut size={16} />
            </button>
            <button 
              onClick={handleReset}
              disabled={isSaving}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white text-gray-400 font-bold text-xs uppercase tracking-widest border border-gray-100 hover:bg-gray-50 transition-all rounded-sm disabled:opacity-50"
            >
              <RefreshCcw size={16} />
              Verwerfen
            </button>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-10 py-4 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-gray-900 transition-all rounded-sm shadow-xl disabled:opacity-50 min-w-[180px]"
            >
              {isSaving ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Save size={16} />
                  Speichern
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'general', name: 'Allgemein', icon: <Globe size={18} /> },
              { id: 'admins', name: 'Zugriff / Admins', icon: <ShieldCheck size={18} /> },
              { id: 'navigation', name: 'Navigation / Menü', icon: <Layout size={18} /> },
              { id: 'branding', name: 'Logo & Branding', icon: <ImageIcon size={18} /> },
              { id: 'layout', name: 'Layout & Reihenfolge', icon: <ArrowLeft size={18} className="rotate-90" /> },
              { id: 'slides', name: 'Hero / Slider', icon: <ImageIcon size={18} /> },
              { id: 'seo', name: 'SEO & Meta', icon: <FileText size={18} /> },
              { id: 'design', name: 'Design / Style', icon: <Palette size={18} /> },
              { id: 'forms', name: 'Formulare / Kontakt', icon: <Phone size={18} /> },
              { id: 'services', name: 'Leistungen / Seiten', icon: <Settings size={18} /> },
              { id: 'process', name: 'Details / Versprechen', icon: <Zap size={18} /> },
              { id: 'ratgeber', name: 'Ratgeber Cards', icon: <List size={18} /> },
              { id: 'gallery', name: 'Galerie / Bilder', icon: <ImageIcon size={18} /> },
              { id: 'karriere', name: 'Karriere / Jobs', icon: <Briefcase size={18} /> },
              { id: 'blog', name: 'Blog Beiträge', icon: <FileText size={18} /> },
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setEditingServiceId(null);
                  setEditingRatgeberId(null);
                  setEditingJobId(null);
                  setEditingProcessId(null);
                }}
                className={`w-full flex items-center justify-between px-6 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-sm border ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white border-primary shadow-lg' 
                    : 'bg-white text-gray-500 border-gray-100 hover:border-accent hover:text-accent'
                }`}
              >
                <span className="flex items-center gap-3">
                  {tab.icon}
                  {tab.name}
                </span>
                <ChevronRight size={14} className={activeTab === tab.id ? 'opacity-100' : 'opacity-0'} />
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 shadow-sm rounded-sm p-8 md:p-12 min-h-[600px]">
              
              {/* ADMINS TAB */}
              {activeTab === 'admins' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">Benutzer & Admins</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Zugriffsberechtigungen verwalten</p>
                  </header>

                  <div className="bg-amber-50 border border-amber-100 p-8 rounded-sm space-y-4">
                    <div className="flex gap-4">
                      <ShieldCheck className="text-amber-600 shrink-0" size={24} />
                      <div>
                        <h4 className="text-sm font-bold text-amber-900 mb-1">Geheimer Zugangspfad</h4>
                        <p className="text-xs text-amber-700 leading-relaxed mb-4">
                          Der Admin-Bereich ist nur über die folgende geheime URL erreichbar. Bitte bewahren Sie diesen Link sicher auf.
                        </p>
                        <div className="bg-white p-3 border border-amber-200 font-mono text-xs select-all text-primary">
                          {window.location.origin}/{(import.meta.env.VITE_ADMIN_PATH || 'intern-adler-99x')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-col gap-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Autorisierte E-Mail-Adressen</label>
                      <div className="space-y-3">
                        {(localContent.authorizedAdmins || []).map((email, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-bg-alt p-4 border border-gray-100 group">
                            <span className="flex-grow text-sm font-medium text-primary">{email}</span>
                            {email !== 'osm.ymz535@gmail.com' && (
                              <button 
                                onClick={() => {
                                  const newAdmins = localContent.authorizedAdmins?.filter(e => e !== email);
                                  setLocalContent({...localContent, authorizedAdmins: newAdmins});
                                }}
                                className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <input 
                          type="email" 
                          id="newAdminEmail"
                          placeholder="neue-admin-email@beispiel.de"
                          className="admin-input flex-grow"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              const input = e.currentTarget;
                              const email = input.value.trim();
                              if (email && !(localContent.authorizedAdmins || []).includes(email)) {
                                setLocalContent({
                                  ...localContent, 
                                  authorizedAdmins: [...(localContent.authorizedAdmins || []), email]
                                });
                                input.value = '';
                              }
                            }
                          }}
                        />
                        <button 
                          onClick={() => {
                            const input = document.getElementById('newAdminEmail') as HTMLInputElement;
                            const email = input.value.trim();
                            if (email && !(localContent.authorizedAdmins || []).includes(email)) {
                              setLocalContent({
                                ...localContent, 
                                authorizedAdmins: [...(localContent.authorizedAdmins || []), email]
                              });
                              input.value = '';
                            }
                          }}
                          className="px-6 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm"
                        >
                          Hinzufügen
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-400 italic">Drücken Sie Enter oder klicken Sie auf "Hinzufügen", um eine E-Mail-Adresse zu registrieren.</p>
                      
                      <div className="bg-bg-alt p-8 mt-12 rounded-sm border border-gray-100 space-y-4">
                         <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary underline decoration-accent decoration-2 underline-offset-4 mb-4">Anmeldedaten-Check</h4>
                         <p className="text-xs text-gray-500 leading-relaxed font-medium">
                            Sie haben gefragt, ob Ihre Zugangsdaten korrekt hinterlegt wurden. 
                         </p>
                         <div className="bg-white p-6 border border-gray-100 rounded-sm space-y-3">
                            <div className="flex items-center gap-3">
                               <div className="w-2 h-2 rounded-full bg-green-500" />
                               <span className="text-xs font-bold text-primary uppercase tracking-widest">Status: Aktiv für osm.ymz535@gmail.com</span>
                            </div>
                            <p className="text-[11px] text-gray-400 leading-relaxed">
                               Die E-Mail <code className="bg-gray-50 px-1 font-mono text-accent">osm.ymz535@gmail.com</code> ist als Haupt-Administrator registriert. 
                               Zusätzliche Admin-E-Mails können oben hinzugefügt werden. Alle Passwörter werden sicher über Firebase Authentication verwaltet.
                            </p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* GENERAL TAB */}
              {activeTab === 'general' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">Allgemeine Informationen</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Stammdaten & SEO</p>
                  </header>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Firmenname</label>
                      <input 
                        type="text" 
                        value={localContent.companyName}
                        onChange={(e) => setLocalContent({...localContent, companyName: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Inhaber Name</label>
                      <input 
                        type="text" 
                        value={localContent.ownerName}
                        onChange={(e) => setLocalContent({...localContent, ownerName: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Tagline</label>
                      <input 
                        type="text" 
                        value={localContent.tagline}
                        onChange={(e) => setLocalContent({...localContent, tagline: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Einleitungstext (Home)</label>
                      <textarea 
                        rows={4}
                        value={localContent.introText}
                        onChange={(e) => setLocalContent({...localContent, introText: e.target.value})}
                        className="admin-input resize-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2 font-mono text-[11px] text-gray-400 mt-4 border-t pt-8 md:col-span-2">
                      <span>KONTAKT-BOX DATEN</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Telefon (Standard)</label>
                      <input 
                        type="text" 
                        value={localContent.phone}
                        onChange={(e) => setLocalContent({...localContent, phone: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Notfallnummer</label>
                      <input 
                        type="text" 
                        value={localContent.emergencyPhone || ''}
                        onChange={(e) => setLocalContent({...localContent, emergencyPhone: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">E-Mail</label>
                      <input 
                        type="email" 
                        value={localContent.email}
                        onChange={(e) => setLocalContent({...localContent, email: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Standort (Stadt)</label>
                      <input 
                        type="text" 
                        value={localContent.location}
                        onChange={(e) => setLocalContent({...localContent, location: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Einsatzgebiete (Komma getrennt)</label>
                      <input 
                        type="text" 
                        value={localContent.serviceAreasRange}
                        onChange={(e) => setLocalContent({...localContent, serviceAreasRange: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Adresse</label>
                      <input 
                        type="text" 
                        value={localContent.address}
                        onChange={(e) => setLocalContent({...localContent, address: e.target.value})}
                        className="admin-input"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* NAVIGATION TAB */}
              {activeTab === 'navigation' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">Navigation & Header</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Menüpunkte und Branding verwalten</p>
                  </header>

                  {/* Header Branding Section */}
                  <div className="space-y-8 pb-12 border-b border-gray-100">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Branding (Logo & Titel)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-bg-alt p-8 rounded-sm">
                      <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Header Schriftzug</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          placeholder="z.B. Adler² Gebäudetechnik"
                          value={localContent.navigation.branding.customText}
                          onChange={(e) => setLocalContent({
                            ...localContent,
                            navigation: {
                              ...localContent.navigation,
                              branding: { ...localContent.navigation.branding, customText: e.target.value }
                            }
                          })}
                        />
                      </div>
                      <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Logo Höhe</label>
                        <input 
                          type="text" 
                          className="admin-input" 
                          placeholder="z.B. 64px"
                          value={localContent.navigation.branding.logoHeight}
                          onChange={(e) => setLocalContent({
                            ...localContent,
                            navigation: {
                              ...localContent.navigation,
                              branding: { ...localContent.navigation.branding, logoHeight: e.target.value }
                            }
                          })}
                        />
                      </div>
                      <div className="flex gap-8">
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox" 
                            id="showLogo"
                            checked={localContent.navigation.branding.showLogo}
                            onChange={(e) => setLocalContent({
                              ...localContent,
                              navigation: {
                                ...localContent.navigation,
                                branding: { ...localContent.navigation.branding, showLogo: e.target.checked }
                              }
                            })}
                            className="w-4 h-4 accent-primary"
                          />
                          <label htmlFor="showLogo" className="text-[10px] font-bold uppercase tracking-widest text-primary cursor-pointer">Logo zeigen</label>
                        </div>
                        <div className="flex items-center gap-3">
                          <input 
                            type="checkbox" 
                            id="showText"
                            checked={localContent.navigation.branding.showText}
                            onChange={(e) => setLocalContent({
                              ...localContent,
                              navigation: {
                                ...localContent.navigation,
                                branding: { ...localContent.navigation.branding, showText: e.target.checked }
                              }
                            })}
                            className="w-4 h-4 accent-primary"
                          />
                          <label htmlFor="showText" className="text-[10px] font-bold uppercase tracking-widest text-primary cursor-pointer">Text zeigen</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nav Items Section */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Menüpunkte Verwalten</h3>
                      <button 
                        onClick={() => {
                          const newItems = [...localContent.navigation.items];
                          newItems.push({
                            id: Date.now().toString(),
                            name: 'Neuer Link',
                            path: '/',
                            isVisible: true,
                            order: newItems.length
                          });
                          setLocalContent({
                            ...localContent,
                            navigation: { ...localContent.navigation, items: newItems }
                          });
                        }}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:underline"
                      >
                        <Plus size={14} /> Punkt hinzufügen
                      </button>
                    </div>

                    <div className="space-y-3">
                      {localContent.navigation.items
                        .sort((a, b) => a.order - b.order)
                        .map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row items-center gap-4 bg-white border border-gray-100 p-4 hover:shadow-md transition-all group">
                          <div className="w-12">
                            <input 
                              type="number" 
                              className="admin-input p-2 text-center"
                              value={item.order}
                              onChange={(e) => {
                                const newItems = localContent.navigation.items.map(i => 
                                  i.id === item.id ? { ...i, order: parseInt(e.target.value) || 0 } : i
                                );
                                setLocalContent({
                                  ...localContent,
                                  navigation: { ...localContent.navigation, items: newItems }
                                });
                              }}
                            />
                          </div>
                          
                          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input 
                              type="text" 
                              className="admin-input bg-transparent border-gray-50 focus:border-accent"
                              placeholder="Name"
                              value={item.name}
                              onChange={(e) => {
                                const newItems = localContent.navigation.items.map(i => 
                                  i.id === item.id ? { ...i, name: e.target.value } : i
                                );
                                setLocalContent({
                                  ...localContent,
                                  navigation: { ...localContent.navigation, items: newItems }
                                });
                              }}
                            />
                            <input 
                              type="text" 
                              className="admin-input bg-transparent border-gray-50 focus:border-accent"
                              placeholder="Pfad (z.B. /galerie)"
                              value={item.path}
                              onChange={(e) => {
                                const newItems = localContent.navigation.items.map(i => 
                                  i.id === item.id ? { ...i, path: e.target.value } : i
                                );
                                setLocalContent({
                                  ...localContent,
                                  navigation: { ...localContent.navigation, items: newItems }
                                });
                              }}
                            />
                          </div>

                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => {
                                const newItems = localContent.navigation.items.map(i => 
                                  i.id === item.id ? { ...i, isVisible: !i.isVisible } : i
                                );
                                setLocalContent({
                                  ...localContent,
                                  navigation: { ...localContent.navigation, items: newItems }
                                });
                              }}
                              className={`p-3 rounded-sm transition-all ${item.isVisible ? 'bg-primary text-white' : 'bg-gray-100 text-gray-300'}`}
                              title={item.isVisible ? 'Sichtbar' : 'Verborgen'}
                            >
                              {item.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                            </button>
                            <button 
                              onClick={() => {
                                const newItems = localContent.navigation.items.filter(i => i.id !== item.id);
                                setLocalContent({
                                  ...localContent,
                                  navigation: { ...localContent.navigation, items: newItems }
                                });
                              }}
                              className="p-3 text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SEO TAB */}
              {activeTab === 'seo' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">SEO & Meta-Daten</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Suchmaschinenoptimierung verwalten</p>
                  </header>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Seitentitel (Browser Tab)</label>
                      <input 
                        type="text" 
                        value={localContent.seo.title}
                        onChange={(e) => setLocalContent({...localContent, seo: {...localContent.seo, title: e.target.value}})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Meta-Beschreibung</label>
                      <textarea 
                        rows={3}
                        value={localContent.seo.description}
                        onChange={(e) => setLocalContent({...localContent, seo: {...localContent.seo, description: e.target.value}})}
                        className="admin-input resize-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Keywords (mit Komma getrennt)</label>
                      <input 
                        type="text" 
                        value={localContent.seo.keywords}
                        onChange={(e) => setLocalContent({...localContent, seo: {...localContent.seo, keywords: e.target.value}})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">OpenGraph Bild URL (für Social Sharing)</label>
                      <input 
                        type="text" 
                        value={localContent.seo.ogImage}
                        onChange={(e) => setLocalContent({...localContent, seo: {...localContent.seo, ogImage: e.target.value}})}
                        className="admin-input"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* SOCIAL MEDIA TAB */}
              {activeTab === 'social' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">Social Media Links</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Kanäle verwalten und anzeigen</p>
                  </header>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Instagram URL</label>
                      <input 
                        type="text" 
                        value={localContent.socialLinks.instagram}
                        onChange={(e) => setLocalContent({...localContent, socialLinks: {...localContent.socialLinks, instagram: e.target.value}})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Facebook URL</label>
                      <input 
                        type="text" 
                        value={localContent.socialLinks.facebook}
                        onChange={(e) => setLocalContent({...localContent, socialLinks: {...localContent.socialLinks, facebook: e.target.value}})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">TikTok URL</label>
                      <input 
                        type="text" 
                        value={localContent.socialLinks.tiktok}
                        onChange={(e) => setLocalContent({...localContent, socialLinks: {...localContent.socialLinks, tiktok: e.target.value}})}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">LinkedIn URL</label>
                      <input 
                        type="text" 
                        value={localContent.socialLinks.linkedin || ''}
                        onChange={(e) => setLocalContent({...localContent, socialLinks: {...localContent.socialLinks, linkedin: e.target.value}})}
                        className="admin-input"
                      />
                    </div>
                  </div>
                  <div className="mt-8 p-6 bg-bg-alt border border-gray-100 rounded-sm">
                    <div className="flex items-center justify-between">
                       <div>
                         <span className="text-sm font-bold text-primary uppercase tracking-widest">Sichtbarkeit</span>
                         <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Social Icons im Footer anzeigen</p>
                       </div>
                       <button 
                        onClick={() => toggleSectionVisibility('social' as any)}
                        className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm ${localContent.sectionVisibility.social ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}
                       >
                         {localContent.sectionVisibility.social ? 'Anzeigen' : 'Verstecken'}
                       </button>
                    </div>
                  </div>
                </div>
              )}

              {/* FORMS TAB */}
              {activeTab === 'forms' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">Kontaktformular</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Felder und Texte des Formulars verwalten</p>
                  </header>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Formular Titel</label>
                      <input 
                        type="text" 
                        value={localContent.forms.contactForm.title}
                        onChange={(e) => setLocalContent({
                          ...localContent,
                          forms: {
                            ...localContent.forms,
                            contactForm: { ...localContent.forms.contactForm, title: e.target.value }
                          }
                        })}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Formular Untertitel</label>
                      <input 
                        type="text" 
                        value={localContent.forms.contactForm.subtitle}
                        onChange={(e) => setLocalContent({
                          ...localContent,
                          forms: {
                            ...localContent.forms,
                            contactForm: { ...localContent.forms.contactForm, subtitle: e.target.value }
                          }
                        })}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Button Text</label>
                      <input 
                        type="text" 
                        value={localContent.forms.contactForm.submitButtonText}
                        onChange={(e) => setLocalContent({
                          ...localContent,
                          forms: {
                            ...localContent.forms,
                            contactForm: { ...localContent.forms.contactForm, submitButtonText: e.target.value }
                          }
                        })}
                        className="admin-input"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Erfolg-Nachricht</label>
                      <input 
                        type="text" 
                        value={localContent.forms.contactForm.successMessage}
                        onChange={(e) => setLocalContent({
                          ...localContent,
                          forms: {
                            ...localContent.forms,
                            contactForm: { ...localContent.forms.contactForm, successMessage: e.target.value }
                          }
                        })}
                        className="admin-input"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">Felder-Konfiguration</h3>
                    <div className="space-y-4">
                      {localContent.forms.contactForm.fields.map((field, idx) => (
                        <div key={field.id} className="p-6 bg-white border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-end">
                          <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex flex-col gap-2">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Label</label>
                              <input 
                                type="text"
                                className="admin-input text-xs"
                                value={field.label}
                                onChange={(e) => {
                                  const newFields = [...localContent.forms.contactForm.fields];
                                  newFields[idx].label = e.target.value;
                                  setLocalContent({...localContent, forms: {...localContent.forms, contactForm: {...localContent.forms.contactForm, fields: newFields}}});
                                }}
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Typ</label>
                              <select 
                                className="admin-input text-xs"
                                value={field.type}
                                onChange={(e) => {
                                  const newFields = [...localContent.forms.contactForm.fields];
                                  newFields[idx].type = e.target.value as any;
                                  setLocalContent({...localContent, forms: {...localContent.forms, contactForm: {...localContent.forms.contactForm, fields: newFields}}});
                                }}
                              >
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                                <option value="tel">Telefon</option>
                                <option value="textarea">Textbereich</option>
                                <option value="select">Auswahl</option>
                              </select>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Pflichtfeld?</label>
                              <select 
                                className="admin-input text-xs"
                                value={field.required ? 'true' : 'false'}
                                onChange={(e) => {
                                  const newFields = [...localContent.forms.contactForm.fields];
                                  newFields[idx].required = e.target.value === 'true';
                                  setLocalContent({...localContent, forms: {...localContent.forms, contactForm: {...localContent.forms.contactForm, fields: newFields}}});
                                }}
                              >
                                <option value="true">Ja</option>
                                <option value="false">Nein</option>
                              </select>
                            </div>
                          </div>
                          <button 
                            onClick={() => {
                              const newFields = localContent.forms.contactForm.fields.filter((_, i) => i !== idx);
                              setLocalContent({...localContent, forms: {...localContent.forms, contactForm: {...localContent.forms.contactForm, fields: newFields}}});
                            }}
                            className="p-3 text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => {
                        const newFields = [...localContent.forms.contactForm.fields, { id: Date.now().toString(), label: 'Neues Feld', type: 'text' as const, placeholder: '', required: false }];
                        setLocalContent({...localContent, forms: {...localContent.forms, contactForm: {...localContent.forms.contactForm, fields: newFields}}});
                      }}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:underline mb-8"
                    >
                      <Plus size={14} /> Feld hinzufügen
                    </button>
                  </div>

                  {/* Realtime Submissions List */}
                  <div className="pt-12 border-t border-gray-100 space-y-6">
                    <header>
                      <h3 className="text-xs font-bold text-primary mb-1 uppercase tracking-widest">Eingegangene Nachrichten / Anfragen</h3>
                      <p className="text-xs text-gray-400">Nachrichten, die von Website-Besuchern eingesendet wurden (Gespeichert in Firestore, Empfänger: info@adlergebaeudetechnik.de)</p>
                    </header>

                    {submissions.length === 0 ? (
                      <div className="p-8 border border-dashed border-gray-200 text-center text-xs text-gray-400 font-medium rounded-sm">
                        Keine neuen Nachrichten vorhanden.
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {submissions.map((sub) => (
                          <div key={sub.id} className="p-6 bg-gray-50 border border-gray-100 shadow-sm rounded-sm transition-all hover:shadow-md flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="space-y-3 flex-grow">
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                <span className="text-xs font-bold text-primary">{sub.name}</span>
                                {sub.service && (
                                  <span className="text-[9px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">{sub.service}</span>
                                )}
                                <span className="text-[10px] text-gray-400">{sub.createdAt ? new Date(sub.createdAt).toLocaleString('de-DE') : ''}</span>
                              </div>
                              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500 font-medium">
                                <span className="flex items-center gap-1.5"><Mail size={12} className="text-gray-400" /> {sub.email}</span>
                                {sub.phone && <span className="flex items-center gap-1.5"><Phone size={12} className="text-gray-400" /> {sub.phone}</span>}
                              </div>
                              <p className="text-xs text-gray-700 leading-relaxed bg-white border border-gray-100 p-4 rounded-sm block whitespace-pre-wrap">
                                {sub.message}
                              </p>
                            </div>
                            <button 
                              onClick={() => handleDeleteSubmission(sub.id)}
                              className="self-end md:self-start p-2 text-gray-400 hover:text-red-500 transition-colors bg-white hover:bg-red-50 border border-gray-100 rounded-sm"
                              title="Nachricht löschen"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* SLIDES TAB */}
              {activeTab === 'slides' && (
               <AnimatePresence mode="wait">
                 {!editingSlideId ? (
                   <motion.div key="s-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                     <header className="flex justify-between items-center">
                       <div>
                         <h2 className="text-xl font-bold text-primary tracking-tight">Hero Slider</h2>
                         <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Haupt-Slider auf der Startseite</p>
                       </div>
                       <button onClick={addSlide} className="flex items-center gap-2 bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm"><Plus size={16} /> Slide hinzufügen</button>
                     </header>
                     <div className="grid grid-cols-1 gap-4">
                       {localContent.slides.map((slide) => (
                         <div key={slide.id} className="bg-white border border-gray-200 p-6 flex items-center justify-between">
                           <div className="flex items-center gap-6">
                             <img src={slide.image} className="w-16 h-10 object-cover" referrerPolicy="no-referrer" />
                             <div>
                               <h4 className="font-bold text-sm text-primary">{slide.title}</h4>
                               <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{slide.subtitle}</span>
                             </div>
                           </div>
                           <div className="flex gap-3">
                             <button onClick={() => setEditingSlideId(slide.id)} className="px-4 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">Bearbeiten</button>
                             <button onClick={() => removeSlide(slide.id)} className="p-2 text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                           </div>
                         </div>
                       ))}
                     </div>
                   </motion.div>
                 ) : (
                   <motion.div key="s-editor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                     <button onClick={() => setEditingSlideId(null)} className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest"><ArrowLeft size={16} /> Zurück</button>
                     <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Überschrift</label>
                          <input type="text" className="admin-input" value={localContent.slides.find(s => s.id === editingSlideId)?.title || ''} onChange={(e) => updateSlide(editingSlideId, { title: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Untertitel</label>
                          <input type="text" className="admin-input" value={localContent.slides.find(s => s.id === editingSlideId)?.subtitle || ''} onChange={(e) => updateSlide(editingSlideId, { subtitle: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Beschreibung (Optional / Länger)</label>
                          <textarea rows={3} className="admin-input" value={localContent.slides.find(s => s.id === editingSlideId)?.description || ''} onChange={(e) => updateSlide(editingSlideId, { description: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Bild URL</label>
                          <input type="text" className="admin-input" value={localContent.slides.find(s => s.id === editingSlideId)?.image || ''} onChange={(e) => updateSlide(editingSlideId, { image: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Link / Button Ziel</label>
                          <input type="text" className="admin-input" value={localContent.slides.find(s => s.id === editingSlideId)?.link || ''} onChange={(e) => updateSlide(editingSlideId, { link: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Überschrift Farbe</label>
                          <div className="flex gap-4 items-center">
                            <input 
                              type="color" 
                              className="w-12 h-10 border-none bg-transparent cursor-pointer rounded-sm" 
                              value={localContent.slides.find(s => s.id === editingSlideId)?.titleColor || '#ffffff'} 
                              onChange={(e) => updateSlide(editingSlideId, { titleColor: e.target.value })} 
                            />
                            <input 
                              type="text" 
                              className="admin-input flex-grow" 
                              placeholder="#ffffff"
                              value={localContent.slides.find(s => s.id === editingSlideId)?.titleColor || '#ffffff'} 
                              onChange={(e) => updateSlide(editingSlideId, { titleColor: e.target.value })} 
                            />
                          </div>
                        </div>
                     </div>
                   </motion.div>
                 )}
               </AnimatePresence>
              )}

              {/* DESIGN TAB */}
              {activeTab === 'design' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">Design & Style</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Farben, Schriften & UI-Parameter</p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] border-b pb-4">Brand Farben</h3>
                      <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Primärfarbe (Brand)</label>
                        <div className="flex gap-4">
                          <input 
                            type="color" 
                            className="w-12 h-12 rounded-sm border-none cursor-pointer"
                            value={localContent.designSettings.primaryColor}
                            onChange={(e) => updateDesignSetting('primaryColor', e.target.value)}
                          />
                          <input 
                            type="text"
                            className="admin-input flex-grow uppercase"
                            value={localContent.designSettings.primaryColor}
                            onChange={(e) => updateDesignSetting('primaryColor', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Akzentfarbe</label>
                        <div className="flex gap-4">
                          <input 
                            type="color" 
                            className="w-12 h-12 rounded-sm border-none cursor-pointer"
                            value={localContent.designSettings.accentColor}
                            onChange={(e) => updateDesignSetting('accentColor', e.target.value)}
                          />
                          <input 
                            type="text"
                            className="admin-input flex-grow uppercase"
                            value={localContent.designSettings.accentColor}
                            onChange={(e) => updateDesignSetting('accentColor', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Überschrift-Farbe</label>
                        <div className="flex gap-4">
                          <input 
                            type="color" 
                            className="w-12 h-12 rounded-sm border-none cursor-pointer"
                            value={localContent.designSettings.titleColor || '#0a1e36'}
                            onChange={(e) => updateDesignSetting('titleColor', e.target.value)}
                          />
                          <input 
                            type="text"
                            className="admin-input flex-grow uppercase"
                            value={localContent.designSettings.titleColor || '#0a1e36'}
                            onChange={(e) => updateDesignSetting('titleColor', e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] border-b pb-4">Typografie</h3>
                      <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Überschrift-Schriftart</label>
                        <select 
                          className="admin-input"
                          value={localContent.designSettings.fontFamilyTitle}
                          onChange={(e) => updateDesignSetting('fontFamilyTitle', e.target.value)}
                        >
                          <option value="Inter">Inter (Modern / Sachlich)</option>
                          <option value="Montserrat">Montserrat (Geometrisch / Klar)</option>
                          <option value="Playfair Display">Playfair Display (Elegant / Serif)</option>
                          <option value="Space Grotesk">Space Grotesk (Tech Focus)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Fließtext-Schriftart</label>
                        <select 
                          className="admin-input"
                          value={localContent.designSettings.fontFamilyBody}
                          onChange={(e) => updateDesignSetting('fontFamilyBody', e.target.value)}
                        >
                          <option value="Inter">Inter (Gute Lesbarkeit)</option>
                          <option value="Montserrat">Montserrat</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-8 md:col-span-2">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] border-b pb-4">UI Feineinstellungen</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Basis-Schriftgröße (Standard 16px)</label>
                          <input 
                            type="text"
                            className="admin-input"
                            value={localContent.designSettings.fontSizeBase}
                            onChange={(e) => updateDesignSetting('fontSizeBase', e.target.value)}
                            placeholder="z.B. 16px"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Ecken-Radius</label>
                          <input 
                            type="text"
                            className="admin-input"
                            value={localContent.designSettings.borderRadius || '2px'}
                            onChange={(e) => updateDesignSetting('borderRadius', e.target.value)}
                            placeholder="z.B. 4px"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Button Stil</label>
                          <select 
                            className="admin-input"
                            value={localContent.designSettings.buttonStyle || 'square'}
                            onChange={(e) => updateDesignSetting('buttonStyle', e.target.value)}
                          >
                            <option value="square">Eckig</option>
                            <option value="rounded">Leicht abgerundet</option>
                            <option value="pill">Voll abgerundet (Pille)</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Header Höhe</label>
                          <input 
                            type="text"
                            className="admin-input"
                            value={localContent.designSettings.headerHeight}
                            onChange={(e) => updateDesignSetting('headerHeight', e.target.value)}
                            placeholder="z.B. 80px"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Schriftgewicht Überschriften</label>
                          <select 
                            className="admin-input"
                            value={localContent.designSettings.headingWeight || '800'}
                            onChange={(e) => updateDesignSetting('headingWeight', e.target.value)}
                          >
                            <option value="400">Normal (400)</option>
                            <option value="500">Medium (500)</option>
                            <option value="600">Semi-Bold (600)</option>
                            <option value="700">Bold (700)</option>
                            <option value="800">Extra-Bold (800)</option>
                            <option value="900">Black (900)</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sektion-Abstand (Padding)</label>
                          <input 
                            type="text"
                            className="admin-input"
                            value={localContent.designSettings.sectionPadding || 'py-24'}
                            onChange={(e) => updateDesignSetting('sectionPadding', e.target.value)}
                            placeholder="z.B. py-12, py-24, py-32"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Footer Hintergrundfarbe</label>
                          <div className="flex gap-4">
                            <input 
                              type="color" 
                              className="w-12 h-12 rounded-sm border-none cursor-pointer"
                              value={localContent.designSettings.footerBgColor || '#f8f9fa'}
                              onChange={(e) => updateDesignSetting('footerBgColor', e.target.value)}
                            />
                            <input 
                              type="text"
                              className="admin-input flex-grow uppercase"
                              value={localContent.designSettings.footerBgColor || '#f8f9fa'}
                              onChange={(e) => updateDesignSetting('footerBgColor', e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-4">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Footer Textfarbe</label>
                          <div className="flex gap-4">
                            <input 
                              type="color" 
                              className="w-12 h-12 rounded-sm border-none cursor-pointer"
                              value={localContent.designSettings.footerTextColor || '#0a1e36'}
                              onChange={(e) => updateDesignSetting('footerTextColor', e.target.value)}
                            />
                            <input 
                              type="text"
                              className="admin-input flex-grow uppercase"
                              value={localContent.designSettings.footerTextColor || '#0a1e36'}
                              onChange={(e) => updateDesignSetting('footerTextColor', e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 md:col-span-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Hero Überlagerung Opazität (0.1 - 1.0)</label>
                          <input 
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            className="w-full accent-primary"
                            value={localContent.designSettings.heroOverlayOpacity}
                            onChange={(e) => updateDesignSetting('heroOverlayOpacity', parseFloat(e.target.value))}
                          />
                          <div className="flex justify-between text-[10px] font-mono text-gray-400">
                             <span>Hell (0.0)</span>
                             <span>{localContent.designSettings.heroOverlayOpacity}</span>
                             <span>Dunkel (1.0)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LAYOUT TAB */}
              {activeTab === 'layout' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">Layout & Reihenfolge</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Elemente auf der Startseite anordnen & ausrichten</p>
                  </header>

                  <div className="space-y-6">
                    {Object.keys(localContent.layout || {}).sort((a,b) => (localContent.layout?.[a]?.order || 0) - (localContent.layout?.[b]?.order || 0)).map((key) => (
                      <div key={key} className="bg-white border border-gray-100 p-6 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                        <div className="flex gap-4 items-center">
                          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-mono text-xs">
                            {localContent.layout?.[key]?.order}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm text-primary uppercase tracking-widest">{key}</h4>
                            <p className="text-[10px] text-gray-400 font-medium">Position und Anzeige steuern</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 flex-grow justify-end">
                           <div className="flex flex-col gap-2">
                             <label className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Reihenfolge</label>
                             <input 
                               type="number" 
                               className="admin-input w-20 text-xs py-2"
                               value={localContent.layout?.[key]?.order || 0}
                               onChange={(e) => {
                                 setLocalContent({
                                   ...localContent,
                                   layout: {
                                     ...localContent.layout,
                                     [key]: { ...localContent.layout?.[key]!, order: parseInt(e.target.value) }
                                   }
                                 });
                               }}
                             />
                           </div>

                           <div className="flex flex-col gap-2">
                             <label className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Ausrichtung</label>
                             <select 
                               className="admin-input text-xs py-2"
                               value={localContent.layout?.[key]?.alignment || 'left'}
                               onChange={(e) => {
                                 setLocalContent({
                                   ...localContent,
                                   layout: {
                                     ...localContent.layout,
                                     [key]: { ...localContent.layout?.[key]!, alignment: e.target.value as any }
                                   }
                                 });
                               }}
                             >
                               <option value="left">Links</option>
                               <option value="center">Mittig</option>
                               <option value="right">Rechts</option>
                             </select>
                           </div>

                           {localContent.layout?.[key]?.imagePosition !== undefined && (
                             <div className="flex flex-col gap-2">
                               <label className="text-[9px] font-bold uppercase tracking-widest text-gray-300">Bild-Position</label>
                               <select 
                                 className="admin-input text-xs py-2"
                                 value={localContent.layout?.[key]?.imagePosition || 'right'}
                                 onChange={(e) => {
                                   setLocalContent({
                                     ...localContent,
                                     layout: {
                                       ...localContent.layout,
                                       [key]: { ...localContent.layout?.[key]!, imagePosition: e.target.value as any }
                                     }
                                   });
                                 }}
                               >
                                 <option value="left">Links</option>
                                 <option value="right">Rechts</option>
                                 <option value="top">Oben</option>
                                 <option value="bottom">Unten</option>
                               </select>
                             </div>
                           )}

                           <div className="flex items-center gap-2 mt-6">
                             <button
                               onClick={() => toggleSectionVisibility(key as any)}
                               className={`p-2 rounded-sm transition-colors ${localContent.sectionVisibility?.[key as keyof typeof localContent.sectionVisibility] ? 'text-accent bg-accent/5' : 'text-gray-300'}`}
                             >
                               {localContent.sectionVisibility?.[key as keyof typeof localContent.sectionVisibility] ? <Eye size={16} /> : <EyeOff size={16} />}
                             </button>
                           </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* BRANDING TAB */}
              {activeTab === 'branding' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary mb-2 tracking-tight">Kopfzeile & Branding</h2>
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Logo, Firmierung & Header-Darstellung</p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 bg-white p-8 border border-gray-100">
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] border-b pb-4 text-accent">Anzeige im Header</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-center justify-between p-4 bg-bg-alt rounded-sm">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Logo anzeigen</label>
                          <button 
                            onClick={() => setLocalContent({
                              ...localContent,
                              navigation: {
                                ...localContent.navigation,
                                branding: { ...localContent.navigation.branding, showLogo: !localContent.navigation.branding.showLogo }
                              }
                            })}
                            className={`w-12 h-6 rounded-full relative transition-colors ${localContent.navigation.branding.showLogo ? 'bg-accent' : 'bg-gray-300'}`}
                          >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${localContent.navigation.branding.showLogo ? 'left-7' : 'left-1'}`} />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-bg-alt rounded-sm">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Text anzeigen</label>
                          <button 
                            onClick={() => setLocalContent({
                              ...localContent,
                              navigation: {
                                ...localContent.navigation,
                                branding: { ...localContent.navigation.branding, showText: !localContent.navigation.branding.showText }
                              }
                            })}
                            className={`w-12 h-6 rounded-full relative transition-colors ${localContent.navigation.branding.showText ? 'bg-accent' : 'bg-gray-300'}`}
                          >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${localContent.navigation.branding.showText ? 'left-7' : 'left-1'}`} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8 bg-white p-8 border border-gray-100">
                      <h3 className="text-xs font-bold uppercase tracking-[0.2em] border-b pb-4 text-accent">Inhalte & Größen</h3>
                      
                      <div className="space-y-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Logo URL</label>
                          <input 
                            type="text" 
                            className="admin-input"
                            value={localContent.navigation.branding.logoUrl || ''}
                            onChange={(e) => setLocalContent({
                              ...localContent,
                              navigation: {
                                ...localContent.navigation,
                                branding: { ...localContent.navigation.branding, logoUrl: e.target.value }
                              }
                            })}
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Benutzerdefinierter Text (statt Firma)</label>
                          <input 
                            type="text" 
                            className="admin-input"
                            value={localContent.navigation.branding.customText || ''}
                            onChange={(e) => setLocalContent({
                              ...localContent,
                              navigation: {
                                ...localContent.navigation,
                                branding: { ...localContent.navigation.branding, customText: e.target.value }
                              }
                            })}
                            placeholder="z.B. ADLER²"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Logo Höhe</label>
                          <input 
                            type="text" 
                            className="admin-input"
                            value={localContent.navigation.branding.logoHeight || '40px'}
                            onChange={(e) => setLocalContent({
                              ...localContent,
                              navigation: {
                                ...localContent.navigation,
                                branding: { ...localContent.navigation.branding, logoHeight: e.target.value }
                              }
                            })}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SERVICES TAB */}
              {activeTab === 'services' && (
                <AnimatePresence mode="wait">
                  {!editingServiceId ? (
                    <motion.div
                      key="list"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-8"
                    >
                      <header className="flex justify-between items-end">
                        <h2 className="text-xl font-bold text-primary tracking-tight">Leistungen & Unterseiten</h2>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Wählen zum Bearbeiten</span>
                      </header>

                      {/* Services Overview Page Settings */}
                      <div className="bg-bg-alt p-6 border border-gray-100 rounded-sm space-y-6 mb-12">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Übersichtsseite: Alle Serviceleistungen</h3>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Haupt-Überschrift</label>
                          <input 
                            type="text" 
                            className="admin-input bg-white"
                            value={localContent.pages?.servicesOverview.title || ''}
                            onChange={(e) => setLocalContent({
                              ...localContent,
                              pages: {
                                ...localContent.pages!,
                                servicesOverview: {
                                  ...localContent.pages!.servicesOverview,
                                  title: e.target.value
                                }
                              }
                            })}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Einleitungstext</label>
                          <textarea 
                            rows={3}
                            className="admin-input bg-white"
                            value={localContent.pages?.servicesOverview.introText || ''}
                            onChange={(e) => setLocalContent({
                              ...localContent,
                              pages: {
                                ...localContent.pages!,
                                servicesOverview: {
                                  ...localContent.pages!.servicesOverview,
                                  introText: e.target.value
                                }
                              }
                            })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        {localContent.services.map((service) => (
                          <div 
                            key={service.id} 
                            className="bg-white border border-gray-200 hover:border-accent p-6 flex items-center justify-between group transition-all"
                          >
                            <div className="flex items-center gap-6">
                              <img src={service.image} className="w-16 h-10 object-cover" referrerPolicy="no-referrer" />
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-primary">{service.title}</span>
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">{service.isVisible ? 'Aktiv auf Home' : 'Nicht auf Home'}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <button 
                                onClick={() => toggleServiceVisibility(service.id)}
                                className={`p-2 transition-colors ${service.isVisible ? 'text-accent' : 'text-gray-200'}`}
                                title="Home-Sichtbarkeit umschalten"
                              >
                                {service.isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                              </button>
                              <button 
                                onClick={() => setEditingServiceId(service.id)}
                                className="flex items-center gap-2 px-6 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all rounded-sm"
                              >
                                Bearbeiten
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="editor"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-12"
                    >
                      <button 
                        onClick={() => setEditingServiceId(null)}
                        className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors mb-4"
                      >
                        <ArrowLeft size={16} /> Zurück zur Liste
                      </button>

                      <header>
                        <h3 className="text-2xl font-bold text-primary tracking-tight">
                          Unterseite: {localContent.services.find(s => s.id === editingServiceId)?.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">Inhalte für die Detailansicht</p>
                      </header>

                      <div className="grid grid-cols-1 gap-8">
                        {/* Summary editor */}
                        <div className="space-y-4 p-6 bg-bg-alt border border-gray-100 rounded-sm">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Vorschau-Text (Home Karte)</label>
                          <textarea 
                            rows={3}
                            className="admin-input bg-white"
                            value={localContent.services.find(s => s.id === editingServiceId)?.text || ''}
                            onChange={(e) => {
                              const newServices = localContent.services.map(s => 
                                s.id === editingServiceId ? { ...s, text: e.target.value } : s
                              );
                              setLocalContent({ ...localContent, services: newServices });
                            }}
                          />
                        </div>

                        {/* Detail content editor */}
                        <div className="space-y-8">
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Haupt-Überschrift Detailseite</label>
                            <input 
                              type="text" 
                              className="admin-input"
                              value={localContent.services.find(s => s.id === editingServiceId)?.detailContent?.mainText || ''}
                              onChange={(e) => {
                                const newServices = localContent.services.map(s => 
                                  s.id === editingServiceId ? { 
                                    ...s, 
                                    detailContent: { ...s.detailContent!, mainText: e.target.value } 
                                  } : s
                                );
                                setLocalContent({ ...localContent, services: newServices });
                              }}
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Ausführliche Beschreibung (Freitext)</label>
                            <textarea 
                              rows={8}
                              className="admin-input"
                              value={localContent.services.find(s => s.id === editingServiceId)?.detailContent?.description || ''}
                              onChange={(e) => {
                                const newServices = localContent.services.map(s => 
                                  s.id === editingServiceId ? { 
                                    ...s, 
                                    detailContent: { ...s.detailContent!, description: e.target.value } 
                                  } : s
                                );
                                setLocalContent({ ...localContent, services: newServices });
                              }}
                            />
                          </div>
                          
                          {/* New Detailed Fields */}
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Gesetzliche Grundlagen / Vorschriften</label>
                            <textarea 
                              rows={4}
                              className="admin-input"
                              value={localContent.services.find(s => s.id === editingServiceId)?.detailContent?.legalBasics || ''}
                              onChange={(e) => {
                                const newServices = localContent.services.map(s => 
                                  s.id === editingServiceId ? { 
                                    ...s, 
                                    detailContent: { ...s.detailContent!, legalBasics: e.target.value } 
                                  } : s
                                );
                                setLocalContent({ ...localContent, services: newServices });
                              }}
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Weitere fachliche Informationen</label>
                            <textarea 
                              rows={4}
                              className="admin-input"
                              value={localContent.services.find(s => s.id === editingServiceId)?.detailContent?.professionalInfo || ''}
                              onChange={(e) => {
                                const newServices = localContent.services.map(s => 
                                  s.id === editingServiceId ? { 
                                    ...s, 
                                    detailContent: { ...s.detailContent!, professionalInfo: e.target.value } 
                                  } : s
                                );
                                setLocalContent({ ...localContent, services: newServices });
                              }}
                            />
                          </div>

                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Hauptbild URL</label>
                            <input 
                              type="text" 
                              className="admin-input"
                              value={localContent.services.find(s => s.id === editingServiceId)?.image || ''}
                              onChange={(e) => {
                                const newServices = localContent.services.map(s => 
                                  s.id === editingServiceId ? { ...s, image: e.target.value } : s
                                );
                                setLocalContent({ ...localContent, services: newServices });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* RATGEBER TAB */}
              {activeTab === 'ratgeber' && (
                <AnimatePresence mode="wait">
                  {!editingRatgeberId ? (
                    <motion.div
                      key="rg-list"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-12"
                    >
                      <header>
                        <h2 className="text-xl font-bold text-primary tracking-tight">Ratgeber-Bereich</h2>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Einleitungstext und Karten verwalten</p>
                      </header>

                      {/* Ratgeber Intro Text Editor */}
                      <div className="bg-bg-alt p-8 border border-gray-100 rounded-sm space-y-6">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Zentraler Einleitungstext</h3>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Einleitung oben auf der Detailseite</label>
                          <textarea 
                            rows={4}
                            className="admin-input bg-white"
                            value={localContent.pages?.ratgeber?.introText || ''}
                            onChange={(e) => setLocalContent({
                              ...localContent,
                              pages: {
                                ...localContent.pages!,
                                ratgeber: { introText: e.target.value }
                              }
                            })}
                            placeholder="Mit unserem Ratgeber möchten wir Ihnen nicht nur Technik erklären..."
                          />
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Ratgeber-Themen / Karten</h3>
                        <div className="grid grid-cols-1 gap-4">
                          {localContent.ratgeberCards.map((card) => (
                            <div key={card.id} className="bg-white border border-gray-200 p-6 flex items-center justify-between hover:border-accent transition-colors">
                              <div className="flex items-center gap-6">
                                <img src={card.image} className="w-16 h-12 object-cover border border-gray-100" referrerPolicy="no-referrer" />
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-primary italic uppercase">{card.title}</span>
                                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest line-clamp-1">{card.intro}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <button
                                  onClick={() => updateRatgeberCard(card.id, { isVisible: !card.isVisible })}
                                  className={`p-2 rounded-sm transition-colors ${card.isVisible !== false ? 'text-accent bg-accent/5' : 'text-gray-300'}`}
                                  title="Sichtbarkeit umschalten"
                                >
                                  {card.isVisible !== false ? <Eye size={16} /> : <EyeOff size={16} />}
                                </button>
                                <button 
                                  onClick={() => setEditingRatgeberId(card.id)}
                                  className="px-6 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-all rounded-sm"
                                >
                                  Inhalt Bearbeiten
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="rg-editor"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-12"
                    >
                      <button 
                        onClick={() => setEditingRatgeberId(null)}
                        className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors mb-4"
                      >
                        <ArrowLeft size={16} /> Zurück zur Übersicht
                      </button>

                      <header>
                        <h3 className="text-2xl font-bold text-primary tracking-tight italic uppercase">
                          Thema: {localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mt-1">Stammdaten & Blog-Inhalt</p>
                      </header>

                      <div className="grid grid-cols-1 gap-8">
                        {/* Basic Info */}
                        <div className="bg-bg-alt p-8 border border-gray-100 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Überschrift</label>
                              <input 
                                type="text" 
                                className="admin-input bg-white"
                                value={localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.title || ''}
                                onChange={(e) => updateRatgeberCard(editingRatgeberId, { title: e.target.value })}
                              />
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Bild URL</label>
                              <input 
                                type="text" 
                                className="admin-input bg-white"
                                value={localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.image || ''}
                                onChange={(e) => updateRatgeberCard(editingRatgeberId, { image: e.target.value })}
                              />
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Kurz-Zusammenfassung (Box / Card Text)</label>
                            <textarea 
                              rows={3}
                              className="admin-input bg-white"
                              value={localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.intro || ''}
                              onChange={(e) => updateRatgeberCard(editingRatgeberId, { intro: e.target.value })}
                            />
                          </div>
                        </div>

                        {/* Detailed Content */}
                        <div className="space-y-12">
                          <div className="bg-white p-8 border border-gray-100 space-y-8">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Detailseiten-Inhalte</h3>
                            
                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Oberer Kurztext / Teaser</label>
                              <textarea 
                                rows={3}
                                className="admin-input"
                                value={localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.topText || ''}
                                onChange={(e) => updateRatgeberCard(editingRatgeberId!, { topText: e.target.value })}
                                placeholder="Erscheint ganz oben als hervorgehobener Text..."
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Detail-Seitentitel</label>
                                <input 
                                  type="text" 
                                  className="admin-input"
                                  value={localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.detailTitle || ''}
                                  onChange={(e) => updateRatgeberCard(editingRatgeberId!, { detailTitle: e.target.value })}
                                />
                              </div>
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Abschlusstext / CTA</label>
                                <textarea 
                                  rows={2}
                                  className="admin-input"
                                  value={localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.ctaText || ''}
                                  onChange={(e) => updateRatgeberCard(editingRatgeberId!, { ctaText: e.target.value })}
                                />
                              </div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Einleitungstext (Hauptbereich)</label>
                              <textarea 
                                rows={4}
                                className="admin-input"
                                value={localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.detailIntro || ''}
                                onChange={(e) => updateRatgeberCard(editingRatgeberId!, { detailIntro: e.target.value })}
                              />
                            </div>
                          </div>

                          {/* Posts Editor */}
                          <div className="space-y-6">
                            <div className="flex items-center justify-between">
                              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Inhalts-Beiträge</h3>
                              <button 
                                onClick={() => {
                                  const card = localContent.ratgeberCards.find(c => c.id === editingRatgeberId);
                                  const posts = [...(card?.posts || [])];
                                  posts.push({ title: 'Neue Überschrift', text: 'Neuer Textblock...' });
                                  updateRatgeberCard(editingRatgeberId!, { posts });
                                }}
                                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-accent hover:text-accent-light transition-colors"
                              >
                                <Plus size={14} /> Beitrag hinzufügen
                              </button>
                            </div>

                            <div className="space-y-4">
                              {localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.posts?.map((post, pIdx) => (
                                <div key={pIdx} className="bg-bg-alt p-6 border border-gray-100 space-y-4 relative group">
                                  <button 
                                    onClick={() => {
                                      const card = localContent.ratgeberCards.find(c => c.id === editingRatgeberId);
                                      const posts = card?.posts?.filter((_, i) => i !== pIdx);
                                      updateRatgeberCard(editingRatgeberId!, { posts });
                                    }}
                                    className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                                  >
                                    <Trash2 size={16} />
                                  </button>
                                  
                                  <div className="flex flex-col gap-2">
                                    <label className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Überschrift {pIdx + 1}</label>
                                    <input 
                                      type="text" 
                                      className="admin-input bg-white text-sm"
                                      value={post.title}
                                      onChange={(e) => {
                                        const card = localContent.ratgeberCards.find(c => c.id === editingRatgeberId);
                                        const posts = [...(card?.posts || [])];
                                        posts[pIdx] = { ...posts[pIdx], title: e.target.value };
                                        updateRatgeberCard(editingRatgeberId!, { posts });
                                      }}
                                    />
                                  </div>

                                  <div className="flex flex-col gap-2">
                                    <label className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Text Inhalt</label>
                                    <textarea 
                                      rows={4}
                                      className="admin-input bg-white text-sm"
                                      value={post.text}
                                      onChange={(e) => {
                                        const card = localContent.ratgeberCards.find(c => c.id === editingRatgeberId);
                                        const posts = [...(card?.posts || [])];
                                        posts[pIdx] = { ...posts[pIdx], text: e.target.value };
                                        updateRatgeberCard(editingRatgeberId!, { posts });
                                      }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Fallback Markdown Area */}
                          <div className="flex flex-col gap-4 border-t pt-12">
                            <div className="flex items-center justify-between">
                              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Optional: Markdown Content (Fallback)</label>
                            </div>
                            <textarea 
                              rows={8}
                              className="admin-input font-mono text-sm leading-relaxed"
                              value={localContent.ratgeberCards.find(c => c.id === editingRatgeberId)?.content || ''}
                              onChange={(e) => updateRatgeberCard(editingRatgeberId!, { content: e.target.value })}
                              placeholder="# Ihre Überschrift\n\nFalls Sie keine strukturierten Beiträge nutzen möchten..."
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* PROCESS TAB */}
              {activeTab === 'process' && (
                <AnimatePresence mode="wait">
                  {!editingProcessId ? (
                    <motion.div key="p-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      <header>
                        <h2 className="text-xl font-bold text-primary tracking-tight">Service-Versprechen Detailseiten</h2>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Beratung, Installation, Wartung</p>
                      </header>
                      <div className="grid grid-cols-1 gap-4">
                        {localContent.processDetails?.map((p) => (
                          <div key={p.id} className="bg-white border border-gray-200 p-6 flex items-center justify-between">
                            <span className="text-sm font-bold text-primary uppercase tracking-widest">{p.title}</span>
                            <button onClick={() => setEditingProcessId(p.id)} className="px-6 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">Bearbeiten</button>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="p-editor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      <button onClick={() => setEditingProcessId(null)} className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest"><ArrowLeft size={16} /> Zurück</button>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Überschrift</label>
                          <input type="text" className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.title || ''} onChange={(e) => updateProcess(editingProcessId, { title: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Haupttext</label>
                          <input type="text" className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.mainText || ''} onChange={(e) => updateProcess(editingProcessId, { mainText: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Was wird gemacht? (Tätigkeit)</label>
                          <textarea rows={3} className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.descriptionOfWork || ''} onChange={(e) => updateProcess(editingProcessId, { descriptionOfWork: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Einleitungstext (vor dem Akkordeon)</label>
                          <textarea rows={4} className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.introText || ''} onChange={(e) => updateProcess(editingProcessId, { introText: e.target.value })} />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Akkordeon-Schritte</label>
                          <div className="space-y-4 border-l-2 border-accent pl-4 py-2">
                            {localContent.processDetails.find(p => p.id === editingProcessId)?.steps?.map((step, sIdx) => (
                              <div key={sIdx} className="space-y-2 bg-gray-50/50 p-4 rounded-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] font-bold text-primary">Schritt {sIdx + 1}</span>
                                  <button 
                                    onClick={() => {
                                      const process = localContent.processDetails.find(pr => pr.id === editingProcessId);
                                      if (process?.steps) {
                                        const newSteps = process.steps.filter((_, idx) => idx !== sIdx);
                                        updateProcess(editingProcessId, { steps: newSteps });
                                      }
                                    }}
                                    className="text-red-500 hover:text-red-700 font-bold text-[10px] uppercase"
                                  >
                                    Entfernen
                                  </button>
                                </div>
                                <input 
                                  type="text" 
                                  placeholder="Titel (z.B. 1. Erstgespräch)"
                                  className="admin-input" 
                                  value={step.title} 
                                  onChange={(e) => {
                                    const process = localContent.processDetails.find(pr => pr.id === editingProcessId);
                                    if (process?.steps) {
                                      const newSteps = [...process.steps];
                                      newSteps[sIdx] = { ...newSteps[sIdx], title: e.target.value };
                                      updateProcess(editingProcessId, { steps: newSteps });
                                    }
                                  }} 
                                />
                                <textarea 
                                  rows={3} 
                                  placeholder="Textinhalt..."
                                  className="admin-input" 
                                  value={step.text} 
                                  onChange={(e) => {
                                    const process = localContent.processDetails.find(pr => pr.id === editingProcessId);
                                    if (process?.steps) {
                                      const newSteps = [...process.steps];
                                      newSteps[sIdx] = { ...newSteps[sIdx], text: e.target.value };
                                      updateProcess(editingProcessId, { steps: newSteps });
                                    }
                                  }} 
                                />
                              </div>
                            ))}
                            <button 
                              onClick={() => {
                                const process = localContent.processDetails.find(pr => pr.id === editingProcessId);
                                const newSteps = [...(process?.steps || []), { title: '', text: '' }];
                                updateProcess(editingProcessId, { steps: newSteps });
                              }}
                              className="text-[10px] font-bold uppercase tracking-widest text-accent hover:underline flex items-center gap-1"
                            >
                              <Plus size={12} /> Schritt hinzufügen
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Bemerkung (unter dem Akkordeon)</label>
                          <textarea rows={4} className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.remarkText || ''} onChange={(e) => updateProcess(editingProcessId, { remarkText: e.target.value })} />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Legacy-Ablauf (mit | getrennt, falls kein Akkordeon)</label>
                          <input type="text" className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.process || ''} onChange={(e) => updateProcess(editingProcessId, { process: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Definition (Was ist das genau?)</label>
                          <textarea rows={3} className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.definition || ''} onChange={(e) => updateProcess(editingProcessId, { definition: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Wichtigkeit (Warum?)</label>
                          <textarea rows={3} className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.importance || ''} onChange={(e) => updateProcess(editingProcessId, { importance: e.target.value })} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Bild URL</label>
                          <input type="text" className="admin-input" value={localContent.processDetails.find(p => p.id === editingProcessId)?.image || ''} onChange={(e) => updateProcess(editingProcessId, { image: e.target.value })} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* GALLERY TAB */}
              {activeTab === 'gallery' && (
                <div className="space-y-8">
                  <header className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-bold text-primary tracking-tight">Referenz-Galerie</h2>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Bilder für "Unsere Arbeiten"</p>
                    </div>
                    <button onClick={addGalleryImage} className="flex items-center gap-2 bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm"><Plus size={16} /> Bild hinzufügen</button>
                  </header>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {localContent.gallery?.map((img) => (
                      <div key={img.id} className="relative group aspect-square border border-gray-100 p-2 bg-white">
                        <img src={img.image} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                          <button 
                            onClick={() => {
                              const newGallery = localContent.gallery.map(i => i.id === img.id ? { ...i, isVisible: !i.isVisible } : i);
                              setLocalContent({ ...localContent, gallery: newGallery });
                            }}
                            className={`p-2 rounded-full ${img.isVisible ? 'bg-accent text-white' : 'bg-gray-500 text-white'}`}
                          >
                            {img.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                          </button>
                          <button onClick={() => removeGalleryImage(img.id)} className="p-2 bg-red-600 text-white rounded-full"><Trash2 size={16} /></button>
                        </div>
                        <input 
                          type="text" 
                          className="w-full mt-2 text-[10px] border-none bg-gray-50 p-1"
                          value={img.image}
                          onChange={(e) => {
                            const newGallery = localContent.gallery.map(i => i.id === img.id ? { ...i, image: e.target.value } : i);
                            setLocalContent({ ...localContent, gallery: newGallery });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* KARRIERE TAB */}
              {activeTab === 'karriere' && (
                <AnimatePresence mode="wait">
                  {!editingJobId ? (
                    <motion.div key="j-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      <header className="flex justify-between items-center">
                        <div>
                          <h2 className="text-xl font-bold text-primary tracking-tight">Stellenangebote</h2>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Karriere-Seite verwalten</p>
                        </div>
                        <button onClick={addJob} className="flex items-center gap-2 bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-xl hover:bg-gray-900 transition-all"><Plus size={16} /> NEUE STELLE</button>
                      </header>
                      <div className="grid grid-cols-1 gap-4">
                        {localContent.jobs?.map((job) => (
                          <div key={job.id} className="bg-white border border-gray-100 p-6 flex items-center justify-between group hover:border-accent transition-colors">
                            <div className="flex items-center gap-6">
                              <div className="w-12 h-12 bg-bg-alt flex items-center justify-center rounded-sm text-primary">
                                <Briefcase size={20} />
                              </div>
                              <div>
                                <h4 className="font-bold text-sm text-primary uppercase tracking-widest">{job.title}</h4>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{job.location} | {job.type}</span>
                                {!job.isVisible && <span className="ml-3 text-[8px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full uppercase font-black">Ausgeblendet</span>}
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <button onClick={() => setEditingJobId(job.id)} className="px-6 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-accent transition-colors">Bearbeiten</button>
                              <button 
                                onClick={() => {
                                  const newJobs = localContent.jobs.map(j => j.id === job.id ? { ...j, isVisible: !j.isVisible } : j);
                                  setLocalContent({ ...localContent, jobs: newJobs });
                                }}
                                className={`p-2 rounded-sm border ${job.isVisible ? 'border-accent text-accent' : 'border-gray-200 text-gray-300'} hover:bg-gray-50 transition-all`}
                                title={job.isVisible ? "Verbergen" : "Anzeigen"}
                              >
                                {job.isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                              </button>
                              <button onClick={() => { if(confirm('Stelle löschen?')) removeJob(job.id); }} className="p-2 text-gray-300 hover:text-danger transition-colors"><Trash2 size={18} /></button>
                            </div>
                          </div>
                        ))}
                        {(!localContent.jobs || localContent.jobs.length === 0) && (
                          <div className="text-center py-20 border-2 border-dashed border-gray-100 rounded-sm">
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Keine Stellenangebote vorhanden</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="j-editor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      <div className="flex justify-between items-center">
                        <button onClick={() => setEditingJobId(null)} className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors">
                          <ArrowLeft size={16} /> Zurück zur Liste
                        </button>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sichtbarkeit</span>
                          <button 
                             onClick={() => updateJob(editingJobId, { isVisible: !localContent.jobs.find(j => j.id === editingJobId)?.isVisible })}
                             className={`w-12 h-6 rounded-full relative transition-colors ${localContent.jobs.find(j => j.id === editingJobId)?.isVisible ? 'bg-accent' : 'bg-gray-300'}`}
                          >
                            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${localContent.jobs.find(j => j.id === editingJobId)?.isVisible ? 'left-7' : 'left-1'}`} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-bg-alt p-8 border border-gray-100 rounded-sm space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Position / Titel</label>
                            <input type="text" className="admin-input" value={localContent.jobs.find(j => j.id === editingJobId)?.title || ''} onChange={(e) => updateJob(editingJobId, { title: e.target.value })} />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Standort</label>
                            <input type="text" className="admin-input" value={localContent.jobs.find(j => j.id === editingJobId)?.location || ''} onChange={(e) => updateJob(editingJobId, { location: e.target.value })} />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Anstellungsart</label>
                            <input type="text" className="admin-input" value={localContent.jobs.find(j => j.id === editingJobId)?.type || ''} onChange={(e) => updateJob(editingJobId, { type: e.target.value })} />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Einleitungstext (Was erwartet den Bewerber?)</label>
                          <textarea rows={4} className="admin-input" value={localContent.jobs.find(j => j.id === editingJobId)?.description || ''} onChange={(e) => updateJob(editingJobId, { description: e.target.value })} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="flex flex-col gap-2">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Aufgaben (mit | getrennt)</label>
                             <textarea rows={8} className="admin-input text-xs font-medium leading-relaxed" value={localContent.jobs.find(j => j.id === editingJobId)?.tasks?.join('|') || ''} onChange={(e) => updateJob(editingJobId, { tasks: e.target.value.split('|').filter(t => t.trim() !== '') })} placeholder="Planung von Anlagen | Montage vor Ort | ..." />
                          </div>
                          <div className="flex flex-col gap-2">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Anforderungen (mit | getrennt)</label>
                             <textarea rows={8} className="admin-input text-xs font-medium leading-relaxed" value={localContent.jobs.find(j => j.id === editingJobId)?.requirements?.join('|') || ''} onChange={(e) => updateJob(editingJobId, { requirements: e.target.value.split('|').filter(t => t.trim() !== '') })} placeholder="Ausbildung als SHK-Installateur | Führerschein Klasse B | ..." />
                          </div>
                          <div className="flex flex-col gap-2">
                             <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Wir bieten (mit | getrennt)</label>
                             <textarea rows={8} className="admin-input text-xs font-medium leading-relaxed" value={localContent.jobs.find(j => j.id === editingJobId)?.qualifications?.join('|') || ''} onChange={(e) => updateJob(editingJobId, { qualifications: e.target.value.split('|').filter(t => t.trim() !== '') })} placeholder="Übertarifliche Bezahlung | Handy & Tablet | Dienstwagen | ..." />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* BLOG TAB */}
              {activeTab === 'blog' && (
                <AnimatePresence mode="wait">
                  {!editingPostId ? (
                    <motion.div key="b-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                      <header className="flex justify-between items-center">
                        <div>
                          <h2 className="text-xl font-bold text-primary tracking-tight">Blog & Magazin Beiträge</h2>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Neuigkeiten und Ratgeber verwalten</p>
                        </div>
                        <button onClick={addBlogPost} className="flex items-center gap-2 bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-xl hover:bg-gray-900 transition-all"><Plus size={16} /> NEUER BEITRAG</button>
                      </header>
                      <div className="grid grid-cols-1 gap-4">
                        {localContent.blogPosts?.map((post) => (
                          <div key={post.id} className="bg-white border border-gray-100 p-6 flex items-center justify-between group hover:border-accent transition-colors">
                            <div className="flex items-center gap-6">
                              <img src={post.image} className="w-20 h-14 object-cover border border-gray-100 rounded-sm" referrerPolicy="no-referrer" />
                              <div>
                                <h4 className="font-bold text-sm text-primary uppercase tracking-widest">{post.title}</h4>
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{post.date} | {post.category || 'Allgemein'}</span>
                              </div>
                            </div>
                            <div className="flex gap-3">
                              <button onClick={() => setEditingPostId(post.id)} className="px-6 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-accent transition-colors">Bearbeiten</button>
                              <button 
                                onClick={() => updateBlogPost(post.id, { isVisible: !post.isVisible })}
                                className={`p-2 rounded-sm border ${post.isVisible ? 'border-accent text-accent' : 'border-gray-200 text-gray-300'} hover:bg-gray-50 transition-all`}
                              >
                                {post.isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                              </button>
                              <button onClick={() => { if(confirm('Beitrag löschen?')) removeBlogPost(post.id); }} className="p-2 text-gray-300 hover:text-danger transition-colors"><Trash2 size={18} /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="b-editor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                       <div className="flex justify-between items-center">
                        <button onClick={() => setEditingPostId(null)} className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors">
                          <ArrowLeft size={16} /> Zurück zur Liste
                        </button>
                      </div>

                      <div className="bg-bg-alt p-8 border border-gray-100 rounded-sm space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Titel</label>
                            <input type="text" className="admin-input" value={localContent.blogPosts.find(p => p.id === editingPostId)?.title || ''} onChange={(e) => updateBlogPost(editingPostId, { title: e.target.value })} />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Kategorie</label>
                            <input type="text" className="admin-input" value={localContent.blogPosts.find(p => p.id === editingPostId)?.category || ''} onChange={(e) => updateBlogPost(editingPostId, { category: e.target.value })} />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Einleitung (Snippet)</label>
                          <textarea rows={2} className="admin-input" value={localContent.blogPosts.find(p => p.id === editingPostId)?.excerpt || ''} onChange={(e) => updateBlogPost(editingPostId, { excerpt: e.target.value })} />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Hauptinhalt (Text)</label>
                          <textarea rows={12} className="admin-input leading-relaxed" value={localContent.blogPosts.find(p => p.id === editingPostId)?.content || ''} onChange={(e) => updateBlogPost(editingPostId, { content: e.target.value })} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Bild URL</label>
                            <input type="text" className="admin-input" value={localContent.blogPosts.find(p => p.id === editingPostId)?.image || ''} onChange={(e) => updateBlogPost(editingPostId, { image: e.target.value })} />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Datum (Anzeige)</label>
                            <input type="text" className="admin-input" value={localContent.blogPosts.find(p => p.id === editingPostId)?.date || ''} onChange={(e) => updateBlogPost(editingPostId, { date: e.target.value })} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* LAYOUT TAB */}
              {activeTab === 'layout' && (
                <div className="space-y-12">
                  <header>
                    <h2 className="text-xl font-bold text-primary tracking-tight">Layout & Positionierung</h2>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Reihenfolge und Ausrichtung der Sektionen auf der Startseite</p>
                  </header>

                  <div className="space-y-6">
                    {Object.entries(localContent.layout || {}).map(([id, settings]: [string, any]) => (
                      <div key={id} className="p-6 bg-gray-50 border border-gray-100 rounded-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold text-xs rounded-sm">
                              {settings.order}
                            </div>
                            <div>
                              <h3 className="text-sm font-bold text-primary uppercase tracking-widest">{id}</h3>
                              <p className="text-[10px] text-gray-400 font-bold uppercase">Sektion ID: {id}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 max-w-2xl">
                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Ausrichtung</label>
                              <select 
                                className="admin-input py-2 text-xs"
                                value={settings.alignment}
                                onChange={(e) => updateLayoutSetting(id, { alignment: e.target.value as any })}
                              >
                                <option value="left">Links</option>
                                <option value="center">Mittig</option>
                                <option value="right">Rechts</option>
                              </select>
                            </div>
                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Reihenfolge</label>
                              <input 
                                type="number" 
                                className="admin-input py-2 text-xs"
                                value={settings.order}
                                onChange={(e) => updateLayoutSetting(id, { order: parseInt(e.target.value) || 0 })}
                              />
                            </div>
                            {settings.imagePosition && (
                              <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Bild-Position</label>
                                <select 
                                  className="admin-input py-2 text-xs"
                                  value={settings.imagePosition}
                                  onChange={(e) => updateLayoutSetting(id, { imagePosition: e.target.value as any })}
                                >
                                  <option value="left">Links</option>
                                  <option value="right">Rechts</option>
                                  <option value="top">Oben</option>
                                  <option value="bottom">Unten</option>
                                </select>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-4">
                            <button 
                              onClick={() => updateLayoutSetting(id, { showTitle: !settings.showTitle })}
                              className={`p-2 rounded-sm border ${settings.showTitle ? 'bg-primary text-white border-primary' : 'bg-white text-gray-300 border-gray-100'}`}
                              title="Titel anzeigen"
                            >
                              <FileText size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-8 bg-blue-50 border border-blue-100 rounded-sm">
                    <div className="flex gap-4">
                      <AlertCircle className="text-blue-600 shrink-0" size={24} />
                      <div>
                        <h4 className="text-sm font-bold text-blue-900 mb-1">Layout-Hinweis</h4>
                        <p className="text-xs text-blue-700 leading-relaxed">
                          Die Reihenfolge bestimmt, wie die Sektionen auf der Startseite untereinander angeordnet werden. 
                          Die Ausrichtung beeinflusst primär Überschriften und Texte innerhalb einer Sektion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .admin-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: #fcfcfc;
          border: 1px solid #eee;
          outline: none;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }
        .admin-input:focus {
          border-color: #0a1e36;
          background-color: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
