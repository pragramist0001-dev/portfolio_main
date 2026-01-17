import { useState, useEffect } from 'react';
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
import { Loader } from './components/ui/loader';
import { CursorFollower } from './components/ui/CursorFollower';
import { ParallaxBackground } from './components/ui/ParallaxBackground';
import AOS from 'aos';
import 'aos/dist/aos.css';

type View = 'home' | 'blog' | 'blogPost' | 'projects' | 'about' | 'contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState<View>(() => {
    const savedView = localStorage.getItem('currentView');
    return (savedView as View) || 'home';
  });
  const [selectedPostId, setSelectedPostId] = useState<string | null>(() => {
    return localStorage.getItem('selectedPostId');
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('currentView', currentView);
  }, [currentView]);

  useEffect(() => {
    if (selectedPostId) {
      localStorage.setItem('selectedPostId', selectedPostId);
    } else {
      localStorage.removeItem('selectedPostId');
    }
  }, [selectedPostId]);

  const handleNavigate = async (view: string) => {
    setIsLoading(true);
    // Simulate loading delay for smooth transition
    await new Promise(resolve => setTimeout(resolve, 800));

    setCurrentView(view as View);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(false);
  };

  const handleSelectPost = async (postId: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    setSelectedPostId(postId);
    setCurrentView('blogPost');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(false);
  };

  const handleBackToBlog = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    setCurrentView('blog');
    setSelectedPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsLoading(false);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col cursor-none relative font-sans">
        <ParallaxBackground />
        <CursorFollower />
        {isLoading && <Loader />}
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
