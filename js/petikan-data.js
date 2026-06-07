/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         ILMU EMAS — DATA PETIKAN                         ║
 * ║  Edit fail ini untuk kemaskini atau tambah petikan baru  ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * CARA TAMBAH PETIKAN BARU:
 * ─────────────────────────
 * Salin satu blok { ... } di bawah dan tampal di dalam array PETIKAN.
 * Pastikan id adalah unik (contoh: "q7", "q8", dll.)
 *
 * KATEGORI YANG TERSEDIA:
 * "tips-emas"      → warna Amber/Emas
 * "tips-kewangan"  → warna Biru/Sky
 *
 * CONTOH STRUKTUR:
 * ─────────────────
 * {
 * id: "q7",
 * kategori: "tips-emas",
 * oleh: "Nama Penulis",
 * petikan: "Teks petikan anda di sini."
 * }
 */

const PETIKAN = [
  {
    id: "q1",
    kategori: "tips-kewangan",
    by: "Mohd Zulkifli Shafie",
    petikan: "Tiada SHORCUT melunasi hutang. Belajarlah apa-apa strategi sekali pun, akhir sekali hutang tetap perlu dibayar dengan duit kita juga. Tak ada teknik magik untuk langsai hutang."
  },
  {
    id: "q2",
    kategori: "mindset",
    oleh: "Mohd Zulkifli Shafie",
    petikan: "Nak tingkatkan kejayaan sebenarnya kena tingkatkan self-image, bukan duit dalam poket. Duit dalam poket akan automatik meningkat bila self-image meningkat."
  },
  {
    id: "q3",
    kategori: "tips-emas",
    oleh: "Mohd Zulkifli Shafie",
    petikan: "Nak tingkatkan kejayaan sebenarnya kena tingkatkan self-image, bukan duit dalam poket. Duit dalam poket akan automatik meningkat bila self-image meningkat."
  },
  {
    id: "q4",
    kategori: "tips-kewangan",
    oleh: "Warren Buffett",
    petikan: "Jangan bergantung pada satu sumber pendapatan sahaja. Lakukan pelaburan untuk mencipta sumber pendapatan yang kedua. Diversifikasi adalah perisai kewangan terbaik."
  },
  {
    id: "q5",
    kategori: "tips-emas",
    oleh: "Wan Hasbullah",
    petikan: "Simpan sedikit emas setiap bulan, bukan kerana anda kaya — tetapi kerana anda mahu menjadi kaya. Disiplin kecil hari ini membina kekayaan besar esok hari."
  },
  {
    id: "q6",
    kategori: "tips-kewangan",
    oleh: "T. Harv Eker",
    petikan: "Cara anda lakukan sesuatu perkara adalah cara anda lakukan segalanya. Sikap anda terhadap wang kecil mencerminkan sikap anda terhadap wang besar."
  }
];

/**
 * KONFIGURASI KATEGORI
 * ─────────────────────
 * Untuk tambah kategori baru:
 * 1. Tambah entry baru dalam KATEGORI_CONFIG
 * 2. Gunakan key yang sama dalam field "kategori" pada PETIKAN
 */
const KATEGORI_CONFIG = {
  "tips-emas": {
    label:       "Tips Emas",
    icon:        "fa-coins",
    accent:      "#fbbf24",
    accentBg:    "rgba(251,191,36,0.12)",
    accentBgImg: "rgba(251,191,36,0.07)",
    border:      "rgba(251,191,36,0.25)",
    borderImg:   "rgba(251,191,36,0.44)",
    topBar:      "linear-gradient(to right, #fbbf24, #f59e0b)",
    quoteChar:   "#fbbf2499"
  },
  "tips-kewangan": {
    label:       "Tips Kewangan",
    icon:        "fa-chart-line",
    accent:      "#38bdf8",
    accentBg:    "rgba(56,189,248,0.10)",
    accentBgImg: "rgba(56,189,248,0.06)",
    border:      "rgba(56,189,248,0.25)",
    borderImg:   "rgba(56,189,248,0.44)",
    topBar:      "linear-gradient(to right, #38bdf8, #0ea5e9)",
    quoteChar:   "#38bdf899"
  }
};
