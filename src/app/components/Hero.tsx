import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onNavigate: (view: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm">
              {t('hero.welcome')}
            </div>
            <h1 className="text-4xl md:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => onNavigate('projects')} size="lg" className="cursor-pointer">
                {t('hero.viewProjects')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button onClick={() => onNavigate('contact')} variant="outline" size="lg" className="cursor-pointer">
                {t('hero.getInTouch')}
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/pragramist0001-dev" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white rounded-lg transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white rounded-lg transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:pragramist0001@gmail.com" className="p-2 hover:bg-white rounded-lg transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/images/hero_main.jpg"
                alt="Developer workspace"
                className="w-118 h-118 rounded-md object-cover"
              />
            </div>
            <div className="absolute -bottom-16 right-36 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
