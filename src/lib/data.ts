// ============================================================
// PORTFOLIO DATA - All content centralized for easy editing
// ============================================================

export const PERSONAL_INFO = {
  name: 'Darshan H D',
  initials: 'DHD',
  headline: 'Software Engineer',
  subheadlines: [
    'Full Stack Developer',
    'Competitive Programmer',
    'AI & ML Enthusiast',
    'Data Analytics Expert',
    'Open Source Contributor',
  ],
  about: `Passionate Computer Science Engineering student with strong problem-solving skills and hands-on experience across Full Stack Development, Data Analytics, Machine Learning, Cloud Computing, Big Data Analytics, and IoT. I thrive at the intersection of competitive programming and real-world software engineering — having solved 1900+ coding problems across platforms while building production-ready applications. Actively preparing for Software Engineering roles at top product-based companies.`,
  email: 'darshan.hd@example.com',
  phone: '+91 98765 43210',
  location: 'Karnataka, India',
  linkedin: 'https://linkedin.com/in/darshanhd',
  github: 'https://github.com/darshanhd',
  twitter: 'https://twitter.com/darshanhd',
  resume: '/resume.pdf',
}

export const STATS = [
  { label: 'Problems Solved', value: 1900, suffix: '+', icon: 'Code2' },
  { label: 'Projects Built', value: 15, suffix: '+', icon: 'Rocket' },
  { label: 'Technologies', value: 30, suffix: '+', icon: 'Layers' },
  { label: 'CP Platforms', value: 6, suffix: '', icon: 'Trophy' },
]

