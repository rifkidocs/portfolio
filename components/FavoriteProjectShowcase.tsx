"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Globe,
  CheckCircle2,
  LayoutDashboard,
  HardHat,
  Wallet,
  Boxes,
  Users,
  Building2,
  ArrowRight,
  Github,
  Monitor,
  Calculator,
  Target,
  FileText,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  Project, 
  ProjectSlide, 
  getProjectTitle, 
  getProjectDescription,
  getSlideTitle,
  getSlideSubtitle,
  getSlideDescription,
  getSlideKeyFeatures
} from "@/lib/data";
import { useLanguage } from "@/lib/language-context";

const moduleTabs = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Master Perumahan", icon: Building2 },
  { label: "Progres Lapangan", icon: HardHat },
  { label: "Marketing", icon: Target },
  { label: "Piutang Konsumen", icon: Wallet },
  { label: "Logistik Gudang", icon: Boxes },
  { label: "HRM & Workers", icon: Users },
  { label: "Accounting & COA", icon: FileText },
];

const adminSystemFeatureCatalog = [
  {
    category: "Pusat Kontrol Eksekutif & Dashboard",
    categoryEn: "Executive Dashboard & Analytics",
    icon: LayoutDashboard,
    features: [
      {
        name: "Agregator Progres Fisik Lintas Proyek",
        nameEn: "Cross-Project Physical Progress Aggregator",
        desc: "Visualisasi Kurva-S otomatis untuk membandingkan akumulasi progres riil pembangunan unit rumah & fasum terhadap target timeline.",
        descEn: "Automated S-Curve visualization comparing cumulative actual construction progress against targeted project timelines."
      },
      {
        name: "Indikator Kolektabilitas & Likuiditas Kas",
        nameEn: "Collection Rate & Liquidity Indicators",
        desc: "Monitoring persentase penerimaan piutang konsumen, sisa tagihan berjalan, dan proyeksi arus kas masuk secara harian.",
        descEn: "Monitoring consumer receivable collection percentages, outstanding balances, and daily cash inflow projections."
      },
      {
        name: "Feed Aktivitas Operasional Terpusat",
        nameEn: "Centralized Activity Stream Feed",
        desc: "Pencatatan real-time setiap perubahan data (pembayaran piutang, otorisasi progres harian, transaksi gudang) untuk audit trail.",
        descEn: "Real-time logging of all system data mutations (receivable payments, progress approvals, warehouse actions) for audit trails."
      }
    ]
  },
  {
    category: "Master Data Perumahan & Developer",
    categoryEn: "Housing & Developer Master Data",
    icon: Building2,
    features: [
      {
        name: "Manajemen Developer & PT Pengembang",
        nameEn: "Housing Developer Entity Management",
        desc: "Pencatatan data legalitas, rekening resmi pengembang, kontak penanggung jawab, dan pemetaan ke lokasi perumahan.",
        descEn: "Recording developer legal entities, official bank accounts, management contacts, and site-level project assignments."
      },
      {
        name: "Master Tipe Unit & Spesifikasi Arsitektur",
        nameEn: "Unit Type Master & Blueprint Specs",
        desc: "Konfigurasi detail Tipe 36, 45, 54, 70, luas tanah/bangunan, denah kavling, spesifikasi pondasi, struktur, dan finishing material.",
        descEn: "Detailed configuration of Type 36, 45, 54, 70, land/building areas, site blueprints, foundation, and material specs."
      },
      {
        name: "Harga Dasar Kavling & Rule Kelebihan Tanah",
        nameEn: "Base Plot Pricing & Excess Land Valuation",
        desc: "Pengaturan harga acuan per meter persegi untuk tanah standar dan perhitungan otomatis biaya kelebihan tanah per unit.",
        descEn: "Standard price per square meter rule configurations and automated excess land cost calculations per plot unit."
      }
    ]
  },
  {
    category: "Progres Lapangan & Infrastruktur Fasum/Fasos",
    categoryEn: "Site Construction & Infrastructure Progress",
    icon: HardHat,
    features: [
      {
        name: "Tracking Spesifik Unit (`unit_rumah`) & Fasum (`fasilitas_proyek`)",
        nameEn: "Unit-Specific (`unit_rumah`) & Facilities (`fasilitas_proyek`) Tracking",
        desc: "Pelaporan persentase pekerjaan per unit kavling serta pekerjaan fasum/fasos (jalan perumahan, drainase, penerangan, taman).",
        descEn: "Percentage progress reporting per housing block/lot as well as public infrastructure (roads, drainage, lighting, parks)."
      },
      {
        name: "Workflow Verifikasi Status Dokumen (Draft & Published)",
        nameEn: "Document Status Verification Workflow (Draft & Published)",
        desc: "Verifikasi bertingkat di mana laporan supervisor bernilai 'Draft' hingga diperiksa dan diotorisasi menjadi 'Published'.",
        descEn: "Multi-tiered verification where supervisor reports remain 'Draft' until reviewed and published to update physical progress."
      },
      {
        name: "Audit Konsumsi Material & Lampiran Foto Lapangan",
        nameEn: "Material Consumption Audit & Photo Attachments",
        desc: "Pencatatan volume semen, besi, pasir harian beserta upload foto fisik pekerjaan lapangan langsung dari smartphone.",
        descEn: "Daily recording of cement, rebar, sand consumption volumes with direct smartphone site photo uploads."
      }
    ]
  },
  {
    category: "Marketing Kavling & Sales Pipeline",
    categoryEn: "Plot Marketing & Sales Management",
    icon: Target,
    features: [
      {
        name: "Matrix Siteplan Visual Interaktif",
        nameEn: "Interactive Visual Siteplan Matrix",
        desc: "Tampilan grid status kavling real-time berbasis kode warna (Hijau = Available, Kuning = Booked, Merah = Sold/Akut).",
        descEn: "Real-time color-coded plot availability grid (Green = Available, Yellow = Booked, Red = Sold/Closed)."
      },
      {
        name: "Penerbitan Surat Pesanan Rumah (SPR) & Booking",
        nameEn: "Housing Order (SPR) Issuance & Booking Registration",
        desc: "Auto-generate ID Booking resmi, penguncian status kavling sementara, dan penginputan data awal calon konsumen.",
        descEn: "Auto-generating official Booking IDs, temporary plot locking, and initial customer profile registration."
      },
      {
        name: "Kalkulator KPR Bank & Simulator Angsuran",
        nameEn: "Mortgage Calculator & Bank Installment Simulator",
        desc: "Simulasi perhitungan Uang Muka (DP), plafon KPR, suku bunga bank mitra, dan estimasi cicilan bulanan tenor 5-20 tahun.",
        descEn: "Simulating Down Payment (DP), bank loan ceilings, interest rates, and monthly installment estimates for 5-20 year terms."
      },
      {
        name: "Pencatatan Performa Agent & Skema Komisi Sales",
        nameEn: "Sales Agent Performance & Commission Engine",
        desc: "Tracking asal pencapaian closing agent internal/external dan kalkulasi otomatis klaim komisi pemasaran.",
        descEn: "Tracking closing achievements per internal/external sales agent and automating marketing commission payout claims."
      }
    ]
  },
  {
    category: "Piutang Konsumen & Kas Keuangan",
    categoryEn: "Consumer Receivables & Finance Cash",
    icon: Wallet,
    features: [
      {
        name: "Debounced Search ID Booking dengan Auto-Fill Lintas Entity",
        nameEn: "Debounced Booking ID Search with Cross-Entity Auto-Fill",
        desc: "Pilih ID Booking dan sistem otomatis mengisi data Konsumen, Proyek Perumahan, Tipe Unit, serta sisa piutang.",
        descEn: "Selecting a Booking ID automatically pre-fills Customer, Housing Project, Unit Type, and remaining balance data."
      },
      {
        name: "Input Nominal Presisi IDR (`CurrencyInput`)",
        nameEn: "High-Precision IDR `CurrencyInput` Component",
        desc: "Komponen input angka khusus IDR yang menangani nominal ratusan juta rupiah tanpa bug kursor atau leading zero.",
        descEn: "Custom IDR input component handling multi-hundred million values smoothly without cursor jumps or leading zero issues."
      },
      {
        name: "Integrasi Pos Keuangan (Bank Accounts & Kas Tunai)",
        nameEn: "Financial Position Relation (Bank & Cash Accounts)",
        desc: "Menghubungkan setiap transaksi pembayaran ke rekening bank penerima resmi (BCA, Mandiri, BRI) atau Kas Kantor.",
        descEn: "Linking every payment transaction directly to official target bank accounts (BCA, Mandiri, BRI) or Office Cash Ledgers."
      },
      {
        name: "Pencatatan Collection `riwayat-pembayaran` Terpusat",
        nameEn: "Centralized `riwayat-pembayaran` Collection Audit",
        desc: "Riwayat kwitansi pembayaran konsumen yang tersimpan dalam koleksi khusus untuk audit keuangan dan cetak ulang bukti bayar.",
        descEn: "Customer payment receipt history stored in a dedicated collection for financial auditing and receipt re-printing."
      }
    ]
  },
  {
    category: "Logistik Gudang & Hutang Supplier",
    categoryEn: "Warehouse Logistics & Supplier Payables",
    icon: Boxes,
    features: [
      {
        name: "Verifikasi Penerimaan Barang (Receiving Stock)",
        nameEn: "Goods Receiving & Stock Verification",
        desc: "Pencatatan fisik stok material masuk di lokasi proyek berbasis Purchase Order (PO) dan filter status barang.",
        descEn: "Recording physical incoming material stocks at project sites based on Purchase Orders (PO) with receiving status filters."
      },
      {
        name: "Rekonsiliasi Surat Jalan Supplier vs PO",
        nameEn: "Supplier Delivery Note vs PO Reconciliation",
        desc: "Pencocokan jumlah barang yang diterima pada surat jalan distributor bahan bangunan terhadap dokumen pesanan proyek.",
        descEn: "Matching material delivery note quantities from suppliers against original project purchase order documents."
      },
      {
        name: "Manajemen Pelunasan Tagihan Hutang Supplier",
        nameEn: "Supplier Payables Schedule & Settlement Engine",
        desc: "Pengelolaan tanggal jatuh tempo tagihan vendor, pembayaran parsial/lunas, dan pemotongan saldo hutang via Pos Keuangan.",
        descEn: "Managing vendor invoice due dates, partial/full payment vouchers, and automated debt balance reductions via Pos Keuangan."
      }
    ]
  },
  {
    category: "HRM & Absensi Tenaga Kerja Proyek",
    categoryEn: "HRM & Site Workforce Management",
    icon: Users,
    features: [
      {
        name: "Presensi Harian Pekerja / Tukang & Kebab Dropdown UI",
        nameEn: "Daily Worker Attendance & Kebab Dropdown UI",
        desc: "Pencatatan kehadiran tukang/mandor harian dengan antarmuka ringkas, spacing 1.5 compact, dan menu aksi kebab dropdown.",
        descEn: "Daily site worker attendance logging with a compact 1.5 spacing interface and streamlined kebab menu actions."
      },
      {
        name: "Penjadwalan Shift Kerja & Alokasi Pekerja",
        nameEn: "Work Shift Scheduling & Allocation Matrix",
        desc: "Pengaturan jam shift kerja harian/mingguan dan alokasi tim pekerja ke masing-masing blok kavling yang sedang dibangun.",
        descEn: "Managing daily/weekly work shifts and allocating worker teams to active construction plot blocks."
      },
      {
        name: "Manajemen Subkontraktor & Penugasan Tugas Khusus",
        nameEn: "Subcontractor Agreement & Task Assignments",
        desc: "Pencatatan mitra subkontraktor (pekerjaan pematangan lahan, kelistrikan, perpipaan) beserta target milestone.",
        descEn: "Managing subcontractor partners (land clearing, electrical, plumbing) alongside job milestone target schedules."
      },
      {
        name: "Otorisasi Akses RBAC Berbasis Role (`proyek.json`)",
        nameEn: "Role-Based Access Control RBAC (`proyek.json`)",
        desc: "Pengaturan izin akses CRUD spesifik modul per level pengguna (Admin Holding, Supervisor Lapangan, Kasir Proyek).",
        descEn: "Configuring fine-grained CRUD permissions per user role level (Holding Admin, Site Supervisor, Project Cashier)."
      }
    ]
  },
  {
    category: "Akuntansi, Plotting COA & Jurnal Buku Besar",
    categoryEn: "Accounting, COA Plotting & General Ledger",
    icon: FileText,
    features: [
      {
        name: "Master Chart of Accounts (COA) Hierarkis",
        nameEn: "Hierarchical Master Chart of Accounts (COA)",
        desc: "Struktur pengkodean akun standar akuntansi (Aktiva, Kewajiban, Ekuitas, Pendapatan, Beban) yang berlaku untuk seluruh proyek.",
        descEn: "Standard accounting Chart of Accounts structure (Assets, Liabilities, Equity, Revenue, Expenses) active across all projects."
      },
      {
        name: "Antrean Plotting Kode Akun Jurnal Operasional",
        nameEn: "Operational Transaction Journal Plotting Queue",
        desc: "Fitur verifikasi transaksi operasional harian yang membutuhkan pemetaan kode akun COA sebelum masuk ke Buku Besar.",
        descEn: "Operational transaction verification queue requiring COA account code mapping before posting to the General Ledger."
      },
      {
        name: "Jurnal Otomatis / Manual & Buku Besar (General Ledger)",
        nameEn: "Automatic / Manual Vouchers & General Ledger",
        desc: "Pencatatan mutasi kas/bank otomatis saat transaksi terjadi dan pembuatan jurnal umum manual untuk penyesuaian periodik.",
        descEn: "Automatic posting of cash/bank mutations upon transaction completion and manual journal entry capabilities for periodic adjustments."
      },
      {
        name: "Laporan Laba Rugi Proyek & Neraca Keuangan",
        nameEn: "Project Profit & Loss Statements & Balance Sheets",
        desc: "Rekapitulasi keuangan komprehensif yang menampilkan posisi keuntungan per proyek perumahan serta neraca keuangan.",
        descEn: "Comprehensive financial reporting displaying profit positions per housing project and overall enterprise balance sheets."
      }
    ]
  }
];

