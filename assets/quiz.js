/* Quiz "Which kind of traveler are you?" - one shared file for all 6 language versions of quiz.html.
   Texts, questions and results live in TXT below; the page itself only holds the title, subtitle and start button.
   GA4 events (through window.clubTrack from consent.js): quiz_start, quiz_step, quiz_complete, quiz_lead_telegram, quiz_lead_whatsapp. */
(function () {
  'use strict';
  var root = document.getElementById('quiz');
  if (!root) return;

  var TG_USER = 'ayasinski';          // https://t.me/ayasinski
  var WA_NUMBER = '48731135317';      // +48 731 135 317

  var LANG = (document.documentElement.lang || 'ru').toLowerCase().slice(0, 2);
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Result types: hunter / comfort / seeker / family
  var TXT = {
    ru: {
      of: 'Вопрос {n} из {t}', back: 'Назад', again: 'Пройти заново', tg: 'Получить в Telegram', wa: 'Получить в WhatsApp',
      cta: 'Хочешь увидеть разницу в цифрах? Пришлю 3 реальных примера цен под твой формат отдыха — бесплатно и без обязательств.',
      msg: 'Привет! Прошёл тест на сайте. Мой тип: {type}. Путешествую: {a1}, отдых: {a2}, с кем: {a3}, бюджет: {a4}, бронирую: {a5}. Хочу примеры цен!',
      q: [
        ['Как часто ты путешествуешь?', ['1 раз в год', '2–3 раза в год', '4 раза и больше', 'Хочу чаще, но дорого']],
        ['Какой отдых тебе ближе?', ['Море и пляж', 'Города и экскурсии', 'Экзотика и далёкие страны', 'Курорты «всё включено»']],
        ['С кем обычно путешествуешь?', ['Один / одна', 'Вдвоём', 'Семья с детьми', 'Компания друзей']],
        ['Сколько обычно тратишь на поездку на человека?', ['До 500 €', '500–1000 €', '1000–2000 €', 'Больше 2000 €']],
        ['Как ты обычно бронируешь?', ['Сам на Booking / Airbnb', 'Через турагентство', 'Ловлю горящие туры', 'Пока почти не путешествовал']],
        ['Что для тебя важнее всего?', ['Цена', 'Комфорт и уровень отеля', 'Впечатления', 'Всё сразу']]
      ],
      r: {
        hunter: ['🎯', 'Охотник за выгодой', 'Ты умеешь считать деньги и не любишь переплачивать. Тебе подойдёт формат, где цены на отели и поездки ниже, чем на привычных сайтах бронирования, — и можно ездить чаще за тот же бюджет.'],
        comfort: ['🛎', 'Ценитель комфорта', 'Для тебя отдых — это хороший отель и сервис. Тебе подойдёт формат, где за те же деньги можно жить на уровень выше.'],
        seeker: ['🌏', 'Искатель впечатлений', 'Ты едешь за эмоциями и новыми местами. Тебе подойдёт формат, где сэкономленные на жилье деньги уходят на то, ради чего ты едешь.'],
        family: ['👨‍👩‍👧', 'Семейный стратег', 'С семьёй каждая поездка — серьёзный бюджет. Тебе подойдёт формат, где семейный отдых обходится заметно дешевле, и можно выбираться чаще.']
      }
    },
    en: {
      of: 'Question {n} of {t}', back: 'Back', again: 'Take the quiz again', tg: 'Get it on Telegram', wa: 'Get it on WhatsApp',
      cta: 'Want to see the difference in numbers? I’ll send you 3 real price examples for your travel style — free and with no obligation.',
      msg: 'Hi! I took the quiz on your site. My type: {type}. I travel: {a1}, vacation: {a2}, with: {a3}, budget: {a4}, I book: {a5}. I’d like price examples!',
      q: [
        ['How often do you travel?', ['Once a year', '2–3 times a year', '4 times a year or more', 'I’d love to travel more, but it’s expensive']],
        ['What kind of trip suits you best?', ['Sea and beach', 'Cities and sightseeing', 'Exotic, faraway places', '“All inclusive” resorts']],
        ['Who do you usually travel with?', ['Solo', 'As a couple', 'Family with kids', 'Group of friends']],
        ['How much do you usually spend per person on a trip?', ['Up to €500', '€500–1,000', '€1,000–2,000', 'More than €2,000']],
        ['How do you usually book?', ['Myself on Booking / Airbnb', 'Through a travel agency', 'I hunt for last-minute deals', 'I’ve hardly traveled so far']],
        ['What matters most to you?', ['Price', 'Comfort and hotel level', 'Experiences', 'All of it at once']]
      ],
      r: {
        hunter: ['🎯', 'Deal Hunter', 'You know how to count your money and hate overpaying. A format where hotel and trip prices are lower than on the usual booking sites will suit you — so you can travel more often on the same budget.'],
        comfort: ['🛎', 'Comfort Connoisseur', 'For you a vacation means a good hotel and great service. A format that lets you stay a level higher for the same money will suit you.'],
        seeker: ['🌏', 'Experience Seeker', 'You travel for emotions and new places. A format where the money saved on accommodation goes to what you actually travel for will suit you.'],
        family: ['👨‍👩‍👧', 'Family Strategist', 'With a family, every trip is a serious budget. A format where a family holiday costs noticeably less, and you can get away more often, will suit you.']
      }
    },
    uk: {
      of: 'Питання {n} з {t}', back: 'Назад', again: 'Пройти ще раз', tg: 'Отримати в Telegram', wa: 'Отримати у WhatsApp',
      cta: 'Хочеш побачити різницю в цифрах? Надішлю 3 реальні приклади цін під твій формат відпочинку — безкоштовно та без зобов’язань.',
      msg: 'Привіт! Тест на сайті пройдено. Мій тип: {type}. Подорожую: {a1}, відпочинок: {a2}, з ким: {a3}, бюджет: {a4}, бронюю: {a5}. Хочу приклади цін!',
      q: [
        ['Як часто ти подорожуєш?', ['1 раз на рік', '2–3 рази на рік', '4 рази й більше', 'Хочу частіше, але дорого']],
        ['Який відпочинок тобі ближчий?', ['Море й пляж', 'Міста та екскурсії', 'Екзотика й далекі країни', 'Курорти «все включено»']],
        ['З ким зазвичай подорожуєш?', ['Сам / сама', 'Удвох', 'Сім’я з дітьми', 'Компанія друзів']],
        ['Скільки зазвичай витрачаєш на поїздку на людину?', ['До 500 €', '500–1000 €', '1000–2000 €', 'Понад 2000 €']],
        ['Як ти зазвичай бронюєш?', ['Сам на Booking / Airbnb', 'Через турагентство', 'Ловлю гарячі тури', 'Поки майже не подорожував(-ла)']],
        ['Що для тебе найважливіше?', ['Ціна', 'Комфорт і рівень готелю', 'Враження', 'Усе й одразу']]
      ],
      r: {
        hunter: ['🎯', 'Мисливець за вигодою', 'Ти вмієш рахувати гроші й не любиш переплачувати. Тобі підійде формат, де ціни на готелі та поїздки нижчі, ніж на звичних сайтах бронювання, — і можна їздити частіше за той самий бюджет.'],
        comfort: ['🛎', 'Поціновувач комфорту', 'Для тебе відпочинок — це добрий готель і сервіс. Тобі підійде формат, де за ті самі гроші можна жити на рівень вище.'],
        seeker: ['🌏', 'Шукач вражень', 'Ти їдеш за емоціями та новими місцями. Тобі підійде формат, де заощаджені на житлі гроші йдуть на те, заради чого ти їдеш.'],
        family: ['👨‍👩‍👧', 'Сімейний стратег', 'З родиною кожна поїздка — серйозний бюджет. Тобі підійде формат, де сімейний відпочинок коштує помітно дешевше, і можна вибиратися частіше.']
      }
    },
    pl: {
      of: 'Pytanie {n} z {t}', back: 'Wstecz', again: 'Zrób test jeszcze raz', tg: 'Odbierz na Telegramie', wa: 'Odbierz na WhatsAppie',
      cta: 'Chcesz zobaczyć różnicę w liczbach? Wyślę Ci 3 prawdziwe przykłady cen dopasowane do Twojego stylu wypoczynku — za darmo i bez zobowiązań.',
      msg: 'Cześć! Test na stronie wykonany. Mój typ: {type}. Podróżuję: {a1}, wypoczynek: {a2}, z kim: {a3}, budżet: {a4}, rezerwuję: {a5}. Poproszę przykłady cen!',
      q: [
        ['Jak często podróżujesz?', ['Raz w roku', '2–3 razy w roku', '4 razy w roku lub częściej', 'Chcę częściej, ale to drogie']],
        ['Jaki wypoczynek jest Ci bliższy?', ['Morze i plaża', 'Miasta i zwiedzanie', 'Egzotyka i dalekie kraje', 'Kurorty „all inclusive”']],
        ['Z kim zwykle podróżujesz?', ['Sam / sama', 'We dwoje', 'Rodzina z dziećmi', 'Grupa przyjaciół']],
        ['Ile zwykle wydajesz na wyjazd na osobę?', ['Do 500 €', '500–1000 €', '1000–2000 €', 'Ponad 2000 €']],
        ['Jak zwykle rezerwujesz?', ['Sam(a) na Booking / Airbnb', 'Przez biuro podróży', 'Łapię okazje last minute', 'Jak dotąd prawie nie podróżowałem(-am)']],
        ['Co jest dla Ciebie najważniejsze?', ['Cena', 'Komfort i standard hotelu', 'Wrażenia', 'Wszystko naraz']]
      ],
      r: {
        hunter: ['🎯', 'Łowca okazji', 'Umiesz liczyć pieniądze i nie lubisz przepłacać. Pasuje do Ciebie formuła, w której ceny hoteli i wyjazdów są niższe niż na zwykłych portalach rezerwacyjnych — i można podróżować częściej za ten sam budżet.'],
        comfort: ['🛎', 'Miłośnik komfortu', 'Dla Ciebie wypoczynek to dobry hotel i obsługa. Pasuje do Ciebie formuła, w której za te same pieniądze można zatrzymać się o klasę wyżej.'],
        seeker: ['🌏', 'Łowca wrażeń', 'Jedziesz po emocje i nowe miejsca. Pasuje do Ciebie formuła, w której pieniądze zaoszczędzone na noclegu trafiają na to, po co naprawdę jedziesz.'],
        family: ['👨‍👩‍👧', 'Rodzinny strateg', 'Z rodziną każdy wyjazd to poważny budżet. Pasuje do Ciebie formuła, w której rodzinny wypoczynek kosztuje wyraźnie mniej, a wyjeżdżać można częściej.']
      }
    },
    de: {
      of: 'Frage {n} von {t}', back: 'Zurück', again: 'Test wiederholen', tg: 'Per Telegram erhalten', wa: 'Per WhatsApp erhalten',
      cta: 'Möchtest du den Unterschied in Zahlen sehen? Ich schicke dir 3 echte Preisbeispiele für deine Art zu reisen – kostenlos und unverbindlich.',
      msg: 'Hallo! Ich habe den Test auf eurer Website gemacht. Mein Typ: {type}. Ich reise: {a1}, Urlaub: {a2}, mit wem: {a3}, Budget: {a4}, Buchung: {a5}. Ich möchte Preisbeispiele!',
      q: [
        ['Wie oft verreist du?', ['Einmal im Jahr', '2–3 Mal im Jahr', '4 Mal im Jahr oder öfter', 'Ich würde gern öfter, aber es ist teuer']],
        ['Welche Art von Urlaub passt besser zu dir?', ['Meer und Strand', 'Städte und Besichtigungen', 'Exotik und ferne Länder', 'All-inclusive-Resorts']],
        ['Mit wem reist du meistens?', ['Allein', 'Zu zweit', 'Familie mit Kindern', 'Mit Freunden']],
        ['Wie viel gibst du üblicherweise pro Person für eine Reise aus?', ['Bis 500 €', '500–1.000 €', '1.000–2.000 €', 'Mehr als 2.000 €']],
        ['Wie buchst du normalerweise?', ['Selbst über Booking / Airbnb', 'Über ein Reisebüro', 'Ich jage Last-Minute-Angebote', 'Bisher kaum gereist']],
        ['Was ist dir am wichtigsten?', ['Der Preis', 'Komfort und Hotelniveau', 'Erlebnisse', 'Alles zusammen']]
      ],
      r: {
        hunter: ['🎯', 'Schnäppchenjäger', 'Du kannst mit Geld umgehen und zahlst ungern zu viel. Zu dir passt ein Modell, bei dem Hotel- und Reisepreise niedriger sind als auf den üblichen Buchungsportalen – und du mit demselben Budget öfter verreisen kannst.'],
        comfort: ['🛎', 'Komfortliebhaber', 'Für dich bedeutet Urlaub ein gutes Hotel und guten Service. Zu dir passt ein Modell, bei dem du für dasselbe Geld eine Kategorie höher wohnen kannst.'],
        seeker: ['🌏', 'Erlebnissucher', 'Du reist wegen der Emotionen und neuer Orte. Zu dir passt ein Modell, bei dem das bei der Unterkunft gesparte Geld dorthin fließt, wofür du eigentlich verreist.'],
        family: ['👨‍👩‍👧', 'Familienstratege', 'Mit der Familie ist jede Reise ein großes Budget. Zu dir passt ein Modell, bei dem Familienurlaub spürbar günstiger ist und du öfter wegkommst.']
      }
    },
    es: {
      of: 'Pregunta {n} de {t}', back: 'Atrás', again: 'Repetir el test', tg: 'Recibir por Telegram', wa: 'Recibir por WhatsApp',
      cta: '¿Quieres ver la diferencia en cifras? Te enviaré 3 ejemplos reales de precios para tu forma de viajar, gratis y sin compromiso.',
      msg: '¡Hola! Hice el test en la web. Mi tipo: {type}. Viajo: {a1}, vacaciones: {a2}, con quién: {a3}, presupuesto: {a4}, reservo: {a5}. ¡Quiero ejemplos de precios!',
      q: [
        ['¿Con qué frecuencia viajas?', ['1 vez al año', '2–3 veces al año', '4 veces o más', 'Quiero viajar más, pero es caro']],
        ['¿Qué tipo de vacaciones te gusta más?', ['Mar y playa', 'Ciudades y excursiones', 'Destinos exóticos y países lejanos', 'Resorts «todo incluido»']],
        ['¿Con quién sueles viajar?', ['Solo / sola', 'En pareja', 'En familia con niños', 'Con un grupo de amigos']],
        ['¿Cuánto sueles gastar en un viaje por persona?', ['Hasta 500 €', '500–1000 €', '1000–2000 €', 'Más de 2000 €']],
        ['¿Cómo sueles reservar?', ['Por mi cuenta en Booking / Airbnb', 'A través de una agencia de viajes', 'Cazo ofertas de última hora', 'Todavía casi no he viajado']],
        ['¿Qué es lo más importante para ti?', ['El precio', 'La comodidad y el nivel del hotel', 'Las experiencias', 'Todo a la vez']]
      ],
      r: {
        hunter: ['🎯', 'Cazaofertas', 'Sabes cuidar tu dinero y no te gusta pagar de más. Te irá bien un formato en el que los precios de hoteles y viajes sean más bajos que en los sitios de reserva habituales, y con el que puedas viajar más veces con el mismo presupuesto.'],
        comfort: ['🛎', 'Amante de la comodidad', 'Para ti, las vacaciones son un buen hotel y un buen servicio. Te irá bien un formato en el que, por el mismo dinero, puedes alojarte en una categoría superior.'],
        seeker: ['🌏', 'En busca de experiencias', 'Viajas por las emociones y los lugares nuevos. Te irá bien un formato en el que el dinero que ahorras en alojamiento se destina a aquello por lo que viajas.'],
        family: ['👨‍👩‍👧', 'Estratega familiar', 'Con familia, cada viaje supone un presupuesto importante. Te irá bien un formato en el que las vacaciones en familia cuestan bastante menos y puedes salir más a menudo.']
      }
    }
  };
  if (!TXT[LANG]) LANG = 'ru';
  var L = TXT[LANG], TOTAL = L.q.length;

  var answers = [];   // chosen option index (0-3) for every question
  var step = 0;       // index of the question on screen
  var busy = false;

  function track(name, params) { if (typeof window.clubTrack === 'function') window.clubTrack(name, params || {}); }
  function el(id) { return document.getElementById(id); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* result: family beats everything; otherwise question 6; "all at once" falls back to question 2 */
  function resultType(a) {
    if (a[2] === 2) return 'family';
    if (a[5] === 0) return 'hunter';
    if (a[5] === 1) return 'comfort';
    if (a[5] === 2) return 'seeker';
    if (a[1] === 2) return 'seeker';        // exotic and far away
    if (a[1] === 3) return 'comfort';       // all-inclusive resorts
    return 'hunter';
  }

  var intro = el('quizIntro'), stage = el('quizStage');

  function show(node) {
    node.hidden = false;
    node.classList.remove('quiz-in'); void node.offsetWidth; node.classList.add('quiz-in');
  }
  stage.style.scrollMarginTop = '7.5rem';     // keep the card below the fixed header
  function focusHeading() { var h = stage.querySelector('[data-focus]'); if (h) h.focus({ preventScroll: true }); }
  function toStage() { stage.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }

  /* progress bar with a little plane that flies along it */
  function progressHtml(done) {
    var pct = Math.round(done / TOTAL * 100);
    var plane = (window.__ART && window.__ART.plane) || '';
    return '<div class="flex items-center justify-between text-sm font-semibold text-pale"><span id="quizLabel" aria-live="polite">' +
        esc(L.of.replace('{n}', Math.min(step + 1, TOTAL)).replace('{t}', TOTAL)) + '</span><span class="text-gold">' + pct + '%</span></div>' +
      '<div class="relative mt-3 h-3 rounded-full bg-pale/20" role="progressbar" aria-valuemin="0" aria-valuemax="' + TOTAL + '" aria-valuenow="' + done + '">' +
        '<div class="h-3 rounded-full bg-gradient-to-r from-emerald to-gold" style="width:' + pct + '%;transition:width .45s ease"></div>' +
        '<div class="absolute -top-2 h-6 w-11" style="left:calc(' + pct + '% - 1.375rem);transition:left .45s ease" aria-hidden="true">' + plane + '</div>' +
      '</div>';
  }

  function renderQuestion() {
    var q = L.q[step], chosen = answers[step];
    var opts = q[1].map(function (t, i) {
      var on = chosen === i;
      return '<button type="button" data-opt="' + i + '" class="quiz-opt flex min-h-[56px] w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left font-semibold ring-1 transition ' +
        (on ? 'bg-gold text-ocean ring-gold' : 'bg-deep text-pale ring-pale/20 hover:bg-gold hover:text-ocean hover:ring-gold') + '">' +
        '<span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold text-sm font-bold text-ocean">' + (i + 1) + '</span><span>' + esc(t) + '</span></button>';
    }).join('');
    stage.innerHTML =
      '<div class="rounded-3xl bg-ocean p-5 text-pale shadow-soft ring-1 ring-pale/20 sm:p-8">' +
        progressHtml(step) +
        '<h2 data-focus tabindex="-1" class="mt-6 font-display text-xl font-semibold leading-snug text-gold outline-none sm:text-2xl">' + esc(q[0]) + '</h2>' +
        '<div class="mt-5 grid gap-3" role="group" aria-label="' + esc(q[0]) + '">' + opts + '</div>' +
        '<div class="mt-5 min-h-[44px]">' + (step > 0 ? '<button type="button" id="quizBack" class="min-h-[44px] rounded-full border-2 border-pale/50 px-5 py-2 text-sm font-semibold text-pale transition hover:border-gold hover:text-gold">← ' + esc(L.back) + '</button>' : '') + '</div>' +
      '</div>';
    show(stage);
  }

  function pick(i) {
    if (busy) return;
    busy = true;
    answers[step] = i;
    track('quiz_step', { step: step + 1, answer: i + 1 });
    var btn = stage.querySelector('[data-opt="' + i + '"]');
    if (btn) btn.className = btn.className.replace('bg-deep text-pale ring-pale/20', 'bg-gold text-ocean ring-gold');
    setTimeout(function () {
      busy = false;
      if (step < TOTAL - 1) { step++; renderQuestion(); focusHeading(); }
      else renderResult();
    }, reduce ? 0 : 220);
  }

  function message(type) {
    var a = function (n) { return L.q[n][1][answers[n]]; };
    return L.msg.replace('{type}', type).replace('{a1}', a(0)).replace('{a2}', a(1)).replace('{a3}', a(2)).replace('{a4}', a(3)).replace('{a5}', a(4));
  }

  var ICON_TG = '<svg viewBox="0 0 24 24" class="h-5 w-5 shrink-0" aria-hidden="true"><path d="M21.5 3.5 2.8 10.7c-.9.4-.9 1.1-.2 1.3l4.8 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8l3.1-14.8c.3-1.2-.5-1.8-1.5-1.5Z" fill="currentColor"/></svg>';
  var ICON_WA = '<svg viewBox="0 0 24 24" class="h-5 w-5 shrink-0" aria-hidden="true"><path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.5Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2Z" fill="currentColor"/></svg>';

  function renderResult() {
    var key = resultType(answers), r = L.r[key], text = message(r[1]);
    track('quiz_complete', { result_type: key });
    var tg = 'https://t.me/' + TG_USER + '?text=' + encodeURIComponent(text);
    var wa = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
    var btn = 'inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-ocean shadow-gold transition hover:-translate-y-0.5';
    stage.innerHTML =
      '<div class="rounded-3xl bg-ocean p-5 text-pale shadow-soft ring-1 ring-pale/20 sm:p-8">' +
        progressHtml(TOTAL).replace(/<span id="quizLabel"[^>]*>[^<]*<\/span>/, '<span id="quizLabel" aria-live="polite">' + esc(L.of.replace('{n}', TOTAL).replace('{t}', TOTAL)) + '</span>') +
        '<div class="mt-7 text-center">' +
          '<div class="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gold text-4xl shadow-gold" aria-hidden="true">' + r[0] + '</div>' +
          '<h2 data-focus tabindex="-1" class="mt-5 font-display text-2xl font-bold text-gold outline-none sm:text-3xl">' + esc(r[1]) + '</h2>' +
          '<p class="mx-auto mt-4 max-w-xl text-base leading-relaxed sm:text-lg">' + esc(r[2]) + '</p>' +
        '</div>' +
        '<div class="mt-7 rounded-2xl bg-deep p-5 text-center">' +
          '<p class="font-semibold">' + esc(L.cta) + '</p>' +
          '<div class="mt-5 flex flex-col gap-3 sm:flex-row">' +
            '<a data-lead="telegram" href="' + tg + '" target="_blank" rel="noopener noreferrer" class="' + btn + ' bg-gold hover:bg-gold-dark">' + ICON_TG + esc(L.tg) + '</a>' +
            '<a data-lead="whatsapp" href="' + wa + '" target="_blank" rel="noopener noreferrer" class="' + btn + ' bg-emerald">' + ICON_WA + esc(L.wa) + '</a>' +
          '</div>' +
        '</div>' +
        '<p class="mt-5 text-center text-sm"><button type="button" id="quizAgain" class="min-h-[44px] px-4 py-2 underline underline-offset-4 transition hover:text-gold">' + esc(L.again) + '</button></p>' +
      '</div>';
    show(stage);
    focusHeading();
    toStage();
    stage.dataset.result = key;
  }

  function start(restart) {
    answers = []; step = 0; busy = false;
    delete stage.dataset.result;
    intro.hidden = true;
    track('quiz_start', restart ? { restart: 1 } : {});
    renderQuestion();
    focusHeading();
    toStage();
  }

  var startBtn = el('quizStart');
  if (startBtn) startBtn.addEventListener('click', function () { start(false); });

  stage.addEventListener('click', function (e) {
    var o = e.target.closest('[data-opt]');
    if (o) { pick(+o.getAttribute('data-opt')); return; }
    if (e.target.closest('#quizBack')) { if (step > 0 && !busy) { step--; renderQuestion(); focusHeading(); } return; }
    if (e.target.closest('#quizAgain')) { start(true); return; }
    var lead = e.target.closest('[data-lead]');
    if (lead) track('quiz_lead_' + lead.getAttribute('data-lead'), { result_type: stage.dataset.result || '' });
  });
})();