export const SKILLS = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    color: 'from-violet-500 to-purple-600',
    items: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 92 },
      { name: 'C++', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    category: 'Web Development',
    icon: 'Globe',
    color: 'from-cyan-500 to-blue-600',
    items: [
      { name: 'React.js', level: 88 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    category: 'Data Analytics & ML',
    icon: 'BarChart3',
    color: 'from-emerald-500 to-teal-600',
    items: [
      { name: 'Pandas & NumPy', level: 88 },
      { name: 'Scikit-Learn', level: 82 },
      { name: 'Power BI', level: 80 },
      { name: 'Tableau', level: 78 },
      { name: 'TensorFlow / Keras', level: 72 },
      { name: 'R', level: 70 },
    ],
  },
  {
    category: 'Cloud & Big Data',
    icon: 'Cloud',
    color: 'from-orange-500 to-amber-600',
    items: [
      { name: 'AWS', level: 75 },
      { name: 'Azure', level: 70 },
      { name: 'Apache Spark', level: 72 },
      { name: 'Hadoop', level: 68 },
    ],
  },
  {
    category: 'Competitive Programming',
    icon: 'Zap',
    color: 'from-pink-500 to-rose-600',
    items: [
      { name: 'Data Structures', level: 92 },
      { name: 'Algorithms', level: 90 },
      { name: 'Dynamic Programming', level: 85 },
      { name: 'Graph Theory', level: 82 },
    ],
  },
  {
    category: 'IoT & Embedded',
    icon: 'Cpu',
    color: 'from-indigo-500 to-violet-600',
    items: [
      { name: 'Arduino', level: 78 },
      { name: 'Raspberry Pi', level: 72 },
      { name: 'ESP32', level: 70 },
    ],
  },
]

export const ALL_TECH_TAGS = [
  'Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL',
  'React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB',
  'Tailwind CSS', 'Bootstrap', 'HTML/CSS',
  'Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow',
  'Power BI', 'Tableau', 'MySQL',
  'AWS', 'Azure', 'Hadoop', 'Apache Spark',
  'Arduino', 'Raspberry Pi', 'ESP32',
  'Git', 'GitHub', 'Docker', 'Linux',
]

export const PROJECTS = [
  {
    id: 1,
    title: 'NeuroNest',
    tagline: 'AI Learning Companion for Neurodivergent Kids',
    description:
      'A GenAI-powered learning platform designed specifically for neurodivergent children. Features a personalized AI learning assistant that adapts to each child\'s unique needs, generates custom content, provides multi-modal learning experiences, and includes comprehensive accessibility features.',
    longDescription: `NeuroNest reimagines education for neurodivergent kids through the power of Generative AI. The platform delivers adaptive learning paths that evolve based on each child's progress, attention patterns, and learning style. Key highlights include: a conversational AI tutor with empathetic responses, dynamic content generation (stories, quizzes, visuals), accessibility tools (text-to-speech, dyslexia-friendly fonts, high-contrast mode), parent dashboards with analytics, and gamification to maintain engagement. Built with a child-safety-first architecture and privacy compliance.`,
    tags: ['Next.js', 'Python', 'OpenAI API', 'MongoDB', 'TensorFlow', 'Tailwind CSS', 'Node.js'],
    github: 'https://github.com/darshanhd/neuronest',
    demo: 'https://neuronest.vercel.app',
    image: '/images/project-neuronest.png',
    featured: true,
    category: 'AI / EdTech',
    color: 'from-violet-500 via-purple-600 to-indigo-700',
  },
  {
    id: 2,
    title: 'Quick Cart',
    tagline: 'Full Stack E-Commerce Platform',
    description:
      'A production-ready, full-stack e-commerce platform with complete shopping experience — authentication, cart management, real-time inventory, payment integration via Razorpay/Stripe, and a comprehensive admin dashboard.',
    longDescription: `Quick Cart is a feature-complete e-commerce solution built for scale. The platform includes: JWT-based authentication with OAuth (Google/GitHub), real-time product search and filtering, cart with persistence, wishlist management, Razorpay/Stripe payment gateway, order tracking, email notifications, admin dashboard with analytics, inventory management, and mobile-responsive UI. Backend built on Express.js with REST APIs, MongoDB for data persistence, and Redis for session caching.`,
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Redux', 'JWT'],
    github: 'https://github.com/darshanhd/quickcart',
    demo: 'https://quickcart-demo.vercel.app',
    image: '/images/project-quickcart.png',
    featured: true,
    category: 'Full Stack',
    color: 'from-cyan-500 via-blue-600 to-indigo-700',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    tagline: 'Business Intelligence & Data Visualization Platform',
    description:
      'Interactive BI dashboard integrating Power BI, Tableau, SQL, and Python pipelines for real-time business insights, KPI tracking, trend analysis, and automated reporting.',
    longDescription: `A comprehensive business intelligence platform that connects to multiple data sources and delivers actionable insights. Features include: real-time KPI dashboards, interactive charts with drill-down capability, automated ETL pipelines in Python (Pandas/SQLAlchemy), Power BI & Tableau embedded reports, anomaly detection using ML, scheduled email reports, role-based access control, and export to PDF/Excel. Designed for non-technical business stakeholders with an intuitive drag-and-drop interface.`,
    tags: ['Python', 'Pandas', 'Power BI', 'Tableau', 'SQL', 'FastAPI', 'React', 'Scikit-Learn'],
    github: 'https://github.com/darshanhd/analytics-dashboard',
    demo: 'https://analytics-demo.vercel.app',
    image: '/images/project-analytics.png',
    featured: true,
    category: 'Data Analytics',
    color: 'from-emerald-500 via-teal-600 to-cyan-700',
  },
]

export const ACHIEVEMENTS = [
  {
    title: '1900+ Problems Solved',
    description: 'Across LeetCode, Codeforces, CodeChef, AtCoder, GeeksforGeeks, and HackerRank combined.',
    icon: 'Code2',
    color: 'from-violet-500 to-purple-600',
    metric: '1900+',
  },
  {
    title: '5-Star Python — HackerRank',
    description: 'Achieved the highest Python rating on HackerRank, demonstrating deep language mastery.',
    icon: 'Star',
    color: 'from-yellow-500 to-orange-500',
    metric: '★★★★★',
  },
  {
    title: 'Active Competitive Programmer',
    description: 'Consistently participating in contests on Codeforces, CodeChef, and LeetCode weekly.',
    icon: 'Trophy',
    color: 'from-cyan-500 to-blue-600',
    metric: '6 Platforms',
  },
  {
    title: 'Strong DSA Foundation',
    description: 'Expert in Arrays, Trees, Graphs, DP, Segment Trees, and advanced algorithmic techniques.',
    icon: 'Layers',
    color: 'from-emerald-500 to-teal-600',
    metric: 'Expert',
  },
]

export const EXPERIENCE = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Tech Startup (Academic Project)',
    period: '2024 — Present',
    type: 'Internship',
    description:
      'Developed and deployed React/Next.js web applications with Node.js backends, MongoDB databases, and REST APIs. Collaborated in Agile sprints and contributed to CI/CD pipelines.',
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Docker'],
    icon: 'Briefcase',
    current: true,
  },
  {
    title: 'Data Analytics Research Project',
    company: 'University Lab',
    period: '2023 — 2024',
    type: 'Research',
    description:
      'Led a research initiative analyzing large datasets using Python (Pandas, Scikit-Learn). Presented findings via interactive Power BI dashboards. Published insights for academic review.',
    tech: ['Python', 'Pandas', 'Power BI', 'MySQL', 'Scikit-Learn'],
    icon: 'BarChart3',
    current: false,
  },
  {
    title: 'Open Source Contributor',
    company: 'GitHub Open Source',
    period: '2023 — Present',
    type: 'Open Source',
    description:
      'Contributed to multiple open-source repositories. Filed issues, submitted PRs for bug fixes and feature additions, and actively participated in code reviews.',
    tech: ['JavaScript', 'Python', 'Git', 'GitHub Actions'],
    icon: 'GitBranch',
    current: false,
  },
  {
    title: 'B.E. Computer Science Engineering',
    company: 'Visvesvaraya Technological University',
    period: '2021 — 2025',
    type: 'Education',
    description:
      'Pursuing B.E. in Computer Science Engineering. Key coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning, Cloud Computing, and Big Data Analytics.',
    tech: ['DSA', 'DBMS', 'OS', 'ML', 'Cloud', 'Big Data'],
    icon: 'GraduationCap',
    current: true,
  },
]

