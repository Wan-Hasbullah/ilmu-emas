/* ════════════════════════════════════════════════════════
   data.js — DATA TUTORIAL (dimuatkan SEBELUM app.js)
   ────────────────────────────────────────────────────────
   - "answer"    : penerangan sahaja (boleh guna <strong>, <em>, emoji).
                   Baris baru dalam template literal = baris baru dipaparkan.
   - "keywords"  : kata kunci tambahan untuk carian.
   - "tutorials" : senarai pautan, dipaparkan sebagai "Tutorial Berkaitan".
   - "id" mesti unik (digunakan untuk deep-link #id dan butang Kongsi).
   ════════════════════════════════════════════════════════ */

const categories = {
    "akaun-profil":      { label: "Akaun dan Profil",                      icon: "👤" },
    "username-password": { label: "Username & Password",                   icon: "🔐" },
    "harga-semasa":      { label: "Semakan Harga Semasa",                  icon: "💹" },
    "akaun-gap":         { label: "Akaun Gold Accumulation Program (GAP)", icon: "🏦" },
    "kunci-harga":       { label: "Kunci Harga",                           icon: "🔒" },
    "jual-pajak":        { label: "Jualan/Pajak Emas",                     icon: "💎" },
    "dealer":            { label: "Cara Menjadi Dealer",                   icon: "🤝" },
    "customer-service":  { label: "Customer Service",                      icon: "🎧" }
};

