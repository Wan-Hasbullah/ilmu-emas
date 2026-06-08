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
    id: "risiko-simpan-emas",
    title: "Simpan Emas Sangat Berisiko",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/KMBEwtXf0JI?si=2Oyy8ZEZlHLXtaRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "central-bank-gandakan-belian-emas",
    title: "Central Bank gandakan belian emas sebanyak 3x!",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/uP1akVgQ2Og?si=n-xjEjlMNqmNXdjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "tips-beli-rumah-dengan-emas",
    title: "Tips Beli Rumah Dengan Emas",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/742EyGjo-OA?si=zkNUrBiKJGTFduc3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "tips-beli-kereta-secara-tunai",
    title: "Tips Beli Kereta Secara Tunai",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/rWZVqnLn99Q?si=jLfgiZVyX2S91x05" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "pencen-bukan-soal-umur",
    title: "Pencen Bukan Soal Umur",
    category: "ilmu-kewangan",
    type: "tiktok",
    embedCode: `<iframe class="w-full aspect-[9/16] rounded-xl" src="https://www.tiktok.com/player/v1/7427379882444868872?rel=0&native=1" title="TikTok video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen style="max-width: 400px; margin: 0 auto;"></iframe>`
  },
  {
    id: "hutang-membelanjakan-duit-masa-depan",
    title: "Hutang — Membelanjakan Duit Masa Depan",
    category: "ilmu-kewangan",
    type: "tiktok",
    embedCode: `<iframe class="w-full aspect-[9/16] rounded-xl" src="https://www.tiktok.com/player/v1/7646245990990662933?rel=0&native=1" title="TikTok video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen style="max-width: 400px; margin: 0 auto;"></iframe>`
  }
];
