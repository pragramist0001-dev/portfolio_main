export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

const blogPostsEn: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn best practices for structuring large-scale React applications using TypeScript, including type safety, component patterns, and state management.',
    content: `
      <h2>Introduction</h2>
      <p>Building scalable React applications requires careful planning and adherence to best practices. TypeScript adds an additional layer of type safety that can prevent bugs and improve developer experience.</p>
      
      <h2>Key Principles</h2>
      <p>When building large-scale applications, consider these important principles:</p>
      <ul>
        <li>Component composition over inheritance</li>
        <li>Proper state management strategy</li>
        <li>Type-safe props and state</li>
        <li>Code splitting and lazy loading</li>
      </ul>
      
      <h2>Project Structure</h2>
      <p>A well-organized project structure is crucial. I recommend organizing by feature rather than by file type. This makes it easier to locate related files and maintain separation of concerns.</p>
      
      <h2>Type Safety</h2>
      <p>TypeScript provides excellent tooling for catching errors at compile time. Make use of interfaces and types to define your component props, state, and API responses.</p>
      
      <h2>Conclusion</h2>
      <p>By following these patterns and leveraging TypeScript's type system, you can build React applications that are maintainable, scalable, and robust.</p>
    `,
    author: 'Alex Johnson',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1080&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Architecture'],
  },
  {
    id: '2',
    title: 'Mastering Modern CSS: Grid and Flexbox',
    excerpt: 'Deep dive into CSS Grid and Flexbox layouts. Understand when to use each and how to create responsive designs without media queries.',
    content: `
      <h2>Understanding Layout Systems</h2>
      <p>CSS Grid and Flexbox are powerful layout tools that have revolutionized web design. Each has its strengths and ideal use cases.</p>
      
      <h2>Flexbox: One-Dimensional Layouts</h2>
      <p>Flexbox is perfect for laying out items in a single direction - either horizontally or vertically. It excels at distributing space and aligning items within a container.</p>
      
      <h2>CSS Grid: Two-Dimensional Layouts</h2>
      <p>CSS Grid allows you to work with both rows and columns simultaneously. This makes it ideal for creating complex page layouts and responsive designs.</p>
      
      <h2>Practical Examples</h2>
      <p>Let's explore some real-world scenarios where each layout method shines. Understanding these patterns will help you choose the right tool for your design needs.</p>
      
      <h2>Responsive Design</h2>
      <p>Both Grid and Flexbox offer powerful features for creating responsive layouts. Learn how to use auto-fit, minmax, and other modern CSS features to build truly fluid designs.</p>
    `,
    author: 'Sarah Chen',
    date: '2024-12-10',
    readTime: '6 min read',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1080&auto=format&fit=crop',
    tags: ['CSS', 'Layout', 'Responsive Design'],
  },
  {
    id: '3',
    title: 'API Design Best Practices for RESTful Services',
    excerpt: 'Essential guidelines for designing clean, efficient, and developer-friendly REST APIs that scale with your application.',
    content: `
      <h2>RESTful API Principles</h2>
      <p>REST (Representational State Transfer) is an architectural style for designing networked applications. Following REST principles ensures your API is predictable and easy to use.</p>
      
      <h2>Resource Naming</h2>
      <p>Use nouns for resource names, not verbs. Resources should be plural and hierarchical when appropriate. For example: /users, /users/:id/posts.</p>
      
      <h2>HTTP Methods</h2>
      <p>Use HTTP methods appropriately: GET for retrieval, POST for creation, PUT/PATCH for updates, and DELETE for removal. This makes your API intuitive and follows web standards.</p>
      
      <h2>Status Codes</h2>
      <p>Return appropriate HTTP status codes. 200 for success, 201 for created resources, 400 for client errors, 404 for not found, and 500 for server errors.</p>
      
      <h2>Versioning and Documentation</h2>
      <p>Always version your API and provide comprehensive documentation. This helps maintain backward compatibility and makes integration easier for developers.</p>
    `,
    author: 'Michael Rodriguez',
    date: '2024-12-05',
    readTime: '10 min read',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080&auto=format&fit=crop',
    tags: ['API', 'Backend', 'REST'],
  },
  {
    id: '4',
    title: 'Flutter Mobile Development: A Comprehensive Guide',
    excerpt: 'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter and Dart.',
    content: `
      <h2>Why Choose Flutter?</h2>
      <p>Flutter has rapidly become one of the most popular frameworks for cross-platform development. Its "write once, run anywhere" philosophy saves significant development time and resources.</p>
      
      <h2>The Power of Dart</h2>
      <p>At the core of Flutter is the Dart programming language. Optimized for UI design, Dart allows for fast development with Hot Reload and high-performance execution.</p>
      
      <h2>Widget-Based Architecture</h2>
      <p>Everything in Flutter is a widget. This composition-based approach allows you to build complex UIs by combining simple, reusable components.</p>
      
      <h2>Performance</h2>
      <p>Unlike other cross-platform frameworks that use a bridge to communicate with native modules, Flutter compiles to native machine code, resulting in near-native performance.</p>
      
      <h2>Getting Started</h2>
      <p>Start your journey by setting up the Flutter SDK and creating your first "Hello World" app. The ecosystem offers rich documentation and a supportive community.</p>
    `,
    author: 'Azizbek',
    date: '2024-11-28',
    readTime: '12 min read',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1080&auto=format&fit=crop',
    tags: ['Flutter', 'Mobile', 'Dart'],
  },
  {
    id: '5',
    title: 'Optimizing Web Performance: A Comprehensive Guide',
    excerpt: 'Techniques and strategies to make your websites blazing fast. From code splitting to image optimization and caching strategies.',
    content: `
      <h2>Why Performance Matters</h2>
      <p>Website performance directly impacts user experience, SEO rankings, and conversion rates. Even a one-second delay can significantly affect your metrics.</p>
      
      <h2>Measuring Performance</h2>
      <p>Use tools like Lighthouse, WebPageTest, and Chrome DevTools to identify performance bottlenecks. Understanding your metrics is the first step to improvement.</p>
      
      <h2>Code Optimization</h2>
      <p>Minimize JavaScript bundles, implement code splitting, and use lazy loading for components that aren't immediately needed.</p>
      
      <h2>Asset Optimization</h2>
      <p>Compress images, use modern formats like WebP, implement responsive images, and leverage CDNs for faster delivery.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement effective caching strategies using service workers, HTTP cache headers, and local storage to reduce server requests and improve load times.</p>
    `,
    author: 'David Park',
    date: '2024-11-20',
    readTime: '9 min read',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1080&auto=format&fit=crop',
    tags: ['Performance', 'Optimization', 'Best Practices'],
  },
  {
    id: '6',
    title: 'The Art of Team Collaboration in Software Development',
    excerpt: 'Effective communication, Agile methodologies, and how to thrive in a collaborative coding environment. Why soft skills matter as much as coding skills.',
    content: `
      <h2>The importance of Soft Skills</h2>
      <p>Technical skills get you hired, but soft skills get you promoted. In software development, the ability to communicate ideas clearly and work well with others is invaluable.</p>
      
      <h2>Agile & Scrum</h2>
      <p>Modern development teams rely on Agile methodologies. Understanding concepts like Sprints, Stand-ups, and Retrospectives helps in aligning with team goals and delivering value iteratively.</p>
      
      <h2>Code Reviews</h2>
      <p>Code reviews are not just about finding bugs; they are a tool for knowledge sharing and maintaining code quality. Approach them with a mindset of learning and teaching.</p>
      
      <h2>Remote Collaboration</h2>
      <p>With the rise of remote work, mastering tools like Slack, Jira, and Zoom, and maintaining asynchronous communication is essential for effective teamwork.</p>
    `,
    author: 'Azizbek',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Career & Soft Skills',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop',
    tags: ['Teamwork', 'Agile', 'Soft Skills'],
  },
  {
    id: '7',
    title: 'Thriving in Freelance Marketplaces',
    excerpt: 'Tips and strategies for succeeding on platforms like Upwork and Fiverr. Building your profile, winning clients, and managing projects effectively.',
    content: `
      <h2>Building a Strong Profile</h2>
      <p>Your profile is your storefront. Highlight your expertise, showcase a strong portfolio, and collect testimonials to build trust with potential clients.</p>
      
      <h2>Writing Proposals</h2>
      <p>Don't copy-paste proposals. Tailor each pitch to the client's specific needs, showing that you've read their project description and understand their pain points.</p>
      
      <h2>Client Management</h2>
      <p>Communication is key. Set clear expectations, provide regular updates, and deliver on time. A happy client is a repeat client.</p>
      
      <h2>Pricing Your Services</h2>
      <p>Don't undervalue your work. Start with competitive rates and gradually increase them as you build a reputation and demand for your services grows.</p>
    `,
    author: 'Azizbek',
    date: '2025-01-08',
    readTime: '10 min read',
    category: 'Freelance',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1080&auto=format&fit=crop',
    tags: ['Freelance', 'Career', 'Marketplaces'],
  },
  {
    id: '8',
    title: 'Frontend Development: The Road Ahead',
    excerpt: 'Exploring the modern frontend ecosystem. From React and Vue to Next.js and server components. What you need to know to stay relevant.',
    content: `
      <h2>The Evolution of Frontend</h2>
      <p>Frontend development has moved far beyond simple HTML, CSS, and jQuery. Today, we build complex, stateful applications that rival desktop software in functionality.</p>
      
      <h2>Modern Frameworks</h2>
      <p>React, Vue, and Angular continue to dominate, but new contenders like Svelte and Solid are pushing the boundaries of performance and simplicity.</p>
      
      <h2>Server-Side Rendering (SSR)</h2>
      <p>Frameworks like Next.js and Nuxt have popularized SSR and Static Site Generation (SSG), offering better performance and SEO compared to traditional SPAs.</p>
      
      <h2>The Future</h2>
      <p>Keep an eye on WebAssembly, Edge Computing, and AI-assisted coding. The frontend landscape is ever-changing, and continuous learning is the key to success.</p>
    `,
    author: 'Azizbek',
    date: '2025-01-09',
    readTime: '8 min read',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1080&auto=format&fit=crop',
    tags: ['Frontend', 'Web Dev', 'Trends'],
  },
];

