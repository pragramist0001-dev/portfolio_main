import {
  Layers2, Cpu, HardDrive, Container, TabletSmartphone, Braces,
  User, MapPin, Languages, Calendar, CheckCircle2, GraduationCap,
  GitCommitHorizontal, Clock, Globe, Briefcase, Database,
  Package, Zap, Rocket, Coffee, Server, Moon
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend Development',
    icon: Layers2,
    color: 'blue',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion'],
    level: 92,
  },
  {
    category: 'Backend Development',
    icon: Cpu,
    color: 'green',
    technologies: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
    level: 85,
  },
  {
    category: 'Database',
    icon: HardDrive,
    color: 'purple',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'MySQL'],
    level: 80,
  },
  {
    category: 'DevOps & Docker',
    icon: Container,
    color: 'cyan',
    technologies: ['Docker', 'Docker Compose', 'CI/CD', 'Git', 'Linux', 'Nginx'],
    level: 75,
  },
  {
    category: 'Mobile Development',
    icon: TabletSmartphone,
    color: 'orange',
    technologies: ['React Native', 'Flutter', 'Expo'],
    level: 65,
  },
  {
    category: 'Programming',
    icon: Braces,
    color: 'pink',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Bash'],
    level: 90,
  },
];

const colorMap: Record<string, { bg: string; text: string; bar: string; lightBg: string }> = {
  blue:   { bg: 'bg-blue-100 dark:bg-blue-900/40',   text: 'text-blue-600 dark:text-blue-400',   bar: 'bg-blue-500',   lightBg: 'bg-blue-50 dark:bg-blue-900/10'   },
  green:  { bg: 'bg-green-100 dark:bg-green-900/40',  text: 'text-green-600 dark:text-green-400',  bar: 'bg-green-500',  lightBg: 'bg-green-50 dark:bg-green-900/10'  },
  purple: { bg: 'bg-purple-100 dark:bg-purple-900/40', text: 'text-purple-600 dark:text-purple-400', bar: 'bg-purple-500', lightBg: 'bg-purple-50 dark:bg-purple-900/10' },
  cyan:   { bg: 'bg-cyan-100 dark:bg-cyan-900/40',   text: 'text-cyan-600 dark:text-cyan-400',   bar: 'bg-cyan-500',   lightBg: 'bg-cyan-50 dark:bg-cyan-900/10'   },
  orange: { bg: 'bg-orange-100 dark:bg-orange-900/40', text: 'text-orange-600 dark:text-orange-400', bar: 'bg-orange-500', lightBg: 'bg-orange-50 dark:bg-orange-900/10' },
  pink:   { bg: 'bg-pink-100 dark:bg-pink-900/40',   text: 'text-pink-600 dark:text-pink-400',   bar: 'bg-pink-500',   lightBg: 'bg-pink-50 dark:bg-pink-900/10'   },
};