interface FavoriteProjectShowcaseProps {
  project: Project;
  index?: number;
}

export function FavoriteProjectShowcase({ project, index = 0 }: FavoriteProjectShowcaseProps) {
  const { t, lang } = useLanguage();

  const getModuleLabel = (idx: number) => {
    const keys: (keyof typeof t.modules)[] = [
      "dashboard",
      "masterPerumahan",
      "progresLapangan",
      "marketing",
      "piutangKonsumen",
      "logistikGudang",
      "hrmWorkers",
      "accountingCOA",
    ];
    const key = keys[idx % keys.length];
    return t.modules[key] || moduleTabs[idx % moduleTabs.length].label;
  };

  return (
    <div className="mb-8">
      <Dialog>
        <DialogTrigger asChild>
          <motion.div
            id={`project-${project.id}`}
            className="group relative border rounded-xl overflow-hidden bg-card hover:border-amber-500/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Top Favorite Spotlight Ribbon */}
            <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-black px-4 py-1.5 flex items-center justify-between font-bold text-xs">
              <div className="flex items-center gap-2 uppercase tracking-wider font-mono text-[11px]">
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                <span>{t.projects.favoriteBadge}</span>
              </div>
              <span className="text-[10px] font-mono opacity-90 font-semibold">Bumi Wiraraja Group ERP</span>
            </div>

            <div className="grid md:grid-cols-5 gap-0">
              {/* Project Image - 2 cols */}
              <div className="md:col-span-2 relative aspect-[2.03/1] md:aspect-auto bg-slate-950 border-r border-border/60 overflow-hidden min-h-[160px]">
                <Image
                  src={project.image}
                  alt={getProjectTitle(project, lang)}
                  fill
                  className="object-contain opacity-95 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500 p-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-amber-400 font-bold">
                  <Monitor className="w-3 h-3" />
                  <span>8 {t.projects.modulesBadge}</span>
                </div>
              </div>

              {/* Project Info - 3 cols */}
              <div className="md:col-span-3 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors leading-tight">
                      {getProjectTitle(project, lang)}
                    </h3>
                    <Badge className="bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-tighter shrink-0 border-none">
                      {t.projects.favoriteBadge.split(" ")[0]}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {getProjectDescription(project, lang)}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] py-0.5 px-2 font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[10px] text-muted-foreground font-mono self-center">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-amber-500 pt-3 border-t border-border/40">
                  <span className="flex items-center group-hover:translate-x-1 transition-transform">
                    {t.projects.favoriteButton} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">Open</span>
                </div>
              </div>
            </div>
          </motion.div>
        </DialogTrigger>

        {/* Modal Showcase */}
        <FavoriteProjectDialogContent project={project} getModuleLabel={getModuleLabel} />
      </Dialog>
    </div>
  );
}

