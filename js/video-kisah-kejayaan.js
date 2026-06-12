// Data Video - Menyimpan data iframe YouTube untuk Akademi Multimedia (Kisah Kejayaan)
const KISAH_KEJAYAAN_DATA = [
  {
    id: "kisah-kejayaan-doktor-fadhli",
    title: "Kisah Kejayaan : Doktor Fadhli",
    category: "doktor",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/TtkkGDVn0es?si=Pf6TYnloZP91JXyJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-doktor-syazana-razak",
    title: "Kisah Kejayaan : Doktor Syazana Razak",
    category: "doktor",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/ikD5rjWq7Yc?si=IjEV2EKwhaa6Zd7W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-ain-najwa",
    title: "Kisah Kejayaan : Puan Ain Najwa",
    category: "full-time-pgbo",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/vNkuSrlIkHY?si=lsZ4a6yhk3clxQtB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-nadirah",
    title: "Kisah Kejayaan : Puan Nadirah",
    category: "it-analyst",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/v6zAarl_gTU?si=qxuyS6SJuN4gVYaq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-suaidah",
    title: "Kisah Kejayaan : Puan Suaidah",
    category: "suri-rumah",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/XivxLJkc9ss?si=OmiJTKYKE_hshlCC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-syarif-jamil",
    title: "Kisah Kejayaan : Tuan Syarif Jamil",
    category: "full-time-pgbo",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/DBye7ZEIgM8?si=bGxEGkLLVRwpjpol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-azlan-abdul-rahman",
    title: "Kisah Kejayaan : Tuan Azlan Abdul Rahman",
    category: "full-time-pgbo",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/RYl05iQvGaU?si=8yLfZnBUBgo1crH1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-azman-bilaji",
    title: "Kisah Kejayaan : Tuan Azman Bilaji",
    category: "arkitek",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/puM91PawLdA?si=rYEOz3PTZvqnUaeq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-ashinida",
    title: "Kisah Kejayaan : Puan Ashinida",
    category: "kisah-kejayaan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/wjABabtxl-4?si=MaZvw5nfC-JsI7X0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-nur-ayunni-10",
    title: "Kisah Kejayaan : Puan Nur Ayunni",
    category: "suri-rumah",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/80ST8uXLRMQ?si=dCKbbjuofwJ6z7Ow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  }, // <-- PEMBETULAN: Tanda koma ditambah di sini
  {
    id: "kisah-kejayaan-tuan-norasmadi",
    title: "Kisah Kejayaan : Tuan Norasmadi",
    category: "semua",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/QAqKckEuNrU?si=OtiBAlBN3CJT3pOE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-asma-shazwani",
    title: "Kisah Kejayaan : Puan Asma Shazwani",
    category: "semua",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/eAopPukhESc?si=eaYX7tKlrN6Kl_TN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-13",
    title: "Kisah Kejayaan",
    category: "semua",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/eAopPukhESc?si=eaYX7tKlrN6Kl_TN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-kapten-raitu",
    title: "Kisah Kejayaan : Kapten Raitu",
    category: "semua",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/JPnbjznlUus?si=g467VKg5D89UR-Y_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-cik-jennet-blasius",
    title: "Kisah Kejayaan : Cik Jennet Blasius",
    category: "oil-gas",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/9GZP0RwHlBU?si=3aqa7W847YtjyOPQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-noreennur",
    title: "Kisah Kejayaan : Puan Noreennur",
    category: "guru",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/2Hwzrs2xdqk?si=z9wN0Y2jt3NbJVOO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-izzatie-shima",
    title: "Kisah Kejayaan : Puan Izzatie Shima",
    category: "usahawan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/TO49j-fhQK4?si=YO1l96tHlbNSZtxz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-dr-muaz",
    title: "Kisah Kejayaan : Dr. Mu'az", // Ditukar kepada standard (') string
    category: "doktor",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/nUS136jfWFA?si=hmfN-si4h2ShmJJy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-sakeenah",
    title: "Kisah Kejayaan : Puan Sakeenah",
    category: "tentera",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/7O_3Dwn-c6M?si=QW5eLvrIEuz-xMce" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-dr-syafiq",
    title: "Kisah Kejayaan : Dr. Syafiq",
    category: "doktor",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/xOSHc22NYO4?si=8PfDpGK1Ek1IRHCP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-safix-ahmad",
    title: "Kisah Kejayaan : Tuan Safix Ahmad",
    category: "guru",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/pb8A8yAnUbY?si=ff3FnhuSz3mrcW2X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-hairil-anuar",
    title: "Kisah Kejayaan : Tuan Hairil Anuar",
    category: "bank",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/TT_IyJZU7wY?si=jG7kKU7pj8Jw8Drc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-nadirah-mustafa",
    title: "Kisah Kejayaan : Puan Nadirah Mustafa",
    category: "semua", // Ditukar dari kosong "" kepada "semua" demi keselamatan data penapis
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/o-uW56VAntc?si=jcf25ar1feI4h258" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-jeremy-e-wong-hisham",
    title: "Kisah Kejayaan : Tuan Jeremy E. Wong Hisham",
    category: "usahawan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/Ptth5mIbLws?si=gv0GqmRoWzlqsSgC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-nora-najihah",
    title: "Kisah Kejayaan : Puan Nora Najihah",
    category: "suri-rumah",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/N7JyIYUk71k?si=r44iX-6Ey3klG1WV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-khadizah-dan-tuan-mohd-azlan",
    title: "Kisah Kejayaan : Puan Khadizah dan Tuan Mohd Azlan",
    category: "quantity-surveyor",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/kMm429voWqs?si=Oms2c9KLZq18H_i2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-ain-nazirah",
    title: "Kisah Kejayaan : Puan Ain Nazirah",
    category: "suri-rumah",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/CAk0tJJv0EA?si=zF0HPLqrCkdKS5dA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-halimaton-khamisah",
    title: "Kisah Kejayaan : Puan Halimaton Khamisah",
    category: "suri-rumah",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/t0tMs4uMWKc?si=-vT-71ccWu3nUpoO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-sharudin-hashim",
    title: "Kisah Kejayaan : Tuan Sharudin Hashim",
    category: "penjawat-awam",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/Zrviih8H53A?si=Fpm17zhfH2rlC6JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-pn-siti-nur-azliza-harun",
    title: "Kisah Kejayaan : Pn. Siti Nur Azliza Harun",
    category: "jurukur-bahan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/kYUxgjttyTA?si=WdpMpRSjGWr_PD-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-mohd-hafiz-khamis-pn-shahida-said",
    title: "Kisah Kejayaan : Tuan Mohd Hafiz Khamis & Pn. Shahida Said",
    category: "penjawat-awam",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/axQCdiMmpuk?si=MnSUMB-b7iZO05Uz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-cik-leonie-ly",
    title: "Kisah Kejayaan : Cik Leonie Ly",
    category: "guru",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/eQiHGEUzQuQ?si=2jL-OmGvB6tVeJ6W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-dr-naresh-g",
    title: "Kisah Kejayaan : Dr. Naresh G",
    category: "research-scientist",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/dUTedNMHfYk?si=I80UZsUIyStyWiRF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-pn-nik-nadhilah",
    title: "Kisah Kejayaan : Pn. Nik Nadhilah",
    category: "pensyarah",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/ApZhIiqEncE?si=EtpkqVv14ERVTTg5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-pn-syamimi-zaini",
    title: "Kisah Kejayaan : Pn. Syamimi Zaini",
    category: "suri-rumah",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/G2-6rP-1zzs?si=A802EOHBRWY6goz3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-cik-noor-atina-binti-dahari",
    title: "Kisah Kejayaan : Cik Noor Atina Binti Dahari",
    category: "jurutera",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/irCQUmsBYZo?si=7b3neytfcw9BD-pJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-pn-lucy-manjapat",
    title: "Kisah Kejayaan : Pn. Lucy Manjapat",
    category: "juruteknologi-makmal-perubatan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/tztldfm7_iU?si=wjejjKN0LhNp0lOR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-pn-zainab-rahim",
    title: "Kisah Kejayaan : Pn. Zainab Rahim",
    category: "executive-admin",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/UScvydQ4Rbk?si=V79Xn7ZYznZd8J5_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-pn-nur-nabilla-hannan-ismail",
    title: "Kisah Kejayaan : Pn. Nur Nabilla Hannan Ismail",
    category: "pegawai-kualiti-projek",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/RNzj3kyGdHQ?si=EkVmXJUws4ZlCVEs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-cik-venissa-ugun",
    title: "Kisah Kejayaan : Cik Venissa Ugun",
    category: "guru",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/sr5LN-JFfug?si=MUc6Q5IyVdGjwMGC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-wan-muhammad-hafizi-bin-wan-azri",
    title: "Kisah Kejayaan : Tuan Wan Muhammad Hafizi Bin Wan Azri",
    category: "tentera",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/dCRqYyXL_ks?si=rUz5KfAsivxTYxZr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-pn-hanis-zafirah-bte-mohamad-zuberi",
    title: "Kisah Kejayaan : Pn. Hanis Zafirah Bte Mohamad Zuberi",
    category: "client-manager",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/x8PPSUbMCII?si=8yq9XriKCvr1EE8t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-azmie-aziz",
    title: "Kisah Kejayaan : Tuan Azmie Aziz",
    category: "pengurus-syarikat-konsultan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/vxSrXFhJTjs?si=nv7JfMqWfTkuNiEF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-roshayati-binti-zainal-abidin",
    title: "Kisah Kejayaan : Puan Roshayati Binti Zainal Abidin",
    category: "jurutera",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/RGl2INEtKW0?si=92jmLuYvrGRnDvrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-pn-wan-faizah-bte-zakaria",
    title: "Kisah Kejayaan : Pn. Wan Faizah Bte Zakaria",
    category: "bank",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/U9tImAx4MdE?si=O9Zbd86nPxUPdj7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-tuan-fahmi-adnan",
    title: "Kisah Kejayaan : Tuan Fahmi Adnan",
    category: "perancang-harta-pusaka-islam",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/e0h408LGtNk?si=aJLtHubAd655eGuZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-nursaadiah-rahim",
    title: "Kisah Kejayaan : Puan Nursaadiah Rahim",
    category: "usahawan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/UcphZSus_Q0?si=iVJYqO9CVjhiBBL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-puan-sakinah-ramli",
    title: "Kisah Kejayaan : Puan Sakinah Ramli",
    category: "akauntan",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/WrqIbwkiyhY?si=aMftWzV3mQZS1D5_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  },
  {
    id: "kisah-kejayaan-dr-fatin-munirah-azizul",
    title: "Kisah Kejayaan : Dr. Fatin Munirah Azizul",
    category: "pensyarah",
    type: "youtube",
    embedCode: `<iframe class="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/Un3AI7-s4H8?si=KQMUok6LFeIM03dQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  }
];