const experiences = {
  en: [
    {
      role: 'Full-stack Developer',
      company: 'Current Position',
      period: '2024 - Present',
      description: 'Building modern full-stack applications using React and Node.js. Developing responsive UIs, RESTful APIs, and integrating databases. Working with real clients on production-grade projects.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Freelance & Startups',
      period: '2021 - 2024',
      description: 'Developing responsive web applications and user interfaces with React, Next.js, Node.js. Deploying applications using Docker containers and CI/CD pipelines. Collaborating with startup teams to build MVP products.',
    },
    {
      role: 'DevOps Engineer (Self-study & Projects)',
      company: 'Personal & Freelance Projects',
      period: '2023 - Present',
      description: 'Containerizing applications with Docker and Docker Compose. Setting up Nginx reverse proxies, configuring Linux servers, and implementing CI/CD workflows for automated deployments.',
    },
    {
      role: 'Python Backend Instructor',
      company: 'Education Center',
      period: '2023',
      description: 'Taught backend development fundamentals using Python. Mentored students in building server-side applications and databases.',
    },
    {
      role: 'Bachelor\'s Degree (4th Year, Distance)',
      company: 'University of Economics and Service',
      period: 'Present',
      description: 'Majoring in Information Systems and Technologies. Expanding theoretical knowledge in computer science and software engineering.',
      isEducation: true,
    },
  ],
  ru: [
    {
      role: 'Full-stack Разработчик',
      company: 'Текущая должность',
      period: '2024 - Наст. время',
      description: 'Разработка современных full-stack приложений на React и Node.js. Создание адаптивных UI, REST API и интеграция баз данных для реальных проектов.',
    },
    {
      role: 'Full Stack Разработчик',
      company: 'Фриланс и Стартапы',
      period: '2021 - 2024',
      description: 'Разработка адаптивных веб-приложений с React, Next.js, Node.js. Развёртывание с помощью Docker-контейнеров и CI/CD пайплайнов.',
    },
    {
      role: 'DevOps Инженер (Самообучение и проекты)',
      company: 'Личные и Фриланс проекты',
      period: '2023 - Наст. время',
      description: 'Контейнеризация приложений с Docker и Docker Compose. Настройка Nginx, конфигурация Linux-серверов и внедрение CI/CD.',
    },
    {
      role: 'Преподаватель Python Backend',
      company: 'Учебный Центр',
      period: '2023',
      description: 'Преподавание основ бэкенд-разработки на Python. Менторство студентов в создании серверных приложений.',
    },
    {
      role: 'Студент бакалавриата (4 курс, Заочно)',
      company: 'Университет Экономики и Сервиса',
      period: 'Наст. время',
      description: 'Направление: Информационные системы и технологии. Углубление теоретических знаний в области компьютерных наук и разработки ПО.',
      isEducation: true,
    },
  ],
  uz: [
    {
      role: 'Full-stack Dasturchi',
      company: 'Joriy Lavozim',
      period: '2024 - Hozirgacha',
      description: 'React va Node.js yordamida zamonaviy full-stack ilovalar yaratish. Moslashuvchan UI, REST API va ma\'lumotlar bazasini integratsiya qilish. Haqiqiy mijozlar bilan production darajasidagi loyihalarda ishlash.',
    },
    {
      role: 'Full Stack Dasturchi',
      company: 'Frilans va Startaplar',
      period: '2021 - 2024',
      description: 'React, Next.js, Node.js bilan moslashuvchan veb-ilovalar yaratish. Docker konteynerlar va CI/CD pipeline yordamida ilovalarni deploy qilish.',
    },
    {
      role: 'DevOps Muhandis (O\'z-o\'zini o\'qitish va loyihalar)',
      company: 'Shaxsiy va Frilans loyihalar',
      period: '2023 - Hozirgacha',
      description: 'Docker va Docker Compose yordamida ilovalarni konteynerizatsiya qilish. Nginx, Linux server konfiguratsiyasi va CI/CD workflow\'larini sozlash.',
    },
    {
      role: 'Python Backend O\'qituvchisi',
      company: 'O\'quv Markazi',
      period: '2023',
      description: 'Python yordamida backend dasturlash asoslarini o\'rgatish. Talabalarga mentorlik qilish.',
    },
    {
      role: 'Bakalavr (4-kurs, Sirtqi)',
      company: 'Iqtisodiyot va Servis Universiteti',
      period: 'Hozirgacha',
      description: 'Axborot tizimlari va texnologiyalari yo\'nalishida tahsil olmoqdaman. Kompyuter ilmlari va dasturiy injiniring bo\'yicha nazariy bilimlarni mustahkamlash.',
      isEducation: true,
    },
  ],
};

