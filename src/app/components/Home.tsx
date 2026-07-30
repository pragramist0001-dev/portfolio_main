import { Hero } from './Hero';
import { BlogList } from './BlogList';
import { Services } from './Services';
import { ArrowRight, Award, FolderKanban, Users, BadgeCheck } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

interface HomeProps {
  onNavigate: (view: string) => void;
  onSelectPost: (postId: string) => void;
}

const statsData = [
  { value: '5+',  key: 'experience',   Icon: Award,         color: 'from-blue-500 to-cyan-500'   },
  { value: '74+', key: 'projects',     Icon: FolderKanban,  color: 'from-purple-500 to-pink-500' },
  { value: '45+', key: 'clients',      Icon: Users,         color: 'from-green-500 to-teal-500'  },
  { value: '6+',  key: 'certificates', Icon: BadgeCheck,    color: 'from-orange-500 to-amber-500'},
];

export function Home({ onNavigate, onSelectPost }: HomeProps) {
  const { t } = useLanguage();

  return (
    <div>
      <Hero onNavigate={onNavigate} />

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                  <stat.Icon size={20} className="text-white" />
                </div>
                <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{t(`stats.${stat.key}`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Blog Posts */}
      <BlogList onSelectPost={onSelectPost} />

      <section className="py-16 bg-white dark:bg-gray-950">
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
