(function () {
  "use strict";

  var body = document.body;
  var currentPage = body.getAttribute("data-page");

  // --- Local detection ---
  var isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "";
  if (isLocal) body.classList.add("is-local");

  // --- Nav ---
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
      if (nav.querySelector('[data-nav-page="' + pageKey + '"]')) return;
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

    addNavLink("tools", "Tools", prefix + "tools.html");
    addNavLink("claims", "Claims", prefix + "claims.html");
    addNavLink("updates", "Updates", prefix + "updates.html");
    addNavLink("map", "Project Map", prefix + "project-map.html");
  }

  markCurrentNav();

  // --- Library search filter ---
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

  // --- Markdown overlay viewer ---
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
    html = html.replace(/```[\w]*\n([\s\S]*?)```/g, function(_, code) {
      return '<pre><code>' + code.replace(/</g,'&lt;') + '</code></pre>';
    });
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
    html = html.replace(/((?:^[ \t]*[-*] .+$\n?)+)/gm, function(block) {
      return '<ul>' + block.replace(/^[ \t]*[-*] (.+)$/gm, '<li>$1</li>') + '</ul>';
    });
    html = html.replace(/((?:^[ \t]*\d+\. .+$\n?)+)/gm, function(block) {
      return '<ol>' + block.replace(/^[ \t]*\d+\. (.+)$/gm, '<li>$1</li>') + '</ol>';
    });
    html = html.replace(/^(?!<[hupoltbr]|$)(.+)$/gm, '<p>$1</p>');
    return html;
  }

  // --- Annotations (local only) ---
  var ANNOTATIONS_KEY = "clark_annotations";
  function getAnnotations() {
    try { return JSON.parse(localStorage.getItem(ANNOTATIONS_KEY)) || {}; } catch(e) { return {}; }
  }
  function saveAnnotations(all) {
    localStorage.setItem(ANNOTATIONS_KEY, JSON.stringify(all));
  }
  function annotationKey(text) {
    var h = 0;
    for (var i = 0; i < text.length; i++) { h = ((h << 5) - h + text.charCodeAt(i)) | 0; }
    return "a" + Math.abs(h);
  }
  function renderAnnotationSection(key) {
    var all = getAnnotations();
    var notes = all[key] || [];
    var html = '<div class="overlay-annotations local-only">' +
      '<hr style="border:none;border-top:1px solid var(--rule);margin:24px 0 16px">' +
      '<strong style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent-3)">Annotations</strong>';
    if (notes.length) {
      html += '<div class="annotation-list">';
      for (var i = 0; i < notes.length; i++) {
        html += '<div class="annotation-item">' +
          '<span class="annotation-date">' + esc(notes[i].date) + '</span>' +
          '<span class="annotation-text">' + esc(notes[i].text) + '</span>' +
          '<button class="annotation-del" data-ann-idx="' + i + '">&times;</button>' +
        '</div>';
      }
      html += '</div>';
    }
    html += '<div class="annotation-form">' +
      '<textarea class="annotation-input" rows="2" placeholder="Add a note..."></textarea>' +
      '<button class="annotation-add">Add note</button>' +
    '</div></div>';
    return html;
  }
  function wireAnnotations(overlay, key) {
    var addBtn = overlay.querySelector(".annotation-add");
    if (!addBtn) return;
    addBtn.addEventListener("click", function() {
      var input = overlay.querySelector(".annotation-input");
      var text = input.value.trim();
      if (!text) return;
      var all = getAnnotations();
      if (!all[key]) all[key] = [];
      all[key].push({ date: new Date().toISOString().slice(0, 10), text: text });
      saveAnnotations(all);
      var section = overlay.querySelector(".overlay-annotations");
      section.outerHTML = renderAnnotationSection(key);
      wireAnnotations(overlay, key);
    });
    overlay.querySelectorAll(".annotation-del").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var idx = parseInt(btn.getAttribute("data-ann-idx"), 10);
        var all = getAnnotations();
        if (all[key]) { all[key].splice(idx, 1); saveAnnotations(all); }
        var section = overlay.querySelector(".overlay-annotations");
        section.outerHTML = renderAnnotationSection(key);
        wireAnnotations(overlay, key);
      });
    });
  }

  // Expose annotation helpers for archive pages
  window._clarkAnn = {
    key: annotationKey,
    render: renderAnnotationSection,
    wire: wireAnnotations,
    isLocal: isLocal
  };

  function openOverlay(title, bodyHtml, annKey) {
    var overlay = document.createElement("div");
    overlay.className = "md-overlay";
    var extra = annKey ? renderAnnotationSection(annKey) : "";
    overlay.innerHTML =
      '<div class="md-overlay-panel">' +
        '<div class="md-overlay-bar">' +
          '<span class="md-title">' + esc(title) + '</span>' +
          '<button class="md-close">Close</button>' +
        '</div>' +
        '<div class="md-overlay-body">' + bodyHtml + extra + '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    if (annKey) wireAnnotations(overlay, annKey);
    requestAnimationFrame(function() { overlay.classList.add("visible"); });
    overlay.querySelector(".md-close").addEventListener("click", closeOverlay);
    overlay.addEventListener("click", function(e) { if (e.target === overlay) closeOverlay(); });
    document.addEventListener("keydown", onEsc);
  }

  function openMdOverlay(href, title) {
    var overlay = document.createElement("div");
    overlay.className = "md-overlay";
    overlay.innerHTML =
      '<div class="md-overlay-panel">' +
        '<div class="md-overlay-bar">' +
          '<span class="md-title">' + esc(title) + '</span>' +
          '<button class="md-close">Close</button>' +
        '</div>' +
        '<div class="md-overlay-body"><p style="color:var(--faint)">Loading...</p></div>' +
      '</div>';
    document.body.appendChild(overlay);
    requestAnimationFrame(function() { overlay.classList.add("visible"); });
    overlay.querySelector(".md-close").addEventListener("click", closeOverlay);
    overlay.addEventListener("click", function(e) { if (e.target === overlay) closeOverlay(); });
    document.addEventListener("keydown", onEsc);
    fetch(href)
      .then(function(r) { return r.ok ? r.text() : Promise.reject(r.status); })
      .then(function(md) { overlay.querySelector(".md-overlay-body").innerHTML = mdToHtml(md); })
      .catch(function(err) { overlay.querySelector(".md-overlay-body").innerHTML = '<p>Could not load document (' + err + ').</p>'; });
  }

  function closeOverlay() {
    var overlay = document.querySelector(".md-overlay");
    if (!overlay) return;
    overlay.classList.remove("visible");
    setTimeout(function() { overlay.remove(); }, 200);
    document.removeEventListener("keydown", onEsc);
  }

  function onEsc(e) { if (e.key === "Escape") closeOverlay(); }

  document.addEventListener("click", function(e) {
    var link = e.target.closest('a[href$=".md"]');
    if (!link) return;
    e.preventDefault();
    var title = link.textContent.trim().split("\n")[0];
    openMdOverlay(link.getAttribute("href"), title);
  });

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  // =============================================
  // CLAIMS PAGE
  // =============================================
  if (currentPage === "claims") initClaims();

  // =============================================
  // UPDATES PAGE
  // =============================================
  if (currentPage !== "updates") return;

  var STAGED_LOG_KEY = "clark_staged_log";
  var STAGED_POSTS_KEY = "clark_staged_posts";

  function getStagedLog() {
    try { return JSON.parse(localStorage.getItem(STAGED_LOG_KEY)) || []; } catch(e) { return []; }
  }
  function getStagedPosts() {
    try { return JSON.parse(localStorage.getItem(STAGED_POSTS_KEY)) || []; } catch(e) { return []; }
  }

  // --- Render log feed ---
  var logFeed = document.getElementById("log-feed");
  var logMoreWrap = document.getElementById("log-more");
  var logExpanded = false;
  var LOG_INITIAL = 10;

  function allLog() {
    var staged = getStagedLog().map(function(e) { e._staged = true; return e; });
    var base = (typeof CLARK_LOG !== "undefined" ? CLARK_LOG : []);
    return staged.concat(base);
  }

  function renderLog() {
    var entries = allLog();
    var limit = logExpanded ? entries.length : LOG_INITIAL;
    var html = "";
    for (var i = 0; i < Math.min(entries.length, limit); i++) {
      var e = entries[i];
      html += '<div class="log-entry' + (e._staged ? ' staged' : '') + '" data-log-idx="' + i + '">' +
        '<span class="log-date">' + esc(e.date) + '</span>' +
        '<span class="log-badges">' +
          '<span class="log-type-badge ' + esc(e.type) + '">' + esc(e.type) + '</span>' +
          (e.initiative ? '<span class="log-initiative-badge">' + esc(e.initiative) + '</span>' : '') +
        '</span>' +
        '<span class="log-text">' + esc(e.text) + '</span>' +
      '</div>';
    }
    logFeed.innerHTML = html;
    if (entries.length > LOG_INITIAL && !logExpanded) {
      logMoreWrap.hidden = false;
    } else {
      logMoreWrap.hidden = true;
    }
  }

  renderLog();

  var logExpandBtn = document.getElementById("log-expand");
  if (logExpandBtn) {
    logExpandBtn.addEventListener("click", function(e) {
      e.preventDefault();
      logExpanded = true;
      renderLog();
    });
  }

  logFeed.addEventListener("click", function(e) {
    var row = e.target.closest(".log-entry");
    if (!row) return;
    var idx = parseInt(row.getAttribute("data-log-idx"), 10);
    var entry = allLog()[idx];
    if (!entry) return;
    var html =
      '<div class="log-overlay-meta">' +
        '<div class="log-meta-item"><strong>Date</strong>' + esc(entry.date) + '</div>' +
        '<div class="log-meta-item"><strong>Type</strong>' + esc(entry.type) + '</div>' +
        (entry.initiative ? '<div class="log-meta-item"><strong>Initiative</strong>' + esc(entry.initiative) + '</div>' : '') +
        (entry.strategic ? '<div class="log-meta-item"><strong>Strategic</strong>' + esc(entry.strategic) + '</div>' : '') +
      '</div>' +
      '<p style="font-size:1.1rem;color:var(--ink)">' + esc(entry.text) + '</p>';
    openOverlay("Log entry", html, annotationKey("log-" + entry.text));
  });

  // --- Render posts ---
  var postsGrid = document.getElementById("posts-grid");
  var postsMoreWrap = document.getElementById("posts-more");
  var postsExpanded = false;
  var POSTS_INITIAL = 10;

  function allPosts() {
    var staged = getStagedPosts().map(function(e) { e._staged = true; return e; });
    var base = (typeof CLARK_POSTS !== "undefined" ? CLARK_POSTS : []);
    return staged.concat(base);
  }

  function renderPosts() {
    var posts = allPosts();
    var limit = postsExpanded ? posts.length : POSTS_INITIAL;
    var html = "";
    for (var i = 0; i < Math.min(posts.length, limit); i++) {
      var p = posts[i];
      var needsMore = p.body && p.body.length > 180;
      html += '<article class="card post-card' + (p._staged ? ' staged' : '') + '" data-post-idx="' + i + '">' +
        '<div class="post-meta">' +
          '<div class="kicker">' + esc(p.date) + '</div>' +
          (p.initiative ? '<span class="log-initiative-badge">' + esc(p.initiative) + '</span>' : '') +
          (p.strategic ? '<span class="log-type-badge change">' + esc(p.strategic) + '</span>' : '') +
        '</div>' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p class="post-body-preview">' + esc(p.body) + '</p>' +
        (needsMore ? '<span class="read-more">Read more</span>' : '') +
        '<div class="taglist">' +
          (p.tags || []).map(function(t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") +
        '</div>' +
      '</article>';
    }
    postsGrid.innerHTML = html;
    if (posts.length > POSTS_INITIAL && !postsExpanded) {
      postsMoreWrap.hidden = false;
    } else if (posts.length <= POSTS_INITIAL) {
      postsMoreWrap.hidden = true;
    }
  }

  renderPosts();

  var postsExpandBtn = document.getElementById("posts-expand");
  if (postsExpandBtn) {
    postsExpandBtn.addEventListener("click", function(e) {
      e.preventDefault();
      postsExpanded = true;
      renderPosts();
    });
  }

  postsGrid.addEventListener("click", function(e) {
    var card = e.target.closest(".post-card");
    if (!card) return;
    var idx = parseInt(card.getAttribute("data-post-idx"), 10);
    var post = allPosts()[idx];
    if (!post) return;
    var html =
      '<div class="log-overlay-meta">' +
        '<div class="log-meta-item"><strong>Date</strong>' + esc(post.date) + '</div>' +
        (post.initiative ? '<div class="log-meta-item"><strong>Initiative</strong>' + esc(post.initiative) + '</div>' : '') +
        (post.strategic ? '<div class="log-meta-item"><strong>Strategic</strong>' + esc(post.strategic) + '</div>' : '') +
      '</div>' +
      '<h1>' + esc(post.title) + '</h1>' +
      '<p>' + esc(post.body) + '</p>' +
      '<div class="taglist" style="margin-top:18px">' +
        (post.tags || []).map(function(t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") +
      '</div>';
    openOverlay(post.title, html, annotationKey("post-" + post.title));
  });

  // --- Entry forms (local only) ---
  var logSubmit = document.getElementById("log-submit");
  if (logSubmit) {
    logSubmit.addEventListener("click", function() {
      var text = document.getElementById("log-text").value.trim();
      if (!text) return;
      var entry = {
        date: new Date().toISOString().slice(0, 10),
        type: document.getElementById("log-type").value,
        initiative: document.getElementById("log-initiative").value.trim() || "",
        strategic: document.getElementById("log-strategic").value.trim() || "",
        text: text
      };
      var staged = getStagedLog();
      staged.unshift(entry);
      localStorage.setItem(STAGED_LOG_KEY, JSON.stringify(staged));
      document.getElementById("log-text").value = "";
      renderLog();
    });
  }

  var postSubmit = document.getElementById("post-submit");
  if (postSubmit) {
    postSubmit.addEventListener("click", function() {
      var title = document.getElementById("post-title").value.trim();
      var postBody = document.getElementById("post-body").value.trim();
      if (!title) return;
      var entry = {
        date: new Date().toISOString().slice(0, 10),
        title: title,
        body: postBody,
        tags: document.getElementById("post-tags").value.split(",").map(function(t) { return t.trim(); }).filter(Boolean),
        initiative: document.getElementById("post-initiative").value.trim() || "",
        strategic: document.getElementById("post-strategic").value.trim() || ""
      };
      var staged = getStagedPosts();
      staged.unshift(entry);
      localStorage.setItem(STAGED_POSTS_KEY, JSON.stringify(staged));
      document.getElementById("post-title").value = "";
      document.getElementById("post-body").value = "";
      document.getElementById("post-tags").value = "";
      renderPosts();
    });
  }

  // --- Export ---
  var exportBtn = document.getElementById("export-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", function() {
      var mergedLog = allLog().map(function(e) {
        var c = { date: e.date, type: e.type, initiative: e.initiative, strategic: e.strategic, text: e.text };
        return c;
      });
      var mergedPosts = allPosts().map(function(e) {
        var c = { date: e.date, title: e.title, body: e.body, tags: e.tags, initiative: e.initiative, strategic: e.strategic };
        return c;
      });
      var output = "var CLARK_LOG = " + JSON.stringify(mergedLog, null, 2) + ";\n\nvar CLARK_POSTS = " + JSON.stringify(mergedPosts, null, 2) + ";\n";
      navigator.clipboard.writeText(output).then(function() {
        exportBtn.textContent = "Copied!";
        setTimeout(function() { exportBtn.textContent = "Copy to clipboard"; }, 2000);
      });
    });
  }

  var clearBtn = document.getElementById("clear-staged-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", function() {
      localStorage.removeItem(STAGED_LOG_KEY);
      localStorage.removeItem(STAGED_POSTS_KEY);
      renderLog();
      renderPosts();
    });
  }

  // =============================================
  // CLAIMS PAGE LOGIC
  // =============================================
  function initClaims() {
    var STAGED_CLAIMS_KEY = "clark_staged_claims";
    var CLAIMS_INITIAL = 10;
    var claimsExpanded = false;
    var activeStatus = "all";
    var activeTypes = [];

    var types = (typeof CLAIM_TYPES !== "undefined" ? CLAIM_TYPES : []);

    function getStagedClaims() {
      try { return JSON.parse(localStorage.getItem(STAGED_CLAIMS_KEY)) || []; } catch(e) { return []; }
    }

    function allClaims() {
      var staged = getStagedClaims().map(function(c) { c._staged = true; return c; });
      var base = (typeof CLARK_CLAIMS !== "undefined" ? CLARK_CLAIMS : []);
      return staged.concat(base);
    }

    function typeLabel(t) {
      return t.replace(/-/g, " ");
    }

    // Build filter type buttons
    var typeFilters = document.getElementById("type-filters");
    if (typeFilters) {
      typeFilters.innerHTML = types.map(function(t) {
        return '<button class="claim-type-toggle" data-type="' + esc(t) + '">' + esc(typeLabel(t)) + '</button>';
      }).join("");

      typeFilters.addEventListener("click", function(e) {
        var btn = e.target.closest(".claim-type-toggle");
        if (!btn) return;
        var t = btn.getAttribute("data-type");
        var idx = activeTypes.indexOf(t);
        if (idx === -1) { activeTypes.push(t); btn.classList.add("selected"); }
        else { activeTypes.splice(idx, 1); btn.classList.remove("selected"); }
        renderClaims();
      });
    }

    // Build form type buttons
    var formTypeInput = document.getElementById("claim-type-input");
    var formSelectedTypes = [];
    if (formTypeInput) {
      formTypeInput.innerHTML = types.map(function(t) {
        return '<button type="button" class="claim-type-toggle" data-type="' + esc(t) + '">' + esc(typeLabel(t)) + '</button>';
      }).join("");

      formTypeInput.addEventListener("click", function(e) {
        var btn = e.target.closest(".claim-type-toggle");
        if (!btn) return;
        e.preventDefault();
        var t = btn.getAttribute("data-type");
        var idx = formSelectedTypes.indexOf(t);
        if (idx === -1) { formSelectedTypes.push(t); btn.classList.add("selected"); }
        else { formSelectedTypes.splice(idx, 1); btn.classList.remove("selected"); }
      });
    }

    // Status filter buttons
    var statusFilters = document.getElementById("status-filters");
    if (statusFilters) {
      statusFilters.addEventListener("click", function(e) {
        var btn = e.target.closest(".log-filter-btn");
        if (!btn) return;
        statusFilters.querySelectorAll(".log-filter-btn").forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        activeStatus = btn.getAttribute("data-status");
        renderClaims();
      });
    }

    // Render
    var feed = document.getElementById("claims-feed");
    var moreWrap = document.getElementById("claims-more");

    function renderClaims() {
      var claims = allClaims();
      // Filter
      var filtered = claims.filter(function(c) {
        if (activeStatus !== "all" && c.status !== activeStatus) return false;
        if (activeTypes.length > 0) {
          var match = false;
          (c.types || []).forEach(function(t) { if (activeTypes.indexOf(t) !== -1) match = true; });
          if (!match) return false;
        }
        return true;
      });

      var limit = claimsExpanded ? filtered.length : CLAIMS_INITIAL;
      var html = "";
      for (var i = 0; i < Math.min(filtered.length, limit); i++) {
        var c = filtered[i];
        var locParts = [c.town, c.region].filter(Boolean);
        var locStr = locParts.join(", ");
        html += '<div class="claim-entry status-' + esc(c.status) + (c._staged ? ' staged' : '') + '" data-claim-idx="' + i + '">' +
          '<div class="claim-head">' +
            '<span class="claim-date">' + esc(c.date) + '</span>' +
            '<span class="claim-status-badge ' + esc(c.status) + '">' + esc(c.status) + '</span>' +
            (locStr ? '<span class="claim-region-badge">' + esc(locStr) + '</span>' : '') +
            (c.initiative ? '<span class="log-initiative-badge">' + esc(c.initiative) + '</span>' : '') +
            (c.strategic ? '<span class="log-type-badge change">' + esc(c.strategic) + '</span>' : '') +
          '</div>' +
          '<div class="claim-text">' + esc(c.text) + '</div>' +
          '<div class="claim-types">' +
            (c.types || []).map(function(t) { return '<span class="claim-type-chip">' + esc(typeLabel(t)) + '</span>'; }).join("") +
          '</div>' +
        '</div>';
      }
      if (filtered.length === 0) {
        html = '<p class="fineprint">No claims match the current filters.</p>';
      }
      feed.innerHTML = html;

      if (filtered.length > CLAIMS_INITIAL && !claimsExpanded) {
        moreWrap.hidden = false;
      } else {
        moreWrap.hidden = true;
      }
    }

    renderClaims();

    var expandBtn = document.getElementById("claims-expand");
    if (expandBtn) {
      expandBtn.addEventListener("click", function(e) {
        e.preventDefault();
        claimsExpanded = true;
        renderClaims();
      });
    }

    // Click to overlay
    feed.addEventListener("click", function(e) {
      var row = e.target.closest(".claim-entry");
      if (!row) return;
      var idx = parseInt(row.getAttribute("data-claim-idx"), 10);
      var claims = allClaims();
      var filtered = claims.filter(function(c) {
        if (activeStatus !== "all" && c.status !== activeStatus) return false;
        if (activeTypes.length > 0) {
          var match = false;
          (c.types || []).forEach(function(t) { if (activeTypes.indexOf(t) !== -1) match = true; });
          if (!match) return false;
        }
        return true;
      });
      var claim = filtered[idx];
      if (!claim) return;
      var claimLocParts = [claim.town, claim.region].filter(Boolean);
      var html =
        '<div class="log-overlay-meta">' +
          '<div class="log-meta-item"><strong>Date</strong>' + esc(claim.date) + '</div>' +
          '<div class="log-meta-item"><strong>Status</strong><span class="claim-status-badge ' + esc(claim.status) + '">' + esc(claim.status) + '</span></div>' +
          (claim.town ? '<div class="log-meta-item"><strong>Town</strong>' + esc(claim.town) + '</div>' : '') +
          (claim.region ? '<div class="log-meta-item"><strong>Region</strong>' + esc(claim.region) + '</div>' : '') +
          (claim.initiative ? '<div class="log-meta-item"><strong>Initiative</strong>' + esc(claim.initiative) + '</div>' : '') +
          (claim.strategic ? '<div class="log-meta-item"><strong>Strategic</strong>' + esc(claim.strategic) + '</div>' : '') +
        '</div>' +
        '<p style="font-size:1.1rem;color:var(--ink);margin-bottom:18px">' + esc(claim.text) + '</p>' +
        (claim.source ? '<p style="color:var(--faint);font-size:0.88rem"><strong style="color:var(--accent-3);font-size:0.72rem;text-transform:uppercase;letter-spacing:0.1em;display:block;margin-bottom:4px">Evidence basis</strong>' + esc(claim.source) + '</p>' : '') +
        '<div class="claim-types" style="margin-top:14px">' +
          (claim.types || []).map(function(t) { return '<span class="claim-type-chip">' + esc(typeLabel(t)) + '</span>'; }).join("") +
        '</div>';
      openOverlay("Claim", html, annotationKey("claim-" + claim.text));
    });

    // Entry form
    var submitBtn = document.getElementById("claim-submit");
    if (submitBtn) {
      submitBtn.addEventListener("click", function() {
        var text = document.getElementById("claim-text").value.trim();
        if (!text) return;
        var entry = {
          date: new Date().toISOString().slice(0, 10),
          status: document.getElementById("claim-status").value,
          types: formSelectedTypes.slice(),
          town: document.getElementById("claim-town").value.trim() || "",
          region: document.getElementById("claim-region").value.trim() || "",
          initiative: document.getElementById("claim-initiative").value.trim() || "",
          strategic: document.getElementById("claim-strategic").value.trim() || "",
          text: text,
          source: document.getElementById("claim-source").value.trim() || ""
        };
        var staged = getStagedClaims();
        staged.unshift(entry);
        localStorage.setItem(STAGED_CLAIMS_KEY, JSON.stringify(staged));
        document.getElementById("claim-text").value = "";
        document.getElementById("claim-source").value = "";
        document.getElementById("claim-town").value = "";
        formSelectedTypes = [];
        if (formTypeInput) formTypeInput.querySelectorAll(".selected").forEach(function(b) { b.classList.remove("selected"); });
        renderClaims();
      });
    }

    // Export
    var expBtn = document.getElementById("claims-export-btn");
    if (expBtn) {
      expBtn.addEventListener("click", function() {
        var merged = allClaims().map(function(c) {
          return { date: c.date, status: c.status, types: c.types, town: c.town || "", region: c.region || "", initiative: c.initiative || "", strategic: c.strategic || "", text: c.text, source: c.source };
        });
        var output = 'var CLAIM_TYPES = ' + JSON.stringify(types, null, 2) + ';\n\nvar CLAIM_STATUSES = ["safe", "provisional", "rejected"];\n\nvar CLARK_CLAIMS = ' + JSON.stringify(merged, null, 2) + ';\n';
        navigator.clipboard.writeText(output).then(function() {
          expBtn.textContent = "Copied!";
          setTimeout(function() { expBtn.textContent = "Copy to clipboard"; }, 2000);
        });
      });
    }

    var clrBtn = document.getElementById("claims-clear-btn");
    if (clrBtn) {
      clrBtn.addEventListener("click", function() {
        localStorage.removeItem(STAGED_CLAIMS_KEY);
        renderClaims();
      });
    }
  }

})();
