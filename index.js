// HELPER METHODS
const select = (s) => document.querySelector(s);

// DOM ELEMENTS
const body = select('body');
const modal = select('#modal');
const button = select('.button');
const modalButton = select('.modal-button');

// WISTIA POP OVER
if (!localStorage.getItem('playedOnce'))
  localStorage.setItem('playedOnce', false);
window._wq = window._wq || [];
_wq.push(function (W) {
  W.api(function (video) {
    const playedOnce = JSON.parse(localStorage.getItem('playedOnce'));
    if (!playedOnce && /[&?]autoplay/i.test(location.href)) {
      localStorage.setItem('playedOnce', true);
      video.play();
    }
  });
});

// EVENT LISTENERS
button.addEventListener('click', () => {
  modal.dataset.active = true;
  body.dataset.modal = true;
});

modal.addEventListener('click', (e) => {
  if (e.target.id !== 'modal') {
    return;
  }

  delete modal.dataset.active;
  delete body.dataset.modal;
});

modalButton.addEventListener('click', () => {
  delete modal.dataset.active;
  delete body.dataset.modal;
});
