export interface Contact {
  label: string;
  value: string;
  href: string;
  icon: 'phone' | 'email' | 'linkedin' | 'github' | 'download' | 'arrow';
}

export interface Role {
  title: string;
  period: string;
}

export interface Job {
  company: string;
  location: string;
  period: string;
  type: string;
  roles: Role[];
  highlights: string[];
}

export interface Education {
  school: string;
  location: string;
  period: string;
  degree: string;
  gpa: string;
  thesis?: string;
  href?: string;
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  bullets: string[];
  icon: 'server' | 'book' | 'mic' | 'code' | 'dashboard';
  href?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
}

export const profile = {
  name: 'Herman',
  title: 'Senior Software Development Engineer',
  location: 'Jakarta, Indonesia',
  summary:
    "Senior Software Engineer with 7+ years building scalable frontend systems for high-traffic e-commerce platforms, specializing in TypeScript, Vue.js, and Node.js. I architected a custom Node.js SSR framework supporting micro-frontend architecture with SSR, ISR, and PPR rendering strategies, improving performance and SEO for critical shopping page experiences. Comfortable across the full stack with production experience in RESTful APIs, GraphQL, CI/CD, cloud infrastructure, and relational database design. Master's in Computer Science with published research in Deep Learning and Computer Vision. Experienced in leading technical migrations, mentoring teams through knowledge-sharing sessions, and driving cross-functional collaboration in agile environments. I also build open-source tooling including a TypeScript code generator from OpenAPI specs, and full-stack side projects using Vue, React, Redux, GraphQL, and Node.js. I leverage AI-assisted development tools (Cursor, Copilot, ChatGPT, Claude CLI, Kimi) and agentic programming to accelerate prototyping, refactor legacy code, and improve code review productivity.",
  resumeUrl: '/Herman-2026-ATS.pdf',
};

export const contacts: Contact[] = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/herman-h-8b9b49186',
    href: 'https://www.linkedin.com/in/herman-h-8b9b49186/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/devteaa',
    href: 'https://github.com/devteaa',
    icon: 'github',
  },
];