const certificates = {
  en: [
    {
      title: 'Python Backend Programming',
      issuer: 'BEPO IT Academy',
      description: 'Mastered Python programming language fundamentals, OOP concepts, and backend development principles. Built scalable server-side applications.',
      image: '/images/certifikat_1.jpg',
    },
    {
      title: 'Frontend React Course',
      issuer: 'MohirDev Academy',
      description: 'Specialized training in modern Frontend development with React.js. Learned state management, component lifecycle, and building interactive UIs.',
      image: '/images/certifikat_3.jpg',
    },
    {
      title: 'Computer Operations',
      issuer: 'Romay Company',
      description: 'Worked as a Computer Operator at Romay Company. Gained experience in office software, document management, and technical troubleshooting.',
      image: '/images/certifikat_2.jpg',
    },
    {
      title: 'Front-end & Freelance',
      issuer: 'WebForte Academy',
      description: 'Completed Front-end development course and learned Freelance strategies at WebForte Academy.',
      image: '/images/certifikat_4.jpg',
    },
    {
      title: 'Docker Masterclass',
      issuer: 'MohirDev Academy',
      description: 'Successfully completed the comprehensive Docker course on the MohirDev platform (2026).',
      image: '/images/certifikat_5.jpg',
    },
  ],
  ru: [
    {
      title: 'Python Backend Программирование',
      issuer: 'BEPO IT Academy',
      description: 'Освоил основы языка Python, принципы ООП и бэкенд-разработки. Создание масштабируемых серверных приложений.',
      image: '/images/certifikat_1.jpg',
    },
    {
      title: 'Frontend React Курс',
      issuer: 'MohirDev Academy',
      description: 'Специализированное обучение современной Frontend-разработке на React.js.',
      image: '/images/certifikat_3.jpg',
    },
    {
      title: 'Компьютерная Грамотность',
      issuer: 'Romay Company',
      description: 'Работал оператором ПК в компании Romay. Получил опыт работы с офисными программами.',
      image: '/images/certifikat_2.jpg',
    },
    {
      title: 'Front-end и Фриланс',
      issuer: 'WebForte Academy',
      description: 'Окончил курс Front-end разработки и изучил стратегии фриланса в академии WebForte.',
      image: '/images/certifikat_4.jpg',
    },
    {
      title: 'Docker Masterclass',
      issuer: 'MohirDev Academy',
      description: 'Успешно завершил подробный курс по Docker на платформе MohirDev (2026).',
      image: '/images/certifikat_5.jpg',
    },
  ],
  uz: [
    {
      title: 'Python Backend Dasturlash',
      issuer: 'BEPO IT Academy',
      description: 'Python dasturlash tili asoslari, OOP tushunchalari va backend dasturlash tamoyillarini o\'zlashtirdim.',
      image: '/images/certifikat_1.jpg',
    },
    {
      title: 'Frontend React Kursi',
      issuer: 'MohirDev Academy',
      description: 'React.js yordamida zamonaviy Frontend dasturlash bo\'yicha maxsus o\'quv kursi.',
      image: '/images/certifikat_3.jpg',
    },
    {
      title: 'Kompyuter Savodxonligi',
      issuer: 'Romay Company',
      description: 'Romay kompaniyasida kompyuter operatori sifatida faoliyat yuritdim.',
      image: '/images/certifikat_2.jpg',
    },
    {
      title: 'Front-end va Frilans',
      issuer: 'WebForte Academy',
      description: 'WebForte akademiyasida Front-end dasturlash kursini tamomladim va frilans strategiyalarini o\'rgandim.',
      image: '/images/certifikat_4.jpg',
    },
    {
      title: 'Docker haqida batafsil',
      issuer: 'MohirDev Academy',
      description: 'MohirDev platformasida qisqa "Docker haqida batafsil" kursini muvaffaqiyatli tugatdim (2026).',
      image: '/images/certifikat_5.jpg',
    },
  ],
};

const timelineIcons = [Rocket, Globe, Briefcase, Database, Package, Zap];

const timelineItems = {
  en: [
    { year: '2019', title: 'Started Coding', desc: 'Began learning programming with Python and basic web technologies.' },
    { year: '2020', title: 'First Web Projects', desc: 'Built first HTML/CSS/JS websites and learned React fundamentals.' },
    { year: '2021', title: 'Freelance Start', desc: 'Started taking freelance projects and building real-world applications.' },
    { year: '2022', title: 'Backend & Databases', desc: 'Mastered Node.js, Python backend, PostgreSQL, MongoDB and REST APIs.' },
    { year: '2023', title: 'Instructor & DevOps', desc: 'Taught Python at education center. Learned Docker & DevOps practices.' },
    { year: '2024', title: 'Full Stack Expert', desc: 'Working on complex full-stack projects with modern architecture and cloud tools.' },
  ],
  ru: [
    { year: '2019', title: 'Начало пути', desc: 'Начал изучать программирование с Python и базовых веб-технологий.' },
    { year: '2020', title: 'Первые проекты', desc: 'Создал первые HTML/CSS/JS сайты и изучил основы React.' },
    { year: '2021', title: 'Начало фриланса', desc: 'Начал брать фриланс-проекты и создавать реальные приложения.' },
    { year: '2022', title: 'Backend и Базы данных', desc: 'Освоил Node.js, Python backend, PostgreSQL, MongoDB и REST API.' },
    { year: '2023', title: 'Преподаватель и DevOps', desc: 'Преподавал Python. Изучил Docker и DevOps практики.' },
    { year: '2024', title: 'Full Stack эксперт', desc: 'Работаю над сложными full-stack проектами с современной архитектурой.' },
  ],
  uz: [
    { year: '2019', title: 'Kodlash Boshlandi', desc: 'Python va asosiy veb texnologiyalari bilan dasturlashni boshladim.' },
    { year: '2020', title: 'Birinchi Loyihalar', desc: 'Birinchi HTML/CSS/JS saytlarni yaratdim va React asoslarini o\'rgandim.' },
    { year: '2021', title: 'Frilans Boshlandi', desc: 'Frilans loyihalarga kirishib, haqiqiy ilovalar yaratishni boshladim.' },
    { year: '2022', title: 'Backend va Ma\'lumotlar Bazasi', desc: 'Node.js, Python, PostgreSQL, MongoDB va REST API\'larni o\'zlashtirdim.' },
    { year: '2023', title: 'O\'qituvchi va DevOps', desc: 'Python\'ni o\'qitdim. Docker va DevOps amaliyotlarini o\'rgandim.' },
    { year: '2024', title: 'Full Stack Mutaxassis', desc: 'Zamonaviy arxitektura va cloud vositalar bilan murakkab loyihalarda ishlamoqdaman.' },
  ],
};

