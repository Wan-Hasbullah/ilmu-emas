/* =========================================================
   VIDEO-DATA.JS — Akademi Multimedia (Ilmu Emas)
   Struktur data video MP4 (bukan lagi embed YouTube/TikTok)
   =========================================================

   Setiap objek video WAJIB ada:
   - id         : ID unik (guna dalam URL hash #id & untuk "Kongsi")
   - category   : kategori/topik (guna huruf kecil, pisah dengan "-")
   - title      : tajuk video yang dipaparkan
   - videoSrc   : URL terus ke fail .mp4 (WAJIB)
   - poster     : (pilihan) URL gambar thumbnail sebelum video dimainkan

   Nota:
   - Kategori "kisah-kejayaan" akan disembunyikan secara automatik
     (logik ini dikekalkan sepenuhnya dalam video.html).
   - Video menegak (portrait) & mendatar (landscape) kini dipaparkan
     secara automatik mengikut nisbah asal fail MP4 — tiada lagi
     penapis "Format Paparan".
========================================================= */

const VIDEO_DATA = [
  {
    id: "video-001",
    category: "motivasi",
    title: "3 Mindset Wajib Sebelum Mula Berniaga",
    videoSrc: "https://cdn.contohdomain.com/videos/motivasi-mindset-01.mp4",
    poster: "https://cdn.contohdomain.com/thumbnails/motivasi-mindset-01.jpg"
  },
  {
    id: "video-002",
    category: "kewangan",
    title: "Cara Urus Duit Bulanan Tanpa Stress",
    videoSrc: "https://cdn.contohdomain.com/videos/kewangan-urus-duit-02.mp4",
    poster: "https://cdn.contohdomain.com/thumbnails/kewangan-urus-duit-02.jpg"
  },
  {
    id: "video-003",
    category: "pemasaran",
    title: "Teknik Copywriting Untuk Jual Cepat Di WhatsApp",
    videoSrc: "https://cdn.contohdomain.com/videos/pemasaran-copywriting-03.mp4",
    poster: "https://cdn.contohdomain.com/thumbnails/pemasaran-copywriting-03.jpg"
  },
  {
    id: "video-004",
    category: "motivasi",
    title: "Kenapa Konsisten Lebih Penting Dari Bakat",
    videoSrc: "https://cdn.contohdomain.com/videos/motivasi-konsisten-04.mp4",
    poster: "https://cdn.contohdomain.com/thumbnails/motivasi-konsisten-04.jpg"
  },
  {
    id: "video-005",
    category: "kewangan",
    title: "Beza Aset & Liabiliti — Ringkas & Mudah Faham",
    videoSrc: "https://cdn.contohdomain.com/videos/kewangan-aset-liabiliti-05.mp4",
    poster: "https://cdn.contohdomain.com/thumbnails/kewangan-aset-liabiliti-05.jpg"
  },
  {
    id: "video-006",
    category: "kisah-kejayaan",
    title: "Kisah Kejayaan Ahli Kelab (Disembunyikan Dari Senarai)",
    videoSrc: "https://cdn.contohdomain.com/videos/kisah-kejayaan-06.mp4",
    poster: "https://cdn.contohdomain.com/thumbnails/kisah-kejayaan-06.jpg"
  }
];
