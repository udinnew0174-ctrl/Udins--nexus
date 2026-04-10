const projects = [
  { n: "SmartMonefy", t: "Finance", d: "Finance tracker cerdas gasan harian.", u: "https://smartmonefy.vercel.app/", i: "fas fa-chart-pie" },
  { n: "Tugas Target", t: "Utility", d: "Manajemen produktivitas simpel.", u: "https://targetugas.lovable.app/", i: "fas fa-bullseye" },
  { n: "IlmQuran Reading", t: "Islamic", d: "Baca Al-Qur'an modern.", u: "https://IlmQuran-reading.vercel.app/", i: "fas fa-book-open" },
  { n: "SuperTik", t: "Tools", d: "Download TikTok tanpa watermark.", u: "https://supertik.vercel.app/", i: "fas fa-video" },
  { n: "PhoneSpecs", t: "Database", d: "Database spek gadget lengkap.", u: "https://phonespecs.vercel.app/", i: "fas fa-mobile-screen-button" },
  { n: "Lirikify", t: "Music", d: "Cari lirik musik favorit.", u: "https://lirikify.vercel.app/", i: "fas fa-music" },
  { n: "Fiqh AI", t: "AI", d: "Asisten AI konsultasi hukum Islam.", u: "https://f1qh-ai.vercel.app/", i: "fas fa-robot" },
  { n: "Cocokan Jodoh", t: "Fun", d: "Analisis kecocokan pasangan.", u: "https://cocokan-jodoh.vercel.app/", i: "fas fa-heart" },
  { n: "NewsHub Indo", t: "News", d: "Agregasi berita nasional update.", u: "https://newshub-1ndo.vercel.app/", i: "fas fa-newspaper" },
  { n: "PixelForge", t: "AI Editor", d: "Bagusakan foto pakai AI.", u: "https://pixelforge-a1.vercel.app/", i: "fas fa-magic" },
  { n: "Lumina AI", t: "AI Tools", d: "Hapus background foto otomatis.", u: "https://lumina-a1.vercel.app/", i: "fas fa-wand-magic-sparkles" },
  { n: "Nabung-ku", t: "Finance", d: "Perencanaan tabungan masa depan.", u: "https://nabung-ku.vercel.app/", i: "fas fa-piggy-bank" },
  { n: "Kirim Cepat", t: "Social", d: "Kirim WA tanpa simpan nomor.", u: "https://kirim-cepat.vercel.app/", i: "fab fa-whatsapp" },
  { n: "AmbilKode", t: "Dev Tools", d: "Alat ambil kode web developer.", u: "https://ambilkode.vercel.app/", i: "fas fa-code" }
];

function render() {
  const grid = document.getElementById('project-grid');
  if (grid) {
    grid.innerHTML = projects.map((p, i) => `
      <a href="${p.u}" class="project-card reveal" target="_blank" style="transition-delay: ${i * 50}ms">
        <span style="font-size:0.6rem; color:#3b82f6; font-weight:800; display:block; margin-bottom:8px">${p.t}</span>
        <div class="icon-box"><i class="${p.i}"></i></div>
        <h3>${p.n}</h3>
        <p style="font-size:0.85rem; color:#94a3b8">${p.d}</p>
      </a>
    `).join('');
  }
}

window.addEventListener('load', () => {
  render();
  setTimeout(() => {
    // Hilangkan Loader
    const loader = document.getElementById('intro-loader');
    if (loader) loader.classList.add('hide-loader');

    // Buka kunci scroll
    document.body.style.overflowY = "auto";
    
    // Trigger Hero Animation
    const hero = document.querySelector('.hero-cover');
    if (hero) hero.classList.add('reveal-active');

    // Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal-active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .about-card, .project-card').forEach(el => observer.observe(el));
  }, 1000);
});
