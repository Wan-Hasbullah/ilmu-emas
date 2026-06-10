const faqData = [
    // ========================================================
    // Kategori 1: Asas Simpanan Emas
    // ========================================================
    {
        id: "faq-1",
        category: "asas-simpanan",
        question: "Barang kemas, gold bar, ataupun dinar, yang mana lebih baik?",
        answer: "Kalau beli emas untuk tujuan simpanan atau pelaburan, <strong>gold bar atau dinar (berketulenan 999.9) lebih menguntungkan</strong>.<br><br>Harga per gram lebih murah sekitar 15% berbanding barang kemas, spread ('susut nilai') juga jauh lebih rendah (kurang dari 10%).<br><br>Barang kemas tak sesuai untuk tujuan simpanan ataupun pelaburan. Ia cuma sesuai untuk perhiasan. Harganya lebih mahal, dikenakan caj upah tukang, dan spreadnya sangat tinggi (sekitar 25% - 40%). Ia merugikan."
    },
    {
        id: "faq-2",
        category: "asas-simpanan",
        question: "Apa beza dinar dengan gold bar?",
        answer: "Sama sahaja antara gold bar dan dinar dari sudut potensi keuntungan. Harga per gram sama, spread ('susut nilai') sama, ketulenan pun sama (ketulenan 999.9).<br><br>Bezanya cuma bentuk bulat &amp; segi empat sahaja. 1 dinar beratnya 4.25 gram."
    },
    {
        id: "faq-3",
        category: "asas-simpanan",
        question: "Emas digital atau emas fizikal, yang mana lebih baik?",
        answer: "Semua pakar kewangan mencadangkan beli <strong>emas fizikal</strong>.<br><br>Tidak seperti penyimpan emas digital, penyimpan emas fizikal masih berpeluang menjana keuntungan daripada simpanan emas sekiranya harga emas jatuh.<br><br>Baca penjelasan guru saya dalam artikel <a href='https://www.mohdzulkifli.com/2022/07/harga-jatuh-pelabur-emas-digital-berputih-mata.html' target='_blank' rel='noopener'><em>\"Harga Jatuh, Pelabur Emas Digital Berputih Mata!\"</em></a>"
    },
    {
        id: "faq-4",
        category: "asas-simpanan",
        question: "Adakah bagus jual barang kemas yang tak dipakai dan beli gold bar / dinar?",
        answer: "Saya tak sarankan. Jual barang kemas hanya bila perlukan duit.<br><br>Kalau jual barang kemas untuk beli gold bar, kita akan kerugian dua kali \"spread\" (potongan harga). Iaitu spread barang kemas (25% - 40%) dan spread gold bar yang baru dibeli (bawah 10%).<br><br>Kalau simpan sahaja barang kemas tersebut, kita hanya dikenakan sekali \"spread\" sahaja."
    },
    {
        id: "faq-5",
        category: "asas-simpanan",
        question: "ASB, Tabung Haji, atau emas, yang mana lebih baik?",
        answer: "Untuk simpanan <strong>jangka pendek (kurang 2 tahun), ASB atau Tabung Haji lebih baik</strong>. Pulangannya konsisten sekitar 4% - 5% setahun.<br><br>Tapi untuk <strong>jangka panjang, emas lebih baik</strong>. Nilainya lebih terjamin dan tak terjejas walauapapun keadaan ekonomi atau politik sesebuah negara.<br><br>Walaupun harga emas ada turun naik dalam jangka pendek, tetapi sejarah 20 tahun menunjukkan <strong>harga emas naik secara purata sekitar 10% setahun</strong>. Harga emas confirm akan naik dalam jangka panjang disebabkan faktor inflasi dan kejatuhan ringgit.<br><br><strong>Duit simpanan jangka pendek, simpanlah dalam ASB atau Tabung Haji. Untuk jangka panjang, simpanlah dalam bentuk emas.</strong>"
    },
    {
        id: "faq-6",
        category: "asas-simpanan",
        question: "Adakah harga emas akan sentiasa naik?",
        answer: "Untuk jangka pendek, harga emas sentiasa ada turun naik. <strong>Tetapi dalam jangka panjang, harga emas sentiasa naik.</strong><br><br>Ini disebabkan nilai duit kertas sentiasa menyusut dalam jangka panjang disebabkan inflasi dan kejatuhan nilai ringgit.<br><br>Sejarah 20 tahun menunjukkan <strong>harga emas naik secara purata sekitar 10% setahun</strong>.<br><br>Harga emas akan terus naik dalam jangka panjang selagi mana sistem wang kertas (wang fiat) digunakan. Selagi kerajaan terus mencetak wang (yang menyebabkan nilainya semakin menurun), selagi itulah harga emas akan terus naik."
    },
    {
        id: "faq-7",
        category: "asas-simpanan",
        question: "Adakah emas ada dividen seperti ASB atau Tabung Haji?",
        answer: "Tidak ada. Emas tidak ada dividen macam ASB atau Tabung Haji.<br><br>Kalau pelaburan emas yang <em>offer</em> ada dividen atau pendapatan bulanan atau tahunan, itu semua skim penipuan."
    },
    {
        id: "faq-8",
        category: "asas-simpanan",
        question: "Bagaimana cara buat untung dengan emas?",
        answer: "Asasnya \"beli harga rendah, jual harga tinggi\". <strong>Jadikan emas sebagai simpanan jangka panjang, sekurang-kurangnya 2 tahun dan ke atas.</strong><br><br>Walaupun harga emas ada turun naik dalam jangka pendek, tetapi sejarah 20 tahun menunjukkan <strong>harga emas secara purata naik sekitar 10% setahun</strong>.<br><br>Harga emas akan sentiasa naik dalam jangka panjang kerana nilai duit kertas sentiasa merosot dari tahun ke tahun disebabkan inflasi dan kejatuhan ringgit."
    },
    {
        id: "faq-9",
        category: "asas-simpanan",
        question: "Bagaimana emas menjadikan penyimpannya bertambah kaya?",
        answer: "Selain harga emas makin lama makin mahal, <strong>duit simpanan tak lagi bocor. Bahkan jumlah simpanan bertambah dengan cepat.</strong><br><br>Bila duit sudah ditukarkan menjadi emas, secara automatik kita <strong>hilang nafsu berbelanja</strong> - sebab \"nombor\" yang menggoda telahpun hilang.<br><br>Yang nampak cuma kepingan-kepingan emas yang cantik, yang membuatkan kita <strong>ketagih untuk kumpul emas lebih banyak, lagi dan lagi</strong>.<br><br>'Ketagih' menyimpan dan hilang nafsu berbelanja (dengan duit yang sudah ditukar jadi emas) itulah yang membuatkan penyimpan emas bertambah kaya. Selain dari harganya yang semakin mahal dari tahun ke tahun."
    },
    {
        id: "faq-10",
        category: "asas-simpanan",
        question: "Apakah kelebihan emas berbanding aset lain?",
        answer: "1. Emas boleh dijadikan <strong>'ubat mujarab' untuk penyakit boros</strong> dan masalah simpanan yang sentiasa bocor.<br><br>2. Emas <strong>penyimpan nilai paling ampuh</strong> dalam sejarah manusia. Simpan emas, kekayaan kita <strong>selamat dari inflasi dan risiko kejatuhan ringgit</strong> dalam jangka panjang. 1 dinar masih mampu membeli seekor kambing sejak 1400 dulu hingga sekarang, sedangkan nilai duit semakin kecil dari tahun ke tahun.<br><br>3. Emas adalah <strong>aset fizikal mampu milik</strong>. Tidak seperti hartanah, kita boleh memiliki emas walaupun dengan bajet kecil, <strong>sekecil item 1 gram</strong> (bajet sekitar RM300).<br><br>4. Emas adalah <strong>aset kewangan yang tidak boleh dibekukan</strong> oleh kerajaan. Orang bankrup ataupun sesiapa namanya disenarai-hitamkan juga boleh memiliki emas. Ia <strong>aset terbaik untuk sorokkan kekayaan</strong> dan sebagai <strong>benteng terakhir kewangan keluarga</strong> kerana tidak ada siapa yang tahu berapa banyak emas yang kita miliki."
    },
    {
        id: "faq-11",
        category: "asas-simpanan",
        question: "Berapakah jumlah simpanan emas setiap orang patut ada?",
        answer: "Letakkan target sekurang-kurangnya <strong>100 gram emas untuk satu keluarga</strong>. Bila sudah capai 100 gram pertama, target seterusnya ialah memiliki <strong>1 kilogram emas untuk satu keluarga</strong>. Mulakan tabiat simpan <strong>1 gram 1 bulan</strong> dulu.<br><br>Menurut pakar kewangan Tuan Azizi Ali, setiap kita patut simpan <strong>sekurang-kurangnya 10% daripada jumlah kekayaan (nett worth)</strong> kita dalam bentuk emas sebagai benteng terakhir kekayaan kita.<br><br>Ini disebabkan nilainya terjamin dan tidak terjejas walauapapun keadaan ekonomi ataupun politik sesebuah negara."
    },
    {
        id: "faq-12",
        category: "asas-simpanan",
        question: "Apakah perkara penting yang perlu tahu untuk elakkan kerugian dalam pelaburan emas?",
        answer: "1. Simpanan <strong>emas tiada pendapatan</strong> bulanan atau tahunan macam dividen ASB/Tabung Haji. Yang ada cuma, beli harga rendah dan jual harga tinggi untuk dapat keuntungan. Mana-mana pelaburan emas yang menjanjikan pendapatan, itu semua scam.<br><br>2. <strong>Beli emas mesti dapat emas (fizikal)</strong>, sama macam beli emas di kedai-kedai emas. Emas itu kita boleh simpan sendiri, tanpa ada syarat mesti simpan dengan mana-mana syarikat untuk tempoh tertentu.<br><br>3. Emas sesuai untuk simpanan jangka panjang, <strong>sekurang-kurangnya 2 tahun ke atas</strong>. Emas tak sesuai dibeli dengan duit yang nak digunakan pada waktu terdekat.<br><br>4. Beli emas bermaksud simpan duit. <strong>Beli emas duit tak habis</strong>. Bila nak pakai duit, boleh jual atau pajak sahaja pada bila-bila masa.<br><br>5. Transaksi jual beli emas terdedah kepada risiko terkait dengan aktiviti \"gubahan wang haram\" (AMLA) yang dipantau selia oleh Bank Negara Malaysia (BNM). Untuk elakkan ditipu atau terkait dengan isu AMLA, <strong>pastikan jual beli emas hanya dengan syarikat yang sudah trusted dan berkredibiliti sahaja</strong>. Bukan dari mana-mana individu yang tidak dikenali."
    },
    {
        id: "faq-13",
        category: "asas-simpanan",
        question: "Adakah sesuai beli emas dengan duit pinjaman?",
        answer: "Tak sesuai. Emas hanya sesuai dibeli dengan duit simpanan jangka panjang, sekurang-kurangnya 2 tahun ke atas.<br><br>Kalau masih ada hutang yang cajnya mahal seperti kad kredit (dengan kadar interest 18% setahun), lebih baik fokus langsaikan hutang terlebih dahulu.<br><br>Tak berbaloi simpan emas yang keuntungannya sekitar 10%, sedangkan kos pinjaman yang masih tertanggung lebih tinggi - melebihi 10%."
    },
    {
        id: "faq-14",
        category: "asas-simpanan",
        question: "Duit yang manakah sesuai digunakan untuk beli emas?",
        answer: "<strong>Apa sahaja duit untuk simpanan sekurang-kurangnya 2 tahun dan ke atas</strong>, ia sesuai ditukarkan kepada bentuk emas.<br><br>Emas sesuai dijadikan simpanan jangka panjang seperti dana perkahwinan, deposit beli rumah, dana haji atau umrah, dana pendidikan anak-anak, dana persaraan atau lain-lain."
    },
    {
        id: "faq-15",
        category: "asas-simpanan",
        question: "Berapakah jumlah emas yang dikenakan zakat?",
        answer: "Emas simpanan dikenakan zakat <strong>2.5%</strong> sekiranya cukup <strong>85 gram</strong> (bersamaan 20 dinar), dan disimpan untuk tempoh minimum 1 tahun (berdasarkan kalendar hijrah).<br><br>Barang kemas juga dikenakan zakat sekiranya jumlah emas tersebut melebihi uruf yang ditetapkan oleh Majlis Agama Islam (mengikut negeri masing-masing).<br><br>Maklumat lanjut tentang cara pengiraan zakat, sila rujuk di <a href='https://www.zakat.com.my/info-zakat/jenis-jenis-zakat/zakat-emas' target='_blank' rel='noopener'>https://www.zakat.com.my/info-zakat/jenis-jenis-zakat/zakat-emas</a>"
    },

    // ========================================================
    // Kategori 2: Memilih Emas Terbaik
    // ========================================================
    {
        id: "faq-16",
        category: "memilih-emas",
        question: "Apakah kriteria memilih emas terbaik untuk pelaburan?",
        answer: "Apa jenama pun tak kisah. Kalau beli dengan tujuan pelaburan (untuk menjual pada harga lebih tinggi pada masa akan datang), kena pastikan 5 kriteria ini:<br><br>1. <strong>Harga</strong> per gram rendah<br>2. <strong>Spread</strong> ('susut nilai') nipis - supaya cepat dapat keuntungan<br>3. <strong>Stok</strong> tiada had - supaya kita berpeluang beli banyak ketika harga rendah<br>4. <strong>Cawangan</strong> jual beli banyak - supaya memudahkan urusan<br>5. <strong>Jaminan beli balik</strong> tanpa syarat yang cerewet - supaya mudah dijual pada harga tinggi<br><br>Boleh baca penerangan lanjut dari guru emas saya Tuan Mohd Zulkifli Shafie <a href='https://www.mohdzulkifli.com/2012/05/5-kriteria-penting-memilih-emas-pelaburan.html' target='_blank' rel='noopener'>DI SINI</a>."
    },
    {
        id: "faq-17",
        category: "memilih-emas",
        question: "Apakah jenama emas terbaik di Malaysia?",
        answer: "Ada banyak jenama emas di Malaysia. Tapi ini jenama emas pelaburan (emas fizikal) yang paling bereputasi di Malaysia dan bagus untuk 'pelaburan'.<br><br>1. <strong>Public Gold</strong> - lebih 80% penyimpan emas di Malaysia memilih Public Gold. Ia jenama yang paling mudah dibeli, dan paling mudah dijual, serta diterima meluas oleh institusi ar-rahnu (mudah untuk dipajak).<br>2. <strong>Kijang Emas</strong> (Maybank)<br>3. <strong>UOB Bank</strong> - menjual emas pelbagai jenama antarabangsa<br>4. <strong>Bank Muamalat</strong> - menjual emas jenama Perth Mint (Australia)"
    },
    {
        id: "faq-18",
        category: "memilih-emas",
        question: "Apakah kelebihan emas Public Gold yang menjadi pilihan no. 1 penyimpan emas Malaysia?",
        answer: "Lebih 80% penyimpan emas di Malaysia memilih emas Public Gold. Ia menjadi jenama pilihan no. 1 di Malaysia kerana <strong>mudah dibeli, mudah dijual</strong> dan <strong>disahkan patuh syariah</strong>.<br><br>Selain daripada itu, kelebihan emas Public Gold:<br>1. <strong>Harga</strong> lebih murah sekitar 15% berbanding kedai emas.<br>2. <strong>Spread</strong> yang rendah - 6% - 9% sahaja.<br>3. <strong>Cawangan jual beli</strong> banyak - 16 cawangan di Malaysia, 5 cawangan di Indonesia.<br>4. Boleh dibeli <strong>secara online 100%</strong> - transaksi boleh dibuat 24 jam sehari, dan Public Gold hantarkan terus emas kepada pembeli menggunakan servis pos berinsurans.<br>5. <strong>Stok tiada had</strong> - boleh beli emas tanpa had walaupun ketika harga emas sedang jatuh.<br>6. <strong>Jaminan beli balik</strong> - Public Gold jamin beli balik emas jenamanya pada harga tinggi walaupun emas tersebut calar, bengkok, ataupun kemek.<br>7. Servis <strong>simpan emas percuma</strong> melalui Akaun Emas GAP - tak perlu bimbang di mana nak simpan emas yang dibeli.<br>8. <strong>Rekod bersih</strong> - 100% pembeli emas Public Gold dapat emas yang dibeli; sejak mula beroperasi pada tahun 2008 hingga sudah lebih 1 juta penyimpan emas berdaftar."
    },

    // ========================================================
    // Kategori 3: Strategi Jual, Beli dan Pajak
    // ========================================================
    {
        id: "faq-19",
        category: "strategi-emas",
        question: "Bila waktu terbaik beli emas?",
        answer: "<strong>Waktu terbaik ialah bila ada duit untuk simpanan sekurang-kurangnya 2 tahun dan ke atas</strong>, dan sudah faham perkara paling asas tentang emas.<br><br>Jangan tunggu harga terbaik, sebab tak siapa tahu bila harga emas paling rendah, kecuali harga tersebut sudahpun jadi sejarah.<br><br>Dalam jangka pendek, harga emas memang ada turun naik. Tapi dalam jangka panjang, harga emas <em>confirm</em> akan naik disebabkan kuasa beli duit kertas yang sentiasa merosot.<br><br>Untuk faham harga emas tinggi rendah, <strong>mulakan dulu dengan belian pertama sekurang-kurangnya 1 gram untuk dijadikan sebagai benchmark</strong>.<br><br>Selagi emas fizikal ada di tangan, dan kita beli untuk simpanan jangka panjang, risiko kerugian sangat tipis."
    },
    {
        id: "faq-20",
        category: "strategi-emas",
        question: "Bila waktu terbaik jual emas?",
        answer: "Waktu terbaik jual emas ialah pada 3 keadaan;<br><br>1. Ada <strong>peluang tukarkan kepada aset yang lebih baik</strong>, seperti peluang beli rumah pelaburan di bawah harga pasaran, atau digunakan untuk <em>rolling</em> modal bisnes.<br>2. Sudah <strong>capai matlamat simpanan</strong>, seperti sampai waktu menunaikan haji, anak nak masuk universiti, atau cukup untuk dijadikan deposit membeli rumah.<br>3. Ada <strong>hal kecemasan</strong>, iaitu ketika mana duit simpanan kecemasan sudah habis."
    },
    {
        id: "faq-21",
        category: "strategi-emas",
        question: "Kalau nak pakai duit, di mana tempat terbaik jual emas?",
        answer: "<strong>Tempat terbaik jual emas ialah tempat di mana kita membelinya.</strong><br><br>Kalau emas Public Gold, jual kembali kepada Public Gold. Kalau emas Poh Kong, jual kembali ke kedai emas Poh Kong.<br><br>Ini kerana pengeluar asal akan membelinya pada harga yang lebih tinggi berbanding anda menjualnya di tempat lain."
    },
    {
        id: "faq-22",
        category: "strategi-emas",
        question: "Adakah bagus jual barang kemas yang tak dipakai dan beli gold bar / dinar?",
        answer: "Saya tak sarankan. Jual barang kemas hanya bila perlukan duit.<br><br>Kalau jual barang kemas untuk beli gold bar, kita akan kerugian dua kali \"spread\" (potongan harga). Iaitu spread barang kemas (25% - 40%) dan spread gold bar yang baru dibeli (bawah 10%).<br><br>Kalau simpan sahaja barang kemas tersebut, kita hanya dikenakan sekali \"spread\" sahaja."
    },
    {
        id: "faq-23",
        category: "strategi-emas",
        question: "Jual atau pajak, yang mana lebih baik?",
        answer: "Secara idealnya, penyimpan emas tegar tak jual emas mereka kecuali dalam 3 keadaan (Tukar aset lebih baik, capai matlamat, hal kecemasan).<br><br>Selain daripada 3 keadaan ini, penyimpan emas tegar akan pajak emas mereka kalau perlukan tunai segera, dan akan tebus semula secepat mungkin dalam masa 6 - 12 bulan.<br><br><strong>Sekiranya anda tak mampu tebus emas tersebut dalam masa 6 - 12 bulan, pilihan terbaik ialah jual sahaja emas tersebut.</strong>"
    },
    {
        id: "faq-24",
        category: "strategi-emas",
        question: "Adakah berbaloi kalau pajak emas sedia ada untuk beli lagi emas yang baru?",
        answer: "Dalam banyak keadaan, ianya <strong>tak berbaloi</strong>. Bahkan risiko rugi lebih besar berbanding potensi keuntungan.<br><br>Ini disebabkan kos pajakan ar-rahnu yang mahal iaitu sekitar 1.15% sebulan atau 13.8% setahun. Sedangkan harga emas naik sekitar 10% sahaja setahun kalau berdasarkan sejarah 20 tahun harga emas."
    },

    // ========================================================
    // Kategori 4: Transaksi Emas Public Gold
    // ========================================================
    {
        id: "faq-25",
        category: "transaksi-pg",
        question: "Bagaimana cara daftar sebagai ahli Public Gold?",
        answer: "Daftar di sini (percuma) :<br><br>• <a href='https://publicgold.com.my/index.php?route=account/register&intro_pgcode=PG00556711&is_dealer=1' target='_blank' rel='noopener'><strong>AKAUN DEWASA</strong></a><br>• <a href='https://publicgold.com.my/index.php?route=account/register&form_type=ja&intro_pgcode=PG00556711&is_dealer=1' target='_blank' rel='noopener'><strong>AKAUN JUNIOR (bawah 18 tahun)</strong></a><br><br>Setelah berjaya daftar, download <strong>aplikasi \"Public Gold\"</strong> untuk buat pembelian cara yang lebih mudah.<br><br>• <a href='https://play.google.com/store/apps/details?id=com.pgmapp.publicgold&pli=1' target='_blank' rel='noopener'>Android</a><br>• <a href='https://apps.apple.com/my/app/public-gold/id1591580964' target='_blank' rel='noopener'>iOS</a><br><br>Contact saya di Whatsapp jika ada sebarang persoalan dan nak join support group penyimpan emas di bawah bimbingan saya.<br><br>Bagi yang sudah ada \"PG Code\" (user ID Public Gold), boleh gunakan PG Code sedia ada untuk login dan buat pembelian."
    },
    {
        id: "faq-26",
        category: "transaksi-pg",
        question: "Berapa bajet paling minimum untuk memulakan simpanan emas?",
        answer: "Dengan Public Gold, boleh mula menabung emas dengan bajet serendah <strong>RM100</strong> melalui Akaun Emas GAP.<br><br>Dan boleh tambah tabungan pada bila-bila masa dengan bajet minimum RM100 setiap kali pembelian.<br><br>Tidak ada syarat wajib untuk beli setiap bulan.<br><br>Item paling kecil boleh dikeluarkan dari Akaun GAP ialah gold bar 0.5 gram (berketulenan 999.9) pelbagai design."
    },
    {
        id: "faq-27",
        category: "transaksi-pg",
        question: "Bolehkah beli terus secara walk-in di branch Public Gold terdekat?",
        answer: "Public Gold tak terima belian secara walk-in.<br><br>Untuk keselesaan hampir 1 juta pelanggan, branch Public Gold hanya berikan servis untuk pelanggan yang nak collect item emas bersaiz besar (yang tidak boleh dihantar melalui GIT i.e. pos berinsurans), iaitu item 50 gram / 10 dinar (42.5 gram) ke atas.<br><br>Untuk datang collect emas, kena order, buat pembayaran, dan set appointment terlebih dahulu.<br><br>Untuk item kecil (item 5 dinar / 20 gram ke bawah), Public Gold akan pos terus dari HQ Penang menggunakan servis Gold-in-Transit (GIT).<br><br>Untuk pembelian, ikut panduan <a href='https://pg2u.my/wanhasbullah/cara-bermula' target='_blank' rel='noopener'>DI SINI</a>."
    },
    {
        id: "faq-28",
        category: "transaksi-pg",
        question: "Adakah servis GIT (pos emas berinsurans) yang disediakan oleh Public Gold dijamin selamat?",
        answer: "Ya. Public Gold jamin emas tersebut selamat sampai kepada pelanggan atau digantikan yang dengan baru sekiranya berlaku kehilangan.<br><br>Setiap parcel dilindungi insuran 100%. Limit berat emas dalam satu parcel ialah 21.25 gram (bersamaan dengan 5 dinar)"
    },
    {
        id: "faq-29",
        category: "transaksi-pg",
        question: "Kalau nak pakai duit, bagaimana cara nak jual balik emas Public Gold?",
        answer: "Kalau <strong>emas fizikal</strong> yang ada di tangan, bawa sahaja emas tersebut ke mana-mana cawangan Public Gold terdekat. Boleh <strong>terus datang walk-in</strong> tanpa perlu buat appointment.<br><br>Jika jualan emas dilakukan sebelum 12.30 tengah hari, Public Gold akan buat bayaran ke akaun bank penjual pada hari yang sama.<br><br>Jika selepas jam 12.30 tengah hari, Public Gold akan membuat bayaran dalam masa 2 - 3 hari bekerja."
    },
    {
        id: "faq-30",
        category: "transaksi-pg",
        question: "Macam mana cara nak pastikan ketulenan emas yang dijual oleh Public Gold?",
        answer: "Setiap kepingan emas Public Gold didatangkan bersama sijil ketulenan yang disahkan oleh assayer (penilai) bebas.<br><br>Kalau mahu, boleh minta staff Public Gold uji ketulenan emas yang dibeli menggunakan \"densimeter\". Caj perkhidmatan dikenakan untuk setiap emas yang diuji tersebut.<br><br>Sejak mula beroperasi pada tahun 2008, belum ada sebarang laporan tentang isu ketulenan emas keluaran Public Gold."
    },
    {
        id: "faq-31",
        category: "transaksi-pg",
        question: "Emas apa yang Public Gold tak terima untuk buyback (jual)?",
        answer: "Antara emas yang <strong>tidak dibeli oleh Public Gold</strong> ialah :<br><br>• Emas serbuk (paper gold)<br>• Emas dibawah 0.5gram jenama selain Public Gold<br>• Semua jenis emas putih<br><br>Emas (yellow gold) berketulenan 750 (18k) dan kebawah perlu diuji dan dinilai terlebih dahulu. Untuk kepastian, digalakkan untuk bawa emas tersebut ke cawangan Public Gold berhampiran."
    },

    // ========================================================
    // Kategori 5: Akaun Emas GAP
    // ========================================================
    {
        id: "faq-32",
        category: "akaun-gap",
        question: "Bagaimanakah sistem Akaun Emas GAP (Gold Accumulation Program) berfungsi?",
        answer: "Akaun Emas GAP ialah kemudahan yang disediakan oleh Public Gold untuk membolehkan anda mengumpul emas fizikal dengan modal yang kecil (minimum RM100 atau 1 gram). Emas disimpankan secara percuma oleh Public Gold tanpa had masa, dan anda boleh mengeluarkan emas fizikal tersebut dalam bentuk gold bar atau dinar di mana-mana cawangan berhampiran pada bila-bila masa."
    },
    {
        id: "faq-33",
        category: "akaun-gap",
        question: "Bagaimana cara buka Akaun Emas GAP?",
        answer: "Daftar di sini (percuma) :<br><br>• <a href='https://publicgold.com.my/index.php?route=account/register&intro_pgcode=PG00556711&is_dealer=1' target='_blank' rel='noopener'><strong>AKAUN DEWASA</strong></a><br>• <a href='https://publicgold.com.my/index.php?route=account/register&form_type=ja&intro_pgcode=PG00556711&is_dealer=1' target='_blank' rel='noopener'><strong>AKAUN JUNIOR (bawah 18 tahun)</strong></a><br><br>Setelah berjaya daftar, download <strong>aplikasi \"Public Gold\"</strong> untuk buat pembelian cara yang lebih mudah.<br><br>• <a href='https://play.google.com/store/apps/details?id=com.pgmapp.publicgold&pli=1' target='_blank' rel='noopener'>Android</a><br>• <a href='https://apps.apple.com/my/app/public-gold/id1591580964' target='_blank' rel='noopener'>iOS</a><br><br>Contact saya di Whatsapp jika ada sebarang persoalan dan nak join support group penyimpan emas di bawah bimbingan saya.<br><br>Bagi yang sudah ada \"PG Code\" (user ID Public Gold), boleh gunakan PG Code sedia ada untuk login dan buat pembelian."
    },
    {
        id: "faq-34",
        category: "akaun-gap",
        question: "Emas fizikal atau Akaun Emas GAP, yang mana lebih baik?",
        answer: "Simpanan emas terbaik ialah emas fizikal yang ada di tangan kita sendiri. Ia lebih terjamin.<br><br>Cuma <strong>untuk pastikan kita menabung secara KONSISTEN, saya lebih suka Akaun Emas GAP</strong>. Ia lebih mudah, dan lebih fleksibel.<br><br><strong>GAP juga emas fizikal</strong>. Kita boleh menabung dengan bajet serendah RM100. Bila cukup gram dan nak keluarkan emas fizikal untuk simpan sendiri, boleh minta Public Gold poskan pada bila-bila masa."
    },
    {
        id: "faq-35",
        category: "akaun-gap",
        question: "Berapa caj simpan emas dengan Public Gold?",
        answer: "Percuma. Tiada sebarang caj, tiada had masa, tiada limit jumlah emas yang boleh kita simpan di dalam Akaun Emas GAP."
    },
    {
        id: "faq-36",
        category: "akaun-gap",
        question: "Berapakah umur paling minimum boleh buka Akaun Emas GAP?",
        answer: "Bayi yang sudah ada dokumen <strong>sijil daftar kelahiran (surat beranak)</strong> sudah boleh buka Akaun Emas GAP.<br><br>Untuk anak-anak yang <strong>belum cukup 18 tahun</strong>, boleh buka <strong>Akaun GAP Junior</strong>. Iaitu akaun bersama dengan ibu, atau bapa, atau penjaga yang sah."
    },
    {
        id: "faq-37",
        category: "akaun-gap",
        question: "Kalau nak pakai duit, macam mana cara nak jual balik emas GAP?",
        answer: "Kalau emas masih di dalam <strong>Akaun Emas GAP</strong>, login aplikasi \"Public Gold\", <strong>klik butang \"Sell\"</strong>.<br><br>Jika jualan emas GAP dilakukan sebelum 12.30 tengah hari, Public Gold akan buat bayaran ke akaun bank penjual pada hari yang sama.<br><br>Jika selepas jam 12.30 tengah hari, Public Gold akan membuat bayaran dalam masa 2 - 3 hari bekerja."
    },
    {
        id: "faq-38",
        category: "akaun-gap",
        question: "Macam mana cara keluarkan emas fizikal dari Akaun GAP?",
        answer: "Login aplikasi &gt; tekan butang \"Withdraw\".<br><br>Bagi <strong>item kecil</strong> (bawah 5 dinar / 20 gram), minta Public Gold poskan dengan ikut langkah Withdraw di aplikasi. Setiap parcel dilindungi insuran 100%. Limit berat emas dalam satu parcel 21.25 gram (bersamaan 5 dinar).<br><br>Untuk keluarkan <strong>item besar</strong> (50 gram dan 10 Dinar ke atas), boleh <strong>buat temujanji</strong> untuk keluarkan di cawangan berhampiran. Datang ke cawangan pada tarikh dan masa yang ditetapkan.<br><br>Bawa juga kad pengenalan dan bersedia untuk bayar caj premium untuk setiap keping emas."
    },
    {
        id: "faq-39",
        category: "akaun-gap",
        question: "Adakah Public Gold bayarkan zakat bagi emas yang disimpan di dalam Akaun Emas GAP?",
        answer: "Tidak. Setiap penyimpan emas kena keluarkan zakat sendiri sekiranya jumlah emas yang disimpan sudah cukup haul dan nisab.<br><br>Sila rujuk kiraan zakat di <a href='https://www.zakat.com.my' target='_blank' rel='noopener'>https://www.zakat.com.my</a>"
    },
    {
        id: "faq-40",
        category: "akaun-gap",
        question: "Adakah simpan emas GAP dikenakan zakat?",
        answer: "Ya, jika cukup haul (tempoh setahun hijrah) dan nisab (minimum 85 gram).<br><br>Emas GAP adalah sempurna milik. Ia perlu dikira sama seperti emas yang disimpan sendiri. Bila nak kira zakat, kena jumlahkan kesemua emas yang disimpan sendiri + Akaun GAP.<br><br>Cara pengiraan zakat emas, sila rujuk website <a href='https://www.zakat.com.my/info-zakat/jenis-jenis-zakat/zakat-emas' target='_blank' rel='noopener'>https://www.zakat.com.my/info-zakat/jenis-jenis-zakat/zakat-emas</a>"
    },
    {
        id: "faq-41",
        category: "akaun-gap",
        question: "Kalau pemilik Akaun GAP meninggal dunia, macam mana cara nak tuntut emas tersebut?",
        answer: "Ahli waris kena datang ke branch Public Gold terdekat, serahkan dokumen berikut:<br><br>1. Surat Kematian<br>2. Surat kuasa pentadbir harta pusaka dari mahkamah<br>3. IC pewaris<br>4. Surat pengesahan hubungan dengan si mati i.e. Sijil Nikah, Sijil Kelahiran<br><br>Public Gold ikut prosedur biasa urus harta si mati, sama macam duit dalam akaun bank."
    },

    // ========================================================
    // Kategori 6: Bisnes Emas Public Gold
    // ========================================================
    {
        id: "faq-42",
        category: "bisnes-emas",
        question: "Apakah keuntungan menjadi dealer Public Gold?",
        answer: "Dealer dibayar insentif (komisyen) atas belian sendiri, dan atas pembelian setiap customer yang dia introduce (register).<br><br>Dealer boleh dapat keuntungan dalam apa juga keadaan harga emas. Selain untung atas kenaikan harga emas, dealer untung atas setiap transaksi yang dibuat oleh pelanggan yang berjaya dibimbing dan didaftarkan dengan Public Gold.<br><br>Dapatkan maklumat lanjut <a href='https://pg2u.my/wanhasbullah/pgdealer' target='_blank' rel='noopener'>DI SINI</a>."
    },
    {
        id: "faq-43",
        category: "bisnes-emas",
        question: "Bagaimana cara jadi dealer Public Gold?",
        answer: "Ini syarat jadi dealer Public Gold (PG);<br><br>1. <strong>Tanpa promosi</strong> : Beli emas <strong>200 gram</strong> dalam 1 invois, free jadi dealer.<br><br>2. <strong>Promosi</strong> : Kadang-kadang ada promosi beli set emas berjumlah sekitar RM15k +/- sudah layak jadi dealer. Boleh cek <a href='https://pg2u.my/wanhasbullah/promosi-terkini' target='_blank' rel='noopener'>DI SINI</a>.<br><br>3. <strong>Wajib join 2 training</strong> untuk layak jadi upgrade jadi dealer iaitu <strong>PLT (PG Leadership Training)</strong> dan <strong>NDO (New Dealer Orientation)</strong> beserta <strong>lulus assesement dealer</strong> di PGO (Public Gold official). Kedua-dua training dijalankan adalah secara online."
    },
    {
        id: "faq-44",
        category: "bisnes-emas",
        question: "Bagaimanakah cara untuk menjana pendapatan sebagai Dealer Public Gold?",
        answer: "Sebagai dealer Public Gold, anda boleh menjana pendapatan pasif melalui komisen (insentif) daripada setiap transaksi belian dan jualan semula oleh pelanggan yang berdaftar di bawah struktur bimbingan anda. Insentif ini dibayar secara berterusan selagi pelanggan anda aktif melakukan transaksi."
    }
];