export const CODING_PROFILES = [
  {
    platform: 'LeetCode',
    username: 'darshanhd',
    url: 'https://leetcode.com/darshanhd',
    stats: '600+ Problems',
    rating: 'Knight',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'rgba(251,146,60,0.08)',
    borderColor: 'rgba(251,146,60,0.25)',
    icon: '/icons/leetcode.svg',
    emoji: '⚡',
    description: 'Daily challenges, contest participation',
  },
  {
    platform: 'Codeforces',
    username: 'darshanhd',
    url: 'https://codeforces.com/profile/darshanhd',
    stats: '400+ Problems',
    rating: 'Specialist',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'rgba(59,130,246,0.08)',
    borderColor: 'rgba(59,130,246,0.25)',
    icon: '/icons/codeforces.svg',
    emoji: '🔵',
    description: 'Div 2 & Div 3 contests',
  },
  {
    platform: 'CodeChef',
    username: 'darshanhd',
    url: 'https://codechef.com/users/darshanhd',
    stats: '300+ Problems',
    rating: '3★ Coder',
    color: 'from-amber-600 to-brown-600',
    bgColor: 'rgba(217,119,6,0.08)',
    borderColor: 'rgba(217,119,6,0.25)',
    icon: '/icons/codechef.svg',
    emoji: '🍴',
    description: 'Long challenge, cook-off participant',
  },
  {
    platform: 'AtCoder',
    username: 'darshanhd',
    url: 'https://atcoder.jp/users/darshanhd',
    stats: '200+ Problems',
    rating: 'Green',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'rgba(34,197,94,0.08)',
    borderColor: 'rgba(34,197,94,0.25)',
    icon: '/icons/atcoder.svg',
    emoji: '🟢',
    description: 'ABC and ARC contests',
  },
  {
    platform: 'GeeksforGeeks',
    username: 'darshanhd',
    url: 'https://geeksforgeeks.org/user/darshanhd',
    stats: '250+ Problems',
    rating: 'Institute Rank 1',
    color: 'from-green-600 to-lime-500',
    bgColor: 'rgba(22,163,74,0.08)',
    borderColor: 'rgba(22,163,74,0.25)',
    icon: '/icons/gfg.svg',
    emoji: '🌿',
    description: 'POTD streak, articles & solutions',
  },
  {
    platform: 'HackerRank',
    username: 'darshanhd',
    url: 'https://hackerrank.com/darshanhd',
    stats: '150+ Problems',
    rating: '5★ Python',
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'rgba(16,185,129,0.08)',
    borderColor: 'rgba(16,185,129,0.25)',
    icon: '/icons/hackerrank.svg',
    emoji: '🏅',
    description: '5-Star Python & Problem Solving',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Experience', href: '#experience' },
  { label: 'Coding', href: '#coding' },
  { label: 'Contact', href: '#contact' },
]

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/darshanhd', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/darshanhd', icon: 'Linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/darshanhd', icon: 'Twitter' },
  { label: 'Email', href: 'mailto:darshan.hd@example.com', icon: 'Mail' },
]
