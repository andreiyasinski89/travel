/* Analytics + cookie consent for every page of the site (one shared file).
   - Google Analytics 4 with Google Consent Mode v2: everything is "denied" until the visitor chooses.
   - Microsoft Clarity is loaded only after the visitor accepts analytics.
   - Cookie banner in the language of the page, choice remembered in localStorage (key "clubConsent").
   - GA4 events: Telegram / WhatsApp / phone / e-mail clicks, contact form, language switch.
   Change IDs, texts or events here and nowhere else. */
(function () {
  'use strict';
  if (window.__clubConsentLoaded) return;
  window.__clubConsentLoaded = true;

  var GA_ID = 'G-CY7Y855N2T';
  var CLARITY_ID = 'yy2wgl3hdr';
  var KEY = 'clubConsent';
  var VERSION = 2;                              // bump to ask every visitor again
  var MAX_AGE = 365 * 24 * 60 * 60 * 1000;      // the choice is remembered for 12 months

  var TXT = {
    ru: {
      aria: 'Настройки cookie', title: 'Мы ценим вашу приватность',
      desc: 'Мы используем cookie и похожие технологии. Необходимые нужны для работы сайта. Аналитические (Google Analytics, Microsoft Clarity) помогают понять, как вы пользуетесь сайтом, и включаются только с вашего согласия. Подробнее:',
      cookiePolicy: 'политика cookie', and: 'и', privacyPolicy: 'политика конфиденциальности',
      nec: 'Необходимые', necD: 'Нужны для работы сайта и сохранения вашего выбора. Всегда включены.',
      an: 'Аналитические', anD: 'Google Analytics и Microsoft Clarity: статистика посещений, клики и прокрутка страниц.',
      mk: 'Маркетинговые', mkD: 'Сигналы согласия для сервисов Google. Рекламу на сайте мы сейчас не показываем.',
      accept: 'Принять', decline: 'Отклонить', more: 'Настроить', save: 'Сохранить выбор'
    },
    en: {
      aria: 'Cookie settings', title: 'We value your privacy',
      desc: 'We use cookies and similar technologies. Necessary ones keep the site working. Analytics ones (Google Analytics, Microsoft Clarity) help us understand how you use the site and are turned on only with your consent. More details:',
      cookiePolicy: 'cookie policy', and: 'and', privacyPolicy: 'privacy policy',
      nec: 'Necessary', necD: 'Needed for the site to work and to save your choice. Always on.',
      an: 'Analytics', anD: 'Google Analytics and Microsoft Clarity: visit statistics, clicks and scrolling.',
      mk: 'Marketing', mkD: 'Consent signals for Google services. We do not currently show advertising on the site.',
      accept: 'Accept', decline: 'Decline', more: 'Customize', save: 'Save choice'
    },
    uk: {
      aria: 'Налаштування cookie', title: 'Ми цінуємо вашу приватність',
      desc: 'Ми використовуємо cookie та схожі технології. Необхідні потрібні для роботи сайту. Аналітичні (Google Analytics, Microsoft Clarity) допомагають зрозуміти, як ви користуєтеся сайтом, і вмикаються лише за вашої згоди. Докладніше:',
      cookiePolicy: 'політика cookie', and: 'і', privacyPolicy: 'політика конфіденційності',
      nec: 'Необхідні', necD: 'Потрібні для роботи сайту та збереження вашого вибору. Завжди ввімкнені.',
      an: 'Аналітичні', anD: 'Google Analytics і Microsoft Clarity: статистика відвідувань, кліки та прокручування сторінок.',
      mk: 'Маркетингові', mkD: 'Сигнали згоди для сервісів Google. Рекламу на сайті ми наразі не показуємо.',
      accept: 'Прийняти', decline: 'Відхилити', more: 'Налаштувати', save: 'Зберегти вибір'
    },
    pl: {
      aria: 'Ustawienia cookies', title: 'Cenimy Twoją prywatność',
      desc: 'Korzystamy z plików cookie i podobnych technologii. Niezbędne zapewniają działanie strony. Analityczne (Google Analytics, Microsoft Clarity) pomagają zrozumieć, jak korzystasz ze strony, i są włączane wyłącznie za Twoją zgodą. Więcej informacji:',
      cookiePolicy: 'polityka cookies', and: 'i', privacyPolicy: 'polityka prywatności',
      nec: 'Niezbędne', necD: 'Potrzebne do działania strony i zapamiętania Twojego wyboru. Zawsze włączone.',
      an: 'Analityczne', anD: 'Google Analytics i Microsoft Clarity: statystyki odwiedzin, kliknięcia i przewijanie stron.',
      mk: 'Marketingowe', mkD: 'Sygnały zgody dla usług Google. Reklam na stronie obecnie nie wyświetlamy.',
      accept: 'Akceptuj', decline: 'Odrzuć', more: 'Dostosuj', save: 'Zapisz wybór'
    },
    de: {
      aria: 'Cookie-Einstellungen', title: 'Wir achten auf Ihre Privatsphäre',
      desc: 'Wir verwenden Cookies und ähnliche Technologien. Notwendige sorgen dafür, dass die Website funktioniert. Analyse-Cookies (Google Analytics, Microsoft Clarity) helfen uns zu verstehen, wie Sie die Website nutzen, und werden nur mit Ihrer Einwilligung aktiviert. Mehr dazu:',
      cookiePolicy: 'Cookie-Richtlinie', and: 'und', privacyPolicy: 'Datenschutzerklärung',
      nec: 'Notwendig', necD: 'Erforderlich für den Betrieb der Website und zum Speichern Ihrer Auswahl. Immer aktiv.',
      an: 'Analyse', anD: 'Google Analytics und Microsoft Clarity: Besucherstatistik, Klicks und Scrollen.',
      mk: 'Marketing', mkD: 'Einwilligungssignale für Google-Dienste. Werbung zeigen wir auf der Website derzeit nicht an.',
      accept: 'Akzeptieren', decline: 'Ablehnen', more: 'Anpassen', save: 'Auswahl speichern'
    },
    es: {
      aria: 'Configuración de cookies', title: 'Valoramos tu privacidad',
      desc: 'Usamos cookies y tecnologías similares. Las necesarias permiten que el sitio funcione. Las analíticas (Google Analytics, Microsoft Clarity) nos ayudan a entender cómo usas el sitio y solo se activan con tu consentimiento. Más información:',
      cookiePolicy: 'política de cookies', and: 'y', privacyPolicy: 'política de privacidad',
      nec: 'Necesarias', necD: 'Imprescindibles para que el sitio funcione y para guardar tu elección. Siempre activas.',
      an: 'Analíticas', anD: 'Google Analytics y Microsoft Clarity: estadísticas de visitas, clics y desplazamiento.',
      mk: 'De marketing', mkD: 'Señales de consentimiento para los servicios de Google. Actualmente no mostramos publicidad en el sitio.',
      accept: 'Aceptar', decline: 'Rechazar', more: 'Personalizar', save: 'Guardar elección'
    }
  };
  var LANG = (document.documentElement.lang || 'ru').toLowerCase().slice(0, 2);
  if (!TXT[LANG]) LANG = 'ru';
  var L = TXT[LANG];

  /* ---------- storage ---------- */
  function read() {
    try {
      var o = JSON.parse(localStorage.getItem(KEY));
      if (o && o.v === VERSION && Date.now() - Date.parse(o.ts) < MAX_AGE) return o;
    } catch (e) { /* storage blocked or broken: treat as "no choice yet" */ }
    return null;
  }

  /* ---------- Google Analytics 4 + Consent Mode v2 (everything denied by default) ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);

  var state = read();
  window.clubConsent = { state: state, open: openBanner };

  function applyConsent(o) {
    var an = o && o.analytics ? 'granted' : 'denied', mk = o && o.marketing ? 'granted' : 'denied';
    gtag('consent', 'update', { analytics_storage: an, ad_storage: mk, ad_user_data: mk, ad_personalization: mk });
    if (an === 'granted') loadClarity(mk);
    else revokeClarity();
  }
  if (state) applyConsent(state);

  gtag('js', new Date());
  gtag('config', GA_ID);
  var ga = document.createElement('script');
  ga.async = true; ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(ga);

  /* ---------- Microsoft Clarity: only after the visitor accepts analytics ---------- */
  var clarityOn = false;
  function loadClarity(mk) {
    if (!clarityOn) {
      clarityOn = true;
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', CLARITY_ID);
    }
    try { window.clarity('consentv2', { ad_Storage: mk, analytics_Storage: 'granted' }); } catch (e) {}
  }
  function revokeClarity() {
    if (clarityOn) {
      try { window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' }); } catch (e) {}
      try { window.clarity('consent', false); } catch (e) {}
    }
    clearCookies(/^(_ga|_gid|_gat|_clck|_clsk|CLID|MUID)/);
  }
  // remove analytics cookies that an earlier "accept" may have left behind
  function clearCookies(re) {
    var host = location.hostname.split('.'), domains = [''];
    for (var i = 0; i < host.length - 1; i++) domains.push(';domain=' + host.slice(i).join('.'), ';domain=.' + host.slice(i).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (!re.test(name)) return;
      domains.forEach(function (d) { document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/' + d; });
    });
  }

  function save(analytics, marketing) {
    var o = { v: VERSION, necessary: true, analytics: !!analytics, marketing: !!marketing, ts: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
    state = o; window.clubConsent.state = o;
    applyConsent(o);
    window.dispatchEvent(new CustomEvent('consent-change', { detail: o }));
  }

  /* ---------- banner ---------- */
  function sw(id, label, desc, on, locked) {
    return '<div class="flex items-start justify-between gap-4 rounded-2xl bg-deep p-4">' +
      '<div><label for="' + id + '" class="font-semibold text-gold">' + label + '</label><p class="mt-1 text-xs">' + desc + '</p></div>' +
      '<input id="' + id + '" type="checkbox" class="mt-1 h-6 w-6 shrink-0 accent-[#F5B83D]"' + (on ? ' checked' : '') + (locked ? ' disabled' : '') + '></div>';
  }
  function closeBanner() { var b = document.getElementById('cookieBanner'); if (b) b.remove(); }
  function openBanner() {
    if (!document.body) { document.addEventListener('DOMContentLoaded', openBanner); return; }
    closeBanner();
    var st = state || {};
    var btn = 'min-h-[44px] flex-1 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ocean transition hover:bg-gold-dark';
    var box = document.createElement('div');
    box.id = 'cookieBanner';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', L.aria);
    box.setAttribute('aria-labelledby', 'ckTitle'); box.setAttribute('aria-describedby', 'ckDesc');
    box.className = 'fixed inset-x-3 bottom-3 z-[60] mx-auto max-h-[85vh] max-w-xl overflow-y-auto rounded-3xl bg-ocean p-5 text-pale shadow-soft ring-1 ring-pale/25 sm:left-6 sm:right-auto sm:mx-0 sm:p-6';
    box.innerHTML =
      '<h2 id="ckTitle" class="font-display text-base font-semibold text-gold">' + L.title + '</h2>' +
      '<p id="ckDesc" class="mt-2 text-sm">' + L.desc + ' <a class="underline hover:text-gold" href="cookies.html">' + L.cookiePolicy + '</a> ' + L.and +
        ' <a class="underline hover:text-gold" href="privacy.html">' + L.privacyPolicy + '</a>.</p>' +
      '<div id="ckPanel" class="mt-4 hidden space-y-3 text-sm">' +
        sw('ckNec', L.nec, L.necD, true, true) + sw('ckAn', L.an, L.anD, st.analytics, false) + sw('ckMk', L.mk, L.mkD, st.marketing, false) +
      '</div>' +
      '<div class="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">' +
        '<button type="button" data-ck="accept" class="' + btn + '">' + L.accept + '</button>' +
        '<button type="button" data-ck="decline" class="' + btn + '">' + L.decline + '</button>' +
        '<button type="button" data-ck="more" class="min-h-[44px] flex-1 rounded-full border-2 border-pale/50 px-5 py-2.5 text-sm font-semibold text-pale transition hover:border-gold hover:text-gold">' + L.more + '</button>' +
      '</div>';
    document.body.appendChild(box);
    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-ck]'); if (!b) return;
      var k = b.getAttribute('data-ck');
      if (k === 'accept') { save(true, true); closeBanner(); }
      else if (k === 'decline') { save(false, false); closeBanner(); }
      else {
        var panel = box.querySelector('#ckPanel');
        if (panel.classList.contains('hidden')) { panel.classList.remove('hidden'); b.textContent = L.save; }
        else { save(box.querySelector('#ckAn').checked, box.querySelector('#ckMk').checked); closeBanner(); }
      }
    });
    box.addEventListener('keydown', function (e) { if (e.key === 'Escape' && state) closeBanner(); });
    if (state) box.querySelector('button').focus();
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-cookie-settings]')) openBanner();
  });
  function firstVisit() { if (!state) setTimeout(openBanner, 400); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', firstVisit); else firstVisit();

  /* ---------- GA4 events ---------- */
  function track(name, params) {
    params = params || {};
    params.page_language = LANG;
    params.transport_type = 'beacon';           // survives the page being closed right after the click
    try { gtag('event', name, params); } catch (e) {}
  }
  window.clubTrack = track;

  function where(a) {
    if (a.closest('footer')) return 'footer';
    if (a.closest('#site-header')) return 'header';
    if (/\bfixed\b/.test(a.className || '')) return 'floating_button';
    return 'page';
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href') || '', low = href.toLowerCase(), name = null, host = '';
    if (low.indexOf('tel:') === 0) name = 'click_phone';
    else if (low.indexOf('mailto:') === 0) name = 'click_email';
    else {
      try { host = new URL(a.href, location.href).hostname.toLowerCase(); } catch (x) {}
      if (host === 't.me' || host === 'telegram.me' || host === 'telegram.org') name = 'click_telegram';
      else if (host === 'wa.me' || host === 'whatsapp.com' || /\.whatsapp\.com$/.test(host)) name = 'click_whatsapp';
    }
    if (name) track(name, { link_url: String(a.href).slice(0, 200), link_location: where(a) });

    var to = a.getAttribute('hreflang');
    if (to && href !== '#' && to !== LANG) {
      track('language_switch', {
        language_from: LANG, language_to: to,
        switch_source: a.closest('#langList') ? 'menu' : (a.hasAttribute('data-lang-go') ? 'suggestion' : 'link')
      });
    }
  }, true);

  // fired by site.js after the contact form has been validated and sent
  window.addEventListener('club-form-submit', function (e) {
    track('contact_form_submit', { form_id: (e.detail && e.detail.form) || 'contact', method: (e.detail && e.detail.method) || 'formsubmit' });
  });
})();
