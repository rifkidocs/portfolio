export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  current: boolean;
  type?: "fulltime" | "intern" | "freelance";
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
    title: "PT Bumi Suksesindo - Corporate Website",
    description:
      "I developed a corporate website for PT Bumi Suksesindo (BSI), a gold mining company managing the Tujuh Bukit mine in Banyuwangi, East Java. I built this website featuring company information, sustainability programs, career opportunities, and news updates, using WordPress with premium plugins.",
    image: "/bumisuksesindo.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "https://bumisuksesindo.com/",
    featured: true,
  },
  {
    id: "2",
    title: "Sikader - Sistem Informasi Kaderisasi",
    description:
      "I developed a cadre information management system (Sikader) for PC IPNU IPPNU Babat. This system features one of its MVP functionalities - dynamic E-Certificate generation. The platform allows organizations to manage cadre data, generate certificates automatically with participant data, and track certificate issuance history. Built with modern web technologies including Firebase for real-time database and authentication.",
    image: "/sikader.png",
    techStack: [
      "Next.js",
      "React",
      "Firebase",
      "TypeScript",
      "Tailwind CSS",
      "NextUI",
      "docx",
      "jspdf",
    ],
    liveUrl: "https://sikader.vercel.app",
    featured: true,
  },
  {
    id: "3",
    title: "Full-Stack Weather App",
    description:
      "A fullstack weather application with geolocation search, forecast, and auth. Built with React, Firebase, and Vite; includes form validation and a polished Tailwind + DaisyUI interface.",
    image: "/weather.png",
    techStack: [
      "React",
      "Firebase",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Formik",
      "Yup",
      "DaisyUI",
      "JS Cookie",
    ],
    liveUrl: "https://rifkiweather.vercel.app/",
    githubUrl: "https://github.com/rifkidocs/Full-Stack-Weather-App",
    featured: false,
  },
  {
    id: "4",
    title: "Greezma - UKM Jurnalistik UNISLA",
    description:
      "I built the official website for UKM Jurnalistik (Student Journalism Organization) of Universitas Islam Lamongan. I developed this modern news platform featuring articles, campus news, achievements, and religious content with a fully responsive design and a powerful content management system powered by Strapi.",
    image: "/greezma.png",
    techStack: ["Next.js", "TypeScript", "Strapi", "Tailwind CSS", "React"],
    liveUrl: "https://greezma.com/",
    featured: true,
  },
  {
    id: "6",
    title: "ChatApp",
    description:
      "A web-based chat app with authentication and real-time conversations.",
    image: "/chatapp.png",
    techStack: [
      "React",
      "Firebase",
      "Bootstrap",
      "Vite",
      "React Router",
      "Moment.js",
      "Universal Cookie",
    ],
    liveUrl: "https://rifkichat.netlify.app",
    githubUrl: "https://github.com/rifkidocs/Web-Chat-App",
    featured: false,
  },
  {
    id: "7",
    title: "All-In-One Downloader",
    description:
      '"All-in-One Downloader" is an open-source website project that streamlines video and music downloads from TikTok and YouTube, using free APIs from rapipapi.com. Built with TypeScript and Next UI.',
    image: "/downloader.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "NextUI",
      "Tailwind CSS",
      "Axios",
      "Framer Motion",
    ],
    liveUrl: "https://rifkitiktok.vercel.app/",
    githubUrl: "https://github.com/rifkidocs/All-In-One-Downloader",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Juragan Karya Digital Teknologi",
    position: "Solo Full Stack Developer",
    duration: "Jul 2023 - Present",
    description: [
      "Developed and maintained full-stack web applications independently",
      "Architected and implemented scalable solutions using modern web technologies",
      "Managed entire project lifecycle from design to deployment",
      "Collaborated with stakeholders to deliver high-quality products",
    ],
    current: true,
    type: "freelance",
  },
  {
    id: "2",
    company: "Webifyaja",
    position: "Full Stack Developer",
    duration: "Jun 2023 - Present",
    description: [
      "Collaborated with team to build responsive web applications",
      "Developed and integrated RESTful APIs and backend services",
      "Implemented frontend features using modern frameworks",
      "Contributed to code reviews and maintained high code quality standards",
    ],
    current: true,
    type: "freelance",
  },
  {
    id: "3",
    company: "Infinite Learning Indonesia",
    position: "Android Mobile Application Development",
    duration: "Aug 2023 - Dec 2023",
    description: [
      "Developed Android mobile applications using Java and Kotlin",
      "Implemented UI/UX designs and integrated REST APIs",
      "Collaborated with senior developers to learn best practices",
      "Participated in code reviews and followed Android development guidelines",
    ],
    current: false,
    type: "intern",
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
    url: "https://github.com/rifkidocs",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rifkiars",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rifkithears/",
    icon: "instagram",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/rifkithears",
    icon: "message-circle",
  },
  {
    name: "Email",
    url: "mailto:rifkidocs@gmail.com",
    icon: "mail",
  },
];

export const personalInfo = {
  name: "M. Rifki Ardiansah",
  title: "Fullstack Web Developer",
  location: "Lamongan, Jawa Timur, Indonesia",
  email: "rifkidocs@gmail.com",
  phone: "+62 85158912877",
  bio: "Passionate fullstack developer with 2+ years of experience building scalable web applications. I love creating innovative solutions and learning new technologies.",
  avatar: "/api/placeholder/300/300",
  resumeUrl: "/resume.pdf",
};
