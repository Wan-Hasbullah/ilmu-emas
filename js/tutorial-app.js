/* ════════════════════════════════════════════════════════
   app.js — LOGIC (bergantung pada data.js: categories, faqData)
   ════════════════════════════════════════════════════════ */

const ARROW_ICON = '<svg class="tut-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
const LIST_ICON = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="14" y2="14"/></svg>';
const SHARE_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';

// ── State ────────────────────────────────────────────────
let activeCategory = "all";
let searchQuery = "";
const searchIndex = new Map(); // id -> teks carian (huruf kecil)

// ── Helpers ──────────────────────────────────────────────
function escapeHTML(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function stripHTML(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return (tmp.textContent || "").replace(/\s+/g, " ");
}

function pad2(n) { return n < 10 ? "0" + n : String(n); }

function buildSearchIndex() {
    faqData.forEach(faq => {
        const parts = [
            faq.question,
            stripHTML(faq.answer),
            (faq.keywords || []).join(" "),
            (faq.tutorials || []).map(t => t.label + " " + (t.description || "")).join(" ")
        ];
        searchIndex.set(faq.id, stripHTML(parts.join(" ")).toLowerCase());
    });
}

// ── Build UI ─────────────────────────────────────────────
function buildTabs() {
    const wrap = document.getElementById("tabsContainer");
    wrap.innerHTML = "";
    const add = (cat, text) => {
        const b = document.createElement("button");
        b.className = "tab-btn" + (cat === activeCategory ? " active" : "");
        b.dataset.cat = cat;
        b.textContent = text;
        b.addEventListener("click", () => setCategory(cat, true));
        wrap.appendChild(b);
    };
    const cc = document.getElementById("catCount");
    if (cc) cc.textContent = Object.keys(categories).length + " kategori utama";
    add("all", "Semua");
    Object.keys(categories).forEach(k => add(k, categories[k].label));
}

function renderTutorials(list) {
    if (!list || !list.length) return "";
    const items = list.map((t, i) => `
        <a class="tut-item" href="${escapeHTML(t.url)}" target="_blank" rel="noopener noreferrer">
            <span class="tut-num">${pad2(i + 1)}</span>
            <span class="tut-body">
                <span class="tut-label">${escapeHTML(t.label)}</span>
                ${t.description ? `<span class="tut-desc">${escapeHTML(t.description)}</span>` : ""}
            </span>
            ${ARROW_ICON}
        </a>`).join("");
    return `<div class="tut-section"><div class="tut-title">${LIST_ICON}<span>Tutorial Berkaitan</span></div><div class="tut-list">${items}</div></div>`;
}

function buildFAQ() {
    const container = document.getElementById("faqContainer");
    container.innerHTML = "";

    faqData.forEach(faq => {
        const cfg = categories[faq.category] || { label: "", icon: "📘" };
        const card = document.createElement("div");
        card.className = "faq-card";
        card.dataset.id = faq.id;
        card.dataset.cat = faq.category;
        card.innerHTML = `
            <div class="faq-question">
                <span class="faq-icon">${cfg.icon}</span>
                <span class="faq-head">
                    <span class="faq-question-text">${escapeHTML(faq.question)}</span>
                    <span class="faq-cat">${escapeHTML(cfg.label)}</span>
                </span>
                <span class="faq-chevron">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner">
                    <div class="faq-answer-body">${faq.answer.trim()}</div>
                    ${renderTutorials(faq.tutorials)}
                    <div style="display:flex; justify-content:flex-end;">
                        <button class="faq-copy-btn" type="button">${SHARE_ICON}<span>Kongsi Tutorial</span></button>
                    </div>
                </div>
            </div>`;

        card.querySelector(".faq-question").addEventListener("click", () => toggleCard(card));
        const copyBtn = card.querySelector(".faq-copy-btn");
        copyBtn.addEventListener("click", () => copyFaqLink(faq.id, copyBtn));
        container.appendChild(card);
    });

    applyFilters();
}

function toggleCard(card) {
    const isOpen = card.classList.contains("open");
    document.querySelectorAll(".faq-card.open").forEach(c => c.classList.remove("open"));
    if (!isOpen) card.classList.add("open");
}

// ── Filters (kategori + carian) ──────────────────────────
function applyFilters() {
    const tokens = searchQuery.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;

    document.querySelectorAll(".faq-card").forEach(card => {
        const hay = searchIndex.get(card.dataset.id) || "";
        const catMatch = activeCategory === "all" || activeCategory === card.dataset.cat;
        const show = catMatch && tokens.every(t => hay.includes(t));
        card.classList.toggle("search-hidden", !show);
        if (show) count++;
    });

    document.getElementById("emptyState").classList.toggle("visible", count === 0);

    const title = document.getElementById("listTitle");
    const meta = document.getElementById("listCount");
    if (title) title.textContent = searchQuery.trim() ? "Hasil carian" : (activeCategory === "all" ? "Semua tutorial" : categories[activeCategory].label);
    if (meta) meta.textContent = count + " isu";
}

function setCategory(cat, closeCards) {
    activeCategory = cat;
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
    applyFilters();
    if (closeCards) document.querySelectorAll(".faq-card.open").forEach(c => c.classList.remove("open"));
}

// ── Search ───────────────────────────────────────────────
let searchTimer;
document.getElementById("searchInput").addEventListener("input", e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        searchQuery = e.target.value;
        if (searchQuery) setCategory("all", false);
        else applyFilters();
    }, 200);
});

