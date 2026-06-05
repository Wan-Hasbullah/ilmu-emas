/**
 * ==============================================================================
 * LOGIK PUSAT GLOBAL: FINTECH GOLD DEALERSHIP WEB APP (PREMIUM V5)
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initCoffeeDropdown();
    initBottomNavPopups();
    initGatekeeperAuth();
    initOneSignalMockPush();
});

/**
 * 1. FLOATING SUPPORT UI (COFFEE DROPDOWN)
 */
function initCoffeeDropdown() {
    // Untuk index.html
    const coffeeBtn = document.getElementById("coffee-btn");
    const coffeeDropdown = document.getElementById("coffee-dropdown");
    if (coffeeBtn && coffeeDropdown) {
        coffeeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            togglePopupElement(coffeeDropdown);
        });
    }

    // Untuk gold-saver.html
    const coffeeBtnGs = document.getElementById("coffee-btn-gs");
    const coffeeDropdownGs = document.getElementById("coffee-dropdown-gs");
    if (coffeeBtnGs && coffeeDropdownGs) {
        coffeeBtnGs.addEventListener("click", (e) => {
            e.stopPropagation();
            togglePopupElement(coffeeDropdownGs);
        });
    }

    // Tutup dropdown apabila klik di luar kawasan komponen
    document.addEventListener("click", () => {
        if (coffeeDropdown) hidePopupElement(coffeeDropdown);
        if (coffeeDropdownGs) hidePopupElement(coffeeDropdownGs);
    });
}

/**
 * 2. ANIMASI TRANSISI PREMIUM POPUP & NAVIGASI BAWAH
 */
function initBottomNavPopups() {
    // Pemilih elemen untuk Halaman Awam
    const menuBtn = document.getElementById("nav-menu-btn");
    const menuPopup = document.getElementById("menu-popup");
    const closeMenu = document.getElementById("close-menu-btn");

    const aksesBtn = document.getElementById("nav-akses-btn");
    const aksesPopup = document.getElementById("akses-popup");
    const closeAkses = document.getElementById("close-akses-btn");

    // Pemilih elemen untuk Halaman Gold Saver (Ahli)
    const menuBtnGs = document.getElementById("nav-menu-btn-gs");
    const menuPopupGs = document.getElementById("menu-popup-gs");
    const closeMenuGs = document.getElementById("close-menu-gs");

    const aksesBtnGs = document.getElementById("nav-akses-btn-gs");
    const aksesPopupGs = document.getElementById("akses-popup-gs");
    const closeAksesGs = document.getElementById("close-akses-gs");

    // Logik Pemicu Awam
    if (menuBtn && menuPopup) {
        menuBtn.addEventListener("click", () => openPremiumPopup(menuPopup));
        closeMenu.addEventListener("click", () => closePremiumPopup(menuPopup));
    }
    if (aksesBtn && aksesPopup) {
        aksesBtn.addEventListener("click", () => openPremiumPopup(aksesPopup));
        closeAkses.addEventListener("click", () => closePremiumPopup(aksesPopup));
    }

    // Logik Pemicu Ahli
    if (menuBtnGs && menuPopupGs) {
        menuBtnGs.addEventListener("click", () => openPremiumPopup(menuPopupGs));
        closeMenuGs.addEventListener("click", () => closePremiumPopup(menuPopupGs));
    }
    if (aksesBtnGs && aksesPopupGs) {
        aksesBtnGs.addEventListener("click", () => openPremiumPopup(aksesPopupGs));
        closeAksesGs.addEventListener("click", () => closePremiumPopup(aksesPopupGs));
    }
}

// Fungsi pembantu membuka popup dengan transisi premium Tailwind CSS
function openPremiumPopup(popupWrapper) {
    popupWrapper.classList.remove("hidden");
    popupWrapper.classList.add("flex");
    setTimeout(() => {
        const innerCard = popupWrapper.querySelector("div");
        innerCard.classList.remove("opacity-0", "translate-y-4");
        innerCard.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-500", "ease-in-out");
    }, 50);
}

function closePremiumPopup(popupWrapper) {
    const innerCard = popupWrapper.querySelector("div");
    innerCard.classList.remove("opacity-100", "translate-y-0");
    innerCard.classList.add("opacity-0", "translate-y-4");
    setTimeout(() => {
        popupWrapper.classList.remove("flex");
        popupWrapper.classList.add("hidden");
    }, 500);
}

function togglePopupElement(elem) {
    if (elem.classList.contains("hidden")) {
        elem.classList.remove("hidden");
        setTimeout(() => {
            elem.classList.remove("opacity-0", "translate-y-2");
            elem.classList.add("opacity-100", "translate-y-0");
        }, 10);
    } else {
        hidePopupElement(elem);
    }
}

function hidePopupElement(elem) {
    elem.classList.add("opacity-0", "translate-y-2");
    elem.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => elem.classList.add("hidden"), 500);
}

/**
 * 3. GATEKEEPER SECURE AUTH (KATA LALUAN PROSES)
 */
