import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useContent } from '../ContentContext';
import { ArrowRight, BookOpen, Clock, Tag, ChevronRight, Book, Flame, Droplets, Snowflake, Sun, AlertTriangle, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useParams, useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function BlogPage() {
  const { content } = useContent();
  const { id } = useParams<{ id: string }>();
  const { pathname } = useLocation();
  const [expandedPostId, setExpandedPostId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const selectedPost = id ? content.ratgeberCards.find(c => c.id === id) : null;
  const otherPosts = content.ratgeberCards.filter(c => c.id !== id && c.isVisible !== false);

  const getCategoryIcon = (cardId: string | undefined) => {
    if (!cardId) return null;
    const size = 32;
    const className = "text-accent transition-colors group-hover:text-accent-light";
    
    switch (cardId) {
      case 'h-rg': return <Flame size={size} className={className} />;
      case 's-rg': return <Droplets size={size} className={className} />;
      case 'k-rg': return <Snowflake size={size} className={className} />;
      case 'so-rg': return <Sun size={size} className={className} />;
      case 'n-rg': return <AlertTriangle size={size} className={className} />; // SOS Substitute
      case 'hl-rg': return <Leaf size={size} className={className} />;
      default: return null;
    }
  };

  return (
    <div className="pt-[100px] min-h-screen bg-white">
      {/* Universal Intro Section */}
      <section className="bg-bg-alt py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="h-px w-8 bg-accent/30" />
            <BookOpen size={18} className="text-accent" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Ratgeber & Orientierung</span>
            <div className="h-px w-8 bg-accent/30" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium tracking-tight italic"
          >
            {content.pages?.ratgeber?.introText || 'Mit unserem Ratgeber möchten wir Ihnen nicht nur Technik erklären, sondern echte Orientierung geben. Verständlich, praxisnah und auf das Wesentliche konzentriert – damit Sie bessere Entscheidungen für Ihre Immobilie, Ihre Haustechnik und Ihren Komfort treffen können.'}
          </motion.p>
        </div>
      </section>

      {/* Breadcrumbs (Optional but helps navigation) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <nav className="flex items-center gap-2 text-gray-400 text-[10px] uppercase tracking-widest font-bold">
          <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
          <ChevronRight size={10} />
          <Link to="/blog" className="hover:text-primary transition-colors">Ratgeber</Link>
          {selectedPost && (
            <>
              <ChevronRight size={10} />
              <span className="text-accent">{selectedPost.title}</span>
            </>
          )}
        </nav>
      </div>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {selectedPost ? (
            <motion.div 
              key={selectedPost.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-24"
            >
              {/* 1. TOP TEXT / TEASER */}
              <div className="mb-16 bg-bg-alt p-10 md:p-16 border-l-8 border-accent">
                <p className="text-xl md:text-3xl font-medium text-primary leading-tight tracking-tight italic">
                  {selectedPost.topText || selectedPost.intro}
                </p>
              </div>

              {/* 2. INFORMATION AREA */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                <div className="lg:col-span-2 space-y-16">
                  {/* Title & Intro */}
                  <div className="space-y-8">
                    <header className="space-y-4">
                      <div className="h-1 w-20 bg-accent mb-6" />
                      <h1 className="text-4xl md:text-6xl font-extrabold text-primary tracking-tighter leading-none uppercase italic">
                        {selectedPost.detailTitle || selectedPost.title}
                      </h1>
                    </header>
                    
                    <p className="text-xl text-gray-500 leading-relaxed font-light border-b border-gray-100 pb-12">
                      {selectedPost.detailIntro}
                    </p>
                  </div>

                  {/* Beiträge / Posts */}
                  <div className="space-y-16">
                    {selectedPost.posts?.map((post, idx) => (
                      <div key={idx} className="group">
                        <div className="flex gap-6 items-start">
                          <div className="flex-shrink-0 mt-1">
                            {getCategoryIcon(selectedPost.id)}
                          </div>
                          <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-primary tracking-tight">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                              {post.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    )) || (
                      <div className="prose prose-lg prose-primary max-w-none text-gray-600">
                        <ReactMarkdown>{selectedPost.content || ''}</ReactMarkdown>
                      </div>
                    )}
                  </div>

                  {/* CTA / Abschluss */}
                  <div className="bg-primary p-12 text-center rounded-sm shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 -mr-16 -mt-16 rounded-full transition-transform group-hover:scale-150 duration-700" />
                    <div className="relative z-10 space-y-8">
                      <p className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto italic">
                        {selectedPost.ctaText}
                      </p>
                      <button 
                        onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                        className="inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-white px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 rounded-sm"
                      >
                        Jetzt Beraten Lassen <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sticky Image / Sidebar Area */}
                <div className="sticky top-[140px] space-y-12">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                    <img 
                      src={selectedPost.image} 
                      alt={selectedPost.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">In Kürze</h4>
                    <p className="text-gray-500 italic text-sm leading-relaxed bg-bg-alt p-6 border-l-2 border-gray-200">
                      {selectedPost.intro}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
             <div className="text-center mb-24">
                <h2 className="text-3xl font-extrabold text-primary tracking-tighter uppercase italic">Wählen Sie einen Bereich</h2>
             </div>
          )}

          {/* Grid of Other/All Posts */}
          <div className="pt-24 border-t border-gray-100">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 mb-12 text-center">
              {selectedPost ? 'Weitere Ratgeber-Bereiche' : 'Alle Ratgeber-Karten'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {otherPosts.map((card, i) => (
                <motion.div 
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col h-full bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <Link to={`/blog/${card.id}`} className="aspect-[16/10] overflow-hidden relative block">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary border border-gray-100">
                         Ratgeber {new Date().getFullYear()}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors italic uppercase">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {card.intro}
                    </p>
                    <Link 
                      to={`/blog/${card.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors group/link"
                    >
                      Zum Beitrag öffnen
                      <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* New Blog Section at the bottom */}
          {content.blogPosts && content.blogPosts.length > 0 && (() => {
            const categories = [
              'Alle',
              'Heizung',
              'Sanitär',
              'Klima',
              'Solar',
              'Hydraulischer Abgleich & Heizlastberechnung',
              'Vorgaben & Hinweise'
            ];

            const filteredBlogPosts = (content.blogPosts || []).filter(post => {
              if (selectedCategory === 'Alle') return true;
              return post.category === selectedCategory;
            });

            return (
              <div id="blog-accordion-section" className="mt-32 pt-24 border-t border-gray-100">
                <div className="text-center mb-16">
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4 block">Journal & Aktuelles</span>
                  <h2 className="text-4xl font-extrabold text-primary tracking-tighter uppercase italic mb-4">Wissen & Praxis</h2>
                  <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                    Praxisnahe Einblicke, verständliche Erklärungen und wichtige gesetzliche und technische Grundlagen für Ihr Gebäude in Mannheim und Ludwigshafen.
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-16 max-w-5xl mx-auto px-4">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setExpandedPostId(null);
                      }}
                      className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border rounded-sm ${
                        selectedCategory === cat
                          ? 'bg-primary border-primary text-white shadow-md'
                          : 'bg-white border-gray-200 text-gray-500 hover:border-accent hover:text-accent'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                
                {/* Accordion Stack */}
                <div className="max-w-5xl mx-auto space-y-6 px-4">
                  {filteredBlogPosts.length === 0 ? (
                    <div className="text-center py-12 text-gray-400 font-medium">
                      Keine Beiträge in dieser Kategorie gefunden.
                    </div>
                  ) : (
                    filteredBlogPosts.map((post) => {
                      const isExpanded = expandedPostId === post.id;
                      return (
                        <div 
                          key={post.id}
                          className={`bg-white border transition-all duration-300 rounded-sm overflow-hidden ${
                            isExpanded 
                              ? 'border-accent shadow-xl ring-1 ring-accent/10' 
                              : 'border-gray-100 hover:border-gray-300 shadow-sm'
                          }`}
                        >
                          {/* Accordion Header */}
                          <button
                            onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                            className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6 hover:bg-bg-alt/40 transition-colors"
                          >
                            <div className="space-y-3 flex-grow">
                              <div className="flex flex-wrap items-center gap-3">
                                <span className="bg-accent/10 text-accent px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-sm">
                                  {post.category}
                                </span>
                                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                  {new Date(post.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                </span>
                              </div>
                              <h3 className="text-xl md:text-2xl font-bold text-primary tracking-tight uppercase italic hover:text-accent transition-colors">
                                {post.title}
                              </h3>
                              <p className="text-gray-500 text-sm leading-relaxed max-w-4xl">
                                {post.excerpt}
                              </p>
                            </div>
                            <div className="flex-shrink-0 mt-1">
                              <div className={`p-2 rounded-full border transition-all duration-300 transform ${isExpanded ? 'bg-accent border-accent text-white rotate-180' : 'bg-gray-50 border-gray-100 text-gray-400'}`}>
                                <ChevronDown size={18} />
                              </div>
                            </div>
                          </button>

                          {/* Accordion Body */}
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.35, ease: 'easeOut' }}
                              className="border-t border-gray-100 bg-bg-alt/30 overflow-hidden"
                            >
                              <div className="p-6 md:p-10 space-y-8">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                  {/* Left Side: Image */}
                                  <div className="lg:col-span-4 space-y-4">
                                    <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] overflow-hidden rounded-sm shadow-md border border-gray-100">
                                      <img 
                                        src={post.image} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                  </div>

                                  {/* Right Side: Content */}
                                  <div className="lg:col-span-8 space-y-6">
                                    <div className="prose prose-primary max-w-none text-gray-700 leading-relaxed text-sm md:text-base">
                                      <div className="space-y-6">
                                        {post.content.split('\n\n').map((paragraph, pIdx) => {
                                          if (paragraph.startsWith('### ')) {
                                            return (
                                              <h4 key={pIdx} className="text-lg md:text-xl font-extrabold text-primary tracking-tight uppercase italic border-b border-gray-100 pb-2 mt-8 mb-4">
                                                {paragraph.replace('### ', '')}
                                              </h4>
                                            );
                                          }
                                          return (
                                            <p key={pIdx} className="text-gray-600 leading-relaxed">
                                              {paragraph}
                                            </p>
                                          );
                                        })}
                                      </div>
                                    </div>

                                    {/* Custom Local CTA Card inside post */}
                                    <div className="mt-8 bg-primary rounded-sm p-6 md:p-8 text-white relative overflow-hidden shadow-lg">
                                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 -mr-12 -mt-12 rounded-full" />
                                      <div className="relative z-10 space-y-4">
                                        <p className="text-white/90 text-xs md:text-sm leading-relaxed max-w-2xl">
                                          Sie wünschen eine kompetente Beratung für Ihr Vorhaben in Mannheim, Ludwigshafen oder der Metropolregion Rhein-Neckar? Wir prüfen die Gegebenheiten bei Ihnen vor Ort und planen eine maßgeschneiderte Lösung für Ihr Gebäude.
                                        </p>
                                        <button 
                                          onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
                                          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white px-6 py-3 font-bold uppercase tracking-wider text-[10px] transition-all duration-300 rounded-sm"
                                        >
                                          Jetzt Beraten Lassen <ChevronRight size={12} />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      </section>
    </div>
  );
}
