/* "Leave a review" form on the home page (all language versions).
   The review is e-mailed to the site owner through FormSubmit (same service as the contact form) and is NOT published automatically:
   the owner reads it and publishes it by hand. Texts come from data-* attributes of the form, so every language keeps the same markup. */
(function () {
  'use strict';
  var f = document.getElementById('reviewForm');
  if (!f) return;

  var ENDPOINT = 'https://formsubmit.co/ajax/andrei.jasinski@gmail.com';
  var LANG = (document.documentElement.lang || 'ru').slice(0, 2).toUpperCase();
  var err = f.querySelector('[data-err]'), btn = f.querySelector('button[type=submit]'), sending = false;
  var el = function (n) { return f.elements[n]; };

  function fail(msg, field) {
    err.textContent = msg; err.hidden = false;
    if (field) field.focus();
  }
  function done(real, rating) {
    if (real && typeof window.clubTrack === 'function') window.clubTrack('review_submit', { rating: Number(rating) || 0 });
    var ok = document.createElement('div');
    ok.setAttribute('role', 'status');
    ok.className = 'rounded-2xl bg-deep p-6 text-center font-display text-lg font-semibold text-gold';
    ok.textContent = f.getAttribute('data-ok');
    f.replaceWith(ok);
    ok.setAttribute('tabindex', '-1'); ok.focus({ preventScroll: true });
  }

  f.addEventListener('submit', function (e) {
    e.preventDefault();
    if (sending) return;
    var name = el('name').value.trim().slice(0, 80), city = el('city').value.trim().slice(0, 80), text = el('text').value.trim().slice(0, 1500);
    var checked = f.querySelector('input[name=rating]:checked'), rating = checked ? checked.value : '';
    err.hidden = true;
    if (!name || text.length < 10) { fail(f.getAttribute('data-err-fill'), !name ? el('name') : el('text')); return; }
    if (!el('consent').checked) { fail(f.getAttribute('data-err-consent'), el('consent')); return; }

    sending = true; btn.disabled = true; var label = btn.textContent; btn.textContent = f.getAttribute('data-sending');
    if (el('_honey').value) { done(false); return; }                      // bot: pretend it worked, send nothing

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        'Имя': name, 'Город': city || '—', 'Оценка': rating ? rating + ' / 5' : '—', 'Отзыв': text,
        'Согласие на публикацию': 'да', 'Язык сайта': LANG,
        _subject: 'Новый отзыв на сайте: Клуб умных путешествий', _template: 'table', _captcha: 'false'
      })
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) {
      if (!r.ok || String(j.success) === 'false') throw new Error('send failed');
      done(true, rating);
    }); }).catch(function () {
      sending = false; btn.disabled = false; btn.textContent = label; fail(f.getAttribute('data-err-net'));
    });
  });
})();