export const experiences: Job[] = [
  {
    company: 'PT. Global Digital Niaga (Blibli.com)',
    location: 'Jakarta, Indonesia',
    period: 'Sep 2023 - Present',
    type: 'E-commerce',
    roles: [
      { title: 'Senior Software Development Engineer (RnD)', period: 'Sep 2023 - Present' },
    ],
    highlights: [
      'Architected a custom Node.js SSR framework supporting micro-frontend architecture with SSR, ISR, and PPR rendering strategies, improving performance and SEO for critical shopping page experiences.',
      'Created documentation and AI agent skills to accelerate SSR development and onboard engineers to the custom SSR framework.',
      'Collaborated with the SEO team to optimize SEO-critical pages using the custom SSR library, improving page performance and implementing JSON-LD schema rendering on the server.',
      'Joined the SSR implementation team, contributing through pair programming, code reviews, and architecture discussions, and gradually delegating SSR feature ownership to grow team autonomy.',
      'Collaborated with platform engineers on Docker, Kubernetes, Helm, and Argo CD deployment configurations for frontend services.',
      'Created documentation and AI agent skills to help developers debug CI/CD and deployment issues.',
      'Configured Nginx API gateways and routing strategies in collaboration with cross-functional engineering teams.',
      'Developed internal engineering tools and led knowledge-sharing sessions to improve team productivity and mentor developers.',
      'Built monitoring dashboards for micro-frontend SSR services using Datadog.',
      'Ran sharing sessions with frontend teams on using distributed tracing and Datadog profiler to debug errors and analyse SSR performance.',
      'Collaborated with UX Engineers to develop a theme-based build system for sister companies (Blibli E-commerce and Tiket Travel Experience).',
      'Outperformed Nuxt by 5.9x RPS with 6x lower stable memory usage.',
      'Reduced mobile LCP from 76.5s to 7.3s on product pages and improved homepage mobile visually complete from 13.5s to 2.7s.',
    ],
  },
  {
    company: 'PT. Global Digital Niaga (Blibli.com)',
    location: 'Jakarta, Indonesia',
    period: 'Sep 2019 - Aug 2023',
    type: 'E-commerce',
    roles: [
      { title: 'Senior Software Development Engineer (Official Store)', period: 'Mar 2023 - Aug 2023' },
      { title: 'Software Development Engineer (Official Store)', period: 'Sep 2021 - Feb 2023' },
      { title: 'Associate Software Development Engineer (Official Store)', period: 'Sep 2019 - Aug 2021' },
    ],
    highlights: [
      'Collaborated with cross-functional teams across Product Detail, Search Results, Engagement Content, Seller Page, and Seller Experience on both customer-facing and seller-facing applications.',
      'Implemented tracking behaviour with the Analytics team using Google Tag Manager.',
      'Mentored new hires and interns through pair programming for knowledge sharing and problem solving.',
      'Contributed to sprint planning, technical discussions, and feature feedback with product managers and team members.',
      'Led the Official Store frontend migration from Vue 2 to Vue 3, enabling both patterns to run side by side without slowing down feature development.',
      'Integrated TypeScript types between frontend and backend using OpenAPI specs, reducing API contract mismatches and improving type safety across the stack.',
      'Built analytics dashboards to help sellers track and improve performance.',
      'Implemented seller page banner and layout customization features.',
      'Developed the Official Store seller registration and approval workflow.',
      'Built a broadcast messaging system for seller promotions and campaigns.',
      'Presented "Functional Vue with Composition and TypeScript" at Blitalk 2021, sharing migration practices and mentoring internal teams on modern Vue patterns.',
    ],
  },
  {
    company: 'Kairos Utama Indonesia',
    location: 'Jakarta, Indonesia',
    period: 'Jun 2018 - Aug 2019',
    type: 'Software House',
    roles: [{ title: 'Junior Software Programmer', period: 'Jun 2018 - Aug 2019' }],
    highlights: [
      'Architected and developed enterprise internal portal solutions for Pertamina using ASP.NET MVC and .NET Framework.',
      'Implemented dynamic rendering architecture combining server-rendered shell templates with vanilla JavaScript DOM interactions.',
      'Built backend business logic using .NET Framework and Entity Framework, including DTO generation and database schema maintenance.',
      'Optimized stored procedures for heavy read-query workloads, reducing the Pertamina dashboard load time from 3 minutes to 14 seconds (97% improvement).',
      'Contributed to Indonesia gas station standardization and certification systems with cross-functional teams.',
      'Led a CMS project delivering news management, project dashboards, event calendars, secure file sharing with session-based watermarking, org hierarchy visualization, and media file explorer.',
    ],
  },
  {
    company: 'Mediatech',
    location: 'Tanjungpinang, Indonesia',
    period: 'May 2014 - Feb 2018',
    type: 'IT Services',
    roles: [{ title: 'IT Support Technician', period: 'May 2014 - Feb 2018' }],
    highlights: [
      'Provided hardware, software, and network support for clients across multiple locations.',
      'Installed, configured, and maintained computer systems, printers, and network infrastructure.',
      'Troubleshot technical issues and delivered user training to improve operational uptime.',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'codegen-openapi-ts',
    description:
      'An open-source Node.js library and CLI that generates TypeScript API clients from OpenAPI/Swagger specs. It parses OpenAPI v2/v3, uses Handlebars templates for code generation, and is bundled with Rollup with Jest tests.',
    tech: ['TypeScript', 'Node.js', 'Rollup', 'Jest', 'Handlebars'],
    links: [{ label: 'GitHub', href: 'https://github.com/devTeaa/codegen-openapi-ts' }],
  },
  {
    title: 'Cipondo Powerindo',
    description:
      'An internal ERP for a heavy-equipment company tracking equipment units through buying, renting, selling, maintenance, and spare-parts inventory across locations. It includes a role-based access design where lower roles handle rental workflows and higher roles manage master data and transactions. Built with Nuxt 3 (client-rendered), Vue 3 Composition API, Pinia auth, and a Nitro/Prisma/PostgreSQL backend.',
    tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Prisma', 'Pinia', 'JWT'],
  },
  {
    title: 'Wishywashy',
    description:
      'A laundry POS and management system where staff create invoices, manage customers, services, deposits, and print receipts, while admins view reports and dashboards. The React frontend uses Redux and React Router, backed by an Express/Sequelize REST API and PostgreSQL.',
    tech: [
      'React',
      'TypeScript',
      'Redux',
      'Bulma',
      'Node.js',
      'Express',
      'Sequelize',
      'PostgreSQL',
    ],
  },
  {
    title: 'Bikedealer',
    description:
      'A back-office dashboard for a motorcycle dealership handling installment sales, monthly payments, pawn transactions, spending, due/overdue tracking, and PDF invoice printing. Built as a React SPA with class components, GraphQL data fetching, and Bulma styling.',
    tech: ['React', 'Bulma', 'GraphQL', 'jspdf'],
  },
  {
    title: 'Warteg Modern',
    description:
      'A role-based restaurant POS with a React frontend and an Express/GraphQL backend. Admins manage categories, tables, menus, and staff; staff create and update orders by table; cashiers view active invoices and print thermal receipts. The SPA uses Redux, React Router, and Bulma, while the backend uses raw PostgreSQL queries with per-request transactions, JWT auth, bcrypt hashing, and AWS S3 for menu images.',
    tech: [
      'React',
      'Redux',
      'GraphQL',
      'React Router',
      'Bulma',
      'jsPDF',
      'Node.js',
      'Express',
      'PostgreSQL',
      'AWS S3',
      'JWT',
      'bcrypt',
    ],
  },
];

export const educations: Education[] = [
  {
    school: 'Universitas Bina Nusantara',
    location: 'Jakarta, Indonesia',
    period: 'Jul 2018 - Dec 2019',
    degree: 'Master of Computer Science',
    gpa: '3.60/4.00',
    thesis:
      'Oil Palm Fruit Image Ripeness Classification with Computer Vision using Deep Learning and Visual Attention',
    href: 'https://www.researchgate.net/publication/376166986_DEEP_LEARNING_WITH_AUXILIARY_LEARNING_ATTENTION_MECHANISM_FOR_OIL_PALM_FRUIT_IMAGE_RIPENESS_CLASSIFICATION',
  },
  {
    school: 'Sekolah Tinggi Teknologi Indonesia',
    location: 'Tanjungpinang, Indonesia',
    period: 'Jul 2014 - Dec 2017',
    degree: 'Bachelor of Computer Science',
    gpa: '3.33/4.00',
    thesis:
      'Thesis Defence Auto Scheduler using Greedy Algorithm for Sekolah Tinggi Teknologi Indonesia',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend & Frameworks',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Vue.js',
      'Nuxt',
      'Svelte',
      'Redux',
      'Pinia',
      'React Context',
      'Node.js',
      'Express',
    ],
  },
  {
    name: 'Backend & Data',
    skills: [
      'Python',
      'GraphQL',
      'RESTful APIs',
      'Spring Boot',
      'Java',
      'Kafka',
      '.NET Framework',
      'ASP.NET MVC',
      'Entity Framework',
      'PostgreSQL',
      'SQL',
      'Prisma ORM',
      'MongoDB',
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      'Docker',
      'Kubernetes',
      'Helm',
      'Argo CD',
      'Jenkins',
      'CI/CD Pipelines',
      'Datadog',
      'Distributed Tracing',
      'NGINX',
      'API Gateway',
      'Google Cloud Platform',
      'AWS S3',
      'Azure',
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      'Computer Vision',
      'Deep Learning',
      'Visual Attention Mechanisms',
      'Python',
      'PyTorch',
    ],
  },
  {
    name: 'Testing & Tools',
    skills: ['Jest', 'Playwright', 'Vitest', 'Unit Testing', 'Integration Testing'],
  },
  {
    name: 'Development Tools',
    skills: ['GitHub', 'Stash', 'Bitbucket', 'Figma', 'Jira', 'Confluence'],
  },
  {
    name: 'AI-Assisted Development',
    skills: [
      'Cursor',
      'GitHub Copilot',
      'ChatGPT',
      'Claude CLI',
      'Kimi',
      'Agentic programming',
    ],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Custom SSR Framework',
    icon: 'server',
    description:
      'A plugin based SSR framework that drops into existing Vue CSR projects and can be installed and configured via AI agent skills to get developers started with SSR quickly.',
    bullets: [
      'Progressive SSR adoption without rewriting the project.',
      'Renders Vue 2 and Vue 3 side by side during migrations.',
      'Config-driven setup with no implementation code; library auto-wires Express / SSR.',
      'Resource-efficient rendering using ISR, PPR, and island architecture like Astro.',
    ],
  },
  {
    title: 'Published Deep Learning Research',
    icon: 'book',
    description:
      'Published a paper on oil palm fruit ripeness classification using an auxiliary learning attention mechanism with DenseNet.',
    bullets: [
      'Proposed AuxNet, a DenseNet-based model with attention modules routed to auxiliary classifiers to mitigate vanishing gradients.',
      'Achieved 87% accuracy on a 7-class oil palm Fresh Fruit Bunch dataset, improving over the base DenseNet.',
      'Published in ICIC Express Letters, Vol. 17, No. 12, December 2023 (DOI: 10.24507/icicel.17.12.1303).',
    ],
    href: 'https://www.researchgate.net/publication/376166986_DEEP_LEARNING_WITH_AUXILIARY_LEARNING_ATTENTION_MECHANISM_FOR_OIL_PALM_FRUIT_IMAGE_RIPENESS_CLASSIFICATION',
  },
  {
    title: 'Blitalk Speaker 2021',
    icon: 'mic',
    description:
      'Presented "Functional Vue with Composition and TypeScript" at Blitalk 2021, sharing how Blibli.com migrated from Vue Options API / mixins to the Composition API.',
    bullets: [
      'The problems mixins introduce in large codebases.',
      'Migrating from Options API to Composition API incrementally.',
      'Running both patterns side by side without slowing down feature development.',
      'Practical examples comparing Composition API vs mixins.',
    ],
  },
  {
    title: 'OpenAPI Type Generation',
    icon: 'code',
    description:
      'Built an open-source CLI tool that generates TypeScript types from OpenAPI specs, keeping frontend and backend type definitions in sync.',
    bullets: [
      'Automated type generation from OpenAPI specifications.',
      'Eliminates manual type drift between frontend and backend APIs.',
    ],
    href: 'https://github.com/devTeaa/codegen-openapi-ts',
  },
  {
    title: 'Enterprise CMS',
    icon: 'dashboard',
    description: 'Led a CMS project for an internal company portal built with .NET MVC, vanilla JavaScript for DOM rendering, Entity Framework, Microsoft SQL Server, and deployed on Azure.',
    bullets: [
      'News management, project dashboards, and event calendars.',
      'Secure file sharing with session-based watermarking.',
      'Org hierarchy visualization and media file explorer.',
      'Enabled non-technical teams to manage content independently.',
    ],
  },
];
