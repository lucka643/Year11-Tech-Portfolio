/* ============================================================
   router.js — hash routes: #/  ·  #/section/N  ·  #/viewer
   The URL hash is parsed strictly (int match against known
   sections); it is never interpolated into markup.
   ============================================================ */
(function () {
  const app = document.getElementById("app");
  let destroy = null;       // current view's cleanup fn
  let viewerMod = null;     // lazy-loaded 3D module
  let homeScroll = 0;       // restore landing scroll position

  function parse() {
    const h = location.hash.replace(/^#\/?/, "");
    if (h === "viewer") return { route: "viewer" };
    const m = h.match(/^section\/(\d{1,2})$/);
    if (m) {
      const sec = window.SECTIONS.find((s) => s.id === parseInt(m[1], 10));
      if (sec) return { route: "section", sec };
    }
    return { route: "home" };
  }

  function setFog(deep, light, accent) {
    if (window.FogBG) window.FogBG.setColors(window.hex3(deep), window.hex3(light));
    document.documentElement.style.setProperty("--accent", accent);
  }

  async function go() {
    const target = parse();
    const current = document.body.dataset.route;

    if (current === "home") homeScroll = scrollY;

    /* leave animation on previous view */
    const old = app.firstElementChild;
    if (old) {
      old.classList.add("leaving");
      await new Promise((r) => setTimeout(r, matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 260));
    }
    if (destroy) { destroy(); destroy = null; }
    app.innerHTML = "";
    document.body.dataset.route = target.route;

    if (target.route === "home") {
      destroy = window.renderHome(app);
      setFog("#05070f", "#2b4a7a", "#7fd4ff");
      requestAnimationFrame(() => scrollTo(0, homeScroll));
    }
    else if (target.route === "section") {
      destroy = window.renderSection(app, target.sec);
      setFog(target.sec.deep, target.sec.light, target.sec.accent);
      scrollTo(0, 0);
    }
    else if (target.route === "viewer") {
      const V = window.VIEWER_ENTRY;
      setFog(V.deep, V.light, V.accent);
      scrollTo(0, 0);
      app.innerHTML = `<div class="view"><div class="v-loading">LOADING 3D VIEWER…</div></div>`;
      try {
        viewerMod = viewerMod || await import("./viewer3d.js?v=28");
        app.innerHTML = "";
        destroy = viewerMod.mount(app);
      } catch (err) {
        console.error("3D viewer failed to load:", err);
        app.innerHTML = `<div class="view sec" style="padding-top:24vh">
          <p class="eyebrow">08 · 3D Model Viewer</p>
          <h2 class="sec-head-title">Couldn't load the 3D engine.</h2>
          <p class="body">This needs an internet connection to fetch Three.js. Check the connection and reload.</p>
        </div>`;
      }
    }
  }

  /* HUD buttons */
  document.getElementById("hudHome").addEventListener("click", () => { location.hash = "#/"; });
  document.getElementById("hudBack").addEventListener("click", () => { location.hash = "#/"; });
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.dataset.route !== "home" && document.getElementById("lightbox").hidden) {
      location.hash = "#/";
    }
  });

  addEventListener("hashchange", go);
  go();
})();
