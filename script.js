/**
 * Udin Nexus - Core Logic v2
 * Focus: Clean Architecture & UX
 */

const UI = {
  projects: [
    { n: "SmartMonefy", t: "Finance", u: "https://smartmonefy.vercel.app/", i: "fa-chart-pie" },
    { n: "Tugas Target", t: "Utility", u: "https://targetugas.lovable.app/", i: "fa-bullseye" },
    { n: "IlmQuran Reading", t: "Islamic", u: "https://IlmQuran-reading.vercel.app/", i: "fa-book-open" },
    { n: "SuperTik", t: "Tools", u: "https://supertik.vercel.app/", i: "fa-video" },
    { n: "PhoneSpecs", t: "Database", u: "https://phonespecs.vercel.app/", i: "fa-mobile-screen-button" },
    { n: "Lirikify", t: "Music", u: "https://lirikify.vercel.app/", i: "fa-music" },
    { n: "Fiqh AI", t: "AI", u: "https://f1qh-ai.vercel.app/", i: "fa-robot" },
    { n: "Cocokan Jodoh", t: "Fun", u: "https://cocokan-jodoh.vercel.app/", i: "fa-heart" },
    { n: "NewsHub Indo", t: "News", u: "https://newshub-1ndo.vercel.app/", i: "fa-newspaper" },
    { n: "PixelForge", t: "AI Editor", u: "https://pixelforge-a1.vercel.app/", i: "fa-magic" },
    { n: "Lumina AI", t: "AI Tools", u: "https://lumina-a1.vercel.app/", i: "fa-wand-magic-sparkles" },
    { n: "Nabung-ku", t: "Finance", u: "https://nabung-ku.vercel.app/", i: "fa-piggy-bank" },
    { n: "Kirim Cepat", t: "Social", u: "https://kirim-cepat.vercel.app/", i: "fa-brands fa-whatsapp" },
    { n: "AmbilKode", t: "Dev Tools", u: "https://ambilkode.vercel.app/", i: "fa-code" }
  ],

  render() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;

    grid.innerHTML = this.projects.map((p, i) => `
      <a href="${p.u}" class="project-card reveal" target="_blank" style="--delay: ${i * 50}ms">
        <div class="icon-box"><i class="fas ${p.i}"></i></div>
        <h3>${p.n}</h3>
        <span class="tag">${p.t}</span>
      </a>
    `).join('');
  },

  initObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Hemat performa: Stop amati elemen nang sudah muncul
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },

  handleLoader() {
    const loader = document.getElementById('intro-loader');
    if (!loader) return;

    // Tambah opacity transition
    loader.style.opacity = '0';
    
    setTimeout(() => {
      // Hapus matan DOM supaya kada mahambat klik
      loader.remove();
      // Pastikan scroll tabuka
      document.body.style.overflowY = "auto";
      // Trigger animasi awal
      this.initObserver();
    }, 600);
  }
};

// Main Entry Point
document.addEventListener('DOMContentLoaded', () => {
  UI.render();
  
  // Gunakan window.load gasan meyakini barataan gambar/asset tuntung
  window.addEventListener('load', () => {
    UI.handleLoader();
  });

  // Fallback: Mun loader nyangkut labih matan 3 detik, paksa hapus
  setTimeout(() => UI.handleLoader(), 3000);
});
