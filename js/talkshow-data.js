// talkshow-data.js

/**
 * NOTA UNTUK PENGEMASKINIAN:
 * 1. Untuk MENGUBAH: Sila tukar nilai di dalam tanda petikan ("...") pada id yang berkenaan.
 * 2. Untuk MENAMBAH: Salin (copy) keseluruhan blok template di bahagian bawah, 
 * letakkan tanda koma (,) selepas penutup blok sebelumnya, dan tampal (paste) di dalam array.
 * 3. Format Tarikh (dateMula & dateTamat) mestilah menggunakan format ISO: YYYY-MM-DDTHH:MM:SS
 */

const talkshowData = [
  {
    id: "g100-talk-show-1",
    title: "BELI TANAH CASH DENGAN EMAS",
    category: "G100 Talk Show",
    image: "poster-program/beli-tanah-cash-dengan-emas.jpg",
    caption: "Siapa nak belajar tingkatkan jumlah TABUNGAN, selesaikan masalah HUTANG, dan bina HARTA hasil simpanan emas, jemput join live G100 Talkshow malam ni.",
    
    // ── KONFIGURASI MASA PROGRAM ──────────────────────────────────────────────
    // Tarikh & Masa Mula Program — Butang "Lanjut" aktif sebelum masa ini
    dateMula: "2026-06-10T21:00:00",
    
    // Tarikh & Masa Tamat Program — Butang "Sedang Berlangsung" aktif antara dateMula dan dateTamat
    dateTamat: "2026-06-10T23:00:00",
    // Selepas dateTamat → Butang "Siaran Ulang" akan aktif secara automatik
    
    // ── PAUTAN BUTANG ─────────────────────────────────────────────────────────
    linkLanjut: "https://g100.my/talkshow/",
    linkLive: "https://g100.my/talkshow/",
    linkUlang: "https://www.youtube.com/live/51huWZVy4V0?si=PtUselRluYJIjrkX"
  }
  
  // ── CARA MENAMBAH ENTRI BARU (TEMPLATE) ───────────────────────────────────
  /* ,
  {
    id: "g100-talk-show-2", // Pastikan ID ini unik (contoh: show-2, show-3)
    title: "TAJUK TALKSHOW BARU ANDA",
    category: "Beli Rumah Dengan Emas",
    image: "poster-program/nama-poster-baru.jpg",
    caption: "Keterangan atau sinopsis ringkas mengenai program baru ini.",
    
    // Format masa: TAHUN-BULAN-HARI-T-JAM:MINIT:SAAT
    dateMula: "2026-07-01T21:00:00", 
    dateTamat: "2026-07-01T23:00:00",
    
    linkLanjut: "https://g100.my/talkshow/",
    linkLive: "https://g100.my/talkshow/",
    linkUlang: "https://www.youtube.com/live/URL_VIDEO_BARU"
  }
  */
];

// Eksport data jika digunakan dalam modul persekitaran (pilihan/bergantung kepada setup fail HTML anda)
// export default talkshowData;
