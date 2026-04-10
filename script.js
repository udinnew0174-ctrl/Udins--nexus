const projects = [
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
];

function init() {
  const grid = document.getElementById('project-grid');
  if (grid) {
    grid.innerHTML = projects.map(p => `
      <a href="${p.u}" class="project-card reveal" target="_blank">
        <div class="icon-box"><i class="fas ${p.i}"></i></div>
        <h3 style="font-size:1.1rem; margin-bottom:5px">${p.n}</h3>
        <span style="font-size:0.7rem; color:var(--accent); font-weight:700">${p.t}</span>
      </a>
    `).join('');
  }

  window.addEventListener('load', () => {
    const loader = document.getElementById('intro-loader');
    if (loader) {
      loader.classList.add('hide-loader');
      // Beri jeda sedikit gasan animasi reveal
      setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
      }, 400);
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
