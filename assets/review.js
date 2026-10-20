/* "Leave a review" form of the Contacts page (all language versions); the "Leave a review" button of the home page links to contacts.html#review.
   The review is appended to the Google Sheet through the same Google Apps Script web app as the quiz leads (parameter form=review).
   It is NOT published automatically: the owner reads it in the sheet and publishes it by hand.
   Texts come from data-* attributes of the form, so every language keeps the same markup. */
(function () {
  'use strict';
  var f = document.getElementById('reviewForm');
  if (!f) return;

  // opened from the home page (contacts.html#review): make sure the form is on screen once the page is laid out
  if (location.hash === '#review') window.addEventListener('load', function () { var s = document.getElementById('review'); if (s) s.scrollIntoView(); });

  var ENDPOINT = 'https://script.google.com/macros/s/AKfycbzOHnNYF11QajbuW1K91f7YRMzxkn09bLJ7j450FTnG4tXCXwzK1l5VVrp1GhqwJ-8gdQ/exec';
  var LANG = (document.documentElement.lang || 'ru').slice(0, 2);
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
    if (sending) return;                                                   // no double submission (also stays locked after success)
    var name = el('name').value.trim().slice(0, 80), city = el('city').value.trim().slice(0, 80), review = el('review').value.trim().slice(0, 1500);
    var hp = el('website').value;
    var checked = f.querySelector('input[name=rating]:checked'), rating = checked ? checked.value : '';
    err.hidden = true;
    if (!name || review.length < 10) { fail(f.getAttribute('data-err-fill'), !name ? el('name') : el('review')); return; }
    if (!el('consent').checked) { fail(f.getAttribute('data-err-consent'), el('consent')); return; }   // nothing is sent without consent

    sending = true; btn.disabled = true; var label = btn.textContent; btn.textContent = f.getAttribute('data-sending');
    if (hp) { done(false); return; }                                       // bot: pretend it worked, send nothing

    // POST application/x-www-form-urlencoded, no-cors: Apps Script answers with a redirect we cannot read, a network failure rejects
    var body = new URLSearchParams();
    body.append('form', 'review'); body.append('name', name); body.append('city', city); body.append('rating', rating);
    body.append('review', review); body.append('website', hp); body.append('lang', LANG);
    fetch(ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      .then(function () { done(true, rating); })
      .catch(function () { sending = false; btn.disabled = false; btn.textContent = label; fail(f.getAttribute('data-err-net')); });
  });
})();
