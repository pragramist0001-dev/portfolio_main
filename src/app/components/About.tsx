import { Code, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  {
    category: 'Frontend Development',
    icon: Layout,
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend Development',
    icon: Server,
    technologies: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    technologies: ['React Native', 'Flutter'],
  },
  {
    category: 'DevOps & Tools',
    icon: Zap,
    technologies: ['Git', 'Docker'],
  },
  {
    category: 'Programming',
    icon: Code,
    technologies: ['JavaScript', 'TypeScript', 'Node.js'],
  },
];

const experiences = {
  en: [
    {
      role: 'Frontend Developer',
      company: 'Freelance & Startups',
      period: '2021 - Present',
      description: 'Developing responsive web applications and user interfaces. Collaborating with startup teams to build MVP products and modern web solutions.',
    },
    {
      role: 'Python Backend Instructor',
      company: 'Education Center',
      period: '2023',
      description: 'Taught backend development fundamentals using Python. Mentored students in building server-side applications and databases.',
    },
  ],
  ru: [
    {
      role: 'Frontend Разработчик',
      company: 'Фриланс и Стартапы',
      period: '2021 - Наст. время',
      description: 'Разработка адаптивных веб-приложений и пользовательских интерфейсов. Сотрудничество со стартап-командами для создания MVP и современных веб-решений.',
    },
    {
      role: 'Преподаватель Python Backend',
      company: 'Учебный Центр',
      period: '2023',
      description: 'Преподавание основ бэкенд-разработки на Python. Менторство студентов в создании серверных приложений и баз данных.',
    },
  ],
  uz: [
    {
      role: 'Frontend Dasturchi',
      company: 'Frilans va Startaplar',
      period: '2021 - Hozirgacha',
      description: 'Moslashuvchan veb-ilovalar va foydalanuvchi interfeyslarini yaratish. MVP mahsulotlarini yaratishda startap jamoalari bilan hamkorlik qilish.',
    },
    {
      role: 'Python Backend O\'qituvchisi',
      company: 'O\'quv Markazi',
      period: '2023',
      description: 'Python yordamida backend dasturlash asoslarini o\'rgatish. Server ilovalarini va ma\'lumotlar bazalarini yaratishda talabalarga mentorlik qilish.',
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
      description: 'Специализированное обучение современной Frontend-разработке на React.js. Изучение управления состоянием, жизненного цикла компонентов и UI.',
      image: '/images/certifikat_3.jpg',
    },
    {
      title: 'Компьютерная Грамотность',
      issuer: 'Romay Company',
      description: 'Работал оператором ПК в компании Romay. Получил опыт работы с офисными программами, ведения документации и устранения технических неполадок.',
      image: '/images/certifikat_2.jpg',
    },
    {
      title: 'Front-end и Фриланс',
      issuer: 'WebForte Academy',
      description: 'Окончил курс Front-end разработки и изучил стратегии фриланса в академии WebForte.',
      image: '/images/certifikat_4.jpg',
    },
  ],
  uz: [
    {
      title: 'Python Backend Dasturlash',
      issuer: 'BEPO IT Academy',
      description: 'Python dasturlash tili asoslari, OOP tushunchalari va backend dasturlash tamoyillarini o\'zlashtirdim. Masshtablashuvchan server ilovalarini yaratdim.',
      image: '/images/certifikat_1.jpg',
    },
    {
      title: 'Frontend React Kursi',
      issuer: 'MohirDev Academy',
      description: 'React.js yordamida zamonaviy Frontend dasturlash bo\'yicha maxsus o\'quv kursi. State boshqaruvi va interaktiv UI yaratishni o\'rgandim.',
      image: '/images/certifikat_3.jpg',
    },
    {
      title: 'Kompyuter Savodxonligi',
      issuer: 'Romay Company',
      description: 'Romay kompaniyasida kompyuter operatori sifatida faoliyat yuritdim. Ofis dasturlari, hujjatlar bilan ishlash va texnik nosozliklarni bartaraf etish bo\'yicha tajriba orttirdim.',
      image: '/images/certifikat_2.jpg',
    },
    {
      title: 'Front-end va Frilans',
      issuer: 'WebForte Academy',
      description: 'WebForte akademiyasida Front-end dasturlash kursini tamomladim va frilans strategiyalarini o\'rgandim.',
      image: '/images/certifikat_4.jpg',
    },
  ],
};

export function About() {
  const { t, language } = useLanguage();
  const currentExperience = (experiences as any)[language] || experiences.en;
  const currentCertificates = (certificates as any)[language] || certificates.en;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">{t('about.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-4">
              <p className="text-lg">
                {t('about.intro1')}
              </p>
              <p className="text-lg">
                {t('about.intro2')}
              </p>
              <p className="text-lg">
                {t('about.intro3')}
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjY4MjI1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl text-center mb-8">{t('about.skills')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <Card key={skill.category} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="text-blue-600" size={24} />
                      </div>
                      <h4 className="text-xl">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl mb-4">{t('about.experience')}</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {currentExperience.map((exp: any, index: number) => (
              <div key={index} className="bg-white rounded-lg p-6 text-left">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold">{exp.role}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-600">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl text-center mb-12">{t('about.certificates')}</h3>
          <div className="space-y-12">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {currentCertificates.map((cert: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-gray-100 group">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000'; // Fallback image
                      }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 space-y-4 text-left">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {cert.issuer}
                  </div>
                  <h4 className="text-2xl font-bold">{cert.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {cert.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
