import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 border-t dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer mb-4"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white">IT</span>
              </div>
              <span className="text-xl">Azizbek</span>
              <div className="w-auto p-2 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">{t('header.role')}</span>
              </div>
            </button>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t('header.home') || 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t('header.projects')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t('header.blog')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t('header.about')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t('footer.categories')}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('projects')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t('footer.webDev')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t('footer.mobile')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t('footer.freelance')}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  {t('footer.frontend')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t('footer.connect')}</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/pragramist0001-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/azizbek-jo-rayev-2b3779384"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/jorayevv.azizbek?igsh=bzEyM2ZwN2JzMXV2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:pragramist0001@gmail.com"
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Azizbek DevPortfolio. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
