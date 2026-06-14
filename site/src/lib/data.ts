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
  title: 'Software Design Engineer',
  location: 'Jakarta, Indonesia',
  summary:
    "Hi, I'm a Software Engineer with 7+ years building scalable frontend systems for high-traffic e-commerce. I specialize in web performance, server-side rendering, type-safe API integration, and CI/CD — leading a custom SSR framework that supports Blibli.com's micro-frontend architecture, centralizing frontend stack upgrades and monitoring, and building open-source tooling like codegen-openapi-ts. Across my career I've worked across the full product lifecycle, from enterprise internal portals at Pertamina to high-traffic e-commerce frontends at Blibli.com. My master's research in computer vision and deep learning taught me to approach complex problems methodically, and I bring that same mindset to frontend architecture: whether it's shaving seconds off page loads or designing systems that scale across teams.",
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
      { title: 'Software Design Engineer (RnD)', period: 'May 2026 - Present' },
      { title: 'Senior Software Design Engineer (RnD)', period: 'Sep 2023 - Apr 2026' },
    ],
    highlights: [
      'Architected a custom Node.js SSR framework that supports Blibli.com\'s micro-frontend architecture, enabling SSR, ISR, and PPR rendering strategies to overcome the limitations of existing meta-frameworks and improve web performance.',
      'Maintained and enhanced Jenkins CI/CD pipelines, centralising frontend stack upgrades, dependency maintenance, and deployment workflows.',
      'Configured Nginx API gateways and routing strategies in collaboration with cross-functional engineering teams.',
      'Developed internal engineering tools and led knowledge-sharing sessions to improve team productivity.',
      'Built monitoring dashboards and distributed tracing for the micro-frontend SSR layer using Datadog.'
    ],
  },
  {
    company: 'PT. Global Digital Niaga (Blibli.com)',
    location: 'Jakarta, Indonesia',
    period: 'Sep 2019 - Aug 2023',
    type: 'E-commerce',
    roles: [
      { title: 'Senior Software Design Engineer (Official Store)', period: 'Mar 2023 - Aug 2023' },
      { title: 'Software Design Engineer (Official Store)', period: 'Sep 2021 - Feb 2023' },
      { title: 'Associate Software Design Engineer (Official Store)', period: 'Sep 2019 - Aug 2021' },
    ],
    highlights: [
      'Built analytics dashboards to help sellers track and improve performance.',
      'Designed and implemented seller page banner and layout customization features.',
      'Developed the Official Store seller registration and approval workflow.',
      'Built a broadcast messaging system for seller promotions and campaigns.',
      'Integrated TypeScript types between frontend and backend using OpenAPI specs, reducing API contract mismatches.',
      'Presented "Functional Vue with Composition and TypeScript" at Blitalk 2021, sharing Vue 2→3 migration practices.',
      'Led the Official Store frontend migration from Vue 2 to Vue 3.',
      'Collaborated with cross-functional teams to deliver end-to-end seller-facing features.',
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
      'Led a CMS project for the internal company portal, delivering features such as news management, project dashboards, event calendars, secure file sharing with session-based watermarking, org hierarchy visualization, and media file explorer, enabling non-technical teams to manage content independently.',
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
    title: 'Warteg Modern',
    description:
      'A role-based restaurant POS interface where admins manage categories, tables, menus, and staff; staff create and update orders by table; and cashiers view active invoices and print thermal receipts. Built as a Create React App SPA with Redux, React Router, and Bulma, communicating via GraphQL with role-gated views.',
    tech: ['React', 'Redux', 'GraphQL', 'React Router', 'Bulma', 'jsPDF'],
  },
  {
    title: 'Warteg Server',
    description:
      'The backend for Warteg Modern, an Express server exposing a single GraphQL API with JWT-based auth, bcrypt password hashing, and raw PostgreSQL queries with per-request transactions. It handles menu image uploads to AWS S3 and supports role-based access for admin, cashier, and staff workflows.',
    tech: ['Node.js', 'Express', 'GraphQL', 'PostgreSQL', 'AWS S3', 'JWT', 'bcrypt'],
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
    title: 'Cipondo Powerindo',
    description:
      'An internal ERP for a heavy-equipment company tracking equipment units through buying, renting, selling, maintenance, and spare-parts inventory across locations. It includes a role-based access design where lower roles handle rental workflows and higher roles manage master data and transactions. Built with Nuxt 3 (client-rendered), Vue 3 Composition API, Pinia auth, and a Nitro/Prisma/PostgreSQL backend.',
    tech: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Prisma', 'Pinia'],
  },
  {
    title: 'codegen-openapi-ts',
    description:
      'An open-source Node.js library and CLI that generates TypeScript API clients from OpenAPI/Swagger specs. It parses OpenAPI v2/v3, uses Handlebars templates for code generation, and is bundled with Rollup with Jest tests.',
    tech: ['TypeScript', 'Node.js', 'Rollup', 'Jest', 'Handlebars'],
    links: [{ label: 'GitHub', href: 'https://github.com/devTeaa/codegen-openapi-ts' }],
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
    name: 'Frontend & Architecture',
    skills: [
      'Vue.js',
      'Svelte',
      'React',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Micro-frontend SSR',
      'Nuxt',
      'Core Web Vitals Optimization',
    ],
  },
  {
    name: 'Backend & Data',
    skills: [
      'Node.js',
      'Bun',
      'ASP.NET MVC',
      '.NET Framework',
      'Entity Framework',
      'SQL',
      'PostgreSQL',
      'Prisma ORM',
      'JWT',
      'Role-Based Access Control',
      'Database Optimization',
    ],
  },
  {
    name: 'DevOps & Platform',
    skills: [
      'Jenkins',
      'CI/CD Pipelines',
      'Datadog',
      'Distributed Tracing',
      'NGINX',
      'API Gateway Configuration',
      'Google Cloud Platform',
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
    skills: ['Vite', 'Jest', 'Unit Testing', 'Integration Testing', 'Playwright'],
  },
  {
    name: 'Development Tools',
    skills: ['GitHub', 'Stash', 'Bitbucket', 'Figma', 'Jira', 'Confluence'],
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
