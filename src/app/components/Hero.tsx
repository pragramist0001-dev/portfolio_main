import { ArrowRight, Github, Linkedin, Mail, Download, Send, Instagram, Terminal } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onNavigate: (view: string) => void;
}

function TypingText({ texts }: { texts: string[] }) {
  const [display, setDisplay] = useState('');
  const stateRef = useRef({
    wordIdx: 0,
    charPos: 0,
    phase: 'typing' as 'typing' | 'wait' | 'deleting' | 'next',
  });
  const timerRef = useRef<any>(null);
  const textsRef = useRef(texts);
  textsRef.current = texts;

  useEffect(() => {
    const tick = () => {
      const s = stateRef.current;
      const words = textsRef.current;
      const word = words[s.wordIdx] ?? '';

      if (s.phase === 'typing') {
        if (s.charPos < word.length) {
          s.charPos += 1;
          setDisplay(word.slice(0, s.charPos));
          timerRef.current = setTimeout(tick, 90);
        } else {
          s.phase = 'wait';
          timerRef.current = setTimeout(tick, 2200);
        }
      } else if (s.phase === 'wait') {
        s.phase = 'deleting';
        timerRef.current = setTimeout(tick, 50);
      } else if (s.phase === 'deleting') {
        if (s.charPos > 0) {
          s.charPos -= 1;
          setDisplay(word.slice(0, s.charPos));
          timerRef.current = setTimeout(tick, 45);
        } else {
          s.phase = 'next';
          timerRef.current = setTimeout(tick, 400);
        }
      } else {
        s.wordIdx = (s.wordIdx + 1) % words.length;
        s.charPos = 0;
        s.phase = 'typing';
        setDisplay('');
        timerRef.current = setTimeout(tick, 100);
      }
    };

    timerRef.current = setTimeout(tick, 300);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      {display}
      <span
        className="inline-block w-[2px] h-[1em] bg-purple-500 ml-1 align-middle"
        style={{ animation: 'blink 0.8s step-end infinite' }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

export function Hero({ onNavigate }: HeroProps) {
  const { t, language } = useLanguage();

  const typingTextsByLang: Record<string, string[]> = {
    en: ['Full Stack Developer', 'Backend Instructor', 'DevOps Engineer', 'Freelancer'],
    ru: ['Full Stack Разработчик', 'Backend Инструктор', 'DevOps Инженер', 'Фрилансер'],
    uz: ["Full Stack Dasturchi", "Backend O'qituvchisi", 'DevOps Muhandis', 'Frilanser'],
  };
  const typingTexts = typingTextsByLang[language] ?? typingTextsByLang.en;

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-16 md:pt-20 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">

            {/* Welcome badge */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-400 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              {t('hero.welcome')}
              <Terminal size={16} className="ml-1" />
            </div>

            {/* Typing title */}
            <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl font-bold leading-tight min-h-[4rem]">
              <TypingText key={language} texts={typingTexts} />
            </h1>

            {/* Main subtitle */}
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-600 dark:text-gray-300">
              {t('hero.subtitle')}
            </p>

            {/* Buttons */}
            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap gap-4">
              <Button onClick={() => onNavigate('projects')} size="lg" className="cursor-pointer">
                {t('hero.viewProjects')}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button onClick={() => onNavigate('contact')} variant="outline" size="lg" className="cursor-pointer">
                {t('hero.getInTouch')}
              </Button>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
              >
                <Download size={18} />
                {t('hero.downloadCV')}
              </a>
            </div>

            {/* Social Links */}
            <div data-aos="fade-up" data-aos-delay="400" className="flex gap-4 pt-4">
              <a href="https://github.com/pragramist0001-dev" target="_blank" rel="noopener noreferrer"
                className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/azizbek-jo-rayev-2b3779384" target="_blank" rel="noopener noreferrer"
                className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                <Linkedin size={24} />
              </a>
              <a href="https://t.me/+4xtfMADcyV0zZTYy" target="_blank" rel="noopener noreferrer"
                className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                <Send size={24} />
              </a>
              <a href="https://www.instagram.com/jorayevv.azizbek?igsh=bzEyM2ZwN2JzMXV2" target="_blank" rel="noopener noreferrer"
                className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                <Instagram size={24} />
              </a>
              <a href="mailto:pragramist0001@gmail.com"
                className="p-2 hover:bg-white dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-700 dark:text-gray-300">
                <Mail size={24} />
              </a>
            </div>

          </div>

          {/* Right: Image — original style */}
          <div className="relative flex justify-center mt-10 md:mt-0" data-aos="zoom-in" data-aos-delay="500">
            <div className="relative overflow-hidden flex justify-center items-center">
              <img
                src="/images/hero_main.jpg"
                alt="Developer workspace"
                className="w-72 h-72 md:w-[472px] md:h-[472px] rounded-md object-cover"
              />
              {/* Floating Code Symbols */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 text-4xl font-bold text-blue-600/30 animate-wiggle">{'</>'}</div>
                <div className="absolute top-1/4 right-10 text-3xl font-bold text-purple-600/30 animate-wiggle" style={{ animationDelay: '0.5s' }}>{'{}'}</div>
                <div className="absolute bottom-2/3 left-1/2 text-3xl font-bold text-pink-600/30 animate-wiggle" style={{ animationDelay: '1s' }}>{'()'}</div>
                <div className="absolute top-1/2 right-1/4 text-2xl font-bold text-orange-600/30 animate-wiggle" style={{ animationDelay: '1.5s' }}>{'[]'}</div>
              </div>
            </div>
            <div className="absolute -bottom-16 right-36 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
