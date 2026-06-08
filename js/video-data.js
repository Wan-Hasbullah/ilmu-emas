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
    embedCode: <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mohdzulkifli.com/video/7648484980837846292" data-video-id="7648484980837846292" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@mohdzulkifli.com" href="https://www.tiktok.com/@mohdzulkifli.com?refer=embed">@mohdzulkifli.com</a> Macam mana nak tahu kita sedang bergerak ke arah kekayaan? <a title="membinasatujutapertama" target="_blank" href="https://www.tiktok.com/tag/membinasatujutapertama?refer=embed">#membinasatujutapertama</a> <a title="menabung" target="_blank" href="https://www.tiktok.com/tag/menabung?refer=embed">#menabung</a> <a title="mindset" target="_blank" href="https://www.tiktok.com/tag/mindset?refer=embed">#mindset</a> <a title="misiubahhidup1000keluarga" target="_blank" href="https://www.tiktok.com/tag/misiubahhidup1000keluarga?refer=embed">#misiubahhidup1000keluarga</a> <a title="cashflow" target="_blank" href="https://www.tiktok.com/tag/cashflow?refer=embed">#cashflow</a> <a target="_blank" title="♬ original sound  - Mohd Zulkifli Shafie" href="https://www.tiktok.com/music/original-sound-Mohd-Zulkifli-Shafie-7648485026128022273?refer=embed">♬ original sound  - Mohd Zulkifli Shafie</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>`
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
