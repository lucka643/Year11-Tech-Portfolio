/* ============================================================
   section.js — renders one section's blocks + scroll reveals.
   All content comes from our own static content.js (no user input).
   ============================================================ */
(function () {
  const esc = (s) => String(s); // content is author-controlled static data

  /* ---------- block templates ---------- */
  const T = {
    intro(b) {
      return `<div class="blk rv"><p class="body lead" style="max-width:56ch">${b.lead}</p></div>`;
    },

    prose(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body.map((p, i) => `<p class="body rv" style="--d:${0.1 + i * 0.05}s">${p}</p>`).join("")}
      </div>`;
    },

    split(b) {
      return `<div class="blk split ${b.flip ? "split--flip" : ""}" id="${b.id}">
        <div class="split-text">
          <p class="eyebrow rv">${b.eyebrow}</p>
          <h3 class="head rv" style="--d:.06s">${b.head}</h3>
          ${b.body.map((p, i) => `<p class="body rv" style="--d:${0.1 + i * 0.05}s">${p}</p>`).join("")}
        </div>
        <div class="split-media rv rv-img" style="--d:.15s" data-px="0.06">
          <figure class="figure"><img src="${b.img}" alt="${b.cap || ""}" loading="lazy"><figcaption>${b.cap || ""}</figcaption></figure>
        </div>
      </div>`;
    },

    cards(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="cards" data-cols="${b.cols || 2}">
          ${b.cards.map((c, i) => `
            <article class="card glass rv" style="--d:${0.08 + i * 0.07}s">
              ${c.img ? `<img src="${c.img}" alt="${c.title}" loading="lazy">` : ""}
              ${c.meta ? `<span class="meta">${c.meta}</span>` : ""}
              <h4>${c.title}</h4>
              ${c.body ? `<p>${c.body}</p>` : ""}
              ${c.dl ? `<dl>${c.dl.map(([dt, dd]) => `<dt>${dt}</dt><dd>${dd}</dd>`).join("")}</dl>` : ""}
            </article>`).join("")}
        </div>
      </div>`;
    },

    deck(b) {
      const thumbs = !!b.thumbs, text = !!b.text;
      const bar = b.tabs.map((tab, i) =>
        `<button class="deck-tab ${i === 0 ? "is-active" : ""}" role="tab" aria-selected="${i === 0}" title="${tab.label}">
           ${thumbs ? `<img src="${tab.img}" alt="${tab.label}" loading="lazy">` : tab.label}
         </button>`).join("");
      const panels = b.tabs.map((tab, i) => `
        <article class="deck-panel ${i === 0 ? "is-active" : ""} ${text ? "deck-panel--text" : ""}">
          ${!text ? `<div class="deck-media"><img src="${tab.img}" alt="${tab.label}" loading="lazy"><span class="cap">${tab.cap || tab.label}</span></div>` : ""}
          <div class="deck-info">
            ${thumbs ? `<p class="eyebrow" style="margin-bottom:8px">Machine ${String(i + 1).padStart(2, "0")} / ${b.tabs.length}</p>` : ""}
            <h4>${tab.title}</h4>
            ${tab.lead ? `<p class="lead2">${tab.lead}</p>` : ""}
            ${tab.cols ? `<div class="deck-cols">${tab.cols.map((c) =>
              c.items
                ? `<div><h5>${c.h}</h5><ul>${c.items.map((li) => `<li>${li}</li>`).join("")}</ul></div>`
                : `<div class="${c.boxed ? "boxed glass" : ""}"><h5>${c.h}</h5><p>${c.p}</p></div>`
            ).join("")}</div>` : ""}
            ${tab.note ? `<p class="deck-note">${tab.note}</p>` : ""}
          </div>
        </article>`).join("");
      return `<div class="blk deck ${thumbs ? "deck--thumbs" : ""}" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${thumbs
          ? `<div class="deck-stage rv" style="--d:.12s">${panels}</div><div class="deck-bar rv" style="--d:.18s" role="tablist">${bar}</div>`
          : `<div class="deck-bar rv" style="--d:.12s" role="tablist">${bar}</div><div class="deck-stage rv" style="--d:.18s">${panels}</div>`}
      </div>`;
    },

    gallery(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="gal ${b.wide ? "gal--wide" : ""}">
          ${b.imgs.map((im, i) => `
            <figure class="rv" style="--d:${0.06 + i * 0.05}s" data-full="${im.src}">
              <img src="${im.src}" alt="${im.cap || ""}" loading="lazy">
              ${im.cap ? `<figcaption>${im.cap}</figcaption>` : ""}
            </figure>`).join("")}
        </div>
      </div>`;
    },

    matrix(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="matrix glass rv" style="--d:.14s">
          <table>
            <thead><tr><th>Design</th>${b.criteria.map((c) => `<th>${c}</th>`).join("")}<th>Total</th></tr></thead>
            <tbody>
              ${b.rows.map((r) => `
                <tr class="${r.win ? "m-win" : ""}">
                  <td><span class="m-design"><img src="${r.img}" alt="${r.name}" loading="lazy"><b>${r.name}</b></span></td>
                  ${r.scores.map((s) => `<td><span class="m-score">${s.s}<small>/5</small></span><br>${s.why}</td>`).join("")}
                  <td><span class="m-total">${r.total}<small style="color:var(--ink-faint);font-size:10px">/25</small></span></td>
                </tr>`).join("")}
            </tbody>
          </table>
        </div>
        ${b.note ? `<p class="deck-note rv" style="--d:.18s;margin-top:22px">${b.note}</p>` : ""}
      </div>`;
    },

    table(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        <div class="dtable glass rv" style="--d:.12s">
          <table>
            <thead><tr>${b.columns.map((c) => `<th>${c}</th>`).join("")}</tr></thead>
            <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
      </div>`;
    },

    timeline(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        ${b.body ? `<p class="body rv" style="--d:.1s">${b.body}</p>` : ""}
        <div class="tl">
          ${b.steps.map((s, i) => `
            <div class="tl-item rv" style="--d:${0.05 + i * 0.04}s">
              <span class="tl-meta">${s.meta}</span>
              <h4>${s.title}</h4>
              <p>${s.p}</p>
            </div>`).join("")}
        </div>
      </div>`;
    },

    duo(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        <div class="duo">
          ${b.cols.map((c, i) => `
            <div class="duo-col rv" style="--d:${0.1 + i * 0.08}s">
              <h4>${c.h}</h4>
              ${c.ps.map((p) => `<p>${p}</p>`).join("")}
              ${c.eg ? `<div class="duo-eg"><img src="${c.eg.img}" alt="" loading="lazy"><p>${c.eg.text}</p></div>` : ""}
            </div>`).join("")}
        </div>
      </div>`;
    },

    ph(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        <div class="ph rv" style="--d:.12s">
          <span class="ph-tag">Placeholder · waiting on asset</span>
          <h4>${b.head}</h4>
          <p>${b.body}</p>
          <p style="margin-top:14px"><b style="color:var(--accent)">Needed:</b> ${b.need}</p>
        </div>
      </div>`;
    },

    quotes(b) {
      return `<div class="blk" id="${b.id}">
        <p class="eyebrow rv">${b.eyebrow}</p>
        <h3 class="head rv" style="--d:.06s">${b.head}</h3>
        <div class="quotes">
          ${b.people.map((p, i) => `
            <article class="quote glass rv" style="--d:${0.08 + i * 0.07}s">
              <div class="q-head">
                <span class="q-avatar">${p.img ? `<img src="${p.img}" alt="${p.name}">` : "?"}</span>
                <span><span class="q-name" style="display:block">${p.name}</span><span class="q-role">${p.role}</span></span>
              </div>
              ${p.quotes.map((q) => `<p>“${q}”</p>`).join("")}
            </article>`).join("")}
        </div>
        <div class="quote glass rv" style="--d:.2s;padding:clamp(20px,2.2vw,30px)">
          <span class="q-role">${b.personal.head}</span>
          <p style="margin-top:10px;font-style:normal">${b.personal.p}</p>
        </div>
      </div>`;
    }
  };

  /* ---------- render a section view ---------- */
  window.renderSection = function (root, sec) {
    const idx = window.SECTIONS.indexOf(sec);
    const prev = window.SECTIONS[idx - 1], next = window.SECTIONS[idx + 1];

    const chips = sec.blocks.filter((b) => b.id && b.eyebrow)
      .map((b) => `<a class="sec-chip" href="#/section/${sec.id}" data-anchor="${b.id}">${b.eyebrow.replace(/^[\d\w]+[a-e]? · /, "")}</a>`).join("");

    root.innerHTML = `
    <div class="view sec">
      <header class="sec-head">
        <span class="sec-head-num">0${sec.id}</span>
        <p class="sec-head-kicker stag" style="--d:.05s">SECTION 0${sec.id} / 07</p>
        <h2 class="sec-head-title stag" style="--d:.12s">${sec.title}</h2>
        <div class="sec-head-pages stag" style="--d:.2s">${chips}</div>
      </header>
      ${sec.blocks.map((b) => T[b.t] ? T[b.t](b) : "").join("")}
      <nav class="sec-nav">
        ${prev
          ? `<a href="#/section/${prev.id}"><span class="nav-k">← Previous</span><span class="nav-t">0${prev.id} · ${prev.title}</span></a>`
          : `<a href="#/"><span class="nav-k">← Back to</span><span class="nav-t">Home</span></a>`}
        ${next
          ? `<a class="next" href="#/section/${next.id}"><span class="nav-k">Next →</span><span class="nav-t">0${next.id} · ${next.title}</span></a>`
          : `<a class="next" href="#/viewer"><span class="nav-k">Finale →</span><span class="nav-t">08 · 3D Model Viewer</span></a>`}
      </nav>
    </div>`;

    /* chip anchors scroll within page */
    root.querySelectorAll(".sec-chip").forEach((chip) => {
      chip.addEventListener("click", (e) => {
        e.preventDefault();
        const el = document.getElementById(chip.dataset.anchor);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    /* deck tab behaviour */
    root.querySelectorAll(".deck").forEach((deck) => {
      const tabs = [...deck.querySelectorAll(".deck-tab")];
      const panels = [...deck.querySelectorAll(".deck-panel")];
      tabs.forEach((tab, i) => tab.addEventListener("click", () => {
        tabs.forEach((t, j) => { t.classList.toggle("is-active", j === i); t.setAttribute("aria-selected", j === i); });
        panels.forEach((p, j) => p.classList.toggle("is-active", j === i));
      }));
    });

    /* gallery lightbox */
    const lb = document.getElementById("lightbox"), lbImg = lb.querySelector("img");
    root.querySelectorAll(".gal figure").forEach((f) => {
      f.addEventListener("click", () => { lbImg.src = f.dataset.full; lb.hidden = false; });
    });

    /* reveal engine */
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io = null, pxItems = [], rafId = null;
    if (!reduce) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
      root.querySelectorAll(".rv").forEach((el) => io.observe(el));

      /* light parallax on tagged media */
      pxItems = [...root.querySelectorAll("[data-px]")].map((el) => ({ el, k: parseFloat(el.dataset.px) }));
      const tick = () => {
        const vh = innerHeight;
        for (const it of pxItems) {
          const r = it.el.getBoundingClientRect();
          if (r.bottom < -80 || r.top > vh + 80) continue;
          const c = (r.top + r.height / 2 - vh / 2) / vh;
          it.el.style.transform = `translateY(${(-c * vh * it.k).toFixed(1)}px)`;
        }
        rafId = requestAnimationFrame(tick);
      };
      if (pxItems.length) rafId = requestAnimationFrame(tick);
    } else {
      root.querySelectorAll(".rv").forEach((el) => el.classList.add("in"));
    }

    /* scroll progress bar */
    const bar = document.querySelector("#progress i");
    const onScroll = () => {
      const max = document.body.scrollHeight - innerHeight;
      bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (io) io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      removeEventListener("scroll", onScroll);
    };
  };

  /* lightbox close (global, bound once) */
  const lb = document.getElementById("lightbox");
  lb.addEventListener("click", () => { lb.hidden = true; lb.querySelector("img").src = ""; });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) lb.hidden = true; });
})();
