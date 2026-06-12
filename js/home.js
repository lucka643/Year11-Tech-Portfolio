/* ============================================================
   home.js — landing view: hero + numbered section rows.
   Hover a row → floating preview image + fog colour shift.
   ============================================================ */
window.renderHome = function (root) {
  const S = window.SECTIONS, V = window.VIEWER_ENTRY;

  const rowsHtml = S.map((s, i) => `
    <button class="row stag" style="--d:${0.25 + i * 0.07}s" data-go="#/section/${s.id}"
            data-accent="${s.accent}" data-deep="${s.deep}" data-light="${s.light}"
            data-preview="${s.preview || ""}">
      <span class="row-num">0${s.id}</span>
      <span class="row-main">
        <span class="row-title">${s.title}</span>
        <span class="row-tag">${s.tag}</span>
      </span>
      <span class="row-arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </button>`).join("") + `
    <button class="row row--viewer stag" style="--d:${0.25 + S.length * 0.07}s" data-go="#/viewer"
            data-accent="${V.accent}" data-deep="${V.deep}" data-light="${V.light}" data-preview="">
      <span class="row-num">0${V.id}</span>
      <span class="row-main">
        <span class="row-title">${V.title}</span>
        <span class="row-tag">${V.tag}</span>
      </span>
      <span class="row-arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </button>`;

  root.innerHTML = `
  <div class="view home">
    <p class="home-kicker stag" style="--d:.05s">DESIGN TECHNOLOGY PORTFOLIO · 2026 · KING'S COLLEGE</p>
    <h1 class="home-title stag" style="--d:.12s">Toys<span class="amp">&amp;</span>Games</h1>
    <p class="home-sub stag" style="--d:.2s">A sustainable <b>wooden fighter jet</b> with working control surfaces — designed, modelled and built from problem to prototype. By <b>Luca Carlisle</b>.</p>
    <nav class="rows" aria-label="Portfolio sections">${rowsHtml}</nav>
    <footer class="home-foot stag" style="--d:${0.35 + S.length * 0.07}s">
      <span>YEAR 11 · DES·TECH</span><span>7 SECTIONS + 3D VIEWER</span><span>TOY: WOODEN JET</span>
    </footer>
  </div>`;

  /* floating hover preview */
  const peek = document.createElement("div");
  peek.className = "peek";
  peek.innerHTML = `<img alt="">`;
  document.body.appendChild(peek);
  const pimg = peek.querySelector("img");
  let px = innerWidth * 0.62, py = innerHeight * 0.5, tx = px, ty = py, raf = null;

  function loop() {
    px += (tx - px) * 0.12; py += (ty - py) * 0.12;
    peek.style.left = px - peek.offsetWidth / 2 + "px";
    peek.style.top = py - peek.offsetHeight / 2 + "px";
    raf = requestAnimationFrame(loop);
  }

  root.querySelectorAll(".row").forEach((row) => {
    row.addEventListener("mouseenter", () => {
      const d = row.dataset;
      if (window.FogBG && d.deep) window.FogBG.setColors(hex3(d.deep), hex3(d.light));
      document.documentElement.style.setProperty("--accent", d.accent);
      if (d.preview) { pimg.src = d.preview; peek.classList.add("on"); }
      else peek.classList.remove("on");
    });
    row.addEventListener("mousemove", (e) => { tx = Math.min(e.clientX + 60 + peek.offsetWidth / 2, innerWidth - peek.offsetWidth / 2 - 16); ty = e.clientY; });
    row.addEventListener("mouseleave", () => peek.classList.remove("on"));
    row.addEventListener("click", () => { location.hash = row.dataset.go; });
  });
  root.querySelector(".rows").addEventListener("mouseleave", () => {
    if (window.FogBG) window.FogBG.setColors(hex3("#05070f"), hex3("#2b4a7a"));
    document.documentElement.style.setProperty("--accent", "#7fd4ff");
  });

  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) raf = requestAnimationFrame(loop);

  /* cleanup when view is destroyed */
  return () => { if (raf) cancelAnimationFrame(raf); peek.remove(); };
};

/* shared: hex → [r,g,b] 0..1 */
window.hex3 = function (h) {
  h = h.replace("#", "");
  return [parseInt(h.slice(0, 2), 16) / 255, parseInt(h.slice(2, 4), 16) / 255, parseInt(h.slice(4, 6), 16) / 255];
};
