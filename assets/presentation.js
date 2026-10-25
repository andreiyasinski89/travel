/* Presentation link: compass icon, floating button on every page and the click tracking for the section on the home page.
   One file for all pages and languages: change the link, texts or compass here; the look is in assets/compass.css. */
(function () {
  'use strict';
  var URL = 'https://mwrlife.online/ayasinski/';
  var LABEL = {
    ru: 'Смотреть презентацию', en: 'Watch the presentation', uk: 'Дивитися презентацію',
    pl: 'Obejrzyj prezentację', de: 'Präsentation ansehen', es: 'Ver la presentación',
    zh: '观看演示文稿', hi: 'प्रेज़ेंटेशन देखें'
  };
  var lang = (document.documentElement.lang || 'ru').slice(0, 2).toLowerCase();
  var text = LABEL[lang] || LABEL.en;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;

  /* ---------- compass SVG: bezel with ticks, wind rose with N/E/S/W, needle (north half aqua, south half gold) ---------- */
  function ticks(r1, r2, step, skip) {
    var d = '';
    for (var a = 0; a < 360; a += step) {
      if (skip && a % skip === 0) continue;
      var s = Math.sin(a * Math.PI / 180), c = -Math.cos(a * Math.PI / 180);
      d += 'M' + (50 + r1 * s).toFixed(2) + ' ' + (50 + r1 * c).toFixed(2) + 'L' + (50 + r2 * s).toFixed(2) + ' ' + (50 + r2 * c).toFixed(2);
    }
    return d;
  }
  var COMPASS =
    '<svg class="cmp-svg" viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
    '<circle class="cmp-face" cx="50" cy="50" r="48"/>' +
    '<circle class="cmp-inner" cx="50" cy="50" r="40"/>' +
    '<path class="cmp-ticks" d="' + ticks(44.6, 41.8, 5, 90) + '"/>' +
    '<path class="cmp-ticks cmp-ticks-major" d="' + ticks(44.6, 40.2, 90) + '"/>' +
    '<path class="cmp-rose2" d="M50 16 54 46 84 50 54 54 50 84 46 54 16 50 46 46Z" transform="rotate(45 50 50) scale(.9) translate(5.5 5.5)"/>' +
    '<path class="cmp-rose" d="M50 14 54.5 45.5 86 50 54.5 54.5 50 86 45.5 54.5 14 50 45.5 45.5Z"/>' +
    '<text class="cmp-l cmp-l-n" x="50" y="25">N</text><text class="cmp-l" x="76" y="53">E</text>' +
    '<text class="cmp-l" x="50" y="82.5">S</text><text class="cmp-l" x="24" y="53">W</text>' +
    '<g class="cmp-needle"><path class="cmp-north" d="M50 31 43.6 50 56.4 50Z"/><path class="cmp-south" d="M50 69 43.6 50 56.4 50Z"/></g>' +
    '<circle class="cmp-hub" cx="50" cy="50" r="3.6"/><circle class="cmp-hub-dot" cx="50" cy="50" r="1.3"/></svg>';
  function fill(root) {
    var list = root.querySelectorAll('[data-compass]');
    for (var i = 0; i < list.length; i++) if (!list[i].firstChild) list[i].innerHTML = COMPASS;
  }
  fill(document);

  /* ---------- floating button ---------- */
  var a = document.createElement('a');
  a.className = 'pf-btn cmp-host'; a.id = 'presentationFab';
  a.href = URL; a.target = '_blank'; a.rel = 'noopener';
  a.setAttribute('aria-label', text);
  a.innerHTML = '<span class="pf-tip" aria-hidden="true"></span><span class="cmp cmp-pulse" data-compass style="--cmp-size:100%"></span>';
  a.querySelector('.pf-tip').textContent = text;
  document.body.appendChild(a);
  fill(a);

  /* ---------- GA4: any element with data-presentation="<location>" (the floating button is 'floating_button') ---------- */
  a.setAttribute('data-presentation', 'floating_button');
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-presentation]');
    if (!el) return;
    try { if (window.clubTrack) window.clubTrack('presentation_click', { location: el.getAttribute('data-presentation') }); } catch (x) {}
  });

  /* ---------- phones: the label slides out for a few seconds after the visitor has scrolled half of the page ---------- */
  if (!canHover && !reduce) {
    var shown = false;
    var onScroll = function () {
      var h = document.documentElement.scrollHeight;
      if (shown || h <= window.innerHeight * 1.5) return;
      if ((window.pageYOffset + window.innerHeight) / h < 0.5) return;
      shown = true; window.removeEventListener('scroll', onScroll);
      a.classList.add('is-peek');
      setTimeout(function () { a.classList.remove('is-peek'); }, 3500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- keep clear of the cookie banner: lift the button above it whenever the two would overlap ---------- */
  var GAP = 20, ro = null, watched = null;
  function place() {
    var b = document.getElementById('cookieBanner');
    if (b !== watched) {
      if (ro) { ro.disconnect(); ro = null; }
      watched = b;
      if (b && window.ResizeObserver) { ro = new ResizeObserver(place); ro.observe(b); }
    }
    var size = a.offsetWidth || 64, edge = window.innerWidth <= 640 ? 16 : 20, lift = 0;
    if (b) {
      var r = b.getBoundingClientRect();
      if (r.right + 8 > window.innerWidth - edge - size && r.top - 8 < window.innerHeight) lift = Math.max(0, window.innerHeight - r.top + 12 - GAP);
    }
    var hide = lift && (window.innerHeight - GAP - lift - size < 90);   // no room above a tall banner: hide until it is closed
    a.style.visibility = hide ? 'hidden' : '';
    a.style.bottom = lift ? 'calc(' + (GAP + lift) + 'px + env(safe-area-inset-bottom,0px))' : '';
  }
  new MutationObserver(place).observe(document.body, { childList: true });
  window.addEventListener('resize', place);
  place();
})();
