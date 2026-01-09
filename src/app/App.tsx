import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { BlogList } from './components/BlogList';
import { BlogPost } from './components/BlogPost';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

type View = 'home' | 'blog' | 'blogPost' | 'projects' | 'about' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const handleNavigate = (view: string) => {
    setCurrentView(view as View);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPost = (postId: string) => {
    setSelectedPostId(postId);
    setCurrentView('blogPost');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToBlog = () => {
    setCurrentView('blog');
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentView={currentView} onNavigate={handleNavigate} />

        <main className="flex-grow">
          {currentView === 'home' && (
            <Home onNavigate={handleNavigate} onSelectPost={handleSelectPost} />
          )}

          {currentView === 'blog' && (
            <BlogList onSelectPost={handleSelectPost} />
          )}

          {currentView === 'blogPost' && selectedPostId && (
            <BlogPost postId={selectedPostId} onBack={handleBackToBlog} />
          )}

          {currentView === 'projects' && <Projects />}

          {currentView === 'about' && <About />}

          {currentView === 'contact' && <Contact />}
        </main>

        <Footer onNavigate={handleNavigate} />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}