const blogPostsRu: BlogPost[] = [
  {
    id: '1',
    title: 'Создание масштабируемых React приложений с TypeScript',
    excerpt: 'Изучите лучшие практики структурирования крупных React приложений с использованием TypeScript, включая безопасность типов, паттерны компонентов и управление состоянием.',
    content: `
      <h2>Введение</h2>
      <p>Создание масштабируемых приложений React требует тщательного планирования и соблюдения лучших практик. TypeScript добавляет дополнительный уровень безопасности типов, который предотвращает ошибки.</p>
      
      <h2>Ключевые принципы</h2>
      <p>При создании крупных приложений учитывайте эти принципы:</p>
      <ul>
        <li>Композиция компонентов вместо наследования</li>
        <li>Правильная стратегия управления состоянием</li>
        <li>Типизированные пропсы и состояние</li>
      </ul>
      
      <h2>Структура проекта</h2>
      <p>Хорошо организованная структура проекта имеет решающее значение. Я рекомендую организовывать файлы по фичам, а не по типу файлов.</p>
      
      <h2>Безопасность типов</h2>
      <p>TypeScript предоставляет отличные инструменты для отлова ошибок во время компиляции. Используйте интерфейсы и типы.</p>
      
      <h2>Заключение</h2>
      <p>Следуя этим паттернам, вы сможете создавать надежные и масштабируемые приложения на React.</p>
    `,
    author: 'Алекс Джонсон',
    date: '2024-12-15',
    readTime: '8 мин',
    category: 'Веб-разработка',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1080&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Архитектура'],
  },
  {
    id: '2',
    title: 'Освоение современного CSS: Grid и Flexbox',
    excerpt: 'Глубокое погружение в CSS Grid и Flexbox. Поймите, когда использовать каждый из них и как создавать адаптивные дизайны без медиа-запросов.',
    content: `
      <h2>Понимание систем макета</h2>
      <p>CSS Grid и Flexbox — мощные инструменты, которые революционизировали веб-дизайн.</p>
      
      <h2>Flexbox: Одномерные макеты</h2>
      <p>Flexbox идеально подходит для размещения элементов в одном направлении — горизонтально или вертикально.</p>
      
      <h2>CSS Grid: Двумерные макеты</h2>
      <p>CSS Grid позволяет работать как со строками, так и со столбцами одновременно, что идеально для сложных макетов.</p>
      
      <h2>Практические примеры</h2>
      <p>Рассмотрим реальные сценарии использования каждого метода компоновки для выбора правильного инструмента.</p>
      
      <h2>Адаптивный дизайн</h2>
      <p>И Grid, и Flexbox предлагают мощные функции для создания адаптивных макетов без лишних медиа-запросов.</p>
    `,
    author: 'Сара Чен',
    date: '2024-12-10',
    readTime: '6 мин',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1080&auto=format&fit=crop',
    tags: ['CSS', 'Layout', 'Адаптивный дизайн'],
  },
  {
    id: '3',
    title: 'Лучшие практики дизайна API для RESTful сервисов',
    excerpt: 'Основные рекомендации по проектированию чистых, эффективных и удобных для разработчиков REST API, которые масштабируются вместе с вашим приложением.',
    content: `
      <h2>Принципы RESTful API</h2>
      <p>REST — это архитектурный стиль для проектирования сетевых приложений. Следование принципам REST делает API предсказуемым.</p>
      
      <h2>Именование ресурсов</h2>
      <p>Используйте существительные для имен ресурсов, а не глаголы. Ресурсы должны быть во множественном числе.</p>
      
      <h2>HTTP методы</h2>
      <p>Используйте методы HTTP правильно: GET для получения, POST для создания, PUT/PATCH для обновления и DELETE для удаления.</p>
      
      <h2>Статус коды</h2>
      <p>Возвращайте правильные статус коды HTTP: 200 для успеха, 404 для не найдено, 500 для ошибок сервера.</p>
      
      <h2>Версионирование и документация</h2>
      <p>Всегда версионируйте свой API и предоставляйте подробную документацию.</p>
    `,
    author: 'Майкл Родригес',
    date: '2024-12-05',
    readTime: '10 мин',
    category: 'Бэкенд',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080&auto=format&fit=crop',
    tags: ['API', 'Бэкенд', 'REST'],
  },
  {
    id: '4',
    title: 'Разработка на Flutter: Полное руководство',
    excerpt: 'Создавайте красивые, нативно скомпилированные приложения для мобильных устройств, веб и десктопа из единой кодовой базы с помощью Flutter и Dart.',
    content: `
      <h2>Почему выбирают Flutter?</h2>
      <p>Flutter быстро стал одним из самых популярных фреймворков для кроссплатформенной разработки. Философия "напиши один раз, запускай везде" экономит время.</p>
      
      <h2>Сила Dart</h2>
      <p>В основе Flutter лежит язык программирования Dart. Оптимизированный для UI дизайна, Dart позволяет быстро разрабатывать с функцией Hot Reload.</p>
      
      <h2>Виджетная архитектура</h2>
      <p>В Flutter всё является виджетом. Этот подход позволяет создавать сложные интерфейсы из простых компонентов.</p>

      <h2>Производительность</h2>
      <p>В отличие от других фреймворков, Flutter компилируется в нативный код, обеспечивая высокую производительность.</p>

      <h2>Начало работы</h2>
      <p>Начните с установки Flutter SDK и создания вашего первого приложения. Экосистема предлагает богатую документацию.</p>
    `,
    author: 'Азизбек',
    date: '2024-11-28',
    readTime: '12 мин',
    category: 'Мобильная разработка',
    image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1080&auto=format&fit=crop',
    tags: ['Flutter', 'Mobile', 'Dart'],
  },
  {
    id: '5',
    title: 'Оптимизация производительности веб-сайтов: Полное руководство',
    excerpt: 'Техники и стратегии для создания молниеносно быстрых сайтов. От разделения кода до оптимизации изображений и стратегий кэширования.',
    content: `
      <h2>Почему производительность важна</h2>
      <p>Производительность сайта напрямую влияет на пользовательский опыт, SEO и конверсию. Задержка даже в секунду имеет значение.</p>
      
      <h2>Измерение производительности</h2>
      <p>Используйте инструменты вроде Lighthouse и Chrome DevTools для поиска узких мест.</p>
      
      <h2>Оптимизация кода</h2>
      <p>Минимизируйте JavaScript бандлы, используйте разделение кода и ленивую загрузку компонентов.</p>
      
      <h2>Оптимизация ресурсов</h2>
      <p>Сжимайте изображения, используйте форматы WebP и применяйте CDN для быстрой доставки.</p>
      
      <h2>Стратегии кэширования</h2>
      <p>Используйте сервис-воркеры и кэширование HTTP для уменьшения запросов к серверу.</p>
    `,
    author: 'Дэвид Пак',
    date: '2024-11-20',
    readTime: '9 мин',
    category: 'Производительность',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1080&auto=format&fit=crop',
    tags: ['Производительность', 'Оптимизация', 'Лучшие практики'],
  },
  {
    id: '6',
    title: 'Искусство командной работы в разработке ПО',
    excerpt: 'Эффективная коммуникация, методологии Agile и как преуспеть в совместной среде разработки. Почему soft skills важны так же, как и навыки программирования.',
    content: `
      <h2>Важность Soft Skills</h2>
      <p>Технические навыки помогают получить работу, но soft skills помогают получить повышение. Умение четко излагать идеи бесценно.</p>
      
      <h2>Agile и Scrum</h2>
      <p>Современные команды полагаются на Agile. Понимание спринтов, стендапов и ретроспектив помогает достигать целей команды.</p>

      <h2>Ревью кода</h2>
      <p>Code review — это не просто поиск багов, но и обмен знаниями. Подходите к этому как к возможности учиться.</p>

      <h2>Удаленная работа</h2>
      <p>С ростом удаленки важно владеть инструментами вроде Slack и Jira для поддержания эффективной коммуникации.</p>
    `,
    author: 'Азизбек',
    date: '2025-01-05',
    readTime: '7 мин',
    category: 'Карьера и Soft Skills',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop',
    tags: ['Командная работа', 'Agile', 'Soft Skills'],
  },
  {
    id: '7',
    title: 'Успешная работа на фриланс-биржах',
    excerpt: 'Советы и стратегии успеха на платформах вроде Upwork и Fiverr. Создание профиля, привлечение клиентов и эффективное управление проектами.',
    content: `
      <h2>Создание сильного профиля</h2>
      <p>Ваш профиль - это ваша витрина. Подчеркните свой опыт, покажите сильное портфолио и собирайте отзывы.</p>
      
      <h2>Написание предложений</h2>
      <p>Не копируйте предложения. Адаптируйте каждый питч под конкретные нужды клиента, показывая понимание задачи.</p>

      <h2>Управление клиентами</h2>
      <p>Коммуникация — это ключ. Устанавливайте четкие ожидания и соблюдайте сроки. Довольный клиент вернется снова.</p>

      <h2>Ценообразование</h2>
      <p>Не обесценивайте свой труд. Начинайте с конкурентных цен и повышайте их по мере роста репутации.</p>
    `,
    author: 'Азизбек',
    date: '2025-01-08',
    readTime: '10 мин',
    category: 'Фриланс',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1080&auto=format&fit=crop',
    tags: ['Фриланс', 'Карьера', 'Биржи'],
  },
  {
    id: '8',
    title: 'Frontend Разработка: Взгляд в будущее',
    excerpt: 'Обзор современной экосистемы фронтенда. От React и Vue до Next.js. Что нужно знать, чтобы оставаться востребованным.',
    content: `
      <h2>Эволюция Фронтенда</h2>
      <p>Разработка ушла далеко от простого HTML и CSS. Сегодня мы строим сложные приложения с богатым функционалом.</p>
      
      <h2>Современные фреймворки</h2>
      <p>React, Vue и Angular продолжают доминировать, но появляются новые игроки, такие как Svelte и Solid.</p>

      <h2>Server-Side Rendering (SSR)</h2>
      <p>Фреймворки вроде Next.js популяризировали SSR, предлагая лучшую производительность и SEO.</p>

      <h2>Будущее</h2>
      <p>Следите за WebAssembly и AI-инструментами. Фронтенд постоянно меняется, и постоянное обучение — ключ к успеху.</p>
    `,
    author: 'Азизбек',
    date: '2025-01-09',
    readTime: '8 мин',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1080&auto=format&fit=crop',
    tags: ['Frontend', 'Веб-разработка', 'Тренды'],
  },
];

