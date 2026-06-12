/* ============================================================
   home.js — landing v2: hero + ghost-numbered section index.
   No hover images; hovering a row shifts the fog colour only.
   ============================================================ */
window.renderHome = function (root) {
  const S = window.SECTIONS, V = window.VIEWER_ENTRY;

  const rowsHtml = S.map((s, i) => `
    <button class="row stag" style="--d:${0.3 + i * 0.06}s" data-go="#/section/${s.id}"
            data-accent="${s.accent}" data-deep="${s.deep}" data-light="${s.light}">
      <span class="row-ghost">0${s.id}</span>
      <span class="row-main">
        <span class="row-title">${s.title}</span>
        <span class="row-tag">${s.tag}</span>
      </span>
      <span class="row-pages">${s.blocks.filter(b => b.id).length} pages</span>
      <span class="row-arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </button>`).join("");

  root.innerHTML = `
  <div class="view home">
    <header class="home-hero">
      <div class="home-hero-main">
        <p class="home-kicker stag" style="--d:.05s">DESIGN TECHNOLOGY PORTFOLIO · 2026 · KING'S COLLEGE</p>
        <h1 class="home-title stag" style="--d:.12s">Toys<span class="amp">&amp;</span><br>Games</h1>
        <p class="home-sub stag" style="--d:.2s">A sustainable <b>wooden fighter jet</b> with working control surfaces — designed, modelled and built from problem to prototype.</p>
      </div>
      <aside class="home-meta stag" style="--d:.26s">
        <div><i>STUDENT</i><b>Luca Carlisle</b></div>
        <div><i>PRODUCT</i><b>Wooden jet</b></div>
        <div><i>SECTIONS</i><b>07 + 3D</b></div>
        <div><i>STATUS</i><b>In development</b></div>
      </aside>
    </header>

    <p class="home-index-label stag" style="--d:.28s">INDEX — SELECT A SECTION</p>
    <nav class="rows" aria-label="Portfolio sections">${rowsHtml}</nav>

    <button class="hangar stag" style="--d:${0.34 + S.length * 0.06}s" data-go="#/viewer"
            data-accent="${V.accent}" data-deep="${V.deep}" data-light="${V.light}">
      <span class="hangar-num">08</span>
      <span class="hangar-main">
        <span class="hangar-title">3D Model Viewer</span>
        <span class="hangar-tag">ROTATE · ZOOM · CLICK THE PARTS OF THE JET</span>
      </span>
      <span class="hangar-cta">ENTER THE HANGAR <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </button>

    <footer class="home-foot stag" style="--d:${0.44 + S.length * 0.06}s">
      <span>YEAR 11 · DES·TECH</span><span>TOYS &amp; GAMES PROJECT</span><span>BUILT AS A LIVING PORTFOLIO</span>
    </footer>
  </div>`;

  /* hover: fog colour shift only (no images) */
  root.querySelectorAll(".row, .hangar").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const d = row.dataset;
      if (window.FogBG && d.deep) window.FogBG.setColors(hex3(d.deep), hex3(d.light));
      document.documentElement.style.setProperty("--accent", d.accent);
    });
    row.addEventListener("click", () => { location.hash = row.dataset.go; });
  });
  root.querySelector(".rows").addEventListener("mouseleave", () => {
    if (window.FogBG) window.FogBG.setColors(hex3("#05070f"), hex3("#2b4a7a"));
    document.documentElement.style.setProperty("--accent", "#7fd4ff");
  });

  return () => {};
};

/* shared: hex → [r,g,b] 0..1 */
window.hex3 = function (h) {
  h = h.replace("#", "");
  return [parseInt(h.slice(0, 2), 16) / 255, parseInt(h.slice(2, 4), 16) / 255, parseInt(h.slice(4, 6), 16) / 255];
};
