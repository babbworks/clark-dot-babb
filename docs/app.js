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

  // Markdown overlay viewer
  function mdToHtml(md) {
    var html = md
      .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>')
      .replace(/^---+$/gm, '<hr>')
      .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // code blocks
    html = html.replace(/```[\w]*\n([\s\S]*?)```/g, function(_, code) {
      return '<pre><code>' + code.replace(/</g,'&lt;') + '</code></pre>';
    });
    // tables
    html = html.replace(/((?:^\|.+\|$\n?)+)/gm, function(block) {
      var rows = block.trim().split('\n');
      if (rows.length < 2) return block;
      var out = '<table>';
      rows.forEach(function(row, i) {
        if (i === 1 && /^[\|\s:-]+$/.test(row)) return;
        var tag = i === 0 ? 'th' : 'td';
        var cells = row.split('|').filter(function(c, j, a) { return j > 0 && j < a.length - 1; });
        out += '<tr>' + cells.map(function(c) { return '<' + tag + '>' + c.trim() + '</' + tag + '>'; }).join('') + '</tr>';
      });
      return out + '</table>';
    });
    // lists
    html = html.replace(/((?:^[ \t]*[-*] .+$\n?)+)/gm, function(block) {
      return '<ul>' + block.replace(/^[ \t]*[-*] (.+)$/gm, '<li>$1</li>') + '</ul>';
    });
    html = html.replace(/((?:^[ \t]*\d+\. .+$\n?)+)/gm, function(block) {
      return '<ol>' + block.replace(/^[ \t]*\d+\. (.+)$/gm, '<li>$1</li>') + '</ol>';
    });
    // paragraphs
    html = html.replace(/^(?!<[hupoltbr]|$)(.+)$/gm, '<p>$1</p>');
    return html;
  }

  function openMdOverlay(href, title) {
    var overlay = document.createElement('div');
    overlay.className = 'md-overlay';
    overlay.innerHTML =
      '<div class="md-overlay-panel">' +
        '<div class="md-overlay-bar">' +
          '<span class="md-title">' + title + '</span>' +
          '<button class="md-close">Close</button>' +
        '</div>' +
        '<div class="md-overlay-body"><p style="color:var(--faint)">Loading…</p></div>' +
      '</div>';
    document.body.appendChild(overlay);
    requestAnimationFrame(function() { overlay.classList.add('visible'); });
    overlay.querySelector('.md-close').addEventListener('click', closeMdOverlay);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) closeMdOverlay(); });
    document.addEventListener('keydown', onEsc);
    fetch(href)
      .then(function(r) { return r.ok ? r.text() : Promise.reject(r.status); })
      .then(function(md) { overlay.querySelector('.md-overlay-body').innerHTML = mdToHtml(md); })
      .catch(function(err) { overlay.querySelector('.md-overlay-body').innerHTML = '<p>Could not load document (' + err + ').</p>'; });
  }

  function closeMdOverlay() {
    var overlay = document.querySelector('.md-overlay');
    if (!overlay) return;
    overlay.classList.remove('visible');
    setTimeout(function() { overlay.remove(); }, 200);
    document.removeEventListener('keydown', onEsc);
  }

  function onEsc(e) { if (e.key === 'Escape') closeMdOverlay(); }

  document.addEventListener('click', function(e) {
    var link = e.target.closest('a[href$=".md"]');
    if (!link) return;
    e.preventDefault();
    var title = link.textContent.trim().split('\n')[0];
    openMdOverlay(link.getAttribute('href'), title);
  });

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
