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
  },
  {
    id: "ciri-ciri-emas-paling-untung",
    title: "Ciri-ciri Emas Paling Untung",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/5qet3zn1e9k?si=Nk281cSUYgAcnj9V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "cara-gunakan-emas-part-1",
    title: "Cara Gunakan Emas (Part 1)",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/L2UPrbYU1yE?si=0FG08A9ABn-GUoUe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "cara-guna-emas-part-2",
    title: "Cara Guna Emas (Part 2)",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/_C21GEimbJw?si=KdetDzTCpmbStcDi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "emas-sorokkan-kekayaan",
    title: "Emas Sorokkan Kekayaan",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/saZiQGg9o6k?si=hAnLeKWfd9MR3K9l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "emas-sebagai-backup-kejatuhan-ringgit-part-1",
    title: "Emas Sebagai 'Backup' Kejatuhan Ringgit (Part 1)",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/XWXgY7pvG5k?si=sRhr01MiCfwFKNxN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "emas-sebagai-backup-kejatuhan-ringgit-part-2",
    title: "Emas Sebagai 'Backup' Kejatuhan Ringgit (Part 2)",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/dFfP9EQ6oJ0?si=xhJihfhcVzb2vydK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "emas-sebagai-wang-ke-luar-negara",
    title: "Emas Sebagai Wang Ke Luar Negara",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/lUTlJ52mCJU?si=IET6c_P5D7yTZ3kZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "emas-sebagai-modal-pusingan-perniagaan",
    title: "Emas Sebagai Modal Pusingan Perniagaan",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/SzNj_PAAKH0?si=UHzKdcSLcK7LpCNf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "emas-sebagai-pelindung-kekayaan",
    title: "Emas Sebagai Pelindung Kekayaan",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/A_ke6_KLZx8?si=7Bu6p2pPSWhwhvIT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "emas-sebagai-simpanan-jangka-masa-panjang",
    title: "Emas Sebagai Simpanan Jangka Masa Panjang",
    category: "ilmu-emas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/skVwaosspTk?si=XA4j4ysXA1B3W2Kv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "check-point-kewangan-1-aliran-tunai-positif",
    title: "Check Point Kewangan : (1) Aliran Tunai Positif",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/mCCHL-VyNRA?si=tFPMvSsDFiCFTun-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "check-point-kewangan-2-dana-kecemasan",
    title: "Check Point Kewangan : (2) Dana Kecemasan",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/YgPf1iJgnLs?si=OEFvkyla8PInDt6u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "check-point-kewangan-3-bebas-hutang-negatif",
    title: "Check Point Kewangan : (3) Bebas Hutang Negatif",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/-jHHp_gYSTE?si=-Dj_88ImuMPdMVdl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "check-point-kewangan-4-kewangan-selamat",
    title: "Check Point Kewangan : (4) Kewangan Selamat",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/wlo2JgiD8-s?si=HoDsdF4RWGr5MZ0l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "check-point-kewangan-5-kebebasan-kewangan",
    title: "Check Point Kewangan : (5) Kebebasan Kewangan",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/tZ6oMCe2CQI?si=R_c1In4_wbHydON_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "inflasi-yang-memakan-nilai",
    title: "Inflasi Yang Memakan Nilai",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/TTx65YEH-sM?si=Ws6wFyeyBw-tbnSB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "awas-bahaya-tiba-tiba-dapat-duit-banyak!",
    title: "Awas, bahaya tiba-tiba dapat duit banyak!",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/9Sua4dJb4w8?si=DPcGfkCSEPdVzSMi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "masalah-kewangan-bukan-soal-gaji-kecil",
    title: "Masalah kewangan bukan soal gaji kecil",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/y8jqTHbvFA8?si=_FwREeOKP93lc5iC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "mindset-orang-kaya-tentang-harta",
    title: "Mindset orang kaya tentang harta",
    category: "ilmu-kewangan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/qmp6E-JTQ2c?si=s6BYIubm6ryD5inE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  }
];
