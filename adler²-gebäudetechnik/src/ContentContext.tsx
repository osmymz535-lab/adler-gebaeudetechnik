import React, { createContext, useContext, useState, useEffect } from 'react';
import { WebsiteContent } from './types';
import { INITIAL_CONTENT } from './constants';
import { db, onSnapshot, doc, setDoc, auth, getDocFromServer } from './firebase';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

interface ContentContextType {
  content: WebsiteContent;
  updateContent: (newContent: WebsiteContent) => Promise<void>;
  isLoading: boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<WebsiteContent>(INITIAL_CONTENT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Test connection as per guidelines
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'system', 'connection_test'));
      } catch (error: any) {
        if (error?.message?.includes('the client is offline')) {
          console.error("Please check your Firebase configuration. The client is offline.");
        }
      }
    };
    testConnection();

    // Real-time listener from Firestore
    const unsub = onSnapshot(doc(db, 'content', 'website'), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setContent({
          ...INITIAL_CONTENT,
          ...data,
          // Ensure nested objects are also merged if necessary
          sectionVisibility: { ...INITIAL_CONTENT.sectionVisibility, ...data.sectionVisibility },
          navigation: { 
            branding: { ...INITIAL_CONTENT.navigation.branding, ...data.navigation?.branding },
            items: data.navigation?.items || INITIAL_CONTENT.navigation.items 
          },
          designSettings: { ...INITIAL_CONTENT.designSettings, ...data.designSettings },
          socialLinks: { ...INITIAL_CONTENT.socialLinks, ...data.socialLinks },
          pages: { ...INITIAL_CONTENT.pages, ...data.pages },
          forms: { ...INITIAL_CONTENT.forms, ...data.forms },
          seo: { ...INITIAL_CONTENT.seo, ...data.seo },
          services: (data.services || INITIAL_CONTENT.services).map((service: any) => {
            const initialService = INITIAL_CONTENT.services.find(s => s.id === service.id);
            if (initialService) {
              return {
                ...initialService,
                ...service,
                image: (service.image && (service.image.includes('picsum.photos') || service.image.includes('hl-serv'))) ? initialService.image : (service.image || initialService.image)
              };
            }
            return service;
          }),
          ratgeberCards: (data.ratgeberCards || INITIAL_CONTENT.ratgeberCards).map((card: any) => {
            const initialCard = INITIAL_CONTENT.ratgeberCards.find(c => c.id === card.id);
            if (initialCard) {
              return {
                ...initialCard,
                ...card,
                image: (card.image && card.image.includes('picsum.photos')) ? initialCard.image : (card.image || initialCard.image)
              };
            }
            return card;
          }),
          blogPosts: (() => {
            const dbPosts = data.blogPosts || [];
            const hasNewPosts = dbPosts.some((p: any) => p && p.id && p.id.startsWith('bp-'));
            if (!hasNewPosts || dbPosts.length < 11) {
              return INITIAL_CONTENT.blogPosts;
            }
            return dbPosts;
          })(),
          layout: data.layout || INITIAL_CONTENT.layout,
          authorizedAdmins: data.authorizedAdmins || INITIAL_CONTENT.authorizedAdmins
        } as WebsiteContent);
      } else {
        // Initialize if not exists – only attempt if logged in to avoid permission errors for visitors
        if (auth.currentUser) {
          setDoc(doc(db, 'content', 'website'), INITIAL_CONTENT).catch(e => {
            // Only handle errors if it's not a standard permission denial for non-admins
            if (e?.code !== 'permission-denied') {
              handleFirestoreError(e, OperationType.WRITE, 'content/website');
            }
          });
        }
      }
      setIsLoading(false);
    }, (error) => {
        setIsLoading(false);
        try {
          handleFirestoreError(error, OperationType.GET, 'content/website');
        } catch (e) {
          // Error info is logged in handler
        }
    });

    return () => unsub();
  }, []);

  const updateContent = async (newContent: WebsiteContent) => {
    try {
      await setDoc(doc(db, 'content', 'website'), newContent);
    } catch (error) {
       handleFirestoreError(error, OperationType.WRITE, 'content/website');
    }
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, isLoading }}>
      {!isLoading && children}
      {isLoading && (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Lade Inhalte...</p>
          </div>
        </div>
      )}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
