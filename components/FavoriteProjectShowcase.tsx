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
  ZoomIn,
  Maximize2,
  X,
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
    category: "DASHBOARD (Pusat Control System)",
    categoryEn: "DASHBOARD (System Control Hub)",
    icon: LayoutDashboard,
    features: [
      {
        name: "Dashboard Overview Sistem",
        nameEn: "System Overview Dashboard",
        desc: "Ringkasan data operasional real-time seluruh proyek perumahan, statistik unit, dan KPI utama.",
        descEn: "Real-time operational summary across housing projects, unit statistics, and key performance indicators."
      }
    ]
  },
  {
    category: "HRM (Manajemen Karyawan & Tenaga Kerja)",
    categoryEn: "HRM (Employee & Workforce Management)",
    icon: Users,
    features: [
      {
        name: "Dashboard HRM",
        nameEn: "HRM Dashboard Overview",
        desc: "Ringkasan data karyawan, kehadiran, serta aktivitas HR harian.",
        descEn: "Overview of employee data, daily attendance, and HR activities."
      },
      {
        name: "Master Data Jabatan, Posisi & Departemen",
        nameEn: "Positions, Levels & Department Master Data",
        desc: "Manajemen data jabatan, level hirarki, serta struktur divisi departemen perusahaan.",
        descEn: "Management of job titles, hierarchy levels, and corporate department divisions."
      },
      {
        name: "Master Data Karyawan",
        nameEn: "Employee Master Data",
        desc: "Manajemen data personal, penggajian, kontak, dan informasi detail karyawan.",
        descEn: "Management of personal details, payroll info, contact data, and employee records."
      },
      {
        name: "Master Shift & Presensi Kehadiran",
        nameEn: "Shift Master & Attendance Log",
        desc: "Pengaturan jadwal shift kerja, rekapitulasi absensi harian, serta sistem kehadiran karyawan.",
        descEn: "Work shift scheduling, daily attendance logs, and employee presence tracking."
      },
      {
        name: "Data Tenaga Kerja & Subkontraktor",
        nameEn: "Project Field Workers & Subcontractor Data",
        desc: "Pengelolaan tukang/mandor, jadwal kerja, pembagian tugas harian, dan data kontrak.",
        descEn: "Management of site workers, foremen, work shifts, task distribution, and contract agreements."
      },
      {
        name: "Pengelolaan Security & Penempatan Proyek",
        nameEn: "Security Dispatch, Patrol Location & Placement",
        desc: "Lokasi pos security, plotting jadwal patroli, tukar shift, dan penugasan karyawan ke lokasi proyek.",
        descEn: "Security posts management, patrol scheduling, shift swaps, and project site placement."
      },
      {
        name: "Cuti, Izin & Evaluasi Kinerja (KPI)",
        nameEn: "Leave Requests, Permits & Performance Evaluation (KPI)",
        desc: "Kuota cuti, pengajuan izin, serta penilaian KPI bulanan berdasarkan template jabatan.",
        descEn: "Leave quotas, permit approvals, and monthly KPI evaluations based on position templates."
      }
    ]
  },
  {
    category: "MARKETING (Penjualan & Promosi)",
    categoryEn: "MARKETING (Sales & Promotions)",
    icon: Target,
    features: [
      {
        name: "Dashboard & Kinerja Monitoring Marketing",
        nameEn: "Marketing Dashboard & Staff Performance Monitoring",
        desc: "Ringkasan performa tim marketing berdasarkan kunjungan, lead, booking, dan penjualan harian.",
        descEn: "Marketing performance overview tracking site visits, leads, bookings, and daily sales."
      },
      {
        name: "Data Lead / Calon Pembeli & Customer",
        nameEn: "Lead Database / Prospective Buyers & Customer CRM",
        desc: "Manajemen database calon pembeli, tracking funnel prospek, dan informasi kontak konsumen.",
        descEn: "Management of prospective buyer leads, sales funnel tracking, and customer contact data."
      },
      {
        name: "Booking & Pemesanan Unit",
        nameEn: "Unit Booking & Reservation Pipeline",
        desc: "Proses booking unit perumahan, pemilihan kavling, dan pencatatan pembayaran booking fee.",
        descEn: "Housing unit reservation workflow, lot selection, and booking fee payment logging."
      },
      {
        name: "Target & Komisi Marketing",
        nameEn: "Sales Targets & Commission Calculator",
        desc: "Pengelolaan target penjualan bulanan dan kalkulasi otomatis komisi agent marketing.",
        descEn: "Monthly sales target allocation and automated agent marketing commission engine."
      },
      {
        name: "Simulasi KPR Bank & Promo Harga",
        nameEn: "Bank Mortgage Simulator & Promotional Pricing",
        desc: "Kalkulator simulasi KPR berdasarkan harga unit & bank, serta informasi promo berjalan.",
        descEn: "Bank mortgage calculator based on unit price & selected bank, plus active promo catalog."
      },
      {
        name: "Jadwal Kegiatan, Tools & Laporan Marketing",
        nameEn: "Schedules, Promotional Tools & Marketing Reports",
        desc: "Manajemen jadwal pameran, followup, brosur digital, serta rekapitulasi laporan pemasaran.",
        descEn: "Event schedules, customer followups, digital promotional tools, and sales summary reports."
      }
    ]
  },
  {
    category: "MANAJEMEN PROYEK (Konstruksi & Site)",
    categoryEn: "PROJECT MANAGEMENT (Construction & Site)",
    icon: Building2,
    features: [
      {
        name: "Dashboard Proyek & Master Data Proyek/Developer",
        nameEn: "Project Dashboard & Master Project/Developer Data",
        desc: "Ringkasan progres per lokasi, data proyek perumahan, developer pengembang, dan vendor.",
        descEn: "Location-based progress overview, project master data, developers, and vendor records."
      },
      {
        name: "Manajemen Unit Rumah & Fasilitas Proyek (Fasum/Fasos)",
        nameEn: "Housing Unit Management & Public Facilities (Fasum/Fasos)",
        desc: "Kelola tipe unit, blok & kavling, serta fasilitas umum, jalan perumahan, dan infrastruktur.",
        descEn: "Managing unit types, block/lot blueprints, public amenities (Fasum/Fasos), and infrastructure."
      },
      {
        name: "Rencana Anggaran Biaya (RAB) & Material Pekerjaan",
        nameEn: "Bill of Quantities (RAB) & Construction Materials",
        desc: "Penyusunan RAB proyek, monitoring realisasi budget, serta kebutuhan stok material.",
        descEn: "RAB budget formulation, real-time budget realization monitoring, and construction material requirements."
      },
      {
        name: "Jadwal Proyek (Gantt Chart & Timeline)",
        nameEn: "Project Schedule (Gantt Chart & Timeline Tracking)",
        desc: "Target & realisasi tahapan pembangunan, deadline, serta reminder keterlambatan deviasi.",
        descEn: "Construction milestone targets vs actual progress, deadline tracking, and deviation alerts."
      },
      {
        name: "Progress Harian / Mingguan & Dokumen Teknis",
        nameEn: "Daily/Weekly Progress Reports & Technical Drawings",
        desc: "Laporan progres harian, cuaca, jumlah pekerja, foto lapangan, siteplan, dan gambar kerja.",
        descEn: "Daily site progress logs, weather conditions, worker counts, field photos, and technical blueprints."
      },
      {
        name: "Monitoring Patroli Security & Laporan Proyek",
        nameEn: "Security Patrol Monitoring & Final Project Reports",
        desc: "Pantau aktivitas patroli pos perumahan serta laporan evaluasi akhir proyek.",
        descEn: "Monitoring site security patrols and final project evaluation reporting."
      }
    ]
  },
  {
    category: "LOGISTIK & PURCHASING (Gudang & Pengadaan)",
    categoryEn: "LOGISTICS & PURCHASING (Warehouse & Procurement)",
    icon: Boxes,
    features: [
      {
        name: "Dashboard & Master Data Logistik Gudang",
        nameEn: "Logistics Dashboard & Warehouse Master Data",
        desc: "Ringkasan stok material utama, material masuk/keluar, dan data gudang induk/proyek.",
        descEn: "Overview of key material stock levels, incoming/outgoing items, and central/site warehouse data."
      },
      {
        name: "Penerimaan & Pengeluaran Material Gudang",
        nameEn: "Material Goods Receiving & Project Issuance",
        desc: "Input barang masuk PO, surat jalan, penempatan stok, serta approval pengeluaran ke proyek.",
        descEn: "Inputting PO receiving goods, delivery notes, stock placement, and project issuance approvals."
      },
      {
        name: "Stock Opname & Distribusi Material",
        nameEn: "Stock Opname Audit & Site Material Distribution",
        desc: "Pemeriksaan fisik stok berkala, audit selisih, dan pengiriman barang antar gudang proyek.",
        descEn: "Periodic physical stock counts, variance auditing, and inter-site material transfers."
      },
      {
        name: "Permintaan Pembelian (PR) & Purchase Order (PO)",
        nameEn: "Purchase Requests (PR) & Purchase Orders (PO)",
        desc: "Pengajuan pembelian bahan bangunan dari proyek/gudang dan penerbitan dokumen PO.",
        descEn: "Material purchase requisitions from site/warehouse and official PO document generation."
      },
      {
        name: "Penerimaan Barang PO, Tagihan Invoice & Evaluasi Supplier",
        nameEn: "Goods Receipt PO, Vendor Invoices & Supplier Evaluation",
        desc: "Konfirmasi penerimaan barang, kontrol kualitas, tagihan supplier, dan penilaian performa vendor.",
        descEn: "Goods receipt confirmation, quality checks, supplier invoice tracking, and vendor performance scoring."
      }
    ]
  },
  {
    category: "KEUANGAN OPERASIONAL (Finance Operations)",
    categoryEn: "OPERATIONAL FINANCE (Cash & Banking)",
    icon: Wallet,
    features: [
      {
        name: "Dashboard Keuangan & Arus Kas",
        nameEn: "Financial Dashboard & Cash Flow Summary",
        desc: "Ringkasan kas masuk/keluar, saldo bank real-time, progress anggaran, dan notifikasi tagihan.",
        descEn: "Real-time summary of cash inflows/outflows, bank balances, budget progress, and due alerts."
      },
      {
        name: "Kas Masuk (Penerimaan Konsumen & KPR)",
        nameEn: "Cash Receipts (Customer Payments & Bank KPR)",
        desc: "Pencatatan pembayaran konsumen, pencairan KPR bank, dan bukti transfer resmi.",
        descEn: "Customer payment logging, bank KPR disbursement tracking, and official transfer receipts."
      },
      {
        name: "Kas Keluar (Pengeluaran Operasional & Supplier)",
        nameEn: "Cash Disbursements (Operational Expenses & Supplier Payouts)",
        desc: "Pembayaran supplier, gaji tukang/pekerja, operasional kantor, dan biaya perizinan legal.",
        descEn: "Supplier payments, site worker wages, office operational expenses, and legal permit fees."
      },
      {
        name: "Gaji Karyawan, Insentif & Pos Keuangan",
        nameEn: "Employee Payroll, Staff Incentives & Position Accounts",
        desc: "Manajemen gaji, bonus kinerja, insentif UTJ, serta kelola kas/bank/rekening resmi perusahaan.",
        descEn: "Payroll management, staff performance bonuses, UTJ incentives, and official bank account ledgers."
      },
      {
        name: "Overbooking Pos Keuangan Internal",
        nameEn: "Internal Account Overbooking Transfers",
        desc: "Pencatatan dan monitoring mutasi perpindahan dana antar pos keuangan internal.",
        descEn: "Tracking and auditing fund transfers between internal corporate financial positions."
      }
    ]
  },
  {
    category: "AKUNTANSI & AUDIT (Accounting & Ledger)",
    categoryEn: "ACCOUNTING & AUDIT (GL & Reporting)",
    icon: FileText,
    features: [
      {
        name: "Antrean Plotting Kode Akun COA",
        nameEn: "COA Account Plotting Verification Queue",
        desc: "Plotting kode akun COA untuk transaksi kas masuk & keluar yang telah disetujui operasional.",
        descEn: "COA account code plotting queue for approved operational cash receipts and disbursements."
      },
      {
        name: "Master Chart of Accounts (COA)",
        nameEn: "Master Chart of Accounts (COA) Structure",
        desc: "Kelola master kode akun akuntansi, kelompok akun (Aktiva, Pasiva, Pendapatan, Beban).",
        descEn: "Managing corporate chart of accounts, account categories (Assets, Liabilities, Income, Expenses)."
      },
      {
        name: "Hutang Supplier (Payables) & Piutang Konsumen (Receivables)",
        nameEn: "Accounts Payable (Vendors) & Accounts Receivable (Customers)",
        desc: "Manajemen invoice supplier, jatuh tempo, sisa piutang konsumen, dan jadwal angsuran.",
        descEn: "Managing vendor invoices, due dates, customer receivable balances, and installment schedules."
      },
      {
        name: "Jurnal Otomatis/Manual, Buku Besar & Rekonsiliasi Audit",
        nameEn: "General Journal, Ledger Accounts & Bank Reconciliation Audit",
        desc: "Mutasi kas/bank otomatis, buku besar per COA, dan audit pemeriksaan selisih saldo.",
        descEn: "Automated cash/bank mutations, per-COA general ledger, and audit reconciliation."
      },
      {
        name: "Laporan Keuangan Laba Rugi & Neraca",
        nameEn: "Financial Statements (P&L & Balance Sheet)",
        desc: "Laporan arus kas, laba rugi proyek perumahan, neraca keuangan, dan ringkasan eksekutif.",
        descEn: "Cash flow reports, housing project profit & loss statements, balance sheets, and executive summary."
      }
    ]
  },
  {
    category: "PUSAT LAPORAN EXECUTIVE (Reports Center)",
    categoryEn: "EXECUTIVE REPORTS CENTER (Analytics & Export)",
    icon: FileText,
    features: [
      {
        name: "Laporan Konsolidasi Keuangan, Marketing & Proyek",
        nameEn: "Consolidated Financial, Marketing & Project Reports",
        desc: "Laporan rekapitulasi penjualan unit, booking, progres fisik proyek, dan performa keuangan.",
        descEn: "Consolidated reporting on unit sales, bookings, site physical progress, and financial metrics."
      },
      {
        name: "Laporan Material, Purchasing & SDM",
        nameEn: "Material Inventory, Procurement & HR Analytics",
        desc: "Laporan stok gudang, pengadaan PO supplier, serta kepegawaian dan kehadiran karyawan.",
        descEn: "Warehouse stock reports, supplier PO procurement logs, employee presence, and HR analytics."
      },
      {
        name: "Custom Ekspor & Rekap Proyek",
        nameEn: "Custom Data Export & Project Recap Analytics",
        desc: "Ekspor laporan kustom dengan filter fleksibel (PDF/Excel) serta analisis budget vs realisasi.",
        descEn: "Customized report exports with flexible filters (PDF/Excel) and budget vs actual variance analysis."
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
  const [lightboxState, setLightboxState] = React.useState<{ isOpen: boolean; src: string; alt: string }>({
    isOpen: false,
    src: "",
    alt: "",
  });
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
    <>
      <DialogContent className="sm:max-w-4xl max-h-[94vh] overflow-y-auto p-4 sm:p-6 md:p-8 gap-6 border-amber-500/30 shadow-2xl bg-card block space-y-6">
        {/* Modal Header - Unpinned, scrolls naturally with page */}
        <DialogHeader className="bg-gradient-to-r from-amber-950/30 via-card to-card p-4 sm:p-6 rounded-xl border border-border/80">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-500 font-bold uppercase tracking-wider mb-1.5">
            <Sparkles className="w-4 h-4 fill-amber-500" />
            <span>Enterprise System Showcase</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            {getProjectTitle(project, lang)}
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-1.5">
            {getProjectDescription(project, lang)}
          </DialogDescription>
        </DialogHeader>

        {/* Module Filter Tabs with Arrow Buttons (Left/Right) */}
          {slides.length > 0 && (
            <div className="w-full border-b border-border/60 pb-3 flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollTabs("left")}
                className="p-1.5 sm:p-2 rounded-lg bg-muted/70 hover:bg-primary hover:text-primary-foreground text-muted-foreground border border-border/50 transition-all shrink-0 active:scale-95"
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
                        className={`flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
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
                className="p-1.5 sm:p-2 rounded-lg bg-muted/70 hover:bg-primary hover:text-primary-foreground text-muted-foreground border border-border/50 transition-all shrink-0 active:scale-95"
                title="Geser Kanan"
                aria-label="Geser Kanan"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {activeSlide && (
            <div className="space-y-6">
              {/* FOTO SPREAD ATAS: Fits 100% full screenshot without cropping & Clickable Lightbox */}
              <div className="relative group rounded-xl border border-border/80 bg-slate-950/90 overflow-hidden shadow-xl aspect-[2.03/1] w-full flex flex-col justify-center">
                <div 
                  className="relative w-full h-full cursor-zoom-in group/img"
                  onClick={() => setLightboxState({ isOpen: true, src: activeSlide.image, alt: `${getModuleLabel(currentSlideIndex)} — ${getSlideTitle(activeSlide, lang)}` })}
                >
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

                  {/* Click to Zoom Overlay Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-mono flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 transition-opacity shadow-lg">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    <span className="hidden sm:inline">Klik untuk Perbesar</span>
                    <span className="sm:hidden">Zoom</span>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-amber-500 transition-all shadow-lg z-10"
                    title="Modul Sebelumnya"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-amber-500 transition-all shadow-lg z-10"
                    title="Modul Selanjutnya"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
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

      <ImageLightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        src={lightboxState.src}
        alt={lightboxState.alt}
      />
    </DialogContent>
  </>
);
}

export function ImageLightboxModal({
  isOpen,
  onClose,
  src,
  alt,
}: {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-2 sm:p-6 animate-in fade-in-0 duration-200"
      onClick={onClose}
    >
      {/* Lightbox Header Bar (Non-overlapping, high z-index) */}
      <div 
        className="flex items-center justify-between gap-3 z-[210] p-2.5 sm:p-4 bg-slate-900/90 rounded-xl border border-white/15 text-white shadow-2xl shrink-0 mt-1 mx-1 sm:mx-0" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 max-w-[calc(100%-3.5rem)] overflow-hidden">
          <Maximize2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold truncate font-mono text-slate-100">{alt}</span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white transition-all shrink-0 active:scale-95 border border-white/20 shadow-md flex items-center justify-center"
          title="Tutup Preview (Esc)"
          aria-label="Tutup Preview"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Lightbox Image Container */}
      <div 
        className="relative flex-1 w-full my-2 sm:my-4 flex items-center justify-center overflow-hidden cursor-pointer select-none" 
        onClick={onClose}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-1 sm:p-2"
          priority
        />
      </div>

      {/* Lightbox Footer */}
      <div className="text-center z-[210] text-[10px] sm:text-xs font-mono text-slate-400 py-1.5 shrink-0 bg-slate-950/80 rounded-lg mx-1 sm:mx-0 border border-white/5">
        <span>Ketuk layar atau tombol X untuk menutup preview</span>
      </div>
    </div>
  );
}
