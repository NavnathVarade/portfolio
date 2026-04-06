// ─── SKILLS DATA ─────────────────────────────────────────────
export const skills = {
  frontend: [
    { icon: '⚛', name: 'React.js', level: 90 },
    { icon: '🔷', name: 'TypeScript', level: 85 },
    { icon: '🎨', name: 'Tailwind CSS / Bootstrap', level: 88 },
    { icon: '📦', name: 'Vite / npm', level: 85 },
    { icon: '🔄', name: 'Redux Toolkit', level: 80 },
    { icon: '🌐', name: 'HTML5 / CSS3', level: 92 },
    { icon: '🎨', name: 'Radix UI', level: 78 },
    { icon: '📡', name: 'Axios / API Integration', level: 88 },
    { icon: '🧩', name: 'Responsive Design', level: 90 },
  ],
  backend: [
    { icon: '🟢', name: 'Node.js / Express.js', level: 92 },
    { icon: '🐍', name: 'Python', level: 70 },
    { icon: '🧠', name: 'REST APIs', level: 93 },
    { icon: '🐘', name: 'PostgreSQL', level: 85 },
    { icon: '🔴', name: 'Redis', level: 78 },
    { icon: '📨', name: 'RabbitMQ', level: 76 },
    { icon: '🔥', name: 'Firebase', level: 70 },
    { icon: '🔐', name: 'JWT Authentication', level: 85 },
    { icon: '⚡', name: 'Socket.IO', level: 75 },
    { icon: '🤖', name: 'Generative AI (Gemini, Langchain)', level: 80 },
    { icon: '🌍', name: 'CORS / HTTP / HTTPS', level: 85 },
  ],
  tools: [
    { icon: '🐳', name: 'Docker', level: 65 },
    { icon: '☁', name: 'AWS / Cloud Platforms', level: 75 },
    { icon: '🚀', name: 'CI/CD', level: 84 },
    { icon: '🌐', name: 'Vercel / Netlify / Heroku', level: 80 },
    { icon: '🐙', name: 'Git / GitHub', level: 85 },
    { icon: '📮', name: 'Postman', level: 90 },
    { icon: '🧪', name: 'Jest', level: 75 },
    { icon: '💻', name: 'VS Code / IntelliJ', level: 92 },
  ],
  design: [
    { icon: '🖌', name: 'Figma', level: 65 },
    { icon: '🎯', name: 'UI/UX Principles', level: 75 },
    { icon: '📐', name: 'Responsive UI Design', level: 88 },
    { icon: '🧩', name: 'Component Design', level: 84 },
  ],
};

export const skillTabs = [
  { key: 'frontend', label: 'Frontend', title: 'Frontend Engineering' },
  { key: 'backend', label: 'Backend', title: 'Backend & Databases' },
  { key: 'tools', label: 'Tools & Cloud', title: 'Tools & Cloud' },
  { key: 'design', label: 'Design', title: 'Design & Creative' },
];

// ─── PROJECTS DATA ───────────────────────────────────────────
export const projects = [
  {
    num: '01',
    title: 'Scalable URL Shortener',
    desc: 'Distributed URL shortening service handling 100M URLs/day with sub-20ms latency and 11K+ redirects/sec.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    bg: 'linear-gradient(135deg,#0f0f0f 0%,#1a1209 50%,#0f0f0f 100%)',
    accent: '#c4a96b',
    status: 'live',
    github: 'https://github.com/NavnathVarade/URL-Shortener',
    live: 'https://github.com/NavnathVarade/URL-Shortener',
  },
  {
    num: '02',
    title: 'PetNest',
    desc: 'AI-powered pet adoption platform with real-time chat, image detection, and secure authentication.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.IO', 'Gen-AI'],
    bg: 'linear-gradient(135deg,#0a0f0a 0%,#091209 50%,#0a0f0a 100%)',
    accent: '#4ade80',
    status: 'live',
    github: 'https://github.com/NavnathVarade/PetNest',
    live: 'https://github.com/NavnathVarade/PetNest',
  },
  {
    num: '03',
    title: 'Real-Time Chat Backend',
    desc: 'Secure backend for chat application with JWT auth, real-time messaging, and scalable architecture.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    bg: 'linear-gradient(135deg,#0a0a0f 0%,#09090f 50%,#0a0a0f 100%)',
    accent: '#60a5fa',
    status: 'live',
    github: 'https://github.com/NavnathVarade/chat-app-backend',
    live: 'https://github.com/NavnathVarade/chat-app-backend',
  },

  // samp data
  {
    num: '04', title: 'CraftOS',
    desc: 'Design system powering 12 SaaS products. 300+ components, full a11y, dark mode, and Figma sync.',
    tags: ['React', 'Storybook', 'Figma', 'Radix UI'],
    bg: 'linear-gradient(135deg,#0f0a0f 0%,#0f091a 50%,#0f0a0f 100%)',
    accent: '#c084fc', status: 'wip', github: '#', live: '#',
  },
  {
    num: '05', title: 'Latency.io',
    desc: 'Global API performance monitoring with sub-10ms alert latency. Powers 3,000+ developer dashboards.',
    tags: ['Go', 'InfluxDB', 'WebSockets', 'Kubernetes'],
    bg: 'linear-gradient(135deg,#0f0a07 0%,#1a0a05 50%,#0f0a07 100%)',
    accent: '#f97316', status: 'wip', github: '#', live: '#',
  },
  {
    num: '06', title: 'Cascade',
    desc: 'Real-time collaborative code editor with presence, branching, and one-click deployment.',
    tags: ['Next.js', 'CRDTs', 'WebRTC', 'Railway'],
    bg: 'linear-gradient(135deg,#07100f 0%,#051a18 50%,#07100f 100%)',
    accent: '#2dd4bf', status: 'wip', github: '#', live: '#',
  },
];

// ─── EXPERIENCE DATA ─────────────────────────────────────────
export const experience = [
   {
    date: 'Nov 2025 — Present',
    role: 'Backend Developer / Production Support Engineer',
    company: 'Vtex.AI — Pune, India',
    desc: 'Working on live AI SaaS platform handling backend services, API debugging, performance optimization, and third-party integrations.',
    chips: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    date: 'Jul 2022 — Jun 2025',
    role: 'B.Sc Computer Science',
    company: 'Savitribai Phule Pune University',
    desc: 'Completed Computer Science degree with CGPA 8.5 (A+). Built strong foundation in Data Structures, DBMS, OS, and full stack development while working on real-world projects.',
    chips: ['Data Structures', 'DBMS', 'Operating Systems', 'Web Development'],
  },
];

// ─── ACHIEVEMENTS DATA ───────────────────────────────────────
export const achievements = [
   { icon: '📜', title: 'SQL & PostgreSQL Bootcamp', org: 'Udemy', year: 'Completed' },
  { icon: '🤖', title: 'AI Fundamentals', org: 'IBM SkillBuild', year: 'Certified' },
  { icon: '💻', title: '300+ DSA Problems Solved', org: 'LeetCode', year: 'Strong problem-solving in algorithms & data structures' },
  { icon: '🏆', title: 'Hackathon — Database / SQL', org: 'College / Tech Event', year: '2nd Prize — 2024' },
 
];

// ─── TESTIMONIALS DATA ───────────────────────────────────────
export const testimonials = [
  {
    quote: "Navnath is a quick learner who understands systems deeply. and builds scalable solutions that just work.",
    name: 'Vikram ', role: 'SDE ', initials: 'VS',
  },
  
];

// ─── NAV LINKS ───────────────────────────────────────────────
export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#blogs', label: 'Blogs' },
  { href: '#contact', label: 'Contact' },
];

