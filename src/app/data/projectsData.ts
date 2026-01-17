export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
}

const projectsEn: Project[] = [
    {
        id: '1',
        title: 'Legal Consultancy Platform',
        description: 'A professional website for a law firm featuring appointment scheduling, case studies portfolio, and legal resources section.',
        image: '/images/portfolio_1.png',
        tags: ['React', 'Next.js', 'Tailwind CSS'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'dapper-zuccutto-b089bb.netlify.app',
    },
    {
        id: '2',
        title: 'Modern E-Commerce Store',
        description: 'A full-featured online shopping platform with product filtering, shopping cart functionality, and secure payment integration.',
        image: '/images/portfolio_2.png',
        tags: ['React', 'Redux', 'Stripe'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '3',
        title: 'Business Digitization Hub',
        description: 'Corporate dashboard for automating business processes, managing workflows, and digital transformation of traditional services.',
        image: '/images/portfolio_3.png',
        tags: ['Vue.js', 'Firebase', 'Chart.js'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'resplendent-axolotl-9b0b0b.netlify.app',
    },
    {
        id: '4',
        title: 'Mobile Tech Store',
        description: 'Specialized e-commerce site for smartphones and gadgets. Features comparison tools and detailed technical specifications.',
        image: '/images/portfolio_4.png',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '5',
        title: 'AgroM Food Market',
        description: 'Online grocery and food delivery platform. Includes inventory management, fresh produce categories, and fast delivery tracking.',
        image: '/images/portfolio_5.png',
        tags: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'agrom24.netlify.app',
    },
    {
        id: '6',
        title: 'FinTech Banking Portal',
        description: 'Secure internet banking interface for account management, transaction history, and money transfers with high-level security.',
        image: '/images/portfolio_6.png',
        tags: ['React', 'Material UI', 'Security'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '7',
        title: 'Luxury Hotel Booking',
        description: 'Hotel reservation system allowing users to view rooms, check availability dates, and book stays with a seamless UI.',
        image: '/images/portfolio_7.png',
        tags: ['Next.js', 'Prisma', 'PostgreSQL'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '8',
        title: 'Furniture E-Commerce Store',
        description: 'Discover Our New Collection',
        image: '/images/portfolio_8.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'fluffy-naiad-3f6df2.netlify.app',
    }
];

const projectsRu: Project[] = [
    {
        id: '1',
        title: 'Юридическая Платформа',
        description: 'Корпоративный сайт для адвокатской фирмы с системой онлайн-записи, портфолио успешных дел и блогом.',
        image: '/images/portfolio_1.png',
        tags: ['React', 'Next.js', 'Tailwind CSS'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '2',
        title: 'Интернет-Магазин',
        description: 'Полнофункциональная платформа электронной коммерции с фильтрацией товаров, корзиной и интеграцией платежей.',
        image: '/images/portfolio_2.png',
        tags: ['React', 'Redux', 'Stripe'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://dapper-zuccutto-b089bb.netlify.app',
    },
    {
        id: '3',
        title: 'Цифровизация Бизнеса',
        description: 'Платформа для автоматизации бизнес-процессов, управления документооборотом и цифровой трансформации услуг.',
        image: '/images/portfolio_3.png',
        tags: ['Vue.js', 'Firebase', 'Chart.js'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'resplendent-axolotl-9b0b0b.netlify.app',
    },
    {
        id: '4',
        title: 'Магазин Электроники',
        description: 'Специализированный маркетплейс для продажи смартфонов и гаджетов с функцией сравнения характеристик.',
        image: '/images/portfolio_4.png',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '5',
        title: 'AgroM Продуктовый Маркет',
        description: 'Онлайн-магазин продуктов питания и агропродукции. Удобный каталог, управление запасами и быстрая доставка.',
        image: '/images/portfolio_5.png',
        tags: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://agrom24.netlify.app',
    },
    {
        id: '6',
        title: 'Банковский Портал',
        description: 'Защищенный интерфейс интернет-банкинга для управления счетами, просмотра истории и денежных переводов.',
        image: '/images/portfolio_6.png',
        tags: ['React', 'Material UI', 'Security'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '7',
        title: 'Бронирование Отелей',
        description: 'Система резервирования номеров для отелей с возможностью выбора дат, просмотра номеров и оплаты.',
        image: '/images/portfolio_7.png',
        tags: ['Next.js', 'Prisma', 'PostgreSQL'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '8',
        title: 'Furniture E-Commerce Store',
        description: 'Discover Our New Collection',
        image: '/images/portfolio_8.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    }
];

const projectsUz: Project[] = [
    {
        id: '1',
        title: 'Advokatlik Xizmatlari',
        description: 'Yuridik firmalar uchun professional veb-sayt. Onlayn qabul, tajriba va huquqiy maslahatlar bo\'limini o\'z ichiga oladi.',
        image: '/images/portfolio_1.png',
        tags: ['React', 'Next.js', 'Tailwind CSS'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '2',
        title: 'Internet Do\'kon',
        description: 'Barcha qulayliklarga ega onlayn savdo platformasi. Mahsulotlarni saralash, savat va xavfsiz to\'lov tizimi mavjud.',
        image: '/images/portfolio_2.png',
        tags: ['React', 'Redux', 'Stripe'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://dapper-zuccutto-b089bb.netlify.app',
    },
    {
        id: '3',
        title: 'Biznesni Raqamlashtirish',
        description: 'Biznes jarayonlarini avtomatlashtirish, hujjat aylanishini boshqarish va xizmatlarni raqamlashtirish uchun dashboard.',
        image: '/images/portfolio_3.png',
        tags: ['Vue.js', 'Firebase', 'Chart.js'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://resplendent-axolotl-9b0b0b.netlify.app',
    },
    {
        id: '4',
        title: 'Telefon va Texnika Do\'koni',
        description: 'Smartfon va gadjetlar savdosiga ixtisoslashgan sayt. Texnik xususiyatlarni taqqoslash va qulay qidiruv imkoniyati.',
        image: '/images/portfolio_4.png',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '5',
        title: 'AgroM Oziq-ovqat Do\'koni',
        description: 'Oziq-ovqat va qishloq xo\'jaligi mahsulotlari uchun onlayn bozor. Yetkazib berish va ombor boshqaruvini o\'z ichiga oladi.',
        image: '/images/portfolio_5.png',
        tags: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://agrom24.netlify.app',
    },
    {
        id: '6',
        title: 'Bank Web Sayti',
        description: 'Xavfsiz bank tizimi interfeysi. Hisoblarni boshqarish, o\'tkazmalar tarixi va to\'lovlarni amalga oshirish interfeysi.',
        image: '/images/portfolio_6.png',
        tags: ['React', 'Material UI', 'Security'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '7',
        title: 'Mehmonxona Band Qilish',
        description: 'Mehmonxonalar uchun zamonaviy bron qilish tizimi. Xonalarni ko\'rish, sanalarni tanlash va onlayn to\'lov qilish imkoniyati.',
        image: '/images/portfolio_7.png',
        tags: ['Next.js', 'Prisma', 'PostgreSQL'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    },
    {
        id: '8',
        title: 'Furniture E-Commerce Store',
        description: 'Discover Our New Collection',
        image: '/images/portfolio_8.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/pragramist0001-dev',
        demo: 'https://example.com',
    }
];

export const projects = {
    en: projectsEn,
    ru: projectsRu,
    uz: projectsUz,
};
