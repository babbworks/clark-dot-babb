// CLARK — Field Report 001
// Light apparatus: annotation toggles + section scrollspy.

(function () {
  "use strict";

  // ---- Annotations: each n.XX marker toggles its annotation block ----
  document.querySelectorAll(".note-ref").forEach(function (ref) {
    ref.addEventListener("click", function () {
      var note = document.getElementById(ref.dataset.note);
      if (!note) return;
      var open = !note.hidden;
      note.hidden = open;
      ref.setAttribute("aria-expanded", String(!open));
      if (!open) {
        // re-trigger the open animation
        note.style.animation = "none";
        void note.offsetWidth;
        note.style.animation = "";
      }
    });
  });

  // ---- Scrollspy: highlight the section currently in view ----
  var links = Array.prototype.slice.call(
    document.querySelectorAll(".section-index a")
  );
  var byId = {};
  links.forEach(function (a) {
    byId[a.getAttribute("href").slice(1)] = a;
  });

  var current = null;
  function setActive(id) {
    if (current === id) return;
    current = id;
    links.forEach(function (a) { a.classList.remove("active"); });
    if (byId[id]) byId[id].classList.add("active");
  }

  var sections = Array.prototype.slice.call(
    document.querySelectorAll(".article-section")
  );

  function onScroll() {
    var marker = window.innerHeight * 0.3;
    var active = sections[0] && sections[0].id;
    sections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= marker) active = sec.id;
    });
    if (active) setActive(active);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Document overlay: data-overlay links open in a large dialog ----
  var overlay = document.getElementById("paper-overlay");
  if (overlay && typeof overlay.showModal === "function") {
    var frame = document.getElementById("overlay-frame");
    var title = document.getElementById("overlay-title");

    document.querySelectorAll("a[data-overlay]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        // honor open-in-new-tab gestures
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        title.textContent = a.dataset.overlay;
        frame.src = a.getAttribute("href");
        overlay.showModal();
      });
    });

    document.getElementById("overlay-close").addEventListener("click", function () {
      overlay.close();
    });

    // click on the backdrop closes
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) overlay.close();
    });

    overlay.addEventListener("close", function () {
      frame.src = "about:blank";
    });
  }
})();
