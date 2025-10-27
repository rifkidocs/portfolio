export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  icon: string; // Technology name for Skill Icons CDN
  category: "frontend" | "backend" | "database" | "tools";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
    image: "/api/placeholder/600/400",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/rifki/ecommerce-platform",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/rifki/task-manager",
    featured: true,
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "Chart.js", "OpenWeather API", "PWA"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/rifki/weather-dashboard",
    featured: false,
  },
  {
    id: "4",
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization, reporting, and insights.",
    image: "/api/placeholder/600/400",
    techStack: ["Next.js", "D3.js", "Python", "FastAPI", "Docker"],
    liveUrl: "https://social-analytics-demo.vercel.app",
    githubUrl: "https://github.com/rifki/social-analytics",
    featured: true,
  },
  {
    id: "5",
    title: "Blog CMS",
    description:
      "A headless CMS for blogs with markdown support, SEO optimization, and content management features.",
    image: "/api/placeholder/600/400",
    techStack: ["Next.js", "MDX", "Prisma", "PostgreSQL", "AWS S3"],
    liveUrl: "https://blog-cms-demo.vercel.app",
    githubUrl: "https://github.com/rifki/blog-cms",
    featured: false,
  },
  {
    id: "6",
    title: "Real-time Chat App",
    description:
      "A real-time messaging application with group chats, file sharing, and message encryption.",
    image: "/api/placeholder/600/400",
    techStack: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    liveUrl: "https://chat-app-demo.vercel.app",
    githubUrl: "https://github.com/rifki/chat-app",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp Solutions",
    position: "Senior Fullstack Developer",
    duration: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 100k+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews",
      "Optimized database queries improving application performance by 40%",
    ],
    current: true,
  },
  {
    id: "2",
    company: "StartupXYZ",
    position: "Fullstack Developer",
    duration: "2020 - 2022",
    description: [
      "Built scalable web applications using React and Node.js",
      "Integrated third-party APIs and payment gateways",
      "Collaborated with design team to implement responsive UIs",
      "Developed RESTful APIs and GraphQL endpoints",
    ],
    current: false,
  },
  {
    id: "3",
    company: "WebDev Agency",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: [
      "Created responsive websites for various clients",
      "Implemented modern CSS frameworks and JavaScript libraries",
      "Optimized websites for SEO and performance",
      "Collaborated with backend developers for API integration",
    ],
    current: false,
  },
  {
    id: "4",
    company: "Freelance",
    position: "Web Developer",
    duration: "2018 - 2019",
    description: [
      "Developed custom websites for small businesses",
      "Provided technical consulting and maintenance services",
      "Worked with various CMS platforms and e-commerce solutions",
      "Managed client relationships and project timelines",
    ],
    current: false,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "HTML/CSS", icon: "html5", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },
  { name: "SASS/SCSS", icon: "sass", category: "frontend" },
  { name: "Vue.js", icon: "vuejs", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodedotjs", category: "backend" },
  { name: "Express.js", icon: "express", category: "backend" },
  { name: "Python", icon: "python", category: "backend" },
  { name: "Django", icon: "django", category: "backend" },
  { name: "FastAPI", icon: "fastapi", category: "backend" },
  { name: "REST APIs", icon: "rest", category: "backend" },
  { name: "GraphQL", icon: "graphql", category: "backend" },
  { name: "Microservices", icon: "microservices", category: "backend" },

  // Database
  { name: "MongoDB", icon: "mongodb", category: "database" },
  { name: "PostgreSQL", icon: "postgresql", category: "database" },
  { name: "MySQL", icon: "mysql", category: "database" },
  { name: "Redis", icon: "redis", category: "database" },
  { name: "Prisma", icon: "prisma", category: "database" },
  { name: "Mongoose", icon: "mongoose", category: "database" },

  // Tools
  { name: "Git", icon: "git", category: "tools" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "AWS", icon: "amazonaws", category: "tools" },
  { name: "Vercel", icon: "vercel", category: "tools" },
  { name: "Netlify", icon: "netlify", category: "tools" },
  { name: "Figma", icon: "figma", category: "tools" },
  { name: "Jest", icon: "jest", category: "tools" },
  { name: "Cypress", icon: "cypress", category: "tools" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rifki",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rifki",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:rifki@example.com",
    icon: "mail",
  },
];

export const personalInfo = {
  name: "Muhammad Rifki Ardiansah",
  title: "Fullstack Web Developer",
  location: "Jakarta, Indonesia",
  email: "rifki@example.com",
  phone: "+62 812-3456-7890",
  bio: "Passionate fullstack developer with 2+ years of experience building scalable web applications. I love creating innovative solutions and learning new technologies.",
  avatar: "/api/placeholder/300/300",
  resumeUrl: "/resume.pdf",
};
