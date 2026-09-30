// Data Artikel - Sedia dipanggil secara global oleh fail pengurusan artikel
const ARTIKEL_DATA = [
  {
    id: "emas-tak-pernah-murah",
    title: "Emas Tak Pernah Murah",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #1 : Emas & Kewangan",
    summary: "Tiada satu zaman orang mengatakan emas murah melainkan harga emas sudah pun menjadi sejarah (harga emas yang lepas)",
    path: "/kandungan-tipsemas/emas-tak-pernah-murah.html"
  }, // <-- Ditambah koma di sini untuk memisahkan objek pertama dan kedua
  
    {
    id: "kesilapan-pertama-membeli-emas",
    title: "Kesilapan Pertama Membeli Emas",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #1 : Emas & Kewangan",
    summary: "kesilapan pertama bila nak beli emas ialah - tunggu harga emas murah.",
    path: "/kandungan-tipsemas/kesilapan-pertama-membeli-emas.html"
  },

    {
    id: "polemik-matawang-syariah",
    title: "Polemik Matawang Syariah",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #1 : Emas & Kewangan",
    summary: "tahun 2010 Kerajaan Negeri Kelantan melancarkan Dinar Kelantan versi ke-2. Ianya lebih cantik... Ia ditempah dari World Islamic Mint (WIM), Dubai.",
    path: "/kandungan-tipsemas/polemik-matawang-syariah.html"
  },

    {
    id: "kisah-dua-kali-miskin",
    title: "Kisah Dua Kali Miskin",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #1 : Emas & Kewangan",
    summary: "",
    path: "/kandungan-tipsemas/kisah-dua-kali-miskin.html"
  },

    {
    id: "asalkan-duit-jadi-emas",
    title: "Asalkan Duit Jadi Emas",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #1 : Emas & Kewangan",
    summary: "Wang kertas yang kita gunakan hari ni tak mampu menyimpan nilai. Walaupun duit kertas itu berada di tangan kita, hakikatnya kekayaan itu tiada di tangan kita.",
    path: "/kandungan-tipsemas/asalkan-duit-jadi-emas.html"
  },

    {
    id: "nilai-duit-bukan-pada-kertasnya",
    title: "Nilai Duit Bukan Pada Kertasnya",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #1 : Emas & Kewangan",
    summary: "Kalau berlaku pergolakan dalam ekonomi dan politik, jaminan nalia matawang tak lagi terpakai. Nilainya boleh terus hilang begitu sahaja!",
    path: "/kandungan-tipsemas/nilai-duit-bukan-pada-kertasnya.html"
  },

    {
    id: "emas-lagi-jatuh-lagi-orang-beli",
    title: "Emas : Lagi Jatuh Lagi Orang Beli",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #1 : Emas & Kewangan",
    summary: "Emas kalau harganya jatuh, ia adalah emas (tetap bernilai). Sedangkan duit kertas, kalau nilainya jatuh, ia adalah kertas!",
    path: "/kandungan-tipsemas/emas-lagi-jatuh-lagi-orang-beli.html"
  },

      {
    id: "ketagihan-yang-bijak",
    title: "Ketagihan Yang Bijak",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #2 : Tabiat Orang Kaya Dengan Emas",
    summary: "Berbeza dengan ketagih berbelanja, sedar-sedar dapat panggilan telefon daripada bank gara-gara bil kad kredit dah berbulan-bulan tertunggak.",
    path: "/kandungan-tipsemas/ketagihan-yang-bijak.html"
  },

      {
    id: "bukan-sebab-bijak-tetapi-tabiat",
    title: "Bukan Sebab Bijak, Tetapi Tabiat",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #2 : Tabiat Orang Kaya Dengan Emas",
    summary: "Tabiat orang kebanyakkan ialah BERBELANJA dan tambah hutang semaksimum yang mana boleh. Mereka rasa puas bila berbelanja walaupun pendek kata, semuanya dah ada belaka.",
    path: "/kandungan-tipsemas/bukan-sebab-bijak-tetapi-tabiat.html"
  },

      {
    id: "perbetulkan-tabiat-terhadap-kewangan",
    title: "Perbetulkan Tabiat Terhadap Kewangan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #2 : Tabiat Orang Kaya Dengan Emas",
    summary: "kita sebenarnya tak perlu secerdik rocket scientist... Tapi cukuplah dengan memperbetulkan tabiat kita tentang kewangan macam tabiat orang kaya-kaya.",
    path: "/kandungan-tipsemas/perbetulkan-tabiat-terhadap-kewangan.html"
  },

    {
    id: "sayang-nak-jual",
    title: "Sayang Nak Jual",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #2 : Tabiat Orang Kaya Dengan Emas",
    summary: "Perasaan \u201csayang nak jual\u201d membuatkan kekayaan penyimpan-penyimpan emas ni bertahan dan terus bertambah.",
    path: "/kandungan-tipsemas/sayang-nak-jual.html"
  },

    {
    id: "bukan-roi-membuatkan-kita-kaya",
    title: "Bukan ROI Membuatkan Kita Kaya",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #2 : Tabiat Orang Kaya Dengan Emas",
    summary: "Kerugian lebih besar kewangan kita (termasuk saya juga) bukan disebabkan pelaburan tak untung.",
    path: "/kandungan-tipsemas/bukan-roi-membuatkan-kita-kaya.html"
  },

    {
    id: "inflasi-antara-emas-dan-duit-kertas",
    title: "Inflasi: Antara Emas Dan Duit Kertas",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #2 : Tabiat Orang Kaya Dengan Emas",
    summary: "Duit ringgit, nilai inflasi sebenar lebih kurang 10% setahun. Bayangkan tahun 80-an dulu, duit belanja budak sekolah cuma RM0.50 - RM1.00 sehari. Tapi sekarang, RM2.00 - RM3.00 baru cukup untuk beli makanan waktu rehat!",
    path: "/kandungan-tipsemas/inflasi-antara-emas-dan-duit-kertas.html"
  },

      {
    id: "aset-fizikal-lebih-untung-berbanding-aset-kertas",
    title: "Aset Fizikal Lebih Untung Berbanding Aset Kertas",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Aset fizikal seperti emas (dan perak), tanah dan hartanah, pasti lebih untung berbanding simpannya dalam aset kertas - seperti Tabung Haji ataupun ASB.",
    path: "/kandungan-tipsemas/aset-fizikal-lebih-untung-berbanding-aset-kertas.html"
  },

      {
    id: "harga-emas-naik-happy-turun-pun-happy",
    title: "Harga Emas Naik Happy, Turun Pun Happy",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Banyak tanya saya, kalau beli emas tapi tak jual-jual, mana untungnya? Saya tanya orang tu balik, kalau simpan duit banyak-banyak dalam bank tu, apa untungnya?",
    path: "/kandungan-tipsemas/harga-emas-naik-happy-turun-pun-happy.html"
  },

    {
    id: "di-mana-untungnya-kalau-tak-jual",
    title: "Di Mana Untungnya Kalau Tak Jual?",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Selagi tak ada keperluan untuk digunakan, lebih baik simpan sahaja emas-emas itu.",
    path: "/kandungan-tipsemas/di-mana-untungnya-kalau-tak-jual.html"
  },

    {
    id: "1-nilai-jangka-panjang-terjamin",
    title: "#1 \u2013 Nilai Jangka Panjang Terjamin",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Nisbah emas 1 dinar dengan kambing, secara relatifnya tak berubah sampai bila-bila. Nilai emas terletak pada berat dan ketulenannya. Manakala kambing pada jenis, dan saiznya. Tapi di manakah nilai sebenar duit kertas?",
    path: "/kandungan-tipsemas/1-nilai-jangka-panjang-terjamin.html"
  },

    {
    id: "2-mudah-ditukar-kepada-tunai",
    title: "#2 \u2013 Mudah Ditukar Kepada Tunai",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Nak jual Emas 1 kilogram (RM300,000), jauh lebih mudah prosesnya berbanding nak jual tanah atau rumah yang berharga cuma RM50,000.",
    path: "/kandungan-tipsemas/2-mudah-ditukar-kepada-tunai.html"
  },

    {
    id: "3-kekayaan-di-tangan-kita",
    title: "#3 \u2013 Kekayaan Di Tangan Kita",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Masih ingat tak duit syiling seringgit dulu? Bank Negara sudah gazetkan, ianya tak lagi sah untuk digunakan sebagai duit hari ini. Ia hanya sekeping logam yang tidak lagi bernilai. Siapa yang masih simpan duit seringgit lama tu, hari ni dah tak laku lagi dah.",
    path: "/kandungan-tipsemas/3-kekayaan-di-tangan-kita.html"
  },

      {
    id: "4-boleh-dijadikan-modal-pusingan",
    title: "#4 \u2013 Boleh Dijadikan Modal Pusingan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Bagi peniaga kecil dan sederhana, emas itu boleh dijadikan modal pusingan bisnes. Emas-emas yang di pakai oleh akak peniaga Pasar Siti Khadijah (Kota Bharu, Kelantan) tu bukan sekadar perhiasan, tetapi itu ialah simpanan dan modal pusingan mereka.",
    path: "/kandungan-tipsemas/4-boleh-dijadikan-modal-pusingan.html"
  },

    {
    id: "5-aset-mudah-alih",
    title: "#5 \u2013 Aset Mudah Alih",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Katakanlah kita bertugas di pedalaman Sabah, tiba-tiba dapat pindah balik ke Semenanjung, kita boleh bawa balik emas-emas itu. Kalau berpindah lagi, kita boleh bawa emas tu ke mana sahaja.",
    path: "/kandungan-tipsemas/5-aset-mudah-alih.html"
  },

    {
    id: "6-menutup-nafsu-berbelanja",
    title: "#6 \u2013 Menutup Nafsu Berbelanja",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Berdasarkan pengalaman saya membimbing lebih 6,500 penyimpan emas sejak 2010, belum pernah sekalipun saya terima feedback; penyimpan emas jual emas-emas mereka kalau sekadar nak tukar langsir baru atau tukar sport-rim kereta!",
    path: "/kandungan-tipsemas/6-menutup-nafsu-berbelanja.html"
  },

    {
    id: "7-aset-fizikal-mampu-milik",
    title: "#7 \u2013 Aset Fizikal Mampu Milik",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #3 : 7 Keistimewaan Emas Sebagai Simpanan",
    summary: "Bagi memiliki hartanah, kita perlukan modal yang besar untuk beli. Walaupun harganya dikira mengikut harga \"kaki per segi\",  ia tak boleh dibeli hanya dengan bajet satu kaki per segi.",
    path: "/kandungan-tipsemas/7-aset-fizikal-mampu-milik.html"
  },

    {
    id: "masalah-jika-simpan-duit",
    title: "Masalah Jika Simpan Duit",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #4 : Emas Sebagai Simpanan Untuk Dilupakan",
    summary: "Bulan ni keluarkan sikit, bulan depan keluar sikit lagi. Lama-lama simpanan pun makin kurang.",
    path: "/kandungan-tipsemas/masalah-jika-simpan-duit.html"
  },

    {
    id: "melupakan-simpanan-dengan-emas",
    title: "Melupakan Simpanan Dengan Emas",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #4 : Emas Sebagai Simpanan Untuk Dilupakan",
    summary: "Sejak saya mulakan tabiat menyimpan emas, saya rasa saya tak banyak duit.",
    path: "/kandungan-tipsemas/melupakan-simpanan-dengan-emas.html"
  },

    {
    id: "untung-emas-berbanding-asb-dan-tabung-haji",
    title: "Untung Emas Berbanding ASB dan Tabung Haji",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #4 : Emas Sebagai Simpanan Untuk Dilupakan",
    summary: "Berkata Tuan Azizi Ali, pakar kewangan #1 di Malaysia, dalam tempoh 20 tahun kebelakangan ni, kenaikan harga emas lebih kurang 20% setahun.",
    path: "/kandungan-tipsemas/untung-emas-berbanding-asb-dan-tabung-haji.html"
  },

    {
    id: "simpanan-kecemasan-3-bulan-pendapatan",
    title: "Simpanan Kecemasan 3 Bulan Pendapatan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #5 : Emas Sebagai Simpanan Kecemasan",
    summary: "Jangan sesekali melabur (dalam apa-apa pelaburan sekalipun) sebelum cukup tabungan untuk kecemasan.",
    path: "/kandungan-tipsemas/simpanan-kecemasan-3-bulan-pendapatan.html"
  },

    {
    id: "emas-magnet-kekayaan",
    title: "Emas Magnet Kekayaan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #5 : Emas Sebagai Simpanan Kecemasan",
    summary: "Kebanyakkan orang bila simpan duit dalam akaun bank, termasuk saya. Simpan, simpan, simpan, lepas tu rasa nak \u2018korek\u2019 semula.",
    path: "/kandungan-tipsemas/emas-magnet-kekayaan.html"
  },

    {
    id: "12-bulan-pendapatan-bagi-peniaga",
    title: "12 Bulan Pendapatan Bagi Peniaga",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #5 : Emas Sebagai Simpanan Kecemasan",
    summary: "Emas boleh berfungsi sebagai alat menutup kebocoran wang sekaligus sebagai dana kecemasan. Bila nak pakai duit, boleh jual atau pajak sahaja untuk dapat tunai segera.",
    path: "/kandungan-tipsemas/12-bulan-pendapatan-bagi-peniaga.html"
  },

    {
    id: "kekal-nombor-atau-kuasa-beli",
    title: "Kekal Nombor atau Kuasa Beli?",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #5 : Emas Sebagai Simpanan Kecemasan",
    summary: "Emas selamat dari masalah inflasi dan kejatuhan ringgit bahkan harganya makin meningkat bila ringgit makin menurun.",
    path: "/kandungan-tipsemas/kekal-nombor-atau-kuasa-beli.html"
  },

    {
    id: "emosi-manusia-tewas-dengan-duit-yang-banyak",
    title: "Emosi Manusia Tewas Dengan Duit Yang Banyak",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #6 : Emas Menutup Kebocoran Wang",
    summary: "Kalau trend ni berterusan, kekayaan kita makin lama makin susut. Simpan, simpan, habis. Simpan, simpan, habis juga...",
    path: "/kandungan-tipsemas/emosi-manusia-tewas-dengan-duit-yang-banyak.html"
  },

    {
    id: "tempoh-bertenang-sebelum-berbelanja",
    title: "Tempoh Bertenang Sebelum Berbelanja",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #6 : Emas Menutup Kebocoran Wang",
    summary: "Lagi banyak duit tu dalam akaun bank, lagi kuat godaan nak berbelanja...",
    path: "/kandungan-tipsemas/tempoh-bertenang-sebelum-berbelanja.html"
  },

    {
    id: "ada-emas-sudah-tentu-berduit",
    title: "Ada Emas, Sudah Tentu Berduit",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #6 : Emas Menutup Kebocoran Wang",
    summary: "Ada emas, maksudnya ada duit. Bila-bila nak pakai duit, kita boleh jual atau pajak saja emas-emas tu untuk dapat duit \u2018on the spot\u2019.",
    path: "/kandungan-tipsemas/ada-emas-sudah-tentu-berduit.html"
  },

    {
    id: "savers-are-losers",
    title: "Savers Are Losers!",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #6 : Emas Menutup Kebocoran Wang",
    summary: "Kebanyakan orang kaya (di dunia) pun tak simpan duit yang banyak di bank.",
    path: "/kandungan-tipsemas/savers-are-losers.html"
  },

    {
    id: "nilai-emas-lebih-terjamin",
    title: "Nilai Emas Lebih Terjamin",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #7 : Emas Sebagai Simpanan Jangka Panjang",
    summary: "Pada zaman Nabi Muhammad SAW 1,400 tahun yang lalu, 1 Dinar boleh digunakan untuk membeli seekor kambing. Dan sekarang, selepas 1,400 tahun, harga untuk 1 Dinar masih mampu digunakan untuk membeli seekor kambing.",
    path: "/kandungan-tipsemas/nilai-emas-lebih-terjamin.html"
  },

    {
    id: "aset-yang-mudah-dicairkan",
    title: "Aset Yang Mudah Dicairkan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #7 : Emas Sebagai Simpanan Jangka Panjang",
    summary: "Dalam sejarah, emas telah digunakan sebagai 'duit antarabangsa' sejak zaman berzaman.",
    path: "/kandungan-tipsemas/aset-yang-mudah-dicairkan.html"
  },

    {
    id: "aset-mampu-milik",
    title: "Aset Mampu Milik",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #7 : Emas Sebagai Simpanan Jangka Panjang",
    summary: "Selain dari emas, antara aset fizikal yang pada saya bagus untuk disimpan dalam jangka panjang ialah tanah dan hartanah.",
    path: "/kandungan-tipsemas/aset-mampu-milik.html"
  },

    {
    id: "emas-kekayaan-di-tangan",
    title: "Emas : Kekayaan Di Tangan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #7 : Emas Sebagai Simpanan Jangka Panjang",
    summary: "Walau apa pun yang berlaku pada ekonomi dan politik semasa, selagimana kita memiliki emas, kekayaan itu memang berada di tangan kita.",
    path: "/kandungan-tipsemas/emas-kekayaan-di-tangan.html"
  },

    {
    id: "emas-aset-fizikal-yang-mudah-alih",
    title: "Emas : Aset Fizikal Yang Mudah Alih",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #7 : Emas Sebagai Simpanan Jangka Panjang",
    summary: "Berbeza dengan tanah dan rumah, kedua-duanya tak boleh dialihkan. Kalau hendak dijual sekalipun, proses tersebut tentunya akan memakan masa.",
    path: "/kandungan-tipsemas/emas-aset-fizikal-yang-mudah-alih.html"
  },

    {
    id: "tiada-siapa-tahu",
    title: "Tiada Siapa Tahu",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #7 : Emas Sebagai Simpanan Jangka Panjang",
    summary: "Menurut Robert T. Kiyosaki, \"Emas (dan perak) merupakan satu-satunya aset kewangan yang tiada rekod dalam sistem kewangan.\"",
    path: "/kandungan-tipsemas/tiada-siapa-tahu.html"
  },

    {
    id: "emas-sebagai-backup-belanja-hangus",
    title: "Emas Sebagai Backup Belanja Hangus",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #8 : Emas Sebagai Backup Belanja Hangus",
    summary: "Ada sebahagian penyimpan emas jadikan emas sebagai backup untuk \"belanja hangus\". Untuk simpanan, mereka simpan duit mereka bentuk emas.",
    path: "/kandungan-tipsemas/emas-sebagai-backup-belanja-hangus.html"
  },

    {
    id: "caj-ar-rahnu-mahal",
    title: "Caj Ar-Rahnu Mahal",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #8 : Emas Sebagai Backup Belanja Hangus",
    summary: "Simpan dahulu baru belanja. Bila sampai masa nak pakai duit, baru keluarkan duit simpanan tu untuk dibelanjakan.",
    path: "/kandungan-tipsemas/caj-ar-rahnu-mahal.html"
  },

    {
    id: "caj-ar-rahnu-untung-dari-sudut-psikologi",
    title: "Caj Ar-Rahnu : Untung Dari Sudut Psikologi",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #8 : Emas Sebagai Backup Belanja Hangus",
    summary: "Duit yang disimpan dalam bentuk emas lebih bertahan dari \u2018kebocoran\u2019 berbanding simpan dalam akaun bank.",
    path: "/kandungan-tipsemas/caj-ar-rahnu-untung-dari-sudut-psikologi.html"
  },

    {
    id: "emas-bukan-sekadar-perhiasan",
    title: "Emas Bukan Sekadar Perhiasan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #9 : Emas Sebagai Modal Pusingan Bisnes",
    summary: "Peniaga-peniaga wanita Kelantan sinonim dengan pakai barang kemas \u2018sampai ke lengan\u2019. Gelang-gelang emas yang dipakai akak-akak peniaga itu sebenarnya bukan sekadar perhiasan, tetapi itulah simpanan dan juga modal pusingan bisnes mereka.",
    path: "/kandungan-tipsemas/emas-bukan-sekadar-perhiasan.html"
  },

    {
    id: "selesai-masalah-kebocoran-modal",
    title: "Selesai Masalah \u2018Kebocoran\u2019 Modal",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #9 : Emas Sebagai Modal Pusingan Bisnes",
    summary: "Kita tak berpeluang \u2018rompak\u2019 duit bisnes seratus dua untuk kegunaan peribadi (ingat, duit bisnes bukan duit peribadi) sebagaimana duit tunai.",
    path: "/kandungan-tipsemas/selesai-masalah-kebocoran-modal.html"
  },

    {
    id: "selesai-masalah-pinjaman-jangka-pendek",
    title: "Selesai Masalah Pinjaman Jangka Pendek",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #9 : Emas Sebagai Modal Pusingan Bisnes",
    summary: "Kita tak berpeluang \u2018rompak\u2019 duit bisnes seratus dua untuk kegunaan peribadi (ingat, duit bisnes bukan duit peribadi) sebagaimana duit tunai.",
    path: "/kandungan-tipsemas/selesai-masalah-pinjaman-jangka-pendek.html"
  },

    {
    id: "senang-monitor-perkembangan-modal",
    title: "Senang Monitor Perkembangan Modal",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #9 : Emas Sebagai Modal Pusingan Bisnes",
    summary: "Antara cabaran mereka yang berniaga secara kecil dan sederhana, mereka susah monitor perkembangan modal.",
    path: "/kandungan-tipsemas/senang-monitor-perkembangan-modal.html"
  },

    {
    id: "lebih-selamat-berbanding-fixed-deposit",
    title: "Lebih \u2018Selamat\u2019 Berbanding Fixed Deposit",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #9 : Emas Sebagai Modal Pusingan Bisnes",
    summary: "Fixed deposit itu boleh jadi jaminan kepada bank yang kita mampu bayar balik pinjaman.",
    path: "/kandungan-tipsemas/lebih-selamat-berbanding-fixed-deposit.html"
  },

    {
    id: "peniaga-emas-sebagai-modal-pusingan-bisnes",
    title: "Peniaga : Emas Sebagai Modal Pusingan Bisnes",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #9 : Emas Sebagai Modal Pusingan Bisnes",
    summary: "Para peniaga boleh pertimbangkan untuk jadikan emas sebagai salah satu bentuk modal pusingan bisnes.",
    path: "/kandungan-tipsemas/peniaga-emas-sebagai-modal-pusingan-bisnes.html"
  },

    {
    id: "fenomena-pelik-2015",
    title: "Fenomena Pelik 2015",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #10 : Emas Penyelamat Dari Kejatuhan Ringgit",
    summary: "Harga emas dunia turun, tapi nampaknya harga emas Malaysia naik.  Persoalannya, tahun 2015 adakah harga emas naik atau turun?",
    path: "/kandungan-tipsemas/fenomena-pelik-2015.html"
  },

    {
    id: "pergerakkan-songsang-harga-emas",
    title: "Pergerakkan Songsang Harga Emas",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #10 : Emas Penyelamat Dari Kejatuhan Ringgit",
    summary: "Emas mempertahankan kekayaan kita dari terus susut disebabkan kejatuhan ringgit.",
    path: "/kandungan-tipsemas/pergerakkan-songsang-harga-emas.html"
  },

    {
    id: "emas-sebagai-penyelamat-nilai",
    title: "Emas Sebagai Penyelamat Nilai",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #10 : Emas Penyelamat Dari Kejatuhan Ringgit",
    summary: "Kalau kita toleh ke belakang, duit ringgit pernah jatuh 50% semasa negara dilanda krisis ekonomi 1997! Dari RM2.50/USD jatuh kepada RM4.70/USD. Kejatuhan 50% hanya dalam masa setahun (1997 - 1998)!",
    path: "/kandungan-tipsemas/emas-sebagai-penyelamat-nilai.html"
  },

    {
    id: "harga-naik-kekayaan-tak-bertambah",
    title: "Harga Naik, Kekayaan Tak Bertambah?",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #10 : Emas Penyelamat Dari Kejatuhan Ringgit",
    summary: "Kalau simpan emas, kekayaan kita tak akan susut atau hilang, dan tak juga bertambah. Ia melindungi dan mengekalkan nilai sahaja.",
    path: "/kandungan-tipsemas/harga-naik-kekayaan-tak-bertambah.html"
  },

    {
    id: "kepentingan-emas-dalam-kewangan",
    title: "Kepentingan emas dalam kewangan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #10 : Emas Penyelamat Dari Kejatuhan Ringgit",
    summary: "Sebelum kita bercakap KEMBANGKAN nilai, bukankah lebih bijak kita adakan bahagian yang boleh SELAMATKAN nilainya dahulu?",
    path: "/kandungan-tipsemas/kepentingan-emas-dalam-kewangan.html"
  },

    {
    id: "berapa-banyak-perlu-simpan-emas",
    title: "Berapa Banyak Perlu Simpan Emas?",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #10 : Emas Penyelamat Dari Kejatuhan Ringgit",
    summary: "Menyimpan emas mungkin tak membuatkan kita kaya raya, tapi yang pastinya, emas melindungi kita dari jatuh miskin!",
    path: "/kandungan-tipsemas/berapa-banyak-perlu-simpan-emas.html"
  },

    {
    id: "kisah-banjir-besar-di-kelantan",
    title: "Kisah Banjir Besar di Kelantan",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #11 : Emas Sebagai Duit Ketika Gawat",
    summary: "Kalau berlaku kegawatan ekonomi, orang tak perlukan duit. Tapi perlukan barang keperluan untuk terus hidup. Duit atau emas tak berguna lagi waktu tu. Macam bencana banjir berlaku di Kelantan pada Disember 2014.",
    path: "/kandungan-tipsemas/kisah-banjir-besar-di-kelantan.html"
  },

    {
    id: "ketika-duit-tak-bernilai",
    title: "Ketika Duit Tak Bernilai",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #11 : Emas Sebagai Duit Ketika Gawat",
    summary: "Dalam keadaan gawat tu, duit (atau emas) tak begitu \u2018bernilai\u2019 bagi kami. Kami sanggup bayar harga mahal untuk dapat barang keperluan.",
    path: "/kandungan-tipsemas/ketika-duit-tak-bernilai.html"
  },

    {
    id: "terpaksa-bayar-4-kali-ganda",
    title: "Terpaksa Bayar 4 Kali Ganda",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #11 : Emas Sebagai Duit Ketika Gawat",
    summary: "Kalau duit tak lagi bernilai, apakah alat tukaran yang diterima oleh semua sebagai sesuatu yang bernilai?",
    path: "/kandungan-tipsemas/terpaksa-bayar-4-kali-ganda.html"
  },

    {
    id: "emas-sebagai-alat-tukaran",
    title: "Emas Sebagai Alat Tukaran",
    author: "Mohd Zulkifli Shafie",
    category: "Tips #11 : Emas Sebagai Duit Ketika Gawat",
    summary: "Yang ada duit berjuta sekali pun dalam akaun bank, ia tak dapat dikeluarkan sebab mesin pengeluaran wang (ATM) juga tidak berfungsi! Jutawan pun jatuh miskin ketiga gawat begitu.",
    path: "/kandungan-tipsemas/emas-sebagai-alat-tukaran.html"
  },
  
]; // <-- Kurungan penutup Array yang betul untuk merangkumi semua artikel