const faqData = [
    {
        id: "kemaskini-butiran-akaun",
        category: "akaun-profil",
        question: "Kemaskini Butiran Akaun",
        answer: `Sebelum nak keluarkan emas fizikal, jualan balik (buyback) atau pajak emas melalui aplikasi Public Gold, anda perlu kemaskini profile terlebih dahulu untuk Public Gold sahkan pemilik akaun.`,
        keywords: ["kemaskini akaun", "profile", "profil", "butiran bank", "butiran peribadi", "sahkan akaun", "verify", "kyc"],
        tutorials: [
            {
                label: "Kemaskini Butiran Peribadi",
                description: "Panduan kemaskini maklumat peribadi",
                url: "https://pg2u.my/wanhasbullah/kemaskini-akaun#step1"
            },
            {
                label: "Kemaskini Butiran Bank",
                description: "Panduan kemaskini maklumat bank",
                url: "https://pg2u.my/wanhasbullah/kemaskini-akaun#step2"
            }
        ]
    },
    {
        id: "terlupa-username-password",
        category: "username-password",
        question: "Terlupa Username & Password",
        answer: `Jika terlupa username atau password, pilih tutorial yang berkaitan dibawah.`,
        keywords: ["lupa username", "lupa password", "lupa kata laluan", "reset password", "tukar password", "forgot id", "login", "log masuk", "id pengguna"],
        tutorials: [
            {
                label: "Username",
                description: "Cara semak semula username jika terlupa",
                url: "https://pg2u.my/wanhasbullah/forgot-id#step1"
            },
            {
                label: "Password",
                description: "Cara set semula password jika terlupa",
                url: "https://pg2u.my/wanhasbullah/forgot-id#step2"
            }
        ]
    },
    {
        id: "semakan-harga-semasa",
        category: "harga-semasa",
        question: "Semakan Harga Semasa",
        answer: `Buat makluman anda, di Public Gold merujuk kepada harga emas dunia dan di Public Gold mempunyai dua harga yang berbeza. Klik tutorial dibawah untuk lihat tutorial`,
        keywords: ["harga emas", "harga semasa", "harga dunia", "buy", "sell", "harga jual", "harga beli", "live price"],
        tutorials: [
            {
                label: "Semakan Harga Emas",
                description: "Cara semak harga emas semasa di aplikasi",
                url: "https://pg2u.my/wanhasbullah/harga-semasa"
            }
        ]
    },
    {
        id: "akaun-gold-accumulation-program-gap",
        category: "akaun-gap",
        question: "Akaun Gold Accumulation Program (GAP)",
        answer: `Tutorial lengkap proses Akaun Gold Accumulation Program (GAP)`,
        keywords: ["gap", "gold accumulation program", "akaun emas", "simpan emas", "tabung emas", "beli emas", "topup", "top up"],
        tutorials: [
            {
                label: "Akaun Emas GAP",
                description: "Panduan lengkap proses akaun GAP",
                url: "https://pg2u.my/wanhasbullah/allgap"
            }
        ]
    },
    {
        id: "outright-purchase",
        category: "kunci-harga",
        question: "Outright Purchase",
        answer: `🟢 Pembelian secara Outright Purchase berkonsepkan "Cash &amp; Carry". Public Gold sediakan dua kaedah :

1. Anda boleh kunci harga dan buat bayaran penuh (full payment)

2. Anda boleh kunci harga dan buat bayaran ansuran/bulanan mengikut jadual dan jumlah bayaran bulanan yang sudah ditetapkan.

🟢 Setelah anda berjaya kunci harga semasa, anda ikut langkah dibawah untuk proses pembayaran

🟢 Anda boleh membuat tuntutan emas selepas selesai pembayaran.`,
        keywords: ["outright", "kunci harga", "cash and carry", "full payment", "ansuran", "bulanan", "epp", "easy payment", "bayaran", "tuntutan emas", "withdrawal", "emas fizikal"],
        tutorials: [
            {
                label: "Full Payment",
                description: "Panduan pembayaran penuh",
                url: "https://pg2u.my/wanhasbullah/pembelian-full"
            },
            {
                label: "Easy Payment Purchase",
                description: "Panduan bayaran ansuran",
                url: "https://pg2u.my/wanhasbullah/pembelian-epp"
            },
            {
                label: "Pembayaran & Status Pembayaran",
                description: "Semakan dan status bayaran",
                url: "https://pg2u.my/wanhasbullah/bayaran-outright"
            },
            {
                label: "Tuntutan Emas",
                description: "Cara membuat tuntutan emas",
                url: "https://pg2u.my/wanhasbullah/withdrawal-outright"
            }
        ]
    },
    {
        id: "cara-jual-pajak-emas",
        category: "jual-pajak",
        question: "Bagaimana Cara Jual/pajak emas di Public Gold",
        answer: `Anda boleh ikut step dibawah`,
        keywords: ["jual emas", "pajak emas", "buyback", "jualan balik", "gadai", "pajak"],
        tutorials: [
            {
                label: "Jual/Pajak",
                description: "Langkah jual atau pajak emas di aplikasi",
                url: "https://pg2u.my/wanhasbullah/jual-pajak"
            }
        ]
    },
    {
        id: "cara-menjadi-dealer-public-gold",
        category: "dealer",
        question: "Bagaimana Cara Jual/pajak Menjadi Dealer Public Gold",
        answer: `Menjadi dealer Public Gold yang sah dibawah G100 Network mempunyai syarat tertentu, klik tutorial dibawah

Jika anda berminat menjana pendapatan tapi tidak berminat menjadi dealer yang sah, saya cadangkan anda join referrel (sama seperti affiliate).`,
        keywords: ["dealer", "g100", "g100 network", "referral", "referrel", "affiliate", "pendapatan", "duit tepi", "komisen", "syarat dealer"],
        tutorials: [
            {
                label: "Dealer Public Gold",
                description: "Syarat dan cara menjadi dealer yang sah",
                url: "https://pg2u.my/wanhasbullah/tutorial-dealer"
            },
            {
                label: "Referrel",
                description: "Jana pendapatan tanpa menjadi dealer",
                url: "https://ilmu-emas.pages.dev/#duit-tepi"
            }
        ]
    },
    {
        id: "cara-menghubungi-customer-service",
        category: "customer-service",
        question: "Bagaimana Cara Menghubungi Customer Service",
        answer: `Jika anda mempunyai sebarang masalah, anda boleh hubungi customer service.`,
        keywords: ["customer service", "cs", "hubungi", "bantuan", "masalah", "aduan", "support", "whatsapp"],
        tutorials: [
            {
                label: "Customer Service",
                description: "Cara menghubungi pasukan sokongan Public Gold",
                url: "https://pg2u.my/wanhasbullah/customer-service"
            }
        ]
    }
];
