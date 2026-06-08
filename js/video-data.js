// Data Video - Menyimpan data iframe YouTube dan TikTok untuk Akademi Multimedia
const VIDEO_DATA = [
  {
    id: "penting-ke-ilmu-emas",
    title: "Penting Ke Ilmu Emas Dalam Kedudukan Ekonomi Sekarang?",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/VUTRLtedEzo?si=zqKl9sfgvWIYLUS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
  id: "bergerak-ke-arah-kekayaan?",
  title: "Macam mana nak tahu kita sedang bergerak ke arah kekayaan?",
  category: "ilmu-kewangan",
  type: "tiktok",
  // Menggunakan URL embed terus ke dalam iframe (lebih stabil & responsive)
  embedCode: `<iframe class="w-full aspect-[9/16] rounded-xl" src="https://www.tiktok.com/player/v1/7648484980837846292?rel=0&native=1" title="TikTok video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen style="max-width: 400px; margin: 0 auto;"></iframe>`
  },
  {
    id: "ciri-emas-paling-untung",
    title: "Ciri-Ciri Emas Paling Untung Untuk Pelaburan",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/5qet3zn1e9k?si=76xv2ubI0nAlbHsO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "cara-guna-emas-part1",
    title: "Cara Sebenar Menggunakan Emas (Bahagian 1)",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/L2UPrbYU1yE?si=FAFbN0XtDW4aVvzV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "aliran-tunai-positif",
    title: "Membina Aliran Tunai Positif Melalui Logik Kewangan",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/mCCHL-VyNRA?si=wDyggWCr4ctCe_oK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "dr-fatin-munirah",
    title: "Kisah Kejayaan: Dr Fatin Munirah Azizul",
    category: "kisah-kejayaan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/Un3AI7-s4H8?si=9TrCJHe6QaUs2apH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  }
];
