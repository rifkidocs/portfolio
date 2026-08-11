export type Language = "id" | "en";

export const translations = {
  id: {
    // Navigation & Header
    nav: {
      showcase: "Showcase & Portofolio",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      blog: "Blog",
      searchPlaceholder: "Cari proyek, keahlian, atau dokumentasi...",
      searchShortcut: "Ketik ⌘K untuk mencari",
      langSwitch: "Bahasa",
    },

    // Hero Section
    hero: {
      statusBadge: "Tersedia untuk Proyek & Karir",
      greeting: "Halo, Saya",
      role: "Fullstack Web Developer",
      tagline: "Mengembangkan aplikasi web scalable, arsitektur modern, dan antarmuka performa tinggi.",
      ctaProjects: "Lihat Portofolio",
      ctaContact: "Hubungi Saya",
      ctaResume: "Unduh Resume / CV",
      location: "Lamongan, Jawa Timur, Indonesia",
    },

    // About Section
    about: {
      badge: "Profil & Latar Belakang",
      title: "Tentang Saya",
      subtitle: "Passionate developer dengan fokus pada performa, skalabilitas, dan pengalaman pengguna.",
      bio1: "Saya adalah seorang Fullstack Web Developer yang berpengalaman lebih dari 2 tahun dalam merancang dan mengembangkan aplikasi web modern skala besar. Berfokus pada arsitektur bersih, integrasi API real-time, serta antarmuka yang responsif dan interaktif.",
      bio2: "Memiliki rekam jejak dalam membangun sistem ERP perumahan, aplikasi SaaS digital, platform admisi universitas, hingga integrasi mikroservis berbasis Next.js, Node.js, Laravel, dan Strapi CMS.",
      statsExperience: "Tahun Pengalaman",
      statsProjects: "Proyek Selesai",
      statsClients: "Klien & Komunitas",
      highlightsTitle: "Keahlian Utama",
      highlight1: "Pengembangan Frontend Modern dengan React & Next.js",
      highlight2: "Arsitektur Backend REST API, Microservices & GraphQL",
      highlight3: "Manajemen Database PostgreSQL, MySQL & Redis",
      highlight4: "Integrasi Payment Gateway & Real-time WebSockets",
    },

    // GitHub Stats
    github: {
      badge: "Aktivitas Open Source",
      title: "Statistik GitHub & Kontribusi",
      subtitle: "Pelacakan komit, repositori aktif, dan kontribusi kode secara real-time.",
      viewProfile: "Lihat Profil GitHub",
      totalCommits: "Total Komit",
      repositories: "Repositori",
      starsEarned: "Bintang Diperoleh",
      followers: "Pengikut",
    },

    // Skills Section
    skills: {
      badge: "Teknologi & Stack",
      title: "Keahlian & Perkakas",
      subtitle: "Teknologi yang saya gunakan untuk membangun sistem aplikasi produksi.",
      catFrontend: "Frontend Development",
      catBackend: "Backend & Server",
      catDatabase: "Database & Storage",
      catTools: "Tools & DevOps",
    },

    // Projects Section
    projects: {
      badge: "Karya & Portofolio",
      title: "Reference Projects",
      subtitle: "Kumpulan aplikasi siap produksi, platform enterprise, dan eksperimen teknis.",
      favoriteBadge: "Favorite Project Spotlight",
      favoriteButton: "Buka Detail & Galeri Modul System",
      modulesBadge: "Modul System Didalamnya",
      featuredBadge: "Featured",
      activeStatus: "Active Project",
      abstract: "Abstrak & Ringkasan",
      stackHeader: "Stack & Dependensi",
      deployment: "Deployment & Link",
      liveInstance: "Kunjungi Live Website",
      repository: "Repository Kode",
      metaData: "Metadata",
      specVersion: "Versi Spek",
      license: "Lisensi",
      viewDetails: "Lihat Detail Proyek",
      otherProjectsTitle: "Proyek Lainnya",
      otherProjectsSubtitle: "Aplikasi sekunder, utilitas, dan eksperimen kode.",
      githubHistoryText: "Riwayat komit lengkap tersedia di",
      githubRepoLink: "GitHub Repository",
      modulPreview: "Visual Preview Modul",
      capabilitiesHeader: "Kapabilitas & Fitur Utama",
    },

    // Favorite Project Modules
    modules: {
      dashboard: "Dashboard",
      masterPerumahan: "Master Perumahan",
      progresLapangan: "Progres Lapangan",
      marketing: "Marketing",
      piutangKonsumen: "Piutang Konsumen",
      logistikGudang: "Logistik Gudang",
      hrmWorkers: "HRM & Workers",
      accountingCOA: "Accounting & COA",
    },

    // Experience Section
    experience: {
      badge: "Karir & Track Record",
      title: "Pengalaman Kerja",
      subtitle: "Perjalanan profesional dan peran saya dalam pengembangan software.",
      present: "Sekarang",
      fulltime: "Full-time",
      freelance: "Freelance",
      intern: "Magang / Intern",
    },

    // Contact Section
    contact: {
      badge: "Mari Berkolaborasi",
      title: "Hubungi Saya",
      subtitle: "Apakah Anda memiliki proyek menarik atau peluang kerja? Kirimkan pesan di bawah ini.",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Masukkan nama Anda...",
      emailLabel: "Email",
      emailPlaceholder: "nama@domain.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Tuliskan detail proyek atau pertanyaan Anda di sini...",
      sendButton: "Kirim Pesan",
      sendingButton: "Mengirim...",
      successAlert: "Pesan berhasil dikirim! Saya akan membalas segera.",
      directEmail: "Email Langsung",
      phoneWhatsapp: "Telepon / WhatsApp",
      locationLabel: "Lokasi",
    },

    // ChatBot Component
    chatbot: {
      title: "Rifki AI Assistant",
      subtitle: "Tanyakan apapun tentang keahlian, proyek, dan pengalaman Rifki",
      placeholder: "Tanyakan sesuatu tentang Rifki...",
      send: "Kirim",
      suggestion1: "Apa saja proyek unggulan Rifki?",
      suggestion2: "Teknologi apa yang paling dikuasai?",
      suggestion3: "Bagaimana cara menghubungi Rifki?",
      suggestion4: "Ceritakan tentang pengalaman kerjanya",
      clearChat: "Hapus Chat",
    },

    // Command Menu (Cmd+K)
    command: {
      placeholder: "Ketik perintah atau cari...",
      noResults: "Tidak ada hasil ditemukan.",
      groupNavigation: "Navigasi",
      groupProjects: "Proyek",
      groupSocials: "Sosial Media",
      groupActions: "Aksi",
      actionToggleTheme: "Ganti Tema (Gelap/Terang)",
      actionToggleLang: "Ganti Bahasa (ID/EN)",
      actionDownloadCV: "Unduh Resume CV",
    },

    // Footer
    footer: {
      rights: "Hak Cipta Dilindungi.",
      builtWith: "Dibuat dengan Next.js 15 & Tailwind CSS.",
      backToTop: "Kembali ke Atas",
    },
  },

  en: {
    // Navigation & Header
    nav: {
      showcase: "Showcase & Portfolio",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      blog: "Blog",
      searchPlaceholder: "Search projects, skills, or docs...",
      searchShortcut: "Press ⌘K to search",
      langSwitch: "Language",
    },

    // Hero Section
    hero: {
      statusBadge: "Available for Hire & Projects",
      greeting: "Hello, I am",
      role: "Fullstack Web Developer",
      tagline: "Building scalable web applications, modern architecture, and high-performance user interfaces.",
      ctaProjects: "View Portfolio",
      ctaContact: "Get in Touch",
      ctaResume: "Download Resume / CV",
      location: "Lamongan, East Java, Indonesia",
    },

    // About Section
    about: {
      badge: "Profile & Background",
      title: "About Me",
      subtitle: "Passionate developer focused on performance, scalability, and user experience.",
      bio1: "I am a Fullstack Web Developer with 2+ years of experience designing and developing large-scale modern web applications. Focused on clean architecture, real-time API integrations, and highly responsive interactive interfaces.",
      bio2: "Proven track record in building housing ERP systems, digital SaaS applications, university admission platforms, and microservices integrations powered by Next.js, Node.js, Laravel, and Strapi CMS.",
      statsExperience: "Years Experience",
      statsProjects: "Completed Projects",
      statsClients: "Clients & Communities",
      highlightsTitle: "Core Competencies",
      highlight1: "Modern Frontend Engineering with React & Next.js",
      highlight2: "REST API, Microservices & GraphQL Backend Architecture",
      highlight3: "Database Management with PostgreSQL, MySQL & Redis",
      highlight4: "Payment Gateway & Real-time WebSockets Integration",
    },

    // GitHub Stats
    github: {
      badge: "Open Source Activity",
      title: "GitHub Stats & Contributions",
      subtitle: "Real-time tracking of commits, active repositories, and code contributions.",
      viewProfile: "View GitHub Profile",
      totalCommits: "Total Commits",
      repositories: "Repositories",
      starsEarned: "Stars Earned",
      followers: "Followers",
    },

    // Skills Section
    skills: {
      badge: "Tech & Stack",
      title: "Skills & Tools",
      subtitle: "Technologies I leverage to build production-grade application systems.",
      catFrontend: "Frontend Development",
      catBackend: "Backend & Server",
      catDatabase: "Database & Storage",
      catTools: "Tools & DevOps",
    },

    // Projects Section
    projects: {
      badge: "Work & Portfolio",
      title: "Reference Projects",
      subtitle: "A collection of production-ready applications, enterprise platforms, and technical experiments.",
      favoriteBadge: "Favorite Project Spotlight",
      favoriteButton: "Open Project Details & 8 Module Gallery",
      modulesBadge: "System Modules Inside",
      featuredBadge: "Featured",
      activeStatus: "Active Project",
      abstract: "Abstract & Overview",
      stackHeader: "Stack & Dependencies",
      deployment: "Deployment & Links",
      liveInstance: "Visit Live Website",
      repository: "Code Repository",
      metaData: "Metadata",
      specVersion: "Spec Version",
      license: "License",
      viewDetails: "View Project Details",
      otherProjectsTitle: "Other Projects",
      otherProjectsSubtitle: "Secondary applications, utilities, and code experiments.",
      githubHistoryText: "Full commit history available at",
      githubRepoLink: "GitHub Repository",
      modulPreview: "Module Visual Preview",
      capabilitiesHeader: "Key Capabilities & Features",
    },

    // Favorite Project Modules
    modules: {
      dashboard: "Dashboard",
      masterPerumahan: "Housing Master",
      progresLapangan: "Site Progress",
      marketing: "Marketing",
      piutangKonsumen: "Receivables",
      logistikGudang: "Warehouse Logistics",
      hrmWorkers: "HRM & Workers",
      accountingCOA: "Accounting & COA",
    },

    // Experience Section
    experience: {
      badge: "Career & Track Record",
      title: "Work Experience",
      subtitle: "My professional journey and software engineering roles.",
      present: "Present",
      fulltime: "Full-time",
      freelance: "Freelance",
      intern: "Internship",
    },

    // Contact Section
    contact: {
      badge: "Let's Collaborate",
      title: "Get in Touch",
      subtitle: "Have an exciting project or career opportunity? Drop me a message below.",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name...",
      emailLabel: "Email Address",
      emailPlaceholder: "name@domain.com",
      messageLabel: "Message",
      messagePlaceholder: "Write your project details or inquiries here...",
      sendButton: "Send Message",
      sendingButton: "Sending...",
      successAlert: "Message sent successfully! I will reply shortly.",
      directEmail: "Direct Email",
      phoneWhatsapp: "Phone / WhatsApp",
      locationLabel: "Location",
    },

    // ChatBot Component
    chatbot: {
      title: "Rifki AI Assistant",
      subtitle: "Ask anything about Rifki's skills, projects, and background",
      placeholder: "Ask something about Rifki...",
      send: "Send",
      suggestion1: "What are Rifki's top featured projects?",
      suggestion2: "Which technologies is Rifki best at?",
      suggestion3: "How can I contact Rifki?",
      suggestion4: "Tell me about his work experience",
      clearChat: "Clear Chat",
    },

    // Command Menu (Cmd+K)
    command: {
      placeholder: "Type a command or search...",
      noResults: "No results found.",
      groupNavigation: "Navigation",
      groupProjects: "Projects",
      groupSocials: "Social Links",
      groupActions: "Actions",
      actionToggleTheme: "Toggle Theme (Dark/Light)",
      actionToggleLang: "Switch Language (ID/EN)",
      actionDownloadCV: "Download Resume CV",
    },

    // Footer
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js 15 & Tailwind CSS.",
      backToTop: "Back to Top",
    },
  },
};
