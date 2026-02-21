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
    id: "17",
    title: "MomenPesta - Digital Invitation SaaS",
    description:
      "A comprehensive Software as a Service (SaaS) platform for creating elegant digital invitations. It features a user-friendly interface for customizing wedding and event invitations, integrated with Midtrans for secure payments, Firebase for real-time data management, and GSAP for high-quality interactive animations.",
    image: "/momenpesta.png",
    techStack: ["Next.js", "Firebase", "Midtrans", "GSAP", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.momenpesta.id/",
    featured: true,
  },
  {
    id: "16",
    title: "PMB UNISLA - University Admission System",
    description:
      "The official student admission system for Universitas Islam Lamongan (UNISLA). This platform simplifies the enrollment process for thousands of prospective students, featuring a modern React-based frontend, a robust Laravel 12 backend, and fluid interactive elements powered by GSAP.",
    image: "/pmb.png",
    techStack: ["Laravel", "React", "GSAP", "Tailwind CSS", "MySQL"],
    liveUrl: "https://pmb.unisla.ac.id/",
    featured: true,
  },
  {
    id: "15",
    title: "AI-Powered Collaborative Workspace",
    description:
      "I developed a Notion-style, AI-powered collaborative platform featuring real-time document editing and live cursor tracking. Built with a scalable microservices architecture using Next.js 16 and Express.js, it integrates Google Gemini for AI content generation, Yjs & Socket.io for instant synchronization, and PostgreSQL for robust data management.",
    image: "/notes.png",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Google Gemini",
      "Socket.io",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
    ],
    liveUrl: "https://rifki-notes-ai.vercel.app/",
    githubUrl: "https://github.com/rifkidocs/frontend-notes-ai",
    featured: true,
  },
  {
    id: "13",
    title: "Predator Rubber - Premium Livestock Flooring",
    description:
      "I developed the official website for Predator Rubber, a premium livestock flooring provider. The platform showcases high-quality cow mats designed to enhance cattle comfort, health, and productivity using anti-slip technology and durable materials, featuring a robust backend built with Laravel and MySQL.",
    image: "/predatorrubber.png",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "Vite"],
    liveUrl: "https://www.predatorrubber.com/",
    featured: true,
  },
  {
    id: "12",
    title: "JuraganIT - Digital Agency Website",
    description:
      "Developed the official platform for JuraganIT, a digital creative agency under CV. Juragan Karya Digital Teknologi. The website serves as a comprehensive hub for digital transformation services, including professional web development, mobile application development, and IT consultancy. The platform is designed to showcase the agency's commitment to high-performance, SEO-ready, and mobile-friendly solutions, featuring a detailed service showcase and dynamic portfolio integration.",
    image: "/JuraganIT.png",
    techStack: ["Next.js", "JavaScript", "Strapi", "Tailwind CSS", "React"],
    liveUrl: "https://juraganitweb.co.id/",
    featured: true,
  },
  {
    id: "11",
    title: "Kesra Banyuwangi – Government Service Website",
    description:
      "Developed the official information platform for Banyuwangi Regency's social welfare programs. This website serves as an official publication channel and streamlines digital communication between the local government and the community.",
    image: "/kesra.png",
    techStack: ["Next.js", "JavaScript", "Strapi", "Tailwind CSS", "React"],
    liveUrl: "https://kesra.banyuwangikab.go.id/",
    featured: true,
  },
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
    id: "8",
    title: "Sekolah Vokasi UNISLA - Department Website",
    description:
      "Official website for Sekolah Vokasi Universitas Islam Lamongan (UNISLA), presenting program information, facilities, lecturers, research, news, and services.",
    image: "/vokasi.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "https://vokasi.unisla.ac.id/",
    featured: false,
  },
  {
    id: "9",
    title: "PIAUD UNISLA - Study Program Website",
    description:
      "Program Studi Pendidikan Islam Anak Usia Dini (PIAUD) UNISLA website providing profile, curriculum, lecturers directory, news, and registration information.",
    image: "/piaud.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "https://piaud.unisla.ac.id/",
    featured: false,
  },
  {
    id: "10",
    title: "RPL UNISLA – Prior Learning Recognition Program",
    description:
      "Information system for Rekognisi Pembelajaran Lampau (RPL) at Universitas Islam Lamongan, featuring program overview, brochures, participating study programs, and registration portal.",
    image: "/rpl.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "https://rpl.unisla.ac.id/",
    featured: false,
  },
  {
    id: "5",
    title: "YPPTI Sunan Giri Lamongan - WordPress Site",
    description:
      "Corporate and news portal website for Yayasan Perguruan Pesantren Tarbiyatut Tholabah (YPPTI) Sunan Giri Lamongan. Built with WordPress to manage institutional profiles, activities, and news updates.",
    image: "/yppti.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "http://ypptisunangiri.or.id/",
    featured: false,
  },
  {
    id: "14",
    title: "Personal Linktree Alternative",
    description:
      "I built a self-hosted, personal Linktree alternative that gives users full control over their landing page. It features a dynamic drag-and-drop interface for link management, real-time updates, and a clean, mobile-first design.",
    image: "/linktree.png",
    techStack: [
      "Next.js",
      "Firebase",
      "Cloudinary",
      "Tailwind CSS",
      "Framer Motion",
      "@dnd-kit",
    ],
    githubUrl: "https://github.com/rifkidocs/link-tree-tuntas",
    featured: false,
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
  resumeUrl: "https://docs.google.com/document/d/1RyPvV8SyZzyJ9lrzgUn-O9nm2TuiySQSl7gnaoS3Q8Q/edit?usp=sharing",
};
