/* Published reviews for the carousel on the home page (all language versions).
   The owner ticks "Опубликовать" in the Google Sheet; the Apps Script (doGet, ?action=reviews) returns those rows as JSON.
   While there are no published reviews (or the request fails) the example cards that are already in the page stay as they are.
   As soon as at least one real review is published, ONLY real reviews are shown. */
(function () {
  'use strict';
  var track = document.getElementById('revTrack');
  var tpl = track && track.querySelector('figure');
  if (!track || !tpl) return;

  var URL_REVIEWS = 'https://script.google.com/macros/s/AKfycbzOHnNYF11QajbuW1K91f7YRMzxkn09bLJ7j450FTnG4tXCXwzK1l5VVrp1GhqwJ-8gdQ/exec?action=reviews';
  var LANG = (document.documentElement.lang || 'ru').slice(0, 2).toLowerCase();
  var CACHE_KEY = 'clubReviews', CACHE_MS = 5 * 60 * 1000, MAX = 24;

  // the look of the card is copied from the first card of the page, so every language keeps its own quotes and aria texts
  var bq = tpl.querySelector('blockquote').textContent.trim();
  var Q1 = bq.charAt(0), Q2 = bq.charAt(bq.length - 1);
  var starsBox = tpl.querySelector('[role=img]');
  var starSvg = starsBox.querySelector('svg').outerHTML;
  var ariaTpl = starsBox.getAttribute('aria-label');

  function nameParts(full) {
    var p = String(full || '').trim().split(/\s+/).filter(Boolean);
    var first = p[0] || '';
    var short = p.length > 1 ? first + ' ' + p[1].charAt(0).toUpperCase() + '.' : first;       // "Anna Kowalska" -> "Anna K."
    var ini = (first.charAt(0) + (p.length > 1 ? p[1].charAt(0) : '')).toUpperCase();
    return { short: short, ini: ini };
  }

  function card(r) {
    var f = tpl.cloneNode(true);
    var n = Math.max(1, Math.min(5, Math.round(Number(r.rating) || 5)));
    var box = f.querySelector('[role=img]');
    box.innerHTML = '';
    for (var i = 0; i < 5; i++) {
      var s = document.createElement('span');
      s.innerHTML = starSvg; s.style.display = 'inline-flex';
      if (i >= n) s.style.opacity = '.25';
      box.appendChild(s);
    }
    box.setAttribute('aria-label', ariaTpl.replace(/\d/, String(n)));
    var q = f.querySelector('blockquote');
    q.textContent = Q1 + String(r.text) + Q2;
    if (r.lang) q.setAttribute('lang', r.lang);
    var nm = nameParts(r.name);
    var cap = f.querySelector('figcaption');
    cap.querySelector('span.grid').textContent = nm.ini;
    var spans = cap.querySelectorAll('span > span');
    spans[0].textContent = nm.short;
    spans[1].textContent = r.city || '';
    return f;
  }

  function render(list) {
    // reviews written in the language of the page first, then the newest
    var sorted = list.slice().sort(function (a, b) { return (b.lang === LANG) - (a.lang === LANG); }).slice(0, MAX);
    track.innerHTML = '';
    sorted.forEach(function (r) { track.appendChild(card(r)); });
  }

  function valid(r) { return r && typeof r.text === 'string' && r.text.trim().length >= 10 && typeof r.name === 'string' && r.name.trim(); }
  function use(data) {
    var list = (data && Array.isArray(data.reviews) ? data.reviews : []).filter(valid);
    if (list.length) render(list);
  }

  try {
    var c = JSON.parse(sessionStorage.getItem(CACHE_KEY));
    if (c && Date.now() - c.t < CACHE_MS) { use(c.d); return; }
  } catch (e) { /* no cache */ }

  var ctl = window.AbortController ? new AbortController() : null;
  var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 7000);
  fetch(URL_REVIEWS, ctl ? { signal: ctl.signal } : {})
    .then(function (r) { return r.json(); })
    .then(function (d) {
      clearTimeout(timer);
      try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d: d })); } catch (e) {}
      use(d);
    })
    .catch(function () { clearTimeout(timer); /* keep the example cards */ });
})();
