import { MonitorDot, AppWindow, Workflow, Container, GraduationCap, Handshake, BookOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const serviceItems = [
  {
    key: 'web',
    icon: MonitorDot,
    gradient: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50 dark:bg-blue-900/10 dark:hover:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-900/50',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconText: 'text-blue-600 dark:text-blue-400',
  },
  {
    key: 'mobile',
    icon: AppWindow,
    gradient: 'from-purple-500 to-pink-500',
    lightBg: 'bg-purple-50 dark:bg-purple-900/10 dark:hover:bg-purple-900/20',
    border: 'border-purple-100 dark:border-purple-900/50',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    iconText: 'text-purple-600 dark:text-purple-400',
  },
  {
    key: 'backend',
    icon: Workflow,
    gradient: 'from-green-500 to-teal-500',
    lightBg: 'bg-green-50 dark:bg-green-900/10 dark:hover:bg-green-900/20',
    border: 'border-green-100 dark:border-green-900/50',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconText: 'text-green-600 dark:text-green-400',
  },
  {
    key: 'devops',
    icon: Container,
    gradient: 'from-cyan-500 to-blue-600',
    lightBg: 'bg-cyan-50 dark:bg-cyan-900/10 dark:hover:bg-cyan-900/20',
    border: 'border-cyan-100 dark:border-cyan-900/50',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconText: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    key: 'mentoring',
    icon: GraduationCap,
    gradient: 'from-orange-500 to-amber-500',
    lightBg: 'bg-orange-50 dark:bg-orange-900/10 dark:hover:bg-orange-900/20',
    border: 'border-orange-100 dark:border-orange-900/50',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    iconText: 'text-orange-600 dark:text-orange-400',
  },
  {
    key: 'freelance',
    icon: Handshake,
    gradient: 'from-pink-500 to-rose-500',
    lightBg: 'bg-pink-50 dark:bg-pink-900/10 dark:hover:bg-pink-900/20',
    border: 'border-pink-100 dark:border-pink-900/50',
    iconBg: 'bg-pink-100 dark:bg-pink-900/30',
    iconText: 'text-pink-600 dark:text-pink-400',
  },
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-blue-950/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full border ${service.border} ${service.lightBg} hover:shadow-xl transition-all duration-300 overflow-hidden group`}>
                  <CardContent className="p-6 relative">
                    {/* Gradient top bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={service.iconText} size={28} />
                    </div>

                    <h3 className="text-xl font-bold mb-3">
                      {t(`services.${service.key}.title`)}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {t(`services.${service.key}.desc`)}
                    </p>

                    {/* Lucide icon badges instead of emoji */}
                    {service.key === 'devops' && (
                      <div className="mt-4 flex items-center gap-2">
                        <Container size={13} className="text-cyan-600 dark:text-cyan-400" />
                        <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-0.5 rounded-full">Docker Expert</span>
                      </div>
                    )}
                    {service.key === 'mentoring' && (
                      <div className="mt-4 flex items-center gap-2">
                        <BookOpen size={13} className="text-orange-600 dark:text-orange-400" />
                        <span className="text-xs font-semibold text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">2023 Instructor</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