function initGatekeeperAuth() {
    const screen = document.getElementById("gatekeeper-screen");
    const content = document.getElementById("protected-content");
    const input = document.getElementById("gatekeeper-input");
    const btn = document.getElementById("gatekeeper-btn");

    if (!screen) return;

    // Semak sama ada sesi sebelum ini telah disahkan untuk memudahkan UX pengguna
    if (sessionStorage.getItem("gs_authenticated") === "true") {
        screen.classList.add("hidden");
        content.classList.remove("hidden");
        return;
    }

    btn.addEventListener("click", () => {
        if (input.value === "PGwan") {
            // Animasi Premium Fade-Out Skrin Sekatan
            screen.classList.add("opacity-0", "scale-95");
            setTimeout(() => {
                screen.classList.add("hidden");
                content.classList.remove("hidden");
                sessionStorage.setItem("gs_authenticated", "true");
                // Cetus popup push ahli sebaik sahaja berjaya log masuk
                triggerOneSignalPopup("gold-saver.html");
            }, 700);
        } else {
            alert("Kata laluan salah. Sila hubungi Wan Hasbullah.");
            input.value = "";
            input.focus();
        }
    });
}

/**
 * 4. PENGURUSAN INTEGRASI PUSH NOTIFICATION (ONESIGNAL WEB PUSH)
 */
function initOneSignalMockPush() {
    // Cetusan automatik bagi halaman utama awam sahaja, halaman ahli dicetuskan selepas auth skrin tamat
    if (document.getElementById("push-popup")) {
        setTimeout(() => triggerOneSignalPopup("index.html"), 1500);
    }

    // Pemicu manual butang navigasi akses awam & ahli
    const askNotifyBtn = document.getElementById("akses-notify");
    if (askNotifyBtn) askNotifyBtn.addEventListener("click", () => triggerOneSignalPopup("index.html"));

    const askNotifyBtnGs = document.getElementById("akses-notify-gs");
    if (askNotifyBtnGs) askNotifyBtnGs.addEventListener("click", () => triggerOneSignalPopup("gold-saver.html"));
}

function triggerOneSignalPopup(pageType) {
    if (pageType === "index.html") {
        const popup = document.getElementById("push-popup");
        if (!popup) return;
        popup.classList.remove("hidden");
        setTimeout(() => popup.classList.remove("translate-y-10", "opacity-0"), 10);
        
        document.getElementById("push-allow").onclick = () => registerOneSignalChannels();
        document.getElementById("push-deny").onclick = () => closePushCard(popup);
    } else if (pageType === "gold-saver.html") {
        const popupGs = document.getElementById("push-popup-gs");
        if (!popupGs) return;
        popupGs.classList.remove("hidden");
        setTimeout(() => popupGs.classList.remove("translate-y-10", "opacity-0"), 10);
        
        document.getElementById("push-allow-gs").onclick = () => registerOneSignalChannels();
        document.getElementById("push-deny-gs").onclick = () => closePushCard(popupGs);
    }
}

function closePushCard(elem) {
    elem.classList.add("translate-y-10", "opacity-0");
    setTimeout(() => elem.classList.add("hidden"), 500);
}

/**
 * BIMBINGAN INTEGRASI REAL ONESIGNAL SDK:
 * Untuk mengaktifkannya pada Cloudflare Pages, gantikan fungsi simulasi di bawah dengan skrip rasmi ini:
 * * window.OneSignal = window.OneSignal || [];
 * OneSignal.push(function() {
 * OneSignal.init({
 * appId: "YOUR_ONESIGNAL_APP_ID",
 * safari_web_id: "YOUR_SAFARI_WEB_ID",
 * notifyButton: { enable: false },
 * });
 * });
 */
function registerOneSignalChannels() {
    alert("Memproses pendaftaran Notifikasi...");
    
    // Konfigurasi 4 Saluran Notifikasi Mengikut Kategori (Segments/Tags)
    console.log("OneSignal Segments Registered: tags: { 'video': '1', 'artikel': '1', 'program': '1', 'info_terkini': '1' }");
    
    // Kod SDK Sebenar:
    // OneSignal.sendTags({ video: '1', artikel: '1', program: '1', info_terkini: '1' }).then(() => { ... });

    alert("Notifikasi Berjaya Diaktifkan! Anda kini melanggan saluran: Video, Artikel, Program & Info Terkini.");
    
    const p1 = document.getElementById("push-popup");
    const p2 = document.getElementById("push-popup-gs");
    if (p1) closePushCard(p1);
    if (p2) closePushCard(p2);
}

/**
 * 5. UTALITI PERKONGSIAN GLOBAL (COPY LINK GLOBAL)
 */
function globalCopyLink(urlPath) {
    navigator.clipboard.writeText(urlPath).then(() => {
        // Paparan notifikasi premium gantian alert lalai sistem
        const toast = document.createElement("div");
        toast.className = "fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-amber-400 text-zinc-950 text-xs font-bold px-6 py-3 rounded-full shadow-2xl tracking-wide transition-all duration-500 ease-in-out opacity-0 translate-y-[-20px]";
        toast.innerText = "Pautan berjaya disalin!";
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.remove("opacity-0", "translate-y-[-20px]");
            toast.classList.add("opacity-100", "translate-y-0");
        }, 50);

        setTimeout(() => {
            toast.classList.remove("opacity-100", "translate-y-0");
            toast.classList.add("opacity-0", "translate-y-[-20px]");
            setTimeout(() => toast.remove(), 500);
        }, 2500);
    }).catch(err => {
        console.error("Gagal menyalin pautan: ", err);
    });
}