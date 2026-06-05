// Logik Global: Utaliti Salin Pautan & Pengurusan UI
document.addEventListener("DOMContentLoaded", () => {
  setupGlobalClickHandlers();
});

// Sistem Salin Pautan Global
function copyGlobalLink(pathWithAnchor) {
  const fullUrl = window.location.origin + '/' + pathWithAnchor;
  navigator.clipboard.writeText(fullUrl).then(() => {
    showToastNotification("Pautan berjaya disalin!");
  }).catch(err => {
    console.error("Gagal menyalin pautan: ", err);
  });
}

// Komponen Toast Notification Premium
function showToastNotification(message) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-zinc-950 font-semibold px-6 py-3 rounded-full shadow-xl transition-all duration-500 ease-in-out opacity-0 translate-y-[-20px]";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove("opacity-0", "translate-y-[-20px]");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.remove("opacity-100", "translate-y-0");
    toast.classList.add("opacity-0", "translate-y-[-20px]");
  }, 3000);
}

// Bimbingan OneSignal Web Push Logik
// Sila konfigurasi kod OneSignal Init di bahagian header halaman web utama anda.
function initOneSignalTagging(categoryTag) {
  window.OneSignal = window.OneSignal || [];
  OneSignal.push(function() {
    OneSignal.sendTag(categoryTag, "1");
    showToastNotification(`Notifikasi bagi kategori ${categoryTag} diaktifkan!`);
  });
}

function setupGlobalClickHandlers() {
  // Pengurusan dropdown coffee global jika diperlukan melangkaui kawalan komponen fail biasa
}