function FavoriteProjectDialogContent({ project, getModuleLabel }: { project: Project, getModuleLabel: (idx: number) => string }) {
  const { t, lang } = useLanguage();
  const slides = project.slides || [];
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const tabsRef = React.useRef<HTMLDivElement>(null);

  const activeSlide: ProjectSlide | undefined = slides[currentSlideIndex] || slides[0];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollTabs = (direction: "left" | "right") => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <DialogContent className="sm:max-w-4xl max-h-[96vh] md:max-h-[92vh] overflow-y-auto p-0 gap-0 border-amber-500/30 shadow-2xl bg-card flex flex-col">
      {/* Modal Header */}
      <DialogHeader className="p-6 bg-gradient-to-r from-amber-950/40 via-card to-card border-b border-border shrink-0">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold uppercase tracking-wider mb-1.5">
          <Sparkles className="w-4 h-4 fill-amber-500" />
          <span>Enterprise System Showcase</span>
        </div>
        <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight">
          {getProjectTitle(project, lang)}
        </DialogTitle>
        <DialogDescription className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-1">
          {getProjectDescription(project, lang)}
        </DialogDescription>
      </DialogHeader>

      <div className="p-6 md:p-8 space-y-6 flex-1 overflow-y-auto">
        {/* Module Filter Tabs with Arrow Buttons (Left/Right) */}
        {slides.length > 0 && (
          <div className="w-full border-b border-border/60 pb-3 flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => scrollTabs("left")}
              className="p-2 rounded-lg bg-muted/70 hover:bg-primary hover:text-primary-foreground text-muted-foreground border border-border/50 transition-all shrink-0 active:scale-95"
              title="Geser Kiri"
              aria-label="Geser Kiri"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div ref={tabsRef} className="w-full overflow-x-auto no-scrollbar scroll-smooth">
              <div className="flex items-center gap-2 min-w-max">
                {slides.map((_, idx) => {
                  const tabInfo = moduleTabs[idx % moduleTabs.length];
                  const IconComponent = tabInfo.icon;
                  const isActive = idx === currentSlideIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                        isActive
                          ? "bg-primary text-primary-foreground font-bold shadow-md"
                          : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50"
                      }`}
                    >
                      <IconComponent className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      <span>{getModuleLabel(idx)}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollTabs("right")}
              className="p-2 rounded-lg bg-muted/70 hover:bg-primary hover:text-primary-foreground text-muted-foreground border border-border/50 transition-all shrink-0 active:scale-95"
              title="Geser Kanan"
              aria-label="Geser Kanan"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {activeSlide && (
          <div className="space-y-6">
            {/* FOTO SPREAD ATAS: Fits 100% full screenshot without cropping */}
            <div className="relative group rounded-xl border border-border/80 bg-slate-950/90 overflow-hidden shadow-xl aspect-[2.03/1] w-full flex flex-col justify-center">
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={getSlideTitle(activeSlide, lang)}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-amber-500 transition-all shadow-lg"
                  title="Modul Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 hover:bg-amber-500 transition-all shadow-lg"
                  title="Modul Selanjutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-slate-900/90 py-2 flex items-center justify-center gap-1.5 z-10 border-t border-slate-800">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentSlideIndex ? "bg-amber-500 w-6" : "bg-slate-700 hover:bg-slate-500 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* PENJELASAN BAWAH */}
            <div className="grid md:grid-cols-12 gap-6 p-6 rounded-xl bg-muted/20 border border-border/60">
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[11px] font-mono font-bold uppercase tracking-wider">
                    {getModuleLabel(currentSlideIndex)}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">
                    {getSlideSubtitle(activeSlide, lang)}
                  </span>
                </div>

                <h4 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                  {getSlideTitle(activeSlide, lang)}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {getSlideDescription(activeSlide, lang)}
                </p>
              </div>

              <div className="md:col-span-5 space-y-4 md:border-l md:border-border/60 md:pl-6">
                <div className="space-y-2">
                  <h6 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    {t.projects.capabilitiesHeader}
                  </h6>
                  <ul className="space-y-1.5">
                    {getSlideKeyFeatures(activeSlide, lang).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* COMPREHENSIVE ADMIN MODULES & FEATURES DIRECTORY (Text-only detailed feature breakdown) */}
        <div className="pt-8 border-t border-border/60 space-y-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-amber-500" />
              <span>{lang === "en" ? "System-wide Features Directory" : "Katalog Fitur Lengkap System Enterprise"}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
              {lang === "en" 
                ? "All Admin Modules & Operational Capabilities" 
                : "Spesifikasi & Rincian Seluruh Sub-Modul Admin"}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {lang === "en"
                ? "Comprehensive technical directory of operational capabilities built into the Bumi Wiraraja Group housing system."
                : "Panduan teknis dan rincian kapabilitas operasional lengkap di seluruh modul menu admin perumahan PT Bumi Wiraraja Group."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {adminSystemFeatureCatalog.map((cat, cIdx) => {
              const IconComp = cat.icon;
              return (
                <div key={cIdx} className="p-4 rounded-xl bg-muted/30 border border-border/70 hover:border-amber-500/40 transition-colors space-y-3 shadow-xs">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-border/50">
                    <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-500 shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-foreground">
                      {lang === "en" ? cat.categoryEn : cat.category}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {cat.features.map((feat, fIdx) => (
                      <div key={fIdx} className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>{lang === "en" ? feat.nameEn : feat.name}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed pl-3 font-normal">
                          {lang === "en" ? feat.descEn : feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Global Links Footer */}
        <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <Button variant="default" size="sm" asChild className="font-bold shadow-md h-10">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2" />
                  {t.projects.liveInstance}
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="font-bold h-10">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {t.projects.repository}
                </a>
              </Button>
            )}
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            Bumi Wiraraja Group ERP System Spec.v2
          </span>
        </div>
      </div>
    </DialogContent>
  );
}
