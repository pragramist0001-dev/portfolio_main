import { Hero } from './Hero';
import { BlogList } from './BlogList';
import { ArrowRight, Zap, Target, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';

interface HomeProps {
  onNavigate: (view: string) => void;
  onSelectPost: (postId: string) => void;
}

export function Home({ onNavigate, onSelectPost }: HomeProps) {
  const { t } = useLanguage();

  return (
    <div>
      <Hero onNavigate={onNavigate} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">{t('home.whyWork')}</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl mb-3">{t('home.features.fast.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.fast.desc')}
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl mb-3">{t('home.features.detail.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.detail.desc')}
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-pink-600" size={32} />
              </div>
              <h3 className="text-2xl mb-3">{t('home.features.modern.title')}</h3>
              <p className="text-gray-600">
                {t('home.features.modern.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BlogList onSelectPost={onSelectPost} />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <Button onClick={() => onNavigate('blog')} size="lg">
            {t('home.viewPosts')}
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
