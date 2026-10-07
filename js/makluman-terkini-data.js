// =====================================================================
// MAKLUMAN TERKINI - Gold Saver / Ilmu Emas
// =====================================================================
// Fail ini menyimpan KEDUA-DUA jenis makluman yang dipaparkan di
// makluman-terkini.html:
//
//   1) maklumanTetapData     -> program TETAP yang berulang setiap minggu
//   2) maklumanTerkiniData   -> program TIDAK TETAP (sekali sahaja / promosi)
//
// Sistem countdown, status "LIVE SEKARANG" dan penyusunan kronologi akan
// dikira secara automatik oleh makluman-terkini.html berdasarkan data di
// bawah — tidak perlu ubah apa-apa dalam fail HTML.
// =====================================================================


// =====================================================================
// 1) MAKLUMAN TETAP (BERULANG SETIAP MINGGU)
// =====================================================================
// Struktur setiap item:
//   title       : Tajuk program (String)
//   caption     : Butiran / penerangan ringkas program (String)
//   link        : Pautan "Lihat" / siaran program (String)
//   dayOfWeek   : Hari berulang, ikut standard JavaScript
//                 (Ahad=0, Isnin=1, Selasa=2, Rabu=3, Khamis=4, Jumaat=5, Sabtu=6)
//   startHour   : Jam mula (24 jam, contoh 12 tengah hari = 12, 9 malam = 21)
//   startMinute : Minit mula
//   endHour     : Jam tamat (24 jam)
//   endMinute   : Minit tamat
//
// Nota: Sistem akan sentiasa kira sesi minggu semasa (jika belum tamat)
// atau melompat automatik ke minggu berikutnya (jika sesi minggu ini
// sudah tamat). Tiada tarikh tetap perlu diselenggara secara manual.
// =====================================================================

const maklumanTetapData = [
    {
        title: "Public Gold QnA",
        caption: "Sesi soal jawab mingguan bersama pasukan Public Gold. Bertanya apa sahaja berkaitan simpanan emas, pelaburan dan produk Public Gold.",
        link: "https://g100.my/public-gold-q-n-a/",
        dayOfWeek: 3, // Rabu
        startHour: 12,
        startMinute: 30,
        endHour: 13,
        endMinute: 30
    },
    {
        title: "Talk Show",
        caption: "Talk Show mingguan santai berkaitan ilmu kewangan, simpanan emas dan perkongsian bersama tetamu jemputan.",
        link: "https://g100.my/talkshow/",
        dayOfWeek: 3, // Rabu
        startHour: 21,
        startMinute: 0,
        endHour: 22,
        endMinute: 0
    },
    {
        id: "workshop-kaya-dengan-emas",
        title: "Workshop Kaya Dengan Emas",
        caption: "NOTA: Ini workshop TERTUTUP. Eksklusif untuk penyimpan emas berdaftar (sudah ada PG Code di bawah dealer aktif #PGG100Network & #5GAssociates), yang nak belajar lebih mendalam.",
        link: "https://pg2u.my/app/workshop/reg/wanhasbullah",
        dayOfWeek: 3, // Rabu
        startHour: 20,
        startMinute: 0,
        endHour: 22,
        endMinute: 0
    },
];


// =====================================================================
// 2) MAKLUMAN TIDAK TETAP (SEKALI SAHAJA / TIDAK BERULANG)
// =====================================================================
// Struktur setiap item:
//   title   : Tajuk program (String)
//   caption : Butiran / penerangan ringkas program (String)
//   date    : Tarikh & masa MULA program, format "YYYY-MM-DDTHH:MM:SS"
//             (guna masa tempatan Malaysia, contoh: 8:00 malam = T20:00:00)
//   link    : Pautan "Lihat" / pendaftaran / siaran program (String)
//
// Nota:
// - Program yang tarikhnya sudah lepas (lebih 3 jam dari waktu mula)
//   akan dibuang secara AUTOMATIK oleh sistem — tidak perlu padam manual.
// - Boleh tambah seberapa banyak item yang perlu, ikut format contoh di bawah.
// - Pastikan tiada koma (,) tertinggal selepas item TERAKHIR dalam array.
// =====================================================================

const maklumanTerkiniData = [
    // Contoh 1 - program akan datang
    {
        title: "Private Webinar : Membina Rm1 Juta Pertama",
        caption: "Siapa nak belajar tingkatkan jumlah TABUNGAN, selesaikan masalah HUTANG dan bina HARTA sampai RM 1 Juta Pertama, jemput join ke Private Webinar Membina Satu Juta Pertama.",
        date: "2026-10-09T20:30:00",
        link: "https://pg2u.my/app/pw/wanhasbullah"
    },

    {
        title: "[KUALA SELANGOR] Seminar Kaya Dengan Emas",
        caption: "Penyertaan percuma. Terhad 100 pendaftaran pertama. Cabutan bertuah dan promosi (firesales) emas juga disediakan. Sila datang awal untuk dapatkan seat selesa. Seminar akan bermula tepat 2:30 petang.",
        date: "2026-10-10T14:30:00",
        link: "https://pg2u.my/app/event/reg/1113/wanhasbullah"
    },

    {
        title: "[SUNWAY] Seminar Kaya Dengan Emas",
        caption: "Penyertaan percuma. Terhad 100 pendaftaran pertama. Cabutan bertuah dan promosi (firesales) emas juga disediakan. Sila datang awal untuk dapatkan seat selesa. Seminar akan bermula tepat 8:30 malam.",
        date: "2026-10-13T20:30:00",
        link: "https://pg2u.my/app/event/reg/1112/wanhasbullah"
    },

    
];
