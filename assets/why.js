/* Effects of why-mwr.html (shared by all language versions):
   - the headline is split into words that animate in
   - route nodes get the class "in" when they scroll into view (a ring pulses once)
   - the start price counts up when it comes into view */
(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // headline: the words fly in one after another (the markup stays identical in every language)
  var h1 = document.querySelector('[data-why-words]');
  if (h1) {
    var parts = h1.textContent.trim().split(/\s+/);
    h1.textContent = '';
    parts.forEach(function (w, i) {
      var s = document.createElement('span');
      s.className = 'why-w'; s.style.setProperty('--i', i); s.textContent = w;
      h1.appendChild(s); if (i < parts.length - 1) h1.appendChild(document.createTextNode(' '));
    });
    h1.classList.add('ready');
  }

  var nodes = document.querySelectorAll('[data-why-in]');
  var prices = document.querySelectorAll('[data-price]');
  if (!('IntersectionObserver' in window)) { nodes.forEach(function (n) { n.classList.add('in'); }); return; }

  var nodeIo = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); nodeIo.unobserve(e.target); } });
  }, { threshold: .6 });
  nodes.forEach(function (n) { nodeIo.observe(n); });

  function count(el) {
    var end = parseFloat(el.getAttribute('data-price')), t0 = performance.now(), dur = 1500;
    (function tick(t) {
      var p = Math.min(1, (t - t0) / dur), v = end * (1 - Math.pow(1 - p, 3));
      el.textContent = '$' + (p < 1 ? v : end).toFixed(2);
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  var priceIo = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { if (!reduce) count(e.target); priceIo.unobserve(e.target); } });
  }, { threshold: .9 });
  prices.forEach(function (p) { priceIo.observe(p); });
})();
