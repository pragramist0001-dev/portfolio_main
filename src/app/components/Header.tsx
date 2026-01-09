import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: 'Home' }, // Home usually doesn't need translation or can be 'header.home' if added
    { id: 'projects', label: t('header.projects') },
    { id: 'blog', label: t('header.blog') },
    { id: 'about', label: t('header.about') },
    { id: 'contact', label: t('header.contact') },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white">IT</span>
            </div>
            <span className="text-xl">Azizbek</span>
            <div className="w-auto p-2 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">{t('header.role')}</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? 'default' : 'ghost'}
                  onClick={() => handleNavClick(item.id)}
                  className="cursor-pointer"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
            <Select value={language} onValueChange={(val: Language) => setLanguage(val)}>
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="Lang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="ru">RU</SelectItem>
                <SelectItem value="uz">UZ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentView === item.id ? 'default' : 'ghost'}
                onClick={() => handleNavClick(item.id)}
                className="w-full justify-start cursor-pointer"
              >
                {item.label}
              </Button>
            ))}
            <div className="px-4 py-2">
              <Select value={language} onValueChange={(val: Language) => setLanguage(val)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ru">Русский</SelectItem>
                  <SelectItem value="uz">O'zbek</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
