/* ============================================================
   simple.js — the site-wide "simple mode" switch + first-visit intro.
   Loaded before section.js and router.js so the very first render
   already knows which mode it is in.

   Exposes window.SimpleMode and fires a "simplechange" window event
   that router.js listens for to re-render the current section.
   ============================================================ */
(function () {
  const KEY = "dt.simple", SEEN = "dt.introSeen";
  const LOCK = 5;                     // seconds the intro's close button stays locked

  /* localStorage throws in Safari private mode and some file:// contexts.
     If that escaped from here, every script after this one would never run
     and the page would render nothing at all. */
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* no persistence, still works */ } },
  };

  const btn = document.getElementById("hudSimple");
  const modal = document.getElementById("introModal");
  const closeBtn = document.getElementById("introClose");

  let on = store.get(KEY) === "1";
  let locked = false, tick = null;

  function paint() {
    document.body.dataset.simple = on ? "on" : "off";
    if (btn) btn.setAttribute("aria-checked", on ? "true" : "false");
  }

  function setMode(next) {
    next = !!next;
    if (next === on) return;
    on = next;
    store.set(KEY, on ? "1" : "0");
    paint();
    dispatchEvent(new CustomEvent("simplechange", { detail: { on: on } }));
  }

  function closeIntro() {
    if (!modal || modal.hidden || locked) return;   // locked = countdown still running
    if (tick) { clearInterval(tick); tick = null; }
    modal.hidden = true;
    delete document.body.dataset.modal;
    store.set(SEEN, "1");
    if (btn) btn.focus();
  }

  function openIntro() {
    if (!modal || !closeBtn) return;
    modal.hidden = false;
    document.body.dataset.modal = "on";
    locked = true;
    let left = LOCK;
    closeBtn.disabled = true;
    closeBtn.textContent = "Got it (" + left + ")";
    tick = setInterval(function () {
      left -= 1;
      if (left > 0) { closeBtn.textContent = "Got it (" + left + ")"; return; }
      clearInterval(tick); tick = null;
      locked = false;
      closeBtn.disabled = false;
      closeBtn.textContent = "Got it";
      closeBtn.focus();
    }, 1000);
  }

  if (btn) btn.addEventListener("click", function () { setMode(!on); });
  if (closeBtn) closeBtn.addEventListener("click", closeIntro);
  /* click the dimmed area to dismiss, but only once the countdown has finished */
  if (modal) modal.addEventListener("click", function (e) { if (e.target === modal) closeIntro(); });

  paint();
  if (store.get(SEEN) !== "1") openIntro();

  window.SimpleMode = {
    get on() { return on; },
    get introOpen() { return !!modal && !modal.hidden; },
    set: setMode,
    closeIntro: closeIntro,
  };
})();
