(function () {
  const LANG = document.documentElement.lang || 'ru';
  const EN = LANG === 'en';
  const D = {
 "uk": {
  "Главная": "Головна",
  "О клубе": "Про клуб",
  "Программы": "Програми",
  "Направления": "Напрямки",
  "Как это работает": "Як це працює",
  "Контакты": "Контакти",
  "Клуб умных<br>путешествий": "Клуб розумних<br>подорожей",
  "Язык": "Мова",
  "Основная навигация": "Основна навігація",
  "Вступить в клуб": "Вступити до клубу",
  "Открыть меню": "Відкрити меню",
  "Здравствуйте! Хочу узнать о Клубе умных путешествий.": "Вітаю! Хочу дізнатися про Клуб розумних подорожей.",
  "Мы в соцсетях": "Ми в соцмережах",
  "Написать в WhatsApp": "Написати у WhatsApp",
  "Клуб умных путешествий": "Клуб розумних подорожей",
  "Закрытый клуб для тех, кто хочет видеть мир больше и платить за это меньше. Умные маршруты, честные цены и сообщество попутчиков.": "Закритий клуб для тих, хто хоче бачити світ більше й платити за це менше. Розумні маршрути, чесні ціни та спільнота попутників.",
  "Разделы": "Розділи",
  "Связь": "Зв’язок",
  "Независимый информационный сайт партнёра MWR Life. Не является официальным сайтом компании MWR Life. Материалы носят ознакомительный характер и не являются публичной офертой; условия, цены и доступность услуг уточняйте на официальном сайте компании.": "Незалежний інформаційний сайт партнера MWR Life. Не є офіційним сайтом компанії MWR Life. Матеріали мають ознайомлювальний характер і не є публічною офертою; умови, ціни та доступність послуг уточнюйте на офіційному сайті компанії.",
  "Правовая информация": "Правова інформація",
  "Политика конфиденциальности": "Політика конфіденційності",
  "Политика cookie": "Політика cookie",
  "Настройки cookie": "Налаштування cookie",
  "Клуб умных путешествий. Все права защищены.": "Клуб розумних подорожей. Усі права захищено.",
  "Отправляем…": "Надсилаємо…",
  "Спасибо! Заявка отправлена, мы свяжемся с вами.": "Дякуємо! Заявку надіслано, ми зв’яжемося з вами.",
  "Заявка в Клуб умных путешествий": "Заявка до Клубу розумних подорожей",
  "Мы ценим вашу приватность": "Ми цінуємо вашу приватність",
  "Сайт использует только необходимые технические данные, например запоминает ваш выбор по cookie. Аналитические и маркетинговые cookie мы включаем только с вашего согласия. Подробнее:": "Сайт використовує лише необхідні технічні дані, наприклад запам’ятовує ваш вибір щодо cookie. Аналітичні та маркетингові cookie ми вмикаємо лише за вашої згоди. Докладніше:",
  "политика cookie": "політика cookie",
  "и": "і",
  "политика конфиденциальности": "політика конфіденційності",
  "Необходимые": "Необхідні",
  "Нужны для работы сайта и сохранения вашего выбора. Всегда включены.": "Потрібні для роботи сайту та збереження вашого вибору. Завжди ввімкнені.",
  "Аналитические": "Аналітичні",
  "Помогают понять, как посетители пользуются сайтом. Сейчас на сайте не используются.": "Допомагають зрозуміти, як відвідувачі користуються сайтом. Наразі на сайті не використовуються.",
  "Маркетинговые": "Маркетингові",
  "Нужны для персонализированной рекламы. Сейчас на сайте не используются.": "Потрібні для персоналізованої реклами. Наразі на сайті не використовуються.",
  "Принять все": "Прийняти всі",
  "Только необходимые": "Лише необхідні",
  "Настроить": "Налаштувати",
  "Сохранить выбор": "Зберегти вибір",
  "Имя": "Ім’я",
  "Контакт": "Контакт",
  "Пожелания": "Побажання"
 },
 "pl": {
  "Главная": "Strona główna",
  "О клубе": "O klubie",
  "Программы": "Programy",
  "Направления": "Kierunki",
  "Как это работает": "Jak to działa",
  "Контакты": "Kontakt",
  "Клуб умных<br>путешествий": "Klub Inteligentnych<br>Podróży",
  "Язык": "Język",
  "Основная навигация": "Nawigacja główna",
  "Вступить в клуб": "Dołącz do klubu",
  "Открыть меню": "Otwórz menu",
  "Здравствуйте! Хочу узнать о Клубе умных путешествий.": "Dzień dobry! Chcę dowiedzieć się więcej o Klubie Inteligentnych Podróży.",
  "Мы в соцсетях": "Jesteśmy w mediach społecznościowych",
  "Написать в WhatsApp": "Napisz na WhatsApp",
  "Клуб умных путешествий": "Klub Inteligentnych Podróży",
  "Закрытый клуб для тех, кто хочет видеть мир больше и платить за это меньше. Умные маршруты, честные цены и сообщество попутчиков.": "Zamknięty klub dla tych, którzy chcą zobaczyć więcej świata i płacić za to mniej. Inteligentne trasy, uczciwe ceny i społeczność towarzyszy podróży.",
  "Разделы": "Sekcje",
  "Связь": "Dane kontaktowe",
  "Независимый информационный сайт партнёра MWR Life. Не является официальным сайтом компании MWR Life. Материалы носят ознакомительный характер и не являются публичной офертой; условия, цены и доступность услуг уточняйте на официальном сайте компании.": "Niezależna witryna informacyjna partnera MWR Life. Nie jest oficjalną stroną firmy MWR Life. Materiały mają charakter informacyjny i nie stanowią oferty publicznej; warunki, ceny i dostępność usług sprawdzaj na oficjalnej stronie firmy.",
  "Правовая информация": "Informacje prawne",
  "Политика конфиденциальности": "Polityka prywatności",
  "Политика cookie": "Polityka cookies",
  "Настройки cookie": "Ustawienia cookies",
  "Клуб умных путешествий. Все права защищены.": "Klub Inteligentnych Podróży. Wszelkie prawa zastrzeżone.",
  "Отправляем…": "Wysyłamy…",
  "Спасибо! Заявка отправлена, мы свяжемся с вами.": "Dziękujemy! Zgłoszenie zostało wysłane, skontaktujemy się z Tobą.",
  "Заявка в Клуб умных путешествий": "Zgłoszenie do Klubu Inteligentnych Podróży",
  "Мы ценим вашу приватность": "Cenimy Twoją prywatność",
  "Сайт использует только необходимые технические данные, например запоминает ваш выбор по cookie. Аналитические и маркетинговые cookie мы включаем только с вашего согласия. Подробнее:": "Ta strona wykorzystuje tylko niezbędne dane techniczne, na przykład zapamiętuje Twój wybór dotyczący plików cookie. Analityczne i marketingowe pliki cookie włączamy wyłącznie za Twoją zgodą. Więcej informacji:",
  "политика cookie": "polityka cookies",
  "и": "i",
  "политика конфиденциальности": "polityka prywatności",
  "Необходимые": "Niezbędne",
  "Нужны для работы сайта и сохранения вашего выбора. Всегда включены.": "Potrzebne do działania strony i zapisania Twojego wyboru. Zawsze włączone.",
  "Аналитические": "Analityczne",
  "Помогают понять, как посетители пользуются сайтом. Сейчас на сайте не используются.": "Pomagają zrozumieć, jak odwiedzający korzystają ze strony. Obecnie nie są używane na tej stronie.",
  "Маркетинговые": "Marketingowe",
  "Нужны для персонализированной рекламы. Сейчас на сайте не используются.": "Potrzebne do spersonalizowanych reklam. Obecnie nie są używane na tej stronie.",
  "Принять все": "Akceptuj wszystkie",
  "Только необходимые": "Tylko niezbędne",
  "Настроить": "Dostosuj",
  "Сохранить выбор": "Zapisz wybór",
  "Имя": "Imię",
  "Контакт": "Kontakt",
  "Пожелания": "Uwagi"
 }
};
  const T = (ru, en) => (LANG === 'ru' ? ru : LANG === 'en' ? en : ((D[LANG] && D[LANG][ru]) || en));
  const LOCALE = { ru: 'ru-RU', en: 'en-US', uk: 'uk-UA', pl: 'pl-PL' }[LANG] || 'ru-RU';
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
    train: '<svg viewBox="0 0 300 50" class="h-full w-full" aria-hidden="true"><g fill="#0B3C5D"><rect x="0" y="8" width="60" height="30" rx="6"/><rect x="66" y="8" width="60" height="30" rx="6"/><rect x="132" y="8" width="60" height="30" rx="6"/><path d="M198 8h60q30 0 40 20v10H198Z"/></g><g fill="#F5B83D"><rect x="8" y="14" width="14" height="10" rx="2"/><rect x="28" y="14" width="14" height="10" rx="2"/><rect x="74" y="14" width="14" height="10" rx="2"/><rect x="94" y="14" width="14" height="10" rx="2"/><rect x="140" y="14" width="14" height="10" rx="2"/><rect x="160" y="14" width="14" height="10" rx="2"/><path d="M206 14h24v10h-24zM240 14h22l16 10h-38z"/></g><g fill="#10B981"><circle cx="12" cy="42" r="5"/><circle cx="48" cy="42" r="5"/><circle cx="78" cy="42" r="5"/><circle cx="114" cy="42" r="5"/><circle cx="144" cy="42" r="5"/><circle cx="180" cy="42" r="5"/><circle cx="216" cy="42" r="5"/><circle cx="266" cy="42" r="5"/></g></svg>',
    globe: '<svg viewBox="0 0 200 200" class="h-full w-full" aria-hidden="true"><defs><radialGradient id="gSea" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#5BC9F2"/><stop offset="1" stop-color="#0B6FA0"/></radialGradient><clipPath id="gClip"><circle cx="100" cy="100" r="92"/></clipPath></defs><circle cx="100" cy="100" r="92" fill="url(#gSea)"/><g clip-path="url(#gClip)"><g style="animation:globeSlide 22s linear infinite"><g id="gLand" fill="#A6F0C4"><path d="M10 70q18-20 40-8t10 30-26 14-24-6zM80 40q22-14 40 4t-6 24-30 0zM70 100q20-6 30 14t-4 40-24-4-6-30zM130 90q22-10 36 8t-8 30-28-10zM30 140q14-6 22 6t-10 12-14-8z"/></g><use href="#gLand" x="200"/></g></g><ellipse cx="100" cy="100" rx="92" ry="30" fill="none" stroke="#BAE6FD" stroke-opacity=".35"/><ellipse cx="100" cy="100" rx="30" ry="92" fill="none" stroke="#BAE6FD" stroke-opacity=".35"/><circle cx="100" cy="100" r="92" fill="none" stroke="#0B3C5D" stroke-width="3"/></svg>'
  };
  window.__ART = ART;
  document.querySelectorAll('[data-art]').forEach(el => { el.innerHTML = ART[el.dataset.art] || ''; });

  /* ---------- header & footer ---------- */
  const links = [
    ['index.html', T('Главная', 'Home')], ['about.html', T('О клубе', 'About')], ['programs.html', T('Программы', 'Programs')],
    ['destinations.html', T('Направления', 'Destinations')], ['how.html', T('Как это работает', 'How it works')], ['contacts.html', T('Контакты', 'Contacts')]
  ];
  let page = location.pathname.split('/').pop();
  page = !page ? 'index.html' : (/\.html$/.test(page) ? page : page + '.html');
  const LANGS = [['ru', 'RU', 'Русский'], ['en', 'EN', 'English'], ['uk', 'UA', 'Українська'], ['pl', 'PL', 'Polski']];
  const langHref = code => (LANG === 'ru' ? '' : '../') + (code === 'ru' ? '' : code + '/') + page + location.hash;
  const navLinks = (cls, active) => links.map(([h, t]) =>
    `<a href="${h}" class="${cls} ${h === page ? active : ''}">${t}</a>`).join('');

  const logo = `<a href="index.html" class="flex items-center gap-2 font-display text-xs font-semibold text-ocean max-[339px]:text-[10.5px] min-[400px]:text-sm">
      <span class="h-8 w-8">${ART.compass}</span><span class="whitespace-nowrap leading-tight">${T('Клуб умных<br>путешествий', 'Smart Travel<br>Club')}</span></a>`;

  const curLang = LANGS.find(l => l[0] === LANG) || LANGS[0];
  const langSwitch = `<div class="relative" id="langMenu">
        <button type="button" id="langBtn" aria-haspopup="true" aria-expanded="false" aria-controls="langList" aria-label="${T('Язык', 'Language')}: ${curLang[2]}" class="flex min-h-[40px] items-center gap-1.5 rounded-full bg-ocean/15 px-3 py-2 text-xs font-bold text-ocean transition hover:bg-gold/60">
          <svg class="hidden h-4 w-4 min-[360px]:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/></svg>
          <span>${curLang[1]}</span>
          <svg class="chev h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <ul id="langList" role="menu" aria-label="${T('Язык', 'Language')}" class="absolute right-0 top-full z-[60] mt-2 hidden w-48 rounded-2xl bg-ocean p-1.5 shadow-soft ring-1 ring-pale/25">
          ${LANGS.map(([code, short, name]) => `<li role="none"><a role="menuitem" href="${code === LANG ? '#' : langHref(code)}" lang="${code}" hreflang="${code}" ${code === LANG ? 'aria-current="true"' : ''} class="flex min-h-[44px] items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${code === LANG ? 'bg-gold text-ocean' : 'text-pale hover:bg-pale/15'}"><span>${name}</span><span class="text-xs opacity-80">${short}</span></a></li>`).join('')}
        </ul>
      </div>`;

  const hdr = document.getElementById('site-header');
  if (hdr) hdr.innerHTML = `
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl glass px-4 py-2.5 shadow-soft sm:px-5" style="width:calc(100% - 1.5rem)">
      ${logo}
      <nav class="hidden items-center gap-1 text-sm font-medium text-ocean lg:flex" aria-label="${T('Основная навигация', 'Main navigation')}">
        ${navLinks('whitespace-nowrap rounded-full px-2 py-2 text-[13px] transition hover:bg-gold/60 xl:px-3 xl:text-sm', 'bg-gold')}
      </nav>
      ${langSwitch}
      <a href="https://www.mwrlife.com/ayasinski/join" target="_blank" rel="noopener noreferrer" class="hidden whitespace-nowrap rounded-full bg-ocean px-4 py-2.5 text-sm font-semibold text-gold transition hover:bg-deep lg:inline-block xl:px-5">${T('Вступить в клуб', 'Join the club')}</a>
      <button id="menuBtn" class="grid h-11 w-11 place-items-center rounded-xl text-ocean lg:hidden" aria-label="${T('Открыть меню', 'Open menu')}" aria-expanded="false" aria-controls="mobileMenu">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
    <div id="mobileMenu" class="mx-3 mt-2 hidden rounded-2xl glass p-3 shadow-soft lg:hidden">
      ${navLinks('block rounded-xl px-4 py-3 font-medium text-ocean', 'bg-gold')}
      <a href="https://www.mwrlife.com/ayasinski/join" target="_blank" rel="noopener noreferrer" class="mt-2 block rounded-full bg-ocean px-5 py-3 text-center font-semibold text-gold">${T('Вступить в клуб', 'Join the club')}</a>
    </div>
    <div class="pointer-events-none relative mx-auto mt-1 h-6" style="width:calc(100% - 1.5rem);max-width:72rem" aria-hidden="true">
      <div class="absolute left-3 right-3 top-3 h-0.5 rounded bg-ocean/15"></div>
      <div id="progressBar" class="absolute left-3 top-3 h-0.5 rounded bg-gold" style="width:0"></div>
      <div id="progressPlane" class="absolute top-0.5 h-5 w-9" style="left:0">${ART.plane}</div>
    </div>
  </header>`;


  const WA_URL = 'https://wa.me/48731135317?text=' + encodeURIComponent(T('Здравствуйте! Хочу узнать о Клубе умных путешествий.', 'Hello! I would like to find out more about the Smart Travel Club.'));
  const SOCIAL_URL = { Telegram: 'https://t.me/ayasinski', Instagram: 'https://instagram.com/andrei.yasinski', WhatsApp: WA_URL };
  const SOCIAL = [
    ['Telegram', '<path d="M21.5 3.5 2.8 10.7c-.9.4-.9 1.1-.2 1.3l4.8 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.8c.3-1.2-.5-1.8-1.5-1.5Z" fill="currentColor"/><path d="m8 13.2 9.5-5.9" stroke="#08293F" stroke-width="1.4" stroke-linecap="round" fill="none"/>'],
    ['Instagram', '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.2" fill="currentColor"/>'],
    ['WhatsApp', '<path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2Z" fill="currentColor"/>'],
    ['Facebook', '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8.5c0-.3.2-.5.5-.5Z" fill="currentColor"/>'],
    ['YouTube', '<rect x="2.5" y="5" width="19" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="m10 9 5 3-5 3Z" fill="currentColor"/>']
  ];
  const socialHtml = `<ul class="mt-5 flex flex-wrap gap-3" aria-label="${T('Мы в соцсетях', 'Follow us')}">${SOCIAL.map(([n, d]) =>
    `<li><a href="${SOCIAL_URL[n] || '#'}" ${SOCIAL_URL[n] ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="${n}" title="${n}" class="grid h-11 w-11 place-items-center rounded-full bg-pale/10 text-gold ring-1 ring-pale/20 transition hover:-translate-y-1 hover:bg-gold hover:text-ocean"><svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true">${d}</svg></a></li>`).join('')}</ul>`;

  const ftr = document.getElementById('site-footer');
  if (ftr) ftr.innerHTML = `
  <footer class="relative overflow-hidden bg-ocean-grad text-pale">
    <div class="relative -mt-px h-20 overflow-hidden text-[#0B3C5D]" aria-hidden="true">
      <div class="waves slow absolute bottom-0 left-0 h-16 text-[#0EA5E9]/60"><svg viewBox="0 0 1200 60" preserveAspectRatio="none" class="h-full"><path d="M0 30Q150 0 300 30T600 30T900 30T1200 30V60H0Z" fill="currentColor"/></svg><svg viewBox="0 0 1200 60" preserveAspectRatio="none" class="h-full"><path d="M0 30Q150 0 300 30T600 30T900 30T1200 30V60H0Z" fill="currentColor"/></svg></div>
      <div class="a-bob absolute bottom-6 left-[12%] h-14 w-32" style="--t:6s">${ART.ship}</div>
    </div>
    <div class="mx-auto grid max-w-6xl gap-10 px-4 pb-8 pt-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <div class="flex items-center gap-2 font-display text-gold"><span class="h-9 w-9">${ART.compass}</span>${T('Клуб умных путешествий', 'Smart Travel Club')}</div>
        <p class="mt-4 max-w-sm text-sm">${T('Закрытый клуб для тех, кто хочет видеть мир больше и платить за это меньше. Умные маршруты, честные цены и сообщество попутчиков.', 'A private club for those who want to see more of the world and pay less for it. Smart routes, honest prices and a community of travel companions.')}</p>
        ${socialHtml}
      </div>
      <div><p class="font-display text-sm text-gold">${T('Разделы', 'Sections')}</p><ul class="mt-3 space-y-2 text-sm">
        ${links.map(([h, t]) => `<li><a class="hover:text-gold" href="${h}">${t}</a></li>`).join('')}</ul></div>
      <div><p class="font-display text-sm text-gold">${T('Связь', 'Contact')}</p><ul class="mt-3 space-y-2 text-sm">
        <li><a class="hover:text-gold" href="tel:+48731135317">+48 731 135 317</a></li>
        <li><a class="break-all hover:text-gold" href="mailto:andrei.jasinski@gmail.com">andrei.jasinski@gmail.com</a></li></ul></div>
    </div>
    <div class="mx-auto max-w-6xl border-t border-pale/20 px-4 py-5 text-xs sm:px-6">
      <p class="max-w-3xl">${T('Независимый информационный сайт партнёра MWR Life. Не является официальным сайтом компании MWR Life. Материалы носят ознакомительный характер и не являются публичной офертой; условия, цены и доступность услуг уточняйте на официальном сайте компании.', 'An independent information website of an MWR Life partner. It is not the official website of MWR Life. The materials are for information only and do not constitute a public offer; please check terms, prices and availability of services on the company’s official website.')}</p>
      <nav class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="${T('Правовая информация', 'Legal information')}">
        <a class="underline-offset-4 hover:text-gold hover:underline" href="privacy.html">${T('Политика конфиденциальности', 'Privacy Policy')}</a>
        <a class="underline-offset-4 hover:text-gold hover:underline" href="cookies.html">${T('Политика cookie', 'Cookie Policy')}</a>
        <button type="button" data-cookie-settings class="underline-offset-4 hover:text-gold hover:underline">${T('Настройки cookie', 'Cookie settings')}</button>
      </nav>
      <p class="mt-4">© 2026 ${T('Клуб умных путешествий. Все права защищены.', 'Smart Travel Club. All rights reserved.')}</p>
    </div>
  </footer>`;


  /* ---------- floating WhatsApp button ---------- */
  const wa = document.createElement('a');
  wa.href = WA_URL; wa.target = '_blank'; wa.rel = 'noopener noreferrer';
  wa.setAttribute('aria-label', T('Написать в WhatsApp', 'Message us on WhatsApp'));
  wa.className = 'group fixed right-4 top-[5.5rem] z-40 flex items-center gap-3 sm:right-6';
  wa.innerHTML = `<span class="pointer-events-none hidden rounded-full bg-ocean px-4 py-2 text-sm font-semibold text-gold opacity-0 shadow-soft transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">${T('Написать в WhatsApp', 'Message us on WhatsApp')}</span>
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
      el.textContent = v.toLocaleString(LOCALE) + suf;
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

  /* ---------- contact form: send to e-mail (FormSubmit), mailto as fallback ---------- */
  const FORM_ENDPOINT = 'https://formsubmit.co/ajax/andrei.jasinski@gmail.com';
  document.querySelectorAll('form[data-mail]').forEach(f => f.addEventListener('submit', async e => {
    e.preventDefault();
    const name = f.name.value.trim(), contact = f.contact.value.trim(), msg = (f.msg && f.msg.value.trim()) || '';
    const err = f.querySelector('[data-err]'), btn = f.querySelector('button[type=submit]');
    let ok = f.querySelector('[data-ok]');
    if (!ok) { ok = document.createElement('p'); ok.setAttribute('data-ok', ''); ok.setAttribute('role', 'status'); ok.className = 'hidden rounded-lg bg-emerald px-3 py-2 text-sm font-semibold text-ocean'; btn.before(ok); }
    ok.classList.add('hidden');
    if (!name || !contact || (f.consent && !f.consent.checked)) { err.classList.remove('hidden'); return; }
    err.classList.add('hidden');
    if (f._honey && f._honey.value) return; // honeypot (spam trap)
    const label = btn.textContent; btn.disabled = true; btn.textContent = T('Отправляем…', 'Sending…');
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ 'Имя': name, 'Контакт': contact, 'Сообщение': msg || '—', 'Согласие с политикой': 'да', 'Язык сайта': LANG.toUpperCase(), _subject: 'Заявка в Клуб умных путешествий', _template: 'table', _captcha: 'false' })
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || String(j.success) === 'false') throw new Error('send failed');
      ok.textContent = T('Спасибо! Заявка отправлена, мы свяжемся с вами.', 'Thank you! Your request has been sent. We will get back to you.');
      ok.classList.remove('hidden'); f.reset();
    } catch (x) {
      const body = `${T('Имя', 'Name')}: ${name}\n${T('Контакт', 'Contact')}: ${contact}\n${T('Пожелания', 'Wishes')}: ${msg || '—'}`;
      location.href = 'mailto:andrei.jasinski@gmail.com?subject=' + encodeURIComponent(T('Заявка в Клуб умных путешествий', 'Application to the Smart Travel Club')) + '&body=' + encodeURIComponent(body);
    } finally { btn.disabled = false; btn.textContent = label; }
  }));

  /* ---------- language dropdown ---------- */
  (function langDropdown() {
    const btn = document.getElementById('langBtn'), list = document.getElementById('langList');
    if (!btn || !list) return;
    const items = () => [...list.querySelectorAll('a')];
    const open = focusFirst => {
      list.classList.remove('hidden'); btn.setAttribute('aria-expanded', 'true');
      btn.querySelector('.chev').style.transform = 'rotate(180deg)';
      if (focusFirst) { const a = list.querySelector('[aria-current]') || items()[0]; a && a.focus(); }
    };
    const close = ret => {
      list.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false');
      btn.querySelector('.chev').style.transform = '';
      if (ret) btn.focus();
    };
    btn.addEventListener('click', () => (list.classList.contains('hidden') ? open(false) : close(false)));
    btn.addEventListener('keydown', e => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); open(true); } });
    list.addEventListener('keydown', e => {
      const a = items(), i = a.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); a[(i + 1) % a.length].focus(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); a[(i - 1 + a.length) % a.length].focus(); }
      else if (e.key === 'Home') { e.preventDefault(); a[0].focus(); }
      else if (e.key === 'End') { e.preventDefault(); a[a.length - 1].focus(); }
      else if (e.key === 'Escape') { e.preventDefault(); close(true); }
      else if (e.key === 'Tab') close(false);
    });
    list.addEventListener('click', e => {
      const a = e.target.closest('a'); if (!a) return;
      if (a.getAttribute('hreflang')) setStoredLang(a.getAttribute('hreflang'));
      if (a.getAttribute('href') === '#') { e.preventDefault(); close(true); }
    });
    document.addEventListener('click', e => { if (!e.target.closest('#langMenu')) close(false); });
  })();

  /* ---------- language suggestion (never redirects automatically) ---------- */
  const LANG_KEY = 'clubLang';
  const SUPPORTED = ['ru', 'en', 'uk', 'pl'];
  function getStoredLang() { try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; } }
  function setStoredLang(v) { try { localStorage.setItem(LANG_KEY, v); } catch (e) {} }
  const SUG = {
    ru: { q: 'Открыть сайт на русском?', go: 'Перейти на русский', stay: 'Остаться здесь', aria: 'Выбор языка' },
    en: { q: 'View this site in English?', go: 'Switch to English', stay: 'Stay here', aria: 'Language suggestion' },
    uk: { q: 'Переглянути сайт українською?', go: 'Перейти на українську', stay: 'Залишитися тут', aria: 'Вибір мови' },
    pl: { q: 'Czy wyświetlić stronę po polsku?', go: 'Przejdź na polski', stay: 'Zostań tutaj', aria: 'Wybór języka' }
  };
  const COUNTRY_LANG = { PL: 'pl', UA: 'uk', RU: 'ru', BY: 'ru', KZ: 'ru' };
  const GEO_SERVICES = [
    ['https://api.country.is/', j => j && j.country],
    ['https://ipwho.is/?fields=success,country_code', j => j && j.success !== false && j.country_code]
  ];

  // 1st step: the first supported language in navigator.languages
  function langFromBrowser() {
    const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
    for (const l of list) {
      const primary = String(l).toLowerCase().split('-')[0];
      if (SUPPORTED.includes(primary)) return primary;
    }
    return null;
  }
  // 2nd step: only when the browser language is not supported — country by IP (free services, short timeout)
  async function countryByIp() {
    try { const c = sessionStorage.getItem('clubGeo'); if (c) return c === '-' ? null : c; } catch (e) {}
    for (const [url, pick] of GEO_SERVICES) {
      try {
        const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 3500);
        const r = await fetch(url, { signal: ctl.signal, credentials: 'omit', referrerPolicy: 'no-referrer' });
        clearTimeout(timer);
        if (!r.ok) continue;
        const code = String(pick(await r.json()) || '').toUpperCase();
        if (/^[A-Z]{2}$/.test(code)) { try { sessionStorage.setItem('clubGeo', code); } catch (e) {} return code; }
      } catch (e) { /* try the next service */ }
    }
    try { sessionStorage.setItem('clubGeo', '-'); } catch (e) {}
    return null;
  }
  async function detectLang() {
    const fromBrowser = langFromBrowser();
    if (fromBrowser) return fromBrowser;
    const country = await countryByIp();
    return country ? (COUNTRY_LANG[country] || 'en') : null;
  }
  function showLangSuggestion(target) {
    if (document.getElementById('langSuggest')) return;
    const t = SUG[target];
    const box = document.createElement('div');
    box.id = 'langSuggest';
    box.setAttribute('role', 'region'); box.setAttribute('aria-label', t.aria); box.setAttribute('lang', target);
    box.className = 'fixed left-3 right-3 top-[9.5rem] z-[55] rounded-2xl bg-ocean p-4 text-pale shadow-soft ring-1 ring-pale/25 sm:left-1/2 sm:right-auto sm:top-[5.75rem] sm:w-[30rem] sm:-translate-x-1/2';
    box.innerHTML = `<p class="font-semibold text-gold">${t.q}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        <a data-lang-go href="${langHref(target)}" hreflang="${target}" class="inline-flex min-h-[44px] items-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ocean transition hover:bg-gold-dark">${t.go}</a>
        <button type="button" data-lang-stay class="min-h-[44px] rounded-full border-2 border-pale/50 px-5 py-2 text-sm font-semibold text-pale transition hover:border-gold hover:text-gold">${t.stay}</button>
      </div>`;
    document.body.appendChild(box);
    const stay = () => { setStoredLang(LANG); box.remove(); };
    box.querySelector('[data-lang-go]').addEventListener('click', () => setStoredLang(target));
    box.querySelector('[data-lang-stay]').addEventListener('click', stay);
    box.addEventListener('keydown', e => { if (e.key === 'Escape') stay(); });
  }
  async function runLangSuggest() {
    if (getStoredLang()) return;                                                     // the user has already chosen: never ask again
    if (/bot|crawl|spider|slurp|facebookexternalhit|lighthouse/i.test(navigator.userAgent || '')) return;
    const target = await detectLang();
    if (!target || target === LANG || getStoredLang()) return;
    showLangSuggestion(target);
  }
  window.clubLang = { run: runLangSuggest, detect: detectLang, fromBrowser: langFromBrowser, country: countryByIp };
  if (document.readyState === 'complete') setTimeout(runLangSuggest, 800);
  else addEventListener('load', () => setTimeout(runLangSuggest, 800));

  /* ---------- cookie consent ---------- */
  const CKEY = 'clubConsent', CV = 1;
  const readConsent = () => { try { const o = JSON.parse(localStorage.getItem(CKEY)); return o && o.v === CV ? o : null; } catch (e) { return null; } };
  const saveConsent = (analytics, marketing) => {
    const o = { v: CV, necessary: true, analytics: !!analytics, marketing: !!marketing, ts: new Date().toISOString() };
    try { localStorage.setItem(CKEY, JSON.stringify(o)); } catch (e) {}
    window.clubConsent.state = o;
    dispatchEvent(new CustomEvent('consent-change', { detail: o }));
  };
  window.clubConsent = { state: readConsent(), open: openConsent };

  const sw = (id, label, desc, on, locked) => `
    <div class="flex items-start justify-between gap-4 rounded-2xl bg-deep p-4">
      <div><label for="${id}" class="font-semibold text-gold">${label}</label><p class="mt-1 text-xs">${desc}</p></div>
      <input id="${id}" type="checkbox" class="mt-1 h-6 w-6 shrink-0 accent-[#F5B83D]" ${on ? 'checked' : ''} ${locked ? 'disabled' : ''}>
    </div>`;

  function openConsent() {
    closeConsent();
    const st = window.clubConsent.state || {};
    const box = document.createElement('div');
    box.id = 'cookieBanner';
    box.setAttribute('role', 'dialog'); box.setAttribute('aria-labelledby', 'ckTitle'); box.setAttribute('aria-describedby', 'ckDesc');
    box.className = 'fixed inset-x-3 bottom-3 z-[60] mx-auto max-h-[85vh] max-w-xl overflow-y-auto rounded-3xl bg-ocean p-5 text-pale shadow-soft ring-1 ring-pale/25 sm:left-6 sm:right-auto sm:mx-0 sm:p-6';
    box.innerHTML = `
      <h2 id="ckTitle" class="font-display text-base font-semibold text-gold">${T('Мы ценим вашу приватность', 'We value your privacy')}</h2>
      <p id="ckDesc" class="mt-2 text-sm">${T('Сайт использует только необходимые технические данные, например запоминает ваш выбор по cookie. Аналитические и маркетинговые cookie мы включаем только с вашего согласия. Подробнее:', 'This site uses only the technical data it needs, for example it remembers your cookie choice. We turn on analytics and marketing cookies only with your consent. More details:')} <a class="underline hover:text-gold" href="cookies.html">${T('политика cookie', 'cookie policy')}</a> ${T('и', 'and')} <a class="underline hover:text-gold" href="privacy.html">${T('политика конфиденциальности', 'privacy policy')}</a>.</p>
      <div id="ckPanel" class="mt-4 hidden space-y-3 text-sm">
        ${sw('ckNec', T('Необходимые', 'Necessary'), T('Нужны для работы сайта и сохранения вашего выбора. Всегда включены.', 'Needed for the site to work and to save your choice. Always on.'), true, true)}
        ${sw('ckAn', T('Аналитические', 'Analytics'), T('Помогают понять, как посетители пользуются сайтом. Сейчас на сайте не используются.', 'Help us understand how visitors use the site. Not used on this site at the moment.'), st.analytics, false)}
        ${sw('ckMk', T('Маркетинговые', 'Marketing'), T('Нужны для персонализированной рекламы. Сейчас на сайте не используются.', 'Needed for personalized advertising. Not used on this site at the moment.'), st.marketing, false)}
      </div>
      <div class="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <button type="button" data-ck="all" class="min-h-[44px] flex-1 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ocean transition hover:bg-gold-dark">${T('Принять все', 'Accept all')}</button>
        <button type="button" data-ck="none" class="min-h-[44px] flex-1 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ocean transition hover:bg-gold-dark">${T('Только необходимые', 'Necessary only')}</button>
        <button type="button" data-ck="more" class="min-h-[44px] flex-1 rounded-full border-2 border-pale/50 px-5 py-2.5 text-sm font-semibold text-pale transition hover:border-gold hover:text-gold">${T('Настроить', 'Customize')}</button>
      </div>`;
    document.body.appendChild(box);
    box.addEventListener('click', e => {
      const b = e.target.closest('[data-ck]'); if (!b) return;
      const k = b.dataset.ck;
      if (k === 'all') { saveConsent(true, true); closeConsent(); }
      else if (k === 'none') { saveConsent(false, false); closeConsent(); }
      else if (k === 'more') {
        const panel = box.querySelector('#ckPanel');
        if (panel.classList.contains('hidden')) { panel.classList.remove('hidden'); b.textContent = T('Сохранить выбор', 'Save choice'); }
        else { saveConsent(box.querySelector('#ckAn').checked, box.querySelector('#ckMk').checked); closeConsent(); }
      }
    });
    box.addEventListener('keydown', e => { if (e.key === 'Escape' && window.clubConsent.state) closeConsent(); });
    if (window.clubConsent.state) box.querySelector('button').focus();
  }
  function closeConsent() { const b = document.getElementById('cookieBanner'); if (b) b.remove(); }
  document.addEventListener('click', e => { if (e.target.closest('[data-cookie-settings]')) openConsent(); });
  if (!window.clubConsent.state) setTimeout(openConsent, 600);
})();
