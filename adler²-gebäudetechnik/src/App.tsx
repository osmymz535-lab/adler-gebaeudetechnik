import { BrowserRouter as Router, Routes, Route, useLocation, useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ContentProvider, useContent } from './ContentContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admin from './pages/Admin';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import ProcessDetailPage from './pages/DetailPage';
import GalleryPage from './pages/GalleryPage';
import JobsPage from './pages/JobsPage';
import JobDetailPage from './pages/JobDetailPage';
import LoginPage from './pages/LoginPage';
import ServicesOverview from './pages/ServicesOverview';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AdminGuard from './components/AdminGuard';
import DynamicStyleManager from './components/DynamicStyleManager';
import ContactModal from './components/ContactModal';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}

function AppContent() {
  const { content } = useContent();

  useEffect(() => {
    if (content.seo) {
      document.title = content.seo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', content.seo.description);
      
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', content.seo.keywords);
    }
  }, [content]);

  const adminPath = import.meta.env.VITE_ADMIN_PATH || 'intern-adler-99x';

  return (
    <Router>
      <ScrollToTop />
      <DynamicStyleManager />
      <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin_bereich" element={
              <AdminGuard>
                <Admin />
              </AdminGuard>
            } />
            <Route path="/admin_bereich/login" element={<LoginPage />} />
            
            <Route path={`/${adminPath}`} element={
              <AdminGuard>
                <Admin />
              </AdminGuard>
            } />
            <Route path={`/${adminPath}/login`} element={<LoginPage />} />
            
            {/* Redirect old admin paths to Home or 404 */}
            <Route path="/admin/*" element={<Navigate to="/" replace />} />
            <Route path="/login" element={<Navigate to="/" replace />} />

            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/service" element={<ServicesOverview />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/galerie" element={<GalleryPage />} />
            <Route path="/karriere" element={<JobsPage />} />
            <Route path="/karriere/:jobId" element={<JobDetailPage />} />
            <Route path="/:id" element={<Dispatcher />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <ContactModal />
      </div>
    </Router>
  );
}

// Simple Dispatcher to decide between regular DetailPage and ProcessDetailPage
const Dispatcher = () => {
  const { id } = useParams<{ id: string }>();
  const processIds = ['beratung', 'installation', 'wartung'];
  
  if (processIds.includes(id || '')) {
    return <DetailPage />;
  }
  return <DetailPage />;
};
