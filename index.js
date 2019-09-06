

// HELPER METHODS
const select = s => document.querySelector(s);
const selectAll = s => document.querySelectorAll(s);

// DOM ELEMENTS
const body = select('body');
const modal = select('#modal');
const buttons = selectAll('.button');
const modalButton = select('.modal-button');

// EVENT LISTENERS
buttons.forEach(button => {
  button.addEventListener('click', () => {
    modal.dataset.active = true;
    body.dataset.modal = true;

    window.scrollTo(0, 0);
  
    TweenLite.set(modal, {
      height: 'auto',
      'min-height': screen.availHeight + 'px',
    });
  });
})

modal.addEventListener('click', e => {
  if(e.target.id !== 'modal') {
    return;
  }

  delete modal.dataset.active;
  delete body.dataset.modal;

  TweenLite.set(modal, {
    height: 0,
    top: 0
  });
});

modalButton.addEventListener('click', () => {
  delete modal.dataset.active;
  delete body.dataset.modal;

  TweenLite.set(modal, {
    height: 0,
    top: 0
  });
});
