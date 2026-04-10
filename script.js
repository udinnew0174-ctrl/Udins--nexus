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
  { n: "Kirim Cepat", t: "Social", d: "Kirim WA tanpa simpan nomor.", u: "https://kirim-cepat.vercel.app/", i: "fa-brands fa-whatsapp" },
  { n: "AmbilKode", t: "Dev Tools", d: "Alat ambil kode web developer.", u: "https://ambilkode.vercel.app/", i: "fa-code" }
];

function render() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <a href="${p.u}" class="project-card reveal" target="_blank">
      <div class="icon-box"><i class="fas ${p.i}"></i></div>
      <h3 style="color:var(--text)">${p.n}</h3>
      <p>${p.d}</p>
      <span style="font-size:0.65rem; color:var(--accent); font-weight:800; margin-top:15px; text-transform:uppercase">${p.t}</span>
    </a>
  `).join('');
}

window.addEventListener('load', () => {
  render();
  const loader = document.getElementById('intro-loader');
  
  setTimeout(() => {
    if (loader) loader.classList.add('hide-loader');
    
    // Aktifkan animasi reveal gasan kartu-kartu
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .about-card').forEach(el => observer.observe(el));
  }, 800);
});