// ── Scroll to top ────────────────────────────────────────
const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("visible", window.scrollY > 400);
}, { passive: true });
scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ── Sticky offset (ikut tinggi top bar) ──────────────────
function syncTopbarHeight() {
    const bar = document.getElementById("topBar");
    if (bar) document.documentElement.style.setProperty("--topbar-h", bar.offsetHeight + "px");
}
syncTopbarHeight();
window.addEventListener("resize", syncTopbarHeight);
window.addEventListener("load", syncTopbarHeight);

// ── Copy / Kongsi FAQ link ───────────────────────────────
function copyFaqLink(faqId, btn) {
    const url = window.location.href.split("#")[0] + "#" + faqId;
    const done = () => {
        btn.classList.add("copied");
        btn.querySelector("span").textContent = "Disalin!";
        setTimeout(() => {
            btn.classList.remove("copied");
            btn.querySelector("span").textContent = "Kongsi Tutorial";
        }, 2000);
    };
    const fallback = () => {
        const ta = document.createElement("textarea");
        ta.value = url; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        done();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done).catch(fallback);
    } else {
        fallback();
    }
}

// ── Deep link: scroll + pulse ────────────────────────────
function scrollAndPulseFaq(faqId) {
    const card = document.querySelector(`.faq-card[data-id="${faqId}"]`);
    if (!card) return;

    const cat = card.dataset.cat;
    if (activeCategory !== "all" && activeCategory !== cat) setCategory(cat, false);

    document.querySelectorAll(".faq-card.open").forEach(c => c.classList.remove("open"));
    card.classList.add("open");

    setTimeout(() => {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
            card.classList.remove("faq-highlight");
            void card.offsetWidth;
            card.classList.add("faq-highlight");
            card.addEventListener("animationend", () => card.classList.remove("faq-highlight"), { once: true });
        }, 600);
    }, 150);
}

function handleHash() {
    const hash = window.location.hash;
    if (hash) scrollAndPulseFaq(decodeURIComponent(hash.replace("#", "")));
}
window.addEventListener("DOMContentLoaded", handleHash);
window.addEventListener("hashchange", handleHash);

// ── Header: tabung, dropdown, modal pendaftaran ──────────
function toggleTabungMenu() {
    document.getElementById("tabung-dropdown").classList.toggle("show");
}
function triggerDaftarPopup() {
    const dropdown = document.getElementById("tabung-dropdown");
    if (dropdown) dropdown.classList.remove("show");
    const modal = document.getElementById("daftar-pilihan-modal");
    modal.style.display = "flex";
    void modal.offsetWidth;
    modal.style.opacity = "1";
}
function closeDaftarPopup() {
    const modal = document.getElementById("daftar-pilihan-modal");
    modal.style.opacity = "0";
    setTimeout(() => { modal.style.display = "none"; }, 300);
}
window.addEventListener("click", e => {
    const btn = document.getElementById("tabung-btn");
    const dropdown = document.getElementById("tabung-dropdown");
    if (btn && dropdown && !btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
    }
});

// ── Init ─────────────────────────────────────────────────
buildSearchIndex();
buildTabs();
buildFAQ();
