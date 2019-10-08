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


    // body.style.height = screen.height;
    // modal.style.height = screen.availHeight + 'px'
  });
})

modal.addEventListener('click', e => {
  if(e.target.id !== 'modal') {
    return;
  }

  delete modal.dataset.active;
  delete body.dataset.modal;

  // body.style.height = 'auto'
  // modal.style.height = 0
  // modal.style.top = 0
});

modalButton.addEventListener('click', () => {
  delete modal.dataset.active;
  delete body.dataset.modal;

  // body.style.height = 'auto'
  // modal.style.height = 0
  // modal.style.top = 0
});
