const feedbackOpenBtn = document.querySelector('.map-contacts-button');
const modalFeedback = document.querySelector('.modal-feedback');
const overlay = document.querySelector('.overlay');
const feedbackCloseBtn = modalFeedback.querySelector('.modal-close');
const feedbackNameInput = modalFeedback.querySelector('input[name="name"]');

const overlayOn = () => {
  overlay.style.display = "block";
}

const overlayOff = () => {
  overlay.style.display = "none";
}

const modalFeedbackOn = () => {
  overlayOn();
  modalFeedback.classList.add('modal-show');
  feedbackNameInput.focus();
}

const modalFeedbackOff = () => {
  overlayOff();
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-error');
};

overlay.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalFeedbackOff();
});

feedbackOpenBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalFeedbackOn();
});

feedbackCloseBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalFeedbackOff();
});

window.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    if (modalFeedback.classList.contains('modal-show')) {
      modalFeedbackOff();
    }
  }
});

const feedbackForm = modalFeedback.querySelector('form');

feedbackForm.addEventListener('submit', (evt) => {
  if (!feedbackForm.name.value || !feedbackForm.email.value || !feedbackForm.message.value) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-error');
    modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
  }
});
