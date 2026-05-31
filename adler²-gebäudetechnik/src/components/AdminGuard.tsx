import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { X } from 'lucide-react';
import { useContent } from '../ContentContext';

interface AdminGuardProps {
  children: React.ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { content } = useContent();
  const [session, setSession] = useState<{ user: any; isAdmin: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check custom credentials logged-in status first
    const customAuth = localStorage.getItem('adler_admin_auth_state');
    if (customAuth === 'confirmed') {
      setSession({ user: { email: 'info@adlergebaeudetechnik.de' }, isAdmin: true });
      setLoading(false);
      return;
    }

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Check role in Content list or via Firestore role
        const isContentAdmin = content.authorizedAdmins?.includes(user.email || '');
        const isDefaultBootAdmin = user.email === 'osm.ymz535@gmail.com' && user.emailVerified;
        
        let isAdmin = isContentAdmin || isDefaultBootAdmin;
        
        if (!isAdmin) {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          isAdmin = userDoc.exists() && userDoc.data()?.role === 'admin';
        }
        
        setSession({ user, isAdmin });
      } else {
        setSession(null);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [content.authorizedAdmins]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session || !session.isAdmin) {
    return <Navigate to="/admin_bereich/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
