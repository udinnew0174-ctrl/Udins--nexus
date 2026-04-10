const projects = [
  { n: "SmartMonefy", u: "https://smartmonefy.vercel.app/", i: "fa-chart-pie" },
  { n: "Tugas Target", u: "https://targetugas.lovable.app/", i: "fa-bullseye" },
  { n: "IlmQuran Reading", u: "https://IlmQuran-reading.vercel.app/", i: "fa-book-open" },
  { n: "SuperTik", u: "https://supertik.vercel.app/", i: "fa-video" },
  { n: "PhoneSpecs", u: "https://phonespecs.vercel.app/", i: "fa-mobile-screen-button" },
  { n: "Lirikify", u: "https://lirikify.vercel.app/", i: "fa-music" },
  { n: "Fiqh AI", u: "https://f1qh-ai.vercel.app/", i: "fa-robot" },
  { n: "Cocokan Jodoh", u: "https://cocokan-jodoh.vercel.app/", i: "fa-heart" },
  { n: "NewsHub Indo", u: "https://newshub-1ndo.vercel.app/", i: "fa-newspaper" },
  { n: "PixelForge", u: "https://pixelforge-a1.vercel.app/", i: "fa-magic" },
  { n: "Lumina AI", u: "https://lumina-a1.vercel.app/", i: "fa-wand-magic-sparkles" },
  { n: "Nabung-ku", u: "https://nabung-ku.vercel.app/", i: "fa-piggy-bank" },
  { n: "Kirim Cepat", u: "https://kirim-cepat.vercel.app/", i: "fa-brands fa-whatsapp" },
  { n: "AmbilKode", u: "https://ambilkode.vercel.app/", i: "fa-code" }
];

function init() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <a href="${p.u}" class="project-card reveal" target="_blank">
      <div class="icon-box"><i class="fas ${p.i}"></i></div>
      <h3>${p.n}</h3>
    </a>
  `).join('');

  // Loader handler
  const loader = document.getElementById('intro-loader');
  if (loader) {
    setTimeout(() => {
      loader.style.display = 'none';
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 1000);
  }
}

window.addEventListener('DOMContentLoaded', init);
