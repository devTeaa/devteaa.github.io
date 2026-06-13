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
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  bullets: string[];
}

export const profile = {
  name: 'Herman',
  title: 'Software Design Engineer',
  location: 'Jakarta, Indonesia',
  summary:
    "I'm Herman, a Software Design Engineer with 7+ years building scalable frontend systems for high-traffic e-commerce. I specialize in web performance, server-side rendering, and CI/CD — leading a custom SSR framework that supports Blibli.com's micro-frontend architecture, and centralizing frontend stack upgrades and monitoring across the platform. Across my career I've worked across the full product lifecycle, from enterprise internal portals at Pertamina to high-traffic e-commerce frontends at Blibli.com. I care about rendering strategy, micro-frontend boundaries, deployment pipelines, and production observability. My master's research in computer vision and deep learning taught me to approach complex problems methodically, and I bring that same mindset to frontend architecture: whether it's shaving seconds off page loads or designing systems that scale across teams.",
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
    period: 'Sep 2019 - Present',
    type: 'E-commerce',
    roles: [
      { title: 'Software Design Engineer (RnD)', period: 'May 2026 - Present' },
      { title: 'Senior Software Design Engineer (RnD)', period: 'Sep 2023 - Apr 2026' },
      { title: 'Senior Software Design Engineer (Official Store)', period: 'Mar 2023 - Aug 2023' },
      { title: 'Software Design Engineer (Official Store)', period: 'Sep 2021 - Feb 2023' },
      { title: 'Associate Software Design Engineer (Official Store)', period: 'Sep 2019 - Aug 2021' },
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
    company: 'Kairos Utama Indonesia',
    location: 'Jakarta, Indonesia',
    period: 'Jun 2018 - Aug 2019',
    type: 'Software House',
    roles: [{ title: 'Junior Web Developer', period: 'Jun 2018 - Aug 2019' }],
    highlights: [
      'Architected and developed enterprise internal portal solutions for Pertamina using ASP.NET MVC and .NET Framework.',
      'Implemented dynamic rendering architecture combining server-rendered shell templates with vanilla JavaScript DOM interactions.',
      'Built backend business logic using .NET Framework and Entity Framework, including DTO generation and database schema maintenance.',
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

export const educations: Education[] = [
  {
    school: 'Universitas Bina Nusantara',
    location: 'Jakarta, Indonesia',
    period: '2018 - Dec 2020',
    degree: 'Master of Computer Science',
    gpa: '3.60/4.00',
    thesis:
      'Oil Palm Fruit Image Ripeness Classification with Computer Vision using Deep Learning and Visual Attention',
  },
  {
    school: 'Sekolah Tinggi Teknologi Indonesia',
    location: 'Tanjungpinang, Indonesia',
    period: '2014 - 2017',
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
      'Node.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Micro-frontend SSR',
      'Nuxt',
    ],
  },
  {
    name: 'Backend & Data',
    skills: [
      'ASP.NET MVC',
      '.NET Framework',
      'Entity Framework',
      'SQL',
      'Prisma ORM',
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
    skills: ['Playwright'],
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Custom SSR Framework',
    description:
      'Built the SSR rendering layer that powers Blibli.com\'s micro-frontend platform.',
    bullets: [
      'Custom Node.js SSR framework enabling SSR, ISR, and PPR rendering strategies.',
      'Supports the existing micro-frontend architecture without replacing it.',
      'Overcame limitations of existing meta-frameworks to improve web performance.',
    ],
  },
  {
    title: 'Published Deep Learning Research',
    description:
      'Master\'s research applying computer vision and deep learning to agricultural use cases.',
    bullets: [
      'Thesis on oil palm fruit ripeness classification.',
      'Used deep learning and visual attention mechanisms.',
      'Published research in the field.',
    ],
  },
  {
    title: 'Enterprise CMS',
    description: 'Led a CMS project for an internal company portal.',
    bullets: [
      'News management, project dashboards, and event calendars.',
      'Secure file sharing with session-based watermarking.',
      'Org hierarchy visualization and media file explorer.',
      'Enabled non-technical teams to manage content independently.',
    ],
  },
];
