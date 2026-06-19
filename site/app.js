(function () {
  "use strict";

  var body = document.body;
  var currentPage = body.getAttribute("data-page");

  function markCurrentNav() {
    document.querySelectorAll("[data-nav-page]").forEach(function (link) {
      if (link.getAttribute("data-nav-page") === currentPage) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  var nav = document.querySelector(".nav");
  if (nav) {
    var prefix = window.location.pathname.indexOf("/docs/") !== -1 ? "../" : "";
    var libraryLink = nav.querySelector('[data-nav-page="library"]');

    function addNavLink(pageKey, label, href) {
      if (nav.querySelector('[data-nav-page="' + pageKey + '"]')) {
        return;
      }
      var link = document.createElement("a");
      link.setAttribute("data-nav-page", pageKey);
      link.setAttribute("href", href);
      link.textContent = label;
      if (libraryLink) {
        nav.insertBefore(link, libraryLink);
      } else {
        nav.appendChild(link);
      }
    }

    addNavLink("updates", "Updates", prefix + "updates.html");
    addNavLink("map", "Project Map", prefix + "project-map.html");
  }

  markCurrentNav();

  var filter = document.getElementById("doc-filter");
  if (filter) {
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-doc-card]"));
    var empty = document.getElementById("doc-empty");

    function applyFilter() {
      var value = filter.value.trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (card) {
        var haystack = [
          card.getAttribute("data-title") || "",
          card.getAttribute("data-tags") || "",
          card.textContent || ""
        ].join(" ").toLowerCase();
        var show = !value || haystack.indexOf(value) !== -1;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
    }

    filter.addEventListener("input", applyFilter);
    applyFilter();
  }
})();
