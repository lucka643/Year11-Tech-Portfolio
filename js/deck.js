/* ============================================================
   deck.js — tabbed selector behaviour for every .deck on the page
   Click a tab → its matching panel becomes active (animated).
   ============================================================ */
(function () {
  document.querySelectorAll(".deck").forEach((deck) => {
    const tabs = [...deck.querySelectorAll(".deck-tab")];
    const panels = [...deck.querySelectorAll(".deck-panel")];

    function activate(i) {
      tabs.forEach((t, j) => {
        const on = j === i;
        t.classList.toggle("is-active", on);
        t.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach((p, j) => p.classList.toggle("is-active", j === i));
    }

    tabs.forEach((tab, i) => {
      tab.setAttribute("role", "tab");
      tab.addEventListener("click", () => activate(i));
      // left/right arrows move between tabs when one is focused
      tab.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
        e.preventDefault();
        e.stopPropagation();
        const next = e.key === "ArrowRight"
          ? (i + 1) % tabs.length
          : (i - 1 + tabs.length) % tabs.length;
        activate(next);
        tabs[next].focus();
      });
    });
  });
})();
