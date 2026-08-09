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
        viewerMod = viewerMod || await import("./viewer3d.js?v=49");
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

  /* ---- simple-mode: re-render the current section in place ----
     Not go(): that plays the leave animation and re-runs setFog. Simple mode
     changes block heights a lot (2a/2e shrink, 2d grows ~10x), so we anchor on
     the nearest block above the fold instead of restoring a raw scrollY. */
  function anchorNow() {
    const y = scrollY;
    let best = null;
    app.querySelectorAll(".blk[id]").forEach((el) => {
      const top = el.getBoundingClientRect().top + y;
      if (top <= y + 8 && (!best || top > best.top)) best = { id: el.id, top: top };
    });
    return best ? { id: best.id, delta: y - best.top } : { y: y };
  }
  function restoreAnchor(k) {
    if (k.id) {
      const el = document.getElementById(k.id);
      if (el) { scrollTo(0, Math.max(0, el.getBoundingClientRect().top + scrollY + k.delta)); return; }
    }
    scrollTo(0, k.y || 0);
  }
  function rerender() {
    const target = parse();
    if (target.route !== "section") return;   // home has no simple variants; viewer must not remount Three.js
    const keep = anchorNow();
    if (destroy) { destroy(); destroy = null; }   // must run first: releases 6 window listeners + 2 observers
    app.innerHTML = "";
    destroy = window.renderSection(app, target.sec, { instant: true });
    restoreAnchor(keep);
  }
  addEventListener("simplechange", rerender);

  /* HUD buttons */
  document.getElementById("hudHome").addEventListener("click", () => { location.hash = "#/"; });
  document.getElementById("hudBack").addEventListener("click", () => { location.hash = "#/"; });
  /* One Escape handler for the whole site, in priority order. */
  addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const sm = window.SimpleMode, lb = document.getElementById("lightbox");
    if (sm && sm.introOpen) { sm.closeIntro(); return; }   // no-op while the countdown runs
    if (!lb.hidden) { lb.hidden = true; lb.querySelector("img").src = ""; return; }
    if (document.body.dataset.route !== "home") location.hash = "#/";
  });

  addEventListener("hashchange", go);
  go();
})();
