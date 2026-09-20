// =====================================================================
// MAKLUMAN TIDAK TETAP - Gold Saver / Ilmu Emas
// =====================================================================
// Fail ini dikemaskini dari semasa ke semasa untuk program/talkshow
// yang TIDAK berulang setiap minggu (berbeza dengan Public Gold QnA &
// Talk Show mingguan yang sudah dikira automatik dalam makluman-terkini.html).
//
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
    // {
    //     title: "Seminar Simpanan Emas 2026",
    //     caption: "Seminar percuma bersama penceramah jemputan berkaitan strategi simpanan emas untuk persaraan.",
    //     date: "2026-09-25T20:00:00",
    //     link: "https://contoh.com/seminar-emas"
    // },

    // Contoh 2 - promosi / program had masa
    // {
    //     title: "Promosi Emas Raya",
    //     caption: "Tawaran istimewa pembelian emas sempena musim perayaan. Tempoh terhad.",
    //     date: "2026-10-01T10:00:00",
    //     link: "https://contoh.com/promosi-raya"
    // },
];