const funFactIcons = [GitCommitHorizontal, Clock, Globe, Coffee, Server, Moon];

export function About() {
  const { t, language } = useLanguage();
  const currentExperience = (experiences as any)[language] || experiences.en;
  const currentCertificates = (certificates as any)[language] || certificates.en;
  const currentTimeline = (timelineItems as any)[language] || timelineItems.en;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">{t('about.subtitle')}</p>
        </div>

        {/* Personal Info + Intro */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">{t('about.intro1')}</p>
            <p className="text-lg leading-relaxed">{t('about.intro2')}</p>
            <p className="text-lg leading-relaxed">{t('about.intro3')}</p>

            {/* Personal Info Card */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardContent className="p-6 space-y-4">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User size={20} className="text-blue-600" />
                  {t('about.personalInfo')}
                </h4>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <User size={16} className="text-blue-500 shrink-0" />
                    <span className="font-medium">{t('about.name')}:</span>
                    <span className="text-gray-600 dark:text-gray-300">{t('personalInfo.nameValue')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-purple-500 shrink-0" />
                    <span className="font-medium">{t('about.age')}:</span>
                    <span className="text-gray-600 dark:text-gray-300">{t('personalInfo.ageValue')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-green-500 shrink-0" />
                    <span className="font-medium">{t('about.location')}:</span>
                    <span className="text-gray-600 dark:text-gray-300">{t('personalInfo.locationValue')}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Languages size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{t('about.languages')}:</span>
                    <span className="text-gray-600 dark:text-gray-300">{t('personalInfo.languagesValue')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjY4MjI1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Developer team"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>

        {/* Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-3xl text-center mb-8">{t('about.skills')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const colors = colorMap[skill.color];
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  viewport={{ once: true }}
                >
                  <Card className={`hover:shadow-lg transition-shadow h-full border-0 ${colors.lightBg}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 ${colors.bg} rounded-lg`}>
                            <Icon className={colors.text} size={22} />
                          </div>
                          <h4 className="font-semibold text-base">{skill.category}</h4>
                        </div>
                        <span className={`text-sm font-bold ${colors.text}`}>{skill.level}%</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full bg-white dark:bg-gray-800 rounded-full h-2 mb-4 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full ${colors.bar}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 bg-white dark:bg-gray-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl text-center mb-12">{t('timeline.title')}</h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transform -translate-x-1/2" />

            {currentTimeline.map((item: any, index: number) => {
              const TimelineIcon = timelineIcons[index] || Zap;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-10 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-shadow border-0 bg-white dark:bg-gray-900">
                      <CardContent className="p-4">
                        <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                            <TimelineIcon size={15} className="text-blue-600" />
                          </div>
                          <h4 className="font-bold text-base">{item.title}</h4>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg z-10">
                    {item.year.slice(2)}
                  </div>

                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl text-center mb-8">{t('about.experience')}</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {currentExperience.map((exp: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900 group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                      <div>
                        <h4 className="text-lg font-bold flex items-center gap-2">
                          {exp.isEducation ? (
                            <GraduationCap size={18} className="text-purple-500" />
                          ) : (
                            <CheckCircle2 size={18} className="text-green-500" />
                          )}
                          {exp.role}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-3xl text-center mb-12">{t('about.certificates')}</h3>
          <div className="space-y-12">
            {currentCertificates.map((cert: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000';
                      }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4 text-left">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {cert.issuer}
                  </div>
                  <h4 className="text-2xl font-bold">{cert.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
