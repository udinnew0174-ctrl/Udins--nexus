const projects = [
  { n: "SmartMonefy", t: "Finance", d: "Finance tracker cerdas gasan harian.", u: "https://smartmonefy.vercel.app/", i: "fa-chart-pie" },
  { n: "Tugas Target", t: "Utility", d: "Manajemen produktivitas simpel.", u: "https://targetugas.lovable.app/", i: "fa-bullseye" },
  { n: "IlmQuran Reading", t: "Islamic", d: "Baca Al-Qur'an modern.", u: "https://IlmQuran-reading.vercel.app/", i: "fa-book-open" },
  { n: "SuperTik", t: "Tools", d: "Download TikTok tanpa watermark.", u: "https://supertik.vercel.app/", i: "fa-video" },
  { n: "PhoneSpecs", t: "Database", d: "Database spek gadget lengkap.", u: "https://phonespecs.vercel.app/", i: "fa-mobile-screen-button" },
  { n: "Lirikify", t: "Music", d: "Cari lirik musik favorit.", u: "https://lirikify.vercel.app/", i: "fa-music" },
  { n: "Fiqh AI", t: "AI", d: "Asisten AI konsultasi hukum Islam.", u: "https://f1qh-ai.vercel.app/", i: "fa-robot" },
  { n: "Cocokan Jodoh", t: "Fun", d: "Analisis kecocokan pasangan.", u: "https://cocokan-jodoh.vercel.app/", i: "fa-heart" },
  { n: "NewsHub Indo", t: "News", d: "Agregasi berita nasional update.", u: "https://newshub-1ndo.vercel.app/", i: "fa-newspaper" },
  { n: "PixelForge", t: "AI Editor", d: "Bagusakan foto pakai AI.", u: "https://pixelforge-a1.vercel.app/", i: "fa-magic" },
  { n: "Lumina AI", t: "AI Tools", d: "Hapus background foto otomatis.", u: "https://lumina-a1.vercel.app/", i: "fa-wand-magic-sparkles" },
  { n: "Nabung-ku", t: "Finance", d: "Perencanaan tabungan masa depan.", u: "https://nabung-ku.vercel.app/", i: "fa-piggy-bank" },
  { n: "Kirim Cepat", t: "Social", d: "Kirim WA tanpa simpan nomor.", u: "https://kirim-cepat.vercel.app/", i: "fa-whatsapp" },
  { n: "AmbilKode", t: "Dev Tools", d: "Alat ambil kode web developer.", u: "https://ambilkode.vercel.app/", i: "fa-code" }
];

function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;
  
  grid.innerHTML = projects.map((p, i) => `
    <a href="${p.u}" class="project-card reveal" target="_blank" style="transition-delay: ${i * 50}ms">
      <span class="tag">${p.t}</span>
      <div class="icon-box"><i class="fas ${p.i}"></i></div>
      <h3 style="margin-bottom:10px">${p.n}</h3>
      <p style="font-size:0.9rem; color:#94a3b8">${p.d}</p>
    </a>
  `).join('');
}

window.addEventListener('load', () => {
  renderProjects();
  
  // Memaksa loader hilang & scroll aktif
  setTimeout(() => {
    const loader = document.getElementById('intro-loader');
    if (loader) loader.classList.add('hide-loader');
    
    document.body.style.overflowY = "auto";
    
    // Animasi muncul saat scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal, .about-card').forEach(el => observer.observe(el));
  }, 1200);
});
