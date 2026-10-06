(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- SVG art ---------- */
  const ART = {
    plane: '<svg viewBox="0 0 160 60" class="h-full w-full" aria-hidden="true"><path d="M12 26 L2 6 L22 6 L36 22Z" fill="#0B3C5D"/><path d="M78 22 L60 4 L78 4 L102 22Z" fill="#0E7FB5"/><path d="M10 30 Q10 22 30 22 L120 22 Q150 24 156 30 Q150 36 120 38 L30 38 Q10 38 10 30Z" fill="#F5B83D"/><path d="M128 23 Q145 24 151 29 L128 29Z" fill="#BAE6FD"/><g fill="#BAE6FD"><circle cx="50" cy="29" r="3"/><circle cx="65" cy="29" r="3"/><circle cx="80" cy="29" r="3"/><circle cx="95" cy="29" r="3"/><circle cx="110" cy="29" r="3"/></g><path d="M68 34 L44 58 L66 58 L100 36Z" fill="#0B3C5D"/><ellipse cx="82" cy="43" rx="10" ry="4.5" fill="#08293F"/></svg>',
    cloud: '<svg viewBox="0 0 200 90" class="h-full w-full" aria-hidden="true"><g fill="currentColor"><circle cx="60" cy="55" r="30"/><circle cx="100" cy="40" r="38"/><circle cx="145" cy="55" r="28"/><rect x="40" y="55" width="130" height="30" rx="15"/></g></svg>',
    balloon: '<svg viewBox="0 0 80 112" class="h-full w-full" aria-hidden="true"><path d="M40 3C8 3 1 40 22 66h36C79 40 72 3 40 3Z" fill="#F5B83D"/><path d="M40 3C26 14 24 50 32 66h16C56 50 54 14 40 3Z" fill="#10B981"/><path d="M40 3c-4 17-4 47-2 63h4c2-16 2-46-2-63Z" fill="#0EA5E9"/><path d="M22 66l10 26M58 66L48 92M40 66v26" stroke="#0B3C5D" stroke-width="1.5"/><rect x="30" y="92" width="20" height="14" rx="3" fill="#0B3C5D"/></svg>',
    ship: '<svg viewBox="0 0 220 96" class="h-full w-full" aria-hidden="true"><rect x="96" y="6" width="24" height="18" rx="3" fill="#0EA5E9"/><rect x="62" y="22" width="92" height="16" rx="4" fill="#10B981"/><rect x="40" y="38" width="136" height="18" rx="4" fill="#F5B83D"/><path d="M8 56h204l-20 28H30Z" fill="#0B3C5D"/><g fill="#0B3C5D"><circle cx="58" cy="47" r="3"/><circle cx="80" cy="47" r="3"/><circle cx="102" cy="47" r="3"/><circle cx="124" cy="47" r="3"/><circle cx="146" cy="47" r="3"/></g><g fill="#BAE6FD"><circle cx="50" cy="68" r="3"/><circle cx="76" cy="68" r="3"/><circle cx="102" cy="68" r="3"/><circle cx="128" cy="68" r="3"/><circle cx="154" cy="68" r="3"/></g></svg>',
    compass: '<svg viewBox="0 0 100 100" class="h-full w-full" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="#0B3C5D" stroke="#F5B83D" stroke-width="4"/><g stroke="#BAE6FD" stroke-width="2"><path d="M50 8v8M50 84v8M8 50h8M84 50h8"/></g><g class="a-wiggle" style="transform-origin:50px 50px"><path d="M50 18 62 50 50 56 38 50Z" fill="#F5B83D"/><path d="M50 82 38 50 50 44 62 50Z" fill="#10B981"/></g><circle cx="50" cy="50" r="4" fill="#0B3C5D" stroke="#BAE6FD" stroke-width="2"/></svg>',
    pin: '<svg viewBox="0 0 24 24" class="h-full w-full" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z"/></svg>',
    bird: '<svg viewBox="0 0 44 20" class="h-full w-full" fill="none" stroke="#0B3C5D" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M2 12Q11 0 22 12Q33 0 42 12" /></svg>',
    train: '<svg viewBox="0 0 300 50" class="h-full w-full" aria-hidden="true"><g fill="#0B3C5D"><rect x="0" y="8" width="60" height="30" rx="6"/><rect x="66" y="8" width="60" height="30" rx="6"/><rect x="132" y="8" width="60" height="30" rx="6"/><path d="M198 8h60q30 0 40 20v10H198Z"/></g><g fill="#F5B83D"><rect x="8" y="14" width="14" height="10" rx="2"/><rect x="28" y="14" width="14" height="10" rx="2"/><rect x="74" y="14" width="14" height="10" rx="2"/><rect x="94" y="14" width="14" height="10" rx="2"/><rect x="140" y="14" width="14" height="10" rx="2"/><rect x="160" y="14" width="14" height="10" rx="2"/><path d="M206 14h24v10h-24zM240 14h22l16 10h-38z"/></g><g fill="#10B981"><circle cx="30" cy="42" r="5"/><circle cx="100" cy="42" r="5"/><circle cx="170" cy="42" r="5"/><circle cx="240" cy="42" r="5"/></g></svg>',
    globe: '<svg viewBox="0 0 200 200" class="h-full w-full" aria-hidden="true"><defs><radialGradient id="gSea" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#5BC9F2"/><stop offset="1" stop-color="#0B6FA0"/></radialGradient><clipPath id="gClip"><circle cx="100" cy="100" r="92"/></clipPath></defs><circle cx="100" cy="100" r="92" fill="url(#gSea)"/><g clip-path="url(#gClip)"><g style="animation:globeSlide 22s linear infinite"><g id="gLand" fill="#A6F0C4"><path d="M10 70q18-20 40-8t10 30-26 14-24-6zM80 40q22-14 40 4t-6 24-30 0zM70 100q20-6 30 14t-4 40-24-4-6-30zM130 90q22-10 36 8t-8 30-28-10zM30 140q14-6 22 6t-10 12-14-8z"/></g><use href="#gLand" x="200"/></g></g><ellipse cx="100" cy="100" rx="92" ry="30" fill="none" stroke="#BAE6FD" stroke-opacity=".35"/><ellipse cx="100" cy="100" rx="30" ry="92" fill="none" stroke="#BAE6FD" stroke-opacity=".35"/><circle cx="100" cy="100" r="92" fill="none" stroke="#0B3C5D" stroke-width="3"/></svg>'
  };
  window.__ART = ART;
  document.querySelectorAll('[data-art]').forEach(el => { el.innerHTML = ART[el.dataset.art] || ''; });

  /* ---------- header & footer ---------- */
  const links = [
    ['index.html', 'Главная'], ['about.html', 'О клубе'], ['programs.html', 'Программы'],
    ['destinations.html', 'Направления'], ['how.html', 'Как это работает'], ['contacts.html', 'Контакты']
  ];
  const page = (location.pathname.split('/').pop() || 'index.html');
  const navLinks = (cls, active) => links.map(([h, t]) =>
    `<a href="${h}" class="${cls} ${h === page ? active : ''}">${t}</a>`).join('');

  const logo = `<a href="index.html" class="flex items-center gap-2 font-display text-sm font-semibold text-ocean">
      <span class="h-8 w-8">${ART.compass}</span><span class="leading-tight">Клуб умных<br>путешествий</span></a>`;

  const hdr = document.getElementById('site-header');
  if (hdr) hdr.innerHTML = `
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-2.5 shadow-soft sm:px-5" style="width:calc(100% - 1.5rem)">
      ${logo}
      <nav class="hidden items-center gap-1 text-sm font-medium text-ocean lg:flex" aria-label="Основная навигация">
        ${navLinks('rounded-full px-3 py-2 transition hover:bg-gold/60', 'bg-gold')}
      </nav>
      <a href="https://www.mwrlife.com/ayasinski/join" target="_blank" rel="noopener noreferrer" class="hidden rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-deep lg:inline-block">Вступить в клуб</a>
      <button id="menuBtn" class="grid h-11 w-11 place-items-center rounded-xl text-ocean lg:hidden" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobileMenu">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
    <div id="mobileMenu" class="mx-3 mt-2 hidden rounded-2xl glass p-3 shadow-soft lg:hidden">
      ${navLinks('block rounded-xl px-4 py-3 font-medium text-ocean', 'bg-gold')}
      <a href="https://www.mwrlife.com/ayasinski/join" target="_blank" rel="noopener noreferrer" class="mt-2 block rounded-full bg-ocean px-5 py-3 text-center font-semibold text-gold">Вступить в клуб</a>
    </div>
    <div class="pointer-events-none relative mx-auto mt-1 h-6" style="width:calc(100% - 1.5rem);max-width:72rem" aria-hidden="true">
      <div class="absolute left-3 right-3 top-3 h-0.5 rounded bg-ocean/15"></div>
      <div id="progressBar" class="absolute left-3 top-3 h-0.5 rounded bg-gold" style="width:0"></div>
      <div id="progressPlane" class="absolute top-0.5 h-5 w-9" style="left:0">${ART.plane}</div>
    </div>
  </header>`;


  const WA_URL = 'https://wa.me/48731135317?text=' + encodeURIComponent('Здравствуйте! Хочу узнать о Клубе умных путешествий.');
  const SOCIAL = [
    ['Telegram', '<path d="M21.5 3.5 2.8 10.7c-.9.4-.9 1.1-.2 1.3l4.8 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.8c.3-1.2-.5-1.8-1.5-1.5Z" fill="currentColor"/><path d="m8 13.2 9.5-5.9" stroke="#08293F" stroke-width="1.4" stroke-linecap="round" fill="none"/>'],
    ['Instagram', '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>'],
    ['WhatsApp', '<path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2Z" fill="currentColor"/>'],
    ['Facebook', '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z" fill="currentColor"/>'],
    ['YouTube', '<rect x="2.5" y="5" width="19" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="m10 9 5 3-5 3Z" fill="currentColor"/>']
  ];
  const socialHtml = `<ul class="mt-5 flex flex-wrap gap-3" aria-label="Мы в соцсетях">${SOCIAL.map(([n, d]) =>
    `<li><a href="${n === 'WhatsApp' ? WA_URL : '#'}" ${n === 'WhatsApp' ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="${n}" title="${n}" class="grid h-11 w-11 place-items-center rounded-full bg-pale/10 text-gold ring-1 ring-pale/20 transition hover:-translate-y-1 hover:bg-gold hover:text-ocean"><svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true">${d}</svg></a></li>`).join('')}</ul>`;

  const ftr = document.getElementById('site-footer');
  if (ftr) ftr.innerHTML = `
  <footer class="relative overflow-hidden bg-ocean-grad text-pale">
    <div class="relative -mt-px h-20 overflow-hidden text-[#0B3C5D]" aria-hidden="true">
      <div class="waves slow absolute bottom-0 left-0 h-16 text-[#0EA5E9]/60"><svg viewBox="0 0 1200 60" preserveAspectRatio="none" class="h-full"><path d="M0 30Q150 0 300 30T600 30T900 30T1200 30V60H0Z" fill="currentColor"/></svg><svg viewBox="0 0 1200 60" preserveAspectRatio="none" class="h-full"><path d="M0 30Q150 0 300 30T600 30T900 30T1200 30V60H0Z" fill="currentColor"/></svg></div>
      <div class="a-bob absolute bottom-6 left-[12%] h-14 w-32" style="--t:6s">${ART.ship}</div>
    </div>
    <div class="mx-auto grid max-w-6xl gap-10 px-4 pb-8 pt-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <div class="flex items-center gap-2 font-display text-gold"><span class="h-9 w-9">${ART.compass}</span>Клуб умных путешествий</div>
        <p class="mt-4 max-w-sm text-sm">Закрытый клуб для тех, кто хочет видеть мир больше и платить за это меньше. Умные маршруты, честные цены и сообщество попутчиков.</p>
        ${socialHtml}
      </div>
      <div><p class="font-display text-sm text-gold">Разделы</p><ul class="mt-3 space-y-2 text-sm">
        ${links.map(([h, t]) => `<li><a class="hover:text-gold" href="${h}">${t}</a></li>`).join('')}</ul></div>
      <div><p class="font-display text-sm text-gold">Связь</p><ul class="mt-3 space-y-2 text-sm">
        <li><a class="hover:text-gold" href="tel:+48731135317">+48 731 135 317</a></li>
        <li><a class="break-all hover:text-gold" href="mailto:andrei.jasinski@gmail.com">andrei.jasinski@gmail.com</a></li></ul></div>
    </div>
    <p class="border-t border-pale/20 px-4 py-5 text-center text-xs">© 2026 Клуб умных путешествий. Все права защищены.</p>
  </footer>`;


  /* ---------- floating WhatsApp button ---------- */
  const wa = document.createElement('a');
  wa.href = WA_URL; wa.target = '_blank'; wa.rel = 'noopener noreferrer';
  wa.setAttribute('aria-label', 'Написать в WhatsApp');
  wa.className = 'group fixed right-4 top-[5.5rem] z-40 flex items-center gap-3 sm:right-6';
  wa.innerHTML = `<span class="pointer-events-none hidden rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-gold opacity-0 shadow-soft transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">Написать в WhatsApp</span>
    <span class="relative grid h-14 w-14 place-items-center rounded-full bg-emerald text-ocean shadow-gold ring-4 ring-ocean/20 transition group-hover:scale-110">
      <span class="pin-pulse absolute inset-0 rounded-full" style="--c:#10B981"></span>
      <svg viewBox="0 0 24 24" class="relative h-7 w-7" aria-hidden="true"><path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2Z" fill="currentColor"/></svg>
    </span>`;
  document.body.appendChild(wa);

  const btn = document.getElementById('menuBtn'), menu = document.getElementById('mobileMenu');
  if (btn) {
    btn.addEventListener('click', () => { const o = menu.classList.toggle('hidden') === false; btn.setAttribute('aria-expanded', o); });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
  }

  /* ---------- reveal & counters ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    if (e.target.dataset.count) countUp(e.target);
  }), { threshold: .15 });
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,[data-count]').forEach(el => io.observe(el));

  function countUp(el) {
    const end = parseFloat(el.dataset.count), suf = el.dataset.suffix || '', dur = reduce ? 1 : 1600, t0 = performance.now();
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = v.toLocaleString('ru-RU') + suf;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  /* ---------- scroll progress plane ---------- */
  const pBar = document.getElementById('progressBar'), pPlane = document.getElementById('progressPlane');
  function onScroll() {
    const h = document.documentElement.scrollHeight - innerHeight, p = h > 0 ? scrollY / h : 0;
    if (pBar) { pBar.style.width = `calc((100% - 1.5rem) * ${p})`; pPlane.style.left = `calc((100% - 3rem) * ${p})`; }
    updateRoutes();
  }

  /* ---------- scroll-driven route: plane follows a path ---------- */
  function updateRoutes() {
    document.querySelectorAll('[data-route]').forEach(box => {
      const svg = box.querySelector('svg'), path = box.querySelector('path.route-main'), plane = box.querySelector('.route-plane'), fill = box.querySelector('path.route-fill');
      const vb = svg.viewBox.baseVal, r = box.getBoundingClientRect();
      if (!r.height) return;
      const p = reduce ? 1 : Math.max(0, Math.min(1, (innerHeight * .55 - r.top) / r.height));
      const len = path.getTotalLength(), pt = path.getPointAtLength(len * p), pt2 = path.getPointAtLength(Math.min(len, len * p + 2));
      const sx = r.width / vb.width, sy = r.height / vb.height;
      plane.style.left = (pt.x / vb.width * 100) + '%'; plane.style.top = (pt.y / vb.height * 100) + '%';
      const ang = Math.atan2((pt2.y - pt.y) * sy, (pt2.x - pt.x) * sx) * 180 / Math.PI;
      plane.firstElementChild.style.transform = `rotate(${ang}deg)`;
      if (fill) { fill.style.strokeDasharray = len; fill.style.strokeDashoffset = len * (1 - p); }
      box.querySelectorAll('[data-at]').forEach(s => s.classList.toggle('stamp-on', p >= parseFloat(s.dataset.at)));
    });
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- mouse parallax ---------- */
  const px = document.querySelectorAll('[data-parallax]');
  if (px.length && !reduce) {
    addEventListener('pointermove', e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      px.forEach(el => { const k = parseFloat(el.dataset.parallax); el.style.translate = `${-x * k}px ${-y * k}px`; });
    });
  }

  /* ---------- carousels ---------- */
  document.querySelectorAll('[data-carousel]').forEach(c => {
    const track = c.querySelector('[data-track]'), step = () => track.firstElementChild.getBoundingClientRect().width + 20;
    c.querySelector('[data-prev]').onclick = () => track.scrollBy({ left: -step(), behavior: 'smooth' });
    c.querySelector('[data-next]').onclick = () => track.scrollBy({ left: step(), behavior: 'smooth' });
  });

  /* ---------- mailto forms ---------- */
  document.querySelectorAll('form[data-mail]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    const name = f.name.value.trim(), contact = f.contact.value.trim(), err = f.querySelector('[data-err]');
    if (!name || !contact) { err.classList.remove('hidden'); return; }
    err.classList.add('hidden');
    const body = `Имя: ${name}\nКонтакт: ${contact}\nПожелания: ${(f.msg && f.msg.value.trim()) || '—'}`;
    location.href = 'mailto:andrei.jasinski@gmail.com?subject=' + encodeURIComponent('Заявка в Клуб умных путешествий') + '&body=' + encodeURIComponent(body);
  }));
})();
