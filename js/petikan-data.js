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
    oleh: "Mohd Zulkifli Shafie",
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
    kategori: "tips-kewangan",
    oleh: "Mohd Zulkifli Shafie",
    petikan: "Tak kisah berapa besar pun gaji yang diterima setiap bulan, selagi tak menyimpan dan tak mampu disiplinkan diri menyimpan setiap bulan, selagi itulah tak akan kaya."
  },
  {
    id: "q4",
    kategori: "tips-kewangan",
    oleh: "Mohd Zulkifli Shafie",
    petikan: "Duit yang kita ada hari ni bukan hanya untuk hidup hari ni, tapi untuk masa depan yang belum tentu untung nasib kita. Jadi sebahagian duit gaji yang kita terima setiap bulan kena simpan untuk 3 tujuan asas, iaitu kecemasan, perbelanjaan masa depan, dan pelaburan."
  },
  {
    id: "q5",
    kategori: "tips-kewangan",
    oleh: "Mohd Zulkifli Shafie",
    petikan: "Guru-guru kewangan cadangkan setiap kita mesti simpan Dana Kecemasan paling minimum berjumlah 3 bulan gaji. Kalau hilang pekerjaan atau hilang upaya untuk bekerja, at least kita masih ada tempoh 3 bulan untuk survive sebelum dapat kerja baru."
  },
  {
    id: "q6",
    kategori: "tips-emas",
    oleh: "Mohd Zulkifli Shafie",
    petikan: "Harga emas confirm naik dalam jangka panjang. Ini disebabkan kuasa beli duit semakin menurun. Harga turun naik dalam jangka pendek itu perkara biasa biasa. Penyimpan emas yang berilmu, dia akan beli emas menggunkan duit simpanan jangka panjang, sekurang-kurangnya untuk jangka waktu 2 - 3 tahun."
  },
  {
    id: "q7",
    kategori: "tips-kewangan",
    oleh: "Mohd Zulkifli Shafie",
    petikan: "Masalah hutang tak akan selesai dengan bayar hutang saja. Bila habis satu hutang, dia akan buat hutang baru, lagi dan lagi sampai habis limit. Nak selesaikan masalah, kena tukar mindset; daripada hidup dengan hutang, kepada hidup dengan tabungan. Menabung dulu.",
    link: "https://www.facebook.com/share/p/1BigiyJ8kk/"
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