const blogPostsUz: BlogPost[] = [
  {
    id: '1',
    title: 'TypeScript bilan Scalable React ilovalarini yaratish',
    excerpt: 'TypeScript yordamida yirik React ilovalarini tuzish bo\'yicha eng yaxshi amaliyotlarni o\'rganing, shu jumladan tip xavfsizligi va komponentlar.',
    content: `
      <h2>Kirish</h2>
      <p>Masshtablashuvchi React ilovalarini yaratish puxta rejalashtirishni talab qiladi. TypeScript xatolarni oldini olishga yordam beradi.</p>
      
      <h2>Asosiy Tamoyillar</h2>
      <p>Yirik ilovalarni yaratishda quyidagilarni hisobga oling:</p>
      <ul>
        <li>Komponentlar kompozitsiyasi</li>
        <li>To'g'ri holat boshqaruvi (State Management)</li>
        <li>Xavfsiz tiplar</li>
      </ul>
      
      <h2>Loyiha Tuzilmasi</h2>
      <p>Loyihani to'g'ri tashkil etish juda muhim. Fayllarni turi bo'yicha emas, balki funksionalligi bo'yicha ajratishni tavsiya qilaman.</p>
      
      <h2>Tip Xavfsizligi</h2>
      <p>TypeScript kompilyatsiya vaqtida xatolarni aniqlash uchun ajoyib vositalarni taqdim etadi.</p>
      
      <h2>Xulosa</h2>
      <p>Ushbu usullarni qo'llash orqali siz mustahkam va masshtablashuvchan React ilovalarini yaratishingiz mumkin.</p>
    `,
    author: 'Aleks Jonson',
    date: '2024-12-15',
    readTime: '8 daqiqa',
    category: 'Web Dasturlash',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1080&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Arxitektura'],
  },
  {
    id: '2',
    title: 'Zamonaviy CSS: Grid va Flexbox',
    excerpt: 'CSS Grid va Flexbox maketlarini chuqur o\'rganish. Qachon qaysi birini ishlatishni va media so\'rovlarsiz moslashuvchan dizaynlarni qanday yaratishni tushuning.',
    content: `
      <h2>Layout Tizimlarini Tushunish</h2>
      <p>CSS Grid va Flexbox - web-dizaynni inqilob qilgan kuchli vositalardir.</p>
      
      <h2>Flexbox: Bir O'lchamli Layoutlar</h2>
      <p>Flexbox elementlarni bir yo'nalishda - gorizontal yoki vertikal joylashtirish uchun juda mos keladi.</p>
      
      <h2>CSS Grid: Ikki O'lchamli Layoutlar</h2>
      <p>CSS Grid bir vaqtning o'zida ham qatorlar, ham ustunlar bilan ishlash imkonini beradi.</p>
      
      <h2>Amaliy Misollar</h2>
      <p>Dizayn ehtiyojlaringiz uchun to'g'ri vositani tanlashda real misollarni ko'rib chiqamiz.</p>
      
      <h2>Moslashuvchan Dizayn</h2>
      <p>Grid va Flexbox yordamida har qanday ekranga moslashuvchan dizaynlarni osongina yaratish mumkin.</p>
    `,
    author: 'Sara Chen',
    date: '2024-12-10',
    readTime: '6 daqiqa',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1080&auto=format&fit=crop',
    tags: ['CSS', 'Layout', 'Moslashuvchan Dizayn'],
  },
  {
    id: '3',
    title: 'RESTful xizmatlar uchun API dizayn bo\'yicha tavsiyalar',
    excerpt: 'Ilovangiz bilan birga masshtablashuvchi toza, samarali va dasturchilar uchun qulay REST API larni loyihalash bo\'yicha muhim ko\'rsatmalar.',
    content: `
      <h2>RESTful API Tamoyillari</h2>
      <p>REST - bu tarmoq ilovalarini loyihalash arxitekturasidir. Bu tamoyillarga rioya qilish APIni tushunarli qiladi.</p>
      
      <h2>Resurslarni Nomlash</h2>
      <p>Resurs nomlari uchun fe'llar emas, otlardan foydalaning. Masalan: /users, /posts.</p>
      
      <h2>HTTP Metodlari</h2>
      <p>GET, POST, PUT, DELETE metodlaridan to'g'ri foydalaning. Bu web standartlariga mos keladi.</p>
      
      <h2>Status Kodlari</h2>
      <p>Muvaffaqiyat uchun 200, topilmadi uchun 404, server xatosi uchun 500 kodlarini qaytaring.</p>
      
      <h2>Versiyalash va Hujjatlashtirish</h2>
      <p>APIingizni har doim versiyalang va to'liq hujjatlashtiring.</p>
    `,
    author: 'Maykl Rodrigez',
    date: '2024-12-05',
    readTime: '10 daqiqa',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080&auto=format&fit=crop',
    tags: ['API', 'Backend', 'REST'],
  },
  {
    id: '4',
    title: 'Flutter da Mobil Dasturlash: To\'liq Qo\'llanma',
    excerpt: 'Flutter va Dart yordamida bitta kod bazasidan mobil, veb va ish stoli uchun chiroyli ilovalar yarating.',
    content: `
      <h2>Nega Flutter?</h2>
      <p>Flutter tez orada eng mashhur kross-platforma freymvorklaridan biriga aylandi. "Bir marta yoz, hamma joyda ishlat" falsafasi vaqt va resurslarni tejaydi.</p>
      
      <h2>Dart Kuchi</h2>
      <p>Flutter asosida Dart dasturlash tili yotadi. UI dizayni uchun optimallashtirilgan Dart tezkor ishlashni ta'minlaydi (Hot Reload).</p>
      
      <h2>Vidjetlar Arxitekturasi</h2>
      <p>Flutterda hamma narsa vidjetdir. Bu yondashuv oddiy komponentlarni birlashtirish orqali murakkab interfeyslarni yaratishga imkon beradi.</p>

      <h2>Samaradorlik</h2>
      <p>Boshqa freymvorklardan farqli o'laroq, Flutter native kodga kompilyatsiya qilinadi, bu esa yuqori tezlikni ta'minlaydi.</p>

      <h2>Boshlash</h2>
      <p>Ishni Flutter SDK o'rnatish va birinchi ilovangizni yaratishdan boshlang. Hujjatlar juda keng va tushunarli.</p>
    `,
    author: 'Azizbek',
    date: '2024-11-28',
    readTime: '12 daqiqa',
    category: 'Mobil Dasturlash',
    image: 'https://images.unsplash.com/photo-1617042375876-a13e36732a04?q=80&w=1080&auto=format&fit=crop',
    tags: ['Flutter', 'Mobile', 'Dart'],
  },
  {
    id: '5',
    title: 'Web Samaradorligini Optimallashtirish: To\'liq Qo\'llanma',
    excerpt: 'Web saytlaringizni tez ishlashini ta\'minlash usullari va strategiyalari. Kodni bo\'lishdan tortib rasmlarni optimallashtirish va keshgacha.',
    content: `
      <h2>Nega Samaradorlik Muhim</h2>
      <p>Sayt tezligi foydalanuvchi tajribasi va SEO reytingiga to'g'ridan-to'g'ri ta'sir qiladi.</p>
      
      <h2>Samaradorlikni O'lchash</h2>
      <p>Lighthouse va Chrome DevTools kabi vositalardan foydalanib, muammoli joylarni aniqlang.</p>
      
      <h2>Kodni Optimallashtirish</h2>
      <p>JavaScript hajmini kamaytiring, kodni bo'laklarga (code splitting) ajrating.</p>
      
      <h2>Resurslarni Optimallashtirish</h2>
      <p>Rasmlarni siqing, WebP formatidan foydalaning va CDN ishlating.</p>
      
      <h2>Kesh Strategiyalari</h2>
      <p>Service Worker va brauzer keshidan foydalanib, yuklash tezligini oshiring.</p>
    `,
    author: 'Devid Park',
    date: '2024-11-20',
    readTime: '9 daqiqa',
    category: 'Samaradorlik',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1080&auto=format&fit=crop',
    tags: ['Samaradorlik', 'Optimallashtirish', 'Best Practices'],
  },
  {
    id: '6',
    title: 'Dasturlashda Jamoaviy Ishlash San\'ati',
    excerpt: 'Samarali muloqot, Agile metodologiyalari va jamoaviy muhitda qanday muvaffaqiyat qozonish mumkin. Soft skills nega muhim?',
    content: `
      <h2>Soft Skills Ahamiyati</h2>
      <p>Texnik bilimlar ishga kirishga yordam beradi, ammo "soft skills" (yumshoq ko'nikmalar) mansab pillapoyalaridan ko'tarilishga yordam beradi.</p>
      
      <h2>Agile va Scrum</h2>
      <p>Zamonaviy jamoalar Agile metodologiyasiga tayanadilar. Sprintlar va retrospetivalarni tushunish jamoa maqsadlariga erishishda yordam beradi.</p>

      <h2>Kod Tekshiruvi (Code Review)</h2>
      <p>Code review - bu nafaqat xatolarni topish, balki bilim almashish vositasidir.</p>

      <h2>Masofaviy Ishlash</h2>
      <p>Masofaviy ishlashda Slack, Jira kabi vositalardan samarali foydalanish muhim.</p>
    `,
    author: 'Azizbek',
    date: '2025-01-05',
    readTime: '7 daqiqa',
    category: 'Karyera va Soft Skills',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop',
    tags: ['Jamoaviy ish', 'Agile', 'Soft Skills'],
  },
  {
    id: '7',
    title: 'Frilans Birjalarida Muvaffaqiyat',
    excerpt: 'Upwork va Fiverr kabi platformalarda muvaffaqiyatga erishish strategiyalari. Profil yaratish, mijozlarni jalb qilish va loyihalarni boshqarish.',
    content: `
      <h2>Kuchli Profil Yaratish</h2>
      <p>Sizning profilingiz - bu sizning vitrinangiz. Tajribangizni ko'rsating, portfoliongizni namoyish eting.</p>
      
      <h2>Takliflar Yozish</h2>
      <p>Takliflarni nusxalab tashlamang. Har bir mijoz uchun alohida yondashuv qiling va ularning muammosini tushunganingizni ko'rsating.</p>

      <h2>Mijozlar Bilan Ishlash</h2>
      <p>Muloqot - bu kalit. Aniq muddatlarni belgilang va ularga rioya qiling. Mamnun mijoz qaytib keladi.</p>

      <h2>Narx Belgilash</h2>
      <p>O'z mehnatingizni qadrlang. Bozor narxlaridan kelib chiqing va tajribangiz oshgani sari narxni oshiring.</p>
    `,
    author: 'Azizbek',
    date: '2025-01-08',
    readTime: '10 daqiqa',
    category: 'Frilans',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1080&auto=format&fit=crop',
    tags: ['Frilans', 'Karyera', 'Birjalar'],
  },
  {
    id: '8',
    title: 'Frontend Dasturlash: Kelajakka Nazar',
    excerpt: 'Zamonaviy frontend ekotizimi. React va Vue dan Next.js gacha. Bozor talabiga javob berish uchun nimalarni bilish kerak.',
    content: `
      <h2>Frontend Evolyutsiyasi</h2>
      <p>Dasturlash oddiy HTML va CSS dan ancha uzoqlashdi. Bugungi kunda biz murakkab ilovalar quryapmiz.</p>
      
      <h2>Zamonaviy Freymvorklar</h2>
      <p>React, Vue va Angular yetakchilik qilmoqda, ammo yangi texnologiyalar ham kirib kelmoqda (Svelte, Solid).</p>

      <h2>Server-Side Rendering (SSR)</h2>
      <p>Next.js kabi freymvorklar SSR ni ommalashtirdi, bu esa tezlik va SEO uchun foydali.</p>

      <h2>Kelajak</h2>
      <p>WebAssembly va sun'iy intellekt vositalarini kuzatib boring. Doimiy o'rganish - muvaffaqiyat garovidir.</p>
    `,
    author: 'Azizbek',
    date: '2025-01-09',
    readTime: '8 daqiqa',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1080&auto=format&fit=crop',
    tags: ['Frontend', 'Web Dasturlash', 'Trendlar'],
  },
];

export const blogPosts = {
  en: blogPostsEn,
  ru: blogPostsRu,
  uz: blogPostsUz,
};
