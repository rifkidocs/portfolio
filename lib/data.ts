import { Language } from "./translations";

export interface ProjectSlide {
  id: string;
  title: string;
  titleEn?: string;
  subtitle: string;
  subtitleEn?: string;
  description: string;
  descriptionEn?: string;
  keyFeatures: string[];
  keyFeaturesEn?: string[];
  image: string;
  techTags: string[];
}

export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  tagline?: string;
  description: string;
  descriptionId?: string;
  descriptionEn?: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  isFavorite?: boolean;
  slides?: ProjectSlide[];
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

export const personalInfo = {
  name: "Rifki Ardiansah",
  title: "Fullstack Web Developer",
  email: "rifkidocs@gmail.com",
  phone: "+628123456789",
  location: "Lamongan, Jawa Timur, Indonesia",
  resumeUrl: "/resume.pdf",
  bio: "Fullstack Web Developer berpengalaman dalam membangun aplikasi web scalable dengan React, Next.js, Node.js, dan Strapi CMS.",
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/rifkidocs", icon: "github" },
  { name: "Email", url: "mailto:rifkidocs@gmail.com", icon: "mail" },
];

export const skills: Skill[] = [
  { name: "React", icon: "react", category: "frontend" },
  { name: "Next.js", icon: "nextjs", category: "frontend" },
  { name: "TypeScript", icon: "typescript", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", category: "frontend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Express.js", icon: "express", category: "backend" },
  { name: "Laravel", icon: "laravel", category: "backend" },
  { name: "Strapi CMS", icon: "strapi", category: "backend" },
  { name: "PostgreSQL", icon: "postgresql", category: "database" },
  { name: "MySQL", icon: "mysql", category: "database" },
  { name: "Redis", icon: "redis", category: "database" },
  { name: "Docker", icon: "docker", category: "tools" },
  { name: "Git", icon: "git", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "bumi-wiraraja",
    title: "Bumi Wiraraja Group — Enterprise Property & Housing System",
    titleEn: "Bumi Wiraraja Group — Enterprise Property & Housing System",
    tagline: "Favorite Portfolio: Multi-Housing ERP & Construction Management Platform",
    description:
      "Sistem ERP Pengelolaan Properti & Konstruksi Perumahan Terpadu untuk PT Bumi Wiraraja Group. Mengintegrasikan pemantauan progres fisik harian unit & fasum/fasos, akuntansi piutang konsumen & hutang supplier, logistik pergudangan material, HRM absensi tukang & subkontraktor, serta administrasi booking unit & sales pipeline dalam satu sistem enterprise terpusat.",
    descriptionId:
      "Sistem ERP Pengelolaan Properti & Konstruksi Perumahan Terpadu untuk PT Bumi Wiraraja Group. Mengintegrasikan pemantauan progres fisik harian unit & fasum/fasos, akuntansi piutang konsumen & hutang supplier, logistik pergudangan material, HRM absensi tukang & subkontraktor, serta administrasi booking unit & sales pipeline dalam satu sistem enterprise terpusat.",
    descriptionEn:
      "Integrated Housing Property & Construction ERP System for PT Bumi Wiraraja Group. Unifies daily unit & infrastructure physical progress tracking, consumer receivables & supplier payables accounting, warehouse material logistics, site workforce HRM attendance & subcontractor assignments, and unit booking & sales pipeline management into a centralized enterprise system.",
    image: "/projects/bumiwiraraja/dashboard.png",
    techStack: [
      "Next.js 15",
      "React 19",
      "Strapi v4",
      "Tailwind CSS",
      "MySQL",
      "CurrencyInput",
      "Framer Motion",
      "Recharts",
    ],
    liveUrl: "https://bumiwirarajagroup.com/",
    featured: true,
    isFavorite: true,
    slides: [
      {
        id: "slide-1",
        title: "Executive Dashboard & Multi-Project Analytics",
        titleEn: "Executive Dashboard & Multi-Project Analytics",
        subtitle: "Pusat Kontrol High-Level Operations & Liquidity Hub",
        subtitleEn: "High-Level Operations Control Center & Liquidity Hub",
        description:
          "Dashboard eksekutif real-time yang menyajikan indikator kinerja utama (KPI) seluruh proyek perumahan Bumi Wiraraja Group. Menampilkan agregasi total unit perumahan, statistik progres fisik konstruksi rata-rata (Kurva-S), tingkat kolektabilitas piutang konsumen, serta monitoring jumlah tenaga kerja aktif secara langsung.",
        descriptionEn:
          "Real-time executive dashboard presenting key performance indicators (KPIs) across all Bumi Wiraraja Group housing projects. Features total housing unit aggregation, average physical construction progress statistics (S-Curve), consumer receivable collection rates, and live active workforce monitoring.",
        keyFeatures: [
          "Multi-Project Housing Selector & Global Filtering",
          "Real-time KPI Counters & Financial Collection Rate Chart",
          "Monitoring Kurva-S Progres Konstruksi vs Target Timeline",
          "Aktivitas Terkini (Activity Feed) Pembangunan & Keuangan",
        ],
        keyFeaturesEn: [
          "Multi-Project Housing Selector & Global Filtering",
          "Real-time KPI Counters & Financial Collection Rate Chart",
          "Construction S-Curve Tracking vs Target Timeline",
          "Live Activity Feed for Construction & Financial Transactions",
        ],
        image: "/projects/bumiwiraraja/dashboard.png",
        techTags: ["Next.js 15", "Recharts", "Strapi REST API", "Tailwind CSS"],
      },
      {
        id: "slide-9",
        title: "Master Data Perumahan, Developer & Tipe Unit",
        titleEn: "Housing Master Data, Developers & Unit Types",
        subtitle: "Struktur Organisasi Proyek, Developer Pengembang & Master Kavling",
        subtitleEn: "Project Organizational Structure, Housing Developers & Lot Master",
        description:
          "Modul pengelolaan data induk proyek perumahan yang mencakup informasi lokasi, developer pengembang, tipe unit rumah (Tipe 36, 45, 54, 70), luas tanah/bangunan, serta spesifikasi denah arsitektur.",
        descriptionEn:
          "Housing project master data management module covering location details, housing developers, unit types (Type 36, 45, 54, 70), land/building areas, and architectural blueprint specifications.",
        keyFeatures: [
          "Pencatatan Master Developer & Perusahaan Pengembang",
          "Pengelolaan Tipe Unit Rumah, Blok & Denah Kavling",
          "Konfigurasi Spesifikasi Material & Harga Dasar Unit",
          "Integrasi ke Matrix Siteplan & Sistem Marketing",
        ],
        keyFeaturesEn: [
          "Developer Master & Contracting Entity Records",
          "Housing Unit Types, Blocks & Lot Blueprint Management",
          "Material Specifications & Base Unit Price Configuration",
          "Siteplan Matrix & Marketing System Integration",
        ],
        image: "/projects/bumiwiraraja/master-perumahan.png",
        techTags: ["Master Data", "Entity Relations", "Strapi Collection", "React UI"],
      },
      {
        id: "slide-2",
        title: "Progres Harian & Monitoring Pembangunan Unit",
        titleEn: "Daily Site Progress & Unit Construction Tracking",
        subtitle: "Tracking Konstruksi Per Unit Rumah & Fasilitas Umum (Fasum/Fasos)",
        subtitleEn: "Construction Tracking per Housing Unit & Public Facilities (Fasum/Fasos)",
        description:
          "Modul pelaporan progres fisik harian di lapangan yang mendukung filtering berbasis unit perumahan (`unit_rumah`) dan fasilitas umum (`fasilitas_proyek`). Dilengkapi workflow `status_dokumen` (Draft & Published) untuk otorisasi supervisor sebelum tersinkronisasi ke sistem progres fisik utama.",
        descriptionEn:
          "Daily site physical progress reporting module supporting filtering by housing unit (`unit_rumah`) and public infrastructure (`fasilitas_proyek`). Features a `status_dokumen` workflow (Draft & Published) for supervisor authorization before main progress sync.",
        keyFeatures: [
          "Filtering Pencarian Unit & Dokumen Progres Lapangan",
          "Dukungan Progres Unit Rumah & Infrastruktur/Fasum/Fasos",
          "Sistem Otorisasi Status Dokumen (Draft & Published)",
          "Dokumentasi Foto Lapangan & Rincian Konsumsi Material Harian",
        ],
        keyFeaturesEn: [
          "Unit Search Filtering & Field Progress Documentation",
          "Supports Housing Units & Public Infrastructure Progress",
          "Document Authorization Status System (Draft & Published)",
          "Field Photo Documentation & Daily Material Consumption Breakdown",
        ],
        image: "/projects/bumiwiraraja/progress-harian.png",
        techTags: ["React 19", "Debounced Search", "Strapi Lifecycles", "Media Upload"],
      },
      {
        id: "slide-6",
        title: "Marketing & Matrix Status Unit Kavling Perumahan",
        titleEn: "Marketing & Housing Plot Unit Matrix Status",
        subtitle: "Interactive Siteplan Matrix, Booking Reservation & Sales Pipeline",
        subtitleEn: "Interactive Siteplan Matrix, Booking Reservation & Sales Pipeline",
        description:
          "Modul administrasi pemasaran yang menyajikan status ketersediaan kavling rumah (Available, Booked, Sold) secara visual. Memfasilitasi pendaftaran booking awal konsumen, penerbitan Surat Pesanan Rumah (SPR), dan pelacakan performa agen sales.",
        descriptionEn:
          "Marketing administration module providing visual housing plot availability status (Available, Booked, Sold). Facilitates initial customer booking registration, Housing Order Letter (SPR) issuance, and sales agent performance tracking.",
        keyFeatures: [
          "Matrix Visual Kavling Perumahan (Color-coded Unit Status)",
          "Pendaftaran Reservasi Unit & Auto-Generate ID Booking",
          "Simulasi KPR & Perhitungan Estimasi Angsuran Bank",
          "Laporan Rekapitulasi & Komisi Agent Sales Marketing",
        ],
        keyFeaturesEn: [
          "Visual Housing Plot Matrix (Color-coded Unit Status)",
          "Unit Reservation Registration & Auto-Generated Booking ID",
          "Mortgage Simulator & Bank Installment Estimation",
          "Sales Summary Reports & Agent Marketing Commission",
        ],
        image: "/projects/bumiwiraraja/marketing.png",
        techTags: ["Unit Grid Matrix", "Booking Pipeline", "React State", "Next.js"],
      },
      {
        id: "slide-3",
        title: "Manajemen Piutang Konsumen & Pos Keuangan Ledger",
        titleEn: "Consumer Receivables Management & Financial Ledger",
        subtitle: "Automated Payment Schedules, Currency Input & Multi-Pos Ledger",
        subtitleEn: "Automated Payment Schedules, Currency Input & Multi-Pos Ledger",
        description:
          "Sistem manajemen piutang konsumen dan kas keuangan terpadu. Dilengkapi pencarian debounced ID Booking dengan fitur auto-fill otomatis data Konsumen, Proyek, dan Unit Rumah, serta komponen CurrencyInput terstandarisasi untuk nominal ratusan juta rupiah secara presisi.",
        descriptionEn:
          "Integrated consumer receivables and cash ledger management system. Equipped with debounced Booking ID search with automatic auto-fill for Customer, Project, and Unit details, plus a standardized CurrencyInput component for precise high-value IDR transactions.",
        keyFeatures: [
          "Debounced Search Booking ID dengan Auto-Fill Lintas Entity",
          "Komponen CurrencyInput Presisi IDR (Preserve Cursor Position)",
          "Integrasi Relasi Pos Keuangan (Rekening Bank & Kas Tunai)",
          "Pencatatan Terpusat Collection `riwayat-pembayaran` per Transaksi",
        ],
        keyFeaturesEn: [
          "Debounced Booking ID Search with Cross-Entity Auto-Fill",
          "High-Precision IDR CurrencyInput Component (Preserve Cursor)",
          "Pos Keuangan Relation Integration (Bank Accounts & Cash)",
          "Centralized Transaction Logging in `riwayat-pembayaran` Collection",
        ],
        image: "/projects/bumiwiraraja/piutang-konsumen.png",
        techTags: ["Custom CurrencyInput", "Pos Keuangan Relation", "Context API", "PostgreSQL"],
      },
      {
        id: "slide-4",
        title: "Tagihan Hutang Supplier & Logistik Pergudangan",
        titleEn: "Supplier Payables & Warehouse Logistics Management",
        subtitle: "Warehouse Receiving, Inventory Control & Vendor Debt Settlement",
        subtitleEn: "Warehouse Receiving, Inventory Control & Vendor Debt Settlement",
        description:
          "Modul logistik gudang dan manajemen pembayaran supplier. Membantu tim verifikasi penerimaan barang (Receiving) mencocokkan stok masuk dengan Purchase Order (PO) serta mengelola jadwal pelunasan tagihan hutang ke supplier bahan bangunan.",
        descriptionEn:
          "Warehouse logistics and supplier payment management module. Assists receiving teams in matching incoming stock with Purchase Orders (PO) and manages debt settlement schedules for building material suppliers.",
        keyFeatures: [
          "Filter Status Penerimaan Barang Gudang & Pencarian Kategori Material",
          "Pencatatan Rekonsiliasi Surat Jalan Supplier vs PO",
          "Pelaksanaan Pembayaran Tagihan Hutang via Relasi Pos Keuangan",
          "Monitoring Saldo Debt Ledger Supplier Real-time",
        ],
        keyFeaturesEn: [
          "Warehouse Receiving Status Filter & Material Category Search",
          "Supplier Delivery Note Reconciliation vs PO",
          "Supplier Debt Payment Execution via Pos Keuangan Relation",
          "Real-time Supplier Debt Ledger Balance Monitoring",
        ],
        image: "/projects/bumiwiraraja/gudang.png",
        techTags: ["Warehouse Inventory", "Supplier Ledger", "Strapi API", "PostgreSQL"],
      },
      {
        id: "slide-5",
        title: "HRM & Absensi Tenaga Kerja Proyek (Worker & Subkontraktor)",
        titleEn: "HRM & Site Worker Attendance (Tukang & Subcontractor)",
        subtitle: "Site Workforce Scheduling, Shift Matrix & Task Distribution",
        subtitleEn: "Site Workforce Scheduling, Shift Matrix & Task Distribution",
        description:
          "Modul manajemen sumber daya manusia (HRM) lapangan yang mengelola absensi harian tukang/mandor, penjadwalan shift kerja, serta penugasan pekerjaan ke subkontraktor proyek. Didesain dengan antarmuka ringkas (compact layout & kebab menu actions).",
        descriptionEn:
          "Field Human Resource Management (HRM) module managing daily worker attendance, work shift scheduling, and task assignments to project subcontractors. Designed with a compact user interface and kebab menu actions.",
        keyFeatures: [
          "Antarmuka Kebab Action Dropdown Menu & Form Compact 1.5 Spacing",
          "Penjadwalan Shift Pekerja & Presensi Harian Lapangan",
          "Manajemen Kontrak Subkontraktor & Penugasan Tugas Konstruksi",
          "Pengaturan Hak Akses Role Proyek (RBAC Strapi)",
        ],
        keyFeaturesEn: [
          "Kebab Action Dropdown Menu & Compact 1.5 Spacing Forms",
          "Worker Shift Scheduling & Daily Site Attendance",
          "Subcontractor Agreement Management & Task Assignment",
          "Project Role Access Control Configuration (Strapi RBAC)",
        ],
        image: "/projects/bumiwiraraja/hrm.png",
        techTags: ["HRM Module", "Shadcn UI", "Permissions JS", "Tailwind CSS"],
      },
      {
        id: "slide-8",
        title: "Accounting, Plotting COA & Jurnal Buku Besar",
        titleEn: "Accounting, COA Plotting & General Ledger",
        subtitle: "Chart of Accounts (COA), Operational Plotting & General Ledger",
        subtitleEn: "Chart of Accounts (COA), Operational Plotting & General Ledger",
        description:
          "Sistem akuntansi perusahaan yang mengelola pengkodean akun COA, antrean plotting jurnal dari transaksi operasional, buku besar per akun, serta laporan laba rugi dan neraca keuangan proyek perumahan.",
        descriptionEn:
          "Corporate accounting system managing COA account codes, operational transaction journal plotting queues, per-account general ledgers, as well as housing project cash flow, profit & loss, and balance sheet reports.",
        keyFeatures: [
          "Antrean Plotting Kode Akun COA untuk Transaksi Operasional",
          "Pengelolaan Master Chart of Accounts (COA) Lintas Proyek",
          "Mutasi Kas/Bank & Jurnal Otomatis/Manual",
          "Laporan Arus Kas, Laba Rugi Proyek & Neraca Keuangan",
        ],
        keyFeaturesEn: [
          "COA Account Code Plotting Queue for Operational Transactions",
          "Master Chart of Accounts (COA) Management Across Projects",
          "Cash/Bank Transfers & Automatic/Manual Journal Vouchers",
          "Cash Flow Reports, Project P&L & Balance Sheet Accounting",
        ],
        image: "/projects/bumiwiraraja/coa.png",
        techTags: ["COA Engine", "Accounting Ledger", "Financial Reports", "PostgreSQL"],
      },
    ],
  },
  {
    id: "17",
    title: "MomenPesta - Digital Invitation SaaS",
    titleEn: "MomenPesta - Digital Invitation SaaS Platform",
    description:
      "Platform Software as a Service (SaaS) komprehensif untuk membuat undangan digital yang elegan. Memiliki antarmuka ramah pengguna untuk kustomisasi undangan pernikahan dan acara, terintegrasi dengan Payment Gateway Midtrans, Firebase untuk manajemen data real-time, dan animasi interaktif berkualiatas tinggi dengan GSAP.",
    descriptionId:
      "Platform Software as a Service (SaaS) komprehensif untuk membuat undangan digital yang elegan. Memiliki antarmuka ramah pengguna untuk kustomisasi undangan pernikahan dan acara, terintegrasi dengan Payment Gateway Midtrans, Firebase untuk manajemen data real-time, dan animasi interaktif berkualiatas tinggi dengan GSAP.",
    descriptionEn:
      "A comprehensive Software as a Service (SaaS) platform for creating elegant digital invitations. It features a user-friendly interface for customizing wedding and event invitations, integrated with Midtrans for secure payments, Firebase for real-time data management, and GSAP for high-quality interactive animations.",
    image: "/momenpesta.png",
    techStack: ["Next.js", "Firebase", "Midtrans", "GSAP", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://www.momenpesta.id/",
    featured: true,
  },
  {
    id: "16",
    title: "PMB UNISLA - University Admission System",
    titleEn: "PMB UNISLA - University Student Admission Platform",
    description:
      "Sistem penerimaan mahasiswa baru resmi untuk Universitas Islam Lamongan (UNISLA). Platform ini mempermudah proses pendaftaran ribuan calon mahasiswa dengan antarmuka berbasis React, backend Laravel 12 yang andal, dan animasi interaktif fluid GSAP.",
    descriptionId:
      "Sistem penerimaan mahasiswa baru resmi untuk Universitas Islam Lamongan (UNISLA). Platform ini mempermudah proses pendaftaran ribuan calon mahasiswa dengan antarmuka berbasis React, backend Laravel 12 yang andal, dan animasi interaktif fluid GSAP.",
    descriptionEn:
      "The official student admission system for Universitas Islam Lamongan (UNISLA). This platform simplifies the enrollment process for thousands of prospective students, featuring a modern React-based frontend, a robust Laravel 12 backend, and fluid interactive elements powered by GSAP.",
    image: "/pmb.png",
    techStack: ["Laravel", "React", "GSAP", "Tailwind CSS", "MySQL"],
    liveUrl: "https://pmb.unisla.ac.id/",
    featured: true,
  },
  {
    id: "15",
    title: "AI-Powered Collaborative Workspace",
    titleEn: "AI-Powered Collaborative Workspace",
    description:
      "Platform kolaboratif berbasis AI bergaya Notion dengan fitur penyuntingan dokumen real-time dan pelacakan kursor langsung. Dibangun dengan arsitektur microservices terukur menggunakan Next.js 16 dan Express.js, terintegrasi dengan Google Gemini AI, Yjs & Socket.io untuk sinkronisasi instan, dan PostgreSQL.",
    descriptionId:
      "Platform kolaboratif berbasis AI bergaya Notion dengan fitur penyuntingan dokumen real-time dan pelacakan kursor langsung. Dibangun dengan arsitektur microservices terukur menggunakan Next.js 16 dan Express.js, terintegrasi dengan Google Gemini AI, Yjs & Socket.io untuk sinkronisasi instan, dan PostgreSQL.",
    descriptionEn:
      "A Notion-style, AI-powered collaborative platform featuring real-time document editing and live cursor tracking. Built with a scalable microservices architecture using Next.js 16 and Express.js, it integrates Google Gemini for AI content generation, Yjs & Socket.io for instant synchronization, and PostgreSQL for robust data management.",
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
    titleEn: "Predator Rubber - Premium Livestock Flooring Portal",
    description:
      "Website resmi untuk Predator Rubber, penyedia karpet karet berkualitas tinggi untuk peternakan. Platform ini menampilkan produk karpet sapi premium untuk meningkatkan kenyamanan, kesehatan, dan produktivitas ternak dengan teknologi anti-selip dan daya tahan tinggi, didukung backend Laravel & MySQL.",
    descriptionId:
      "Website resmi untuk Predator Rubber, penyedia karpet karet berkualitas tinggi untuk peternakan. Platform ini menampilkan produk karpet sapi premium untuk meningkatkan kenyamanan, kesehatan, dan produktivitas ternak dengan teknologi anti-selip dan daya tahan tinggi, didukung backend Laravel & MySQL.",
    descriptionEn:
      "The official website for Predator Rubber, a premium livestock flooring provider. The platform showcases high-quality cow mats designed to enhance cattle comfort, health, and productivity using anti-slip technology and durable materials, featuring a robust backend built with Laravel and MySQL.",
    image: "/predatorrubber.png",
    techStack: ["PHP", "Laravel", "Tailwind CSS", "MySQL", "Vite"],
    liveUrl: "https://www.predatorrubber.com/",
    featured: true,
  },
  {
    id: "12",
    title: "JuraganIT - Digital Agency Website",
    titleEn: "JuraganIT - Digital Agency Corporate Website",
    description:
      "Platform resmi untuk JuraganIT, agensi kreatif digital di bawah CV. Juragan Karya Digital Teknologi. Website ini berfungsi sebagai pusat layanan transformasi digital mencakup pengembangan web profesional, aplikasi mobile, dan konsultasi IT yang responsif dan ramah SEO.",
    descriptionId:
      "Platform resmi untuk JuraganIT, agensi kreatif digital di bawah CV. Juragan Karya Digital Teknologi. Website ini berfungsi sebagai pusat layanan transformasi digital mencakup pengembangan web profesional, aplikasi mobile, dan konsultasi IT yang responsif dan ramah SEO.",
    descriptionEn:
      "Developed the official platform for JuraganIT, a digital creative agency under CV. Juragan Karya Digital Teknologi. The website serves as a comprehensive hub for digital transformation services, including professional web development, mobile application development, and IT consultancy.",
    image: "/JuraganIT.png",
    techStack: ["Next.js", "JavaScript", "Strapi", "Tailwind CSS", "React"],
    liveUrl: "https://juraganitweb.co.id/",
    featured: true,
  },
  {
    id: "11",
    title: "Kesra Banyuwangi – Government Service Website",
    titleEn: "Kesra Banyuwangi – Public Welfare Government Portal",
    description:
      "Platform informasi resmi untuk program kesejahteraan masyarakat Kabupaten Banyuwangi. Website ini berfungsi sebagai saluran publikasi resmi dan mempermudah komunikasi digital antara pemerintah daerah dan masyarakat.",
    descriptionId:
      "Platform informasi resmi untuk program kesejahteraan masyarakat Kabupaten Banyuwangi. Website ini berfungsi sebagai saluran publikasi resmi dan mempermudah komunikasi digital antara pemerintah daerah dan masyarakat.",
    descriptionEn:
      "Developed the official information platform for Banyuwangi Regency's social welfare programs. This website serves as an official publication channel and streamlines digital communication between the local government and the community.",
    image: "/kesra.png",
    techStack: ["Next.js", "JavaScript", "Strapi", "Tailwind CSS", "React"],
    liveUrl: "https://kesra.banyuwangikab.go.id/",
    featured: true,
  },
  {
    id: "1",
    title: "PT Bumi Suksesindo - Corporate Website",
    titleEn: "PT Bumi Suksesindo - Gold Mining Corporate Portal",
    description:
      "Website korporat untuk PT Bumi Suksesindo (BSI), perusahaan pertambangan emas yang mengelola tambang Tujuh Bukit di Banyuwangi, Jawa Timur. Menyajikan informasi perusahaan, program keberlanjutan, peluang karir, dan berita terkini.",
    descriptionId:
      "Website korporat untuk PT Bumi Suksesindo (BSI), perusahaan pertambangan emas yang mengelola tambang Tujuh Bukit di Banyuwangi, Jawa Timur. Menyajikan informasi perusahaan, program keberlanjutan, peluang karir, dan berita terkini.",
    descriptionEn:
      "Corporate website for PT Bumi Suksesindo (BSI), a gold mining company managing the Tujuh Bukit mine in Banyuwangi, East Java. Built featuring company information, sustainability programs, career opportunities, and news updates.",
    image: "/bumisuksesindo.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "https://bumisuksesindo.com/",
    featured: true,
  },
  {
    id: "8",
    title: "Sekolah Vokasi UNISLA - Department Website",
    titleEn: "UNISLA Vocational School - Department Portal",
    description:
      "Website resmi Sekolah Vokasi Universitas Islam Lamongan (UNISLA), menyajikan informasi program keahlian, fasilitas, dosen, penelitian, berita, dan layanan akademik.",
    descriptionId:
      "Website resmi Sekolah Vokasi Universitas Islam Lamongan (UNISLA), menyajikan informasi program keahlian, fasilitas, dosen, penelitian, berita, dan layanan akademik.",
    descriptionEn:
      "Official website for Sekolah Vokasi Universitas Islam Lamongan (UNISLA), presenting program information, facilities, lecturers, research, news, and services.",
    image: "/vokasi.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "https://vokasi.unisla.ac.id/",
    featured: false,
  },
  {
    id: "9",
    title: "PIAUD UNISLA - Study Program Website",
    titleEn: "PIAUD UNISLA - Early Childhood Education Study Program",
    description:
      "Website Program Studi Pendidikan Islam Anak Usia Dini (PIAUD) UNISLA yang menyediakan profil, kurikulum, direktori dosen, berita, dan informasi pendaftaran.",
    descriptionId:
      "Website Program Studi Pendidikan Islam Anak Usia Dini (PIAUD) UNISLA yang menyediakan profil, kurikulum, direktori dosen, berita, dan informasi pendaftaran.",
    descriptionEn:
      "Program Studi Pendidikan Islam Anak Usia Dini (PIAUD) UNISLA website providing profile, curriculum, lecturers directory, news, and registration information.",
    image: "/piaud.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "https://piaud.unisla.ac.id/",
    featured: false,
  },
  {
    id: "10",
    title: "RPL UNISLA – Prior Learning Recognition Program",
    titleEn: "RPL UNISLA – Prior Learning Recognition Portal",
    description:
      "Sistem informasi Rekognisi Pembelajaran Lampau (RPL) Universitas Islam Lamongan, menampilkan gambaran umum program, brosur, program studi peserta, dan portal pendaftaran.",
    descriptionId:
      "Sistem informasi Rekognisi Pembelajaran Lampau (RPL) Universitas Islam Lamongan, menampilkan gambaran umum program, brosur, program studi peserta, dan portal pendaftaran.",
    descriptionEn:
      "Information system for Rekognisi Pembelajaran Lampau (RPL) at Universitas Islam Lamongan, featuring program overview, brochures, participating study programs, and registration portal.",
    image: "/rpl.png",
    techStack: ["WordPress", "PHP", "Premium Plugins", "MySQL"],
    liveUrl: "https://rpl.unisla.ac.id/",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "PT Bumi Wiraraja Group",
    position: "Lead Fullstack Developer",
    duration: "2024 - Sekarang",
    description: [
      "Mengembangkan Sistem ERP Properti & Konstruksi Perumahan Multi-Proyek dari awal.",
      "Mengimplementasikan integrasi Strapi CMS v4, Next.js 15, PostgreSQL, dan komponen presisi CurrencyInput.",
      "Membuat sistem presensi absensi tukang/mandor, monitoring progres fisik harian unit & fasum, serta akuntansi piutang konsumen.",
    ],
    current: true,
    type: "fulltime",
  },
  {
    id: "2",
    company: "CV. Juragan Karya Digital Teknologi",
    position: "Frontend / Fullstack Developer",
    duration: "2023 - 2024",
    description: [
      "Mengembangkan platform digital agency JuraganIT dan situs layanan pemerintah Kesra Banyuwangi.",
      "Merancang antarmuka performa tinggi dengan Next.js, Tailwind CSS, dan animasi GSAP.",
    ],
    current: false,
    type: "fulltime",
  },
  {
    id: "3",
    company: "Universitas Islam Lamongan (UNISLA)",
    position: "Web Developer & System Architect",
    duration: "2022 - 2023",
    description: [
      "Mengembangkan Sistem PMB UNISLA, Sekolah Vokasi, PIAUD, dan Portal Rekognisi Pembelajaran Lampau (RPL).",
      "Membuat aplikasi web dengan arsitektur bersih React, Laravel, dan MySQL.",
    ],
    current: false,
    type: "fulltime",
  },
];

export function getProjectTitle(project: Project, lang: Language): string {
  if (lang === "en" && project.titleEn) return project.titleEn;
  return project.title;
}

export function getProjectDescription(project: Project, lang: Language): string {
  if (lang === "en" && project.descriptionEn) return project.descriptionEn;
  if (lang === "id" && project.descriptionId) return project.descriptionId;
  return project.description;
}

export function getSlideTitle(slide: ProjectSlide, lang: Language): string {
  if (lang === "en" && slide.titleEn) return slide.titleEn;
  return slide.title;
}

export function getSlideSubtitle(slide: ProjectSlide, lang: Language): string {
  if (lang === "en" && slide.subtitleEn) return slide.subtitleEn;
  return slide.subtitle;
}

export function getSlideDescription(slide: ProjectSlide, lang: Language): string {
  if (lang === "en" && slide.descriptionEn) return slide.descriptionEn;
  return slide.description;
}

export function getSlideKeyFeatures(slide: ProjectSlide, lang: Language): string[] {
  if (lang === "en" && slide.keyFeaturesEn) return slide.keyFeaturesEn;
  return slide.keyFeatures;
}
