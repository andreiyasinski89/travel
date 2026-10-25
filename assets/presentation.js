/* Floating "Watch the presentation" button: one file for all pages and languages. Change the link, size or texts here. */
(function () {
  'use strict';
  var URL = 'https://mwrlife.online/ayasinski/';
  var SIZE = 56, GAP = 20;                          // button size and distance from the screen edges, px
  var LABEL = {
    ru: 'Смотреть презентацию', en: 'Watch the presentation', uk: 'Дивитися презентацію',
    pl: 'Obejrzyj prezentację', de: 'Präsentation ansehen', es: 'Ver la presentación',
    zh: '观看演示文稿', hi: 'प्रेज़ेंटेशन देखें'
  };
  var lang = (document.documentElement.lang || 'ru').slice(0, 2).toLowerCase();
  var text = LABEL[lang] || LABEL.en;

  var css = document.createElement('style');
  css.textContent =
    '.pf-btn{position:fixed;right:' + GAP + 'px;bottom:calc(' + GAP + 'px + env(safe-area-inset-bottom,0px));z-index:40;display:block;width:' + SIZE + 'px;height:' + SIZE + 'px;text-decoration:none;transition:bottom .25s ease}' +
    '.pf-circle{display:grid;place-items:center;width:' + SIZE + 'px;height:' + SIZE + 'px;border-radius:9999px;background:linear-gradient(160deg,#7FE0D0 0%,#5BC9D9 100%);color:#0B3C5D;' +
      'box-shadow:0 6px 18px -4px rgba(11,60,93,.45),0 0 0 4px rgba(11,60,93,.15);transition:transform .2s ease,box-shadow .2s ease}' +
    '.pf-btn:hover .pf-circle,.pf-btn:focus-visible .pf-circle{transform:scale(1.12);box-shadow:0 10px 24px -4px rgba(11,60,93,.5),0 0 0 4px rgba(11,60,93,.2)}' +
    '.pf-btn:focus-visible{outline:none}.pf-btn:focus-visible .pf-circle{box-shadow:0 0 0 3px #F5B83D,0 0 0 6px #0B3C5D}' +
    '.pf-tip{position:absolute;right:calc(100% + 12px);top:50%;margin-top:-17px;pointer-events:none;opacity:0;transform:translateX(6px);white-space:nowrap;border-radius:9999px;background:#0B3C5D;color:#F5B83D;padding:8px 16px;font:600 14px/1.2 Onest,"Noto Sans SC","Noto Sans Devanagari",system-ui,sans-serif;box-shadow:0 6px 18px -4px rgba(11,60,93,.45);transition:opacity .2s ease,transform .2s ease}' +
    '@media (hover:hover){.pf-btn:hover .pf-tip,.pf-btn:focus-visible .pf-tip{opacity:1;transform:none}}' +
    '@media (hover:none){.pf-tip{display:none}}' +
    '@media (prefers-reduced-motion:reduce){.pf-btn,.pf-circle,.pf-tip{transition:none}}';
  document.head.appendChild(css);

  var a = document.createElement('a');
  a.className = 'pf-btn'; a.id = 'presentationFab';
  a.href = URL; a.target = '_blank'; a.rel = 'noopener';
  a.setAttribute('aria-label', text);
  a.innerHTML =
    '<span class="pf-tip" aria-hidden="true"></span>' +
    '<span class="pf-circle"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<rect x="2.5" y="4" width="19" height="13" rx="2.2"/><path d="M8 21h8M12 17v4"/><path d="M10.2 8.2v5.6l4.6-2.8z" fill="currentColor"/></svg></span>';
  a.querySelector('.pf-tip').textContent = text;
  a.addEventListener('click', function () {
    try { if (window.clubTrack) window.clubTrack('presentation_click', { location: 'floating_button' }); } catch (e) {}
  });
  document.body.appendChild(a);

  /* keep clear of the cookie banner: lift the button above it whenever the two would overlap */
  var ro = null, watched = null;
  function place() {
    var b = document.getElementById('cookieBanner');
    if (b !== watched) {
      if (ro) { ro.disconnect(); ro = null; }
      watched = b;
      if (b && window.ResizeObserver) { ro = new ResizeObserver(place); ro.observe(b); }
    }
    var lift = 0;
    if (b) {
      var r = b.getBoundingClientRect();
      var fLeft = window.innerWidth - GAP - SIZE;
      if (r.right + 8 > fLeft && r.top - 8 < window.innerHeight) lift = Math.max(0, window.innerHeight - r.top + 12 - GAP);
    }
    var hide = lift && (window.innerHeight - GAP - lift - SIZE < 90);   // no room above a tall banner: hide until it is closed
    a.style.visibility = hide ? 'hidden' : '';
    a.style.bottom = lift ? 'calc(' + (GAP + lift) + 'px + env(safe-area-inset-bottom,0px))' : '';
  }
  new MutationObserver(place).observe(document.body, { childList: true });
  window.addEventListener('resize', place);
  place();
})();