// ─── TYPED STRINGS ───────────────────────────────────────────
export const typedStrings = [
  'scalable REST APIs',
  'design systems',
  'dev tools',
  'scalable backend systems',
  'AI-powered platforms',
  'real-time apps',
  'full-stack products',
];

// ─── MARQUEE ITEMS ───────────────────────────────────────────
export const marqueeItems = [
  'React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB',
  'Docker', 'AWS', 'GraphQL', 'Tailwind CSS', 'Socket.IO',
  'Redis', 'Kubernetes', 'Figma', 'Python',
];

// ─── BLOG POSTS DATA ─────────────────────────────────────────
export const blogPosts = [
  {
    slug: 'rate-limiting-blog-series',
    title: 'Rate Limiting Systems: From Basics to Planet-Scale',
    date: 'April 2, 2025',
    excerpt: 'A 3-part deep dive into designing, implementing, and scaling rate limiting — from a single in-memory counter all the way to Cloudflare\'s 100-city global network. Includes interactive demos.',
    tags: ['System Design', 'Redis', 'Distributed Systems'],
    readTime: '45 min read',
    featured: true,
  },
  {
    slug: 'scaling-postgres-to-100m',
    title: 'Scaling PostgreSQL to 100M Requests/Day',
    date: 'March 12, 2025',
    excerpt: 'A deep dive into connection pooling, read replicas, and query optimization techniques we used at Vercel to handle massive traffic spikes without downtime.',
    tags: ['PostgreSQL', 'Performance', 'Backend'],
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'rust-for-js-developers',
    title: 'Rust for JavaScript Developers',
    date: 'January 20, 2025',
    excerpt: 'Coming from React and Node.js, here is what surprised me most about Rust — ownership, the borrow checker, and why it is worth the learning curve.',
    tags: ['Rust', 'JavaScript', 'Learning'],
    readTime: '10 min read',
    featured: true,
  },
  {
    slug: 'edge-runtime-internals',
    title: 'Edge Runtime Internals: V8 Isolate Pooling',
    date: 'December 8, 2024',
    excerpt: 'How we reduced cold start latency by 62% at Vercel by building a custom V8 isolate pool. Architecture decisions, trade-offs, and benchmarks.',
    tags: ['Performance', 'V8', 'Edge Computing'],
    readTime: '15 min read',
    featured: false,
  },
  {
    slug: 'crdt-primer',
    title: 'CRDTs: A Practical Primer for App Developers',
    date: 'November 14, 2024',
    excerpt: 'Conflict-free Replicated Data Types demystified. How we use them in Cascade for real-time collaborative editing without central coordination.',
    tags: ['CRDTs', 'Distributed Systems', 'Real-time'],
    readTime: '11 min read',
    featured: false,
  },
  {
    slug: 'typescript-advanced-patterns',
    title: 'Advanced TypeScript Patterns I Use Every Day',
    date: 'October 30, 2024',
    excerpt: 'Template literal types, conditional types, variadic tuple types, and the branded type pattern — with real-world examples from production codebases.',
    tags: ['TypeScript', 'Patterns', 'Frontend'],
    readTime: '9 min read',
    featured: false,
  },
];
