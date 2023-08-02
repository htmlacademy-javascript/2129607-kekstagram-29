import { isEscapeKey } from './utils.js';

const popupContainer = document.querySelector('main');
let message;

const isError = () => document.querySelector('.error');

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
}

function closePopup () {
  message.remove();

  document.removeEventListener('keydown', onDocumentKeydown);
}

const onMessageClick = (evt, cls) => {
  const classList = evt.target.classList;

  if (classList.contains(`${cls}__inner`) || classList.contains(`${cls}__title`)) {
    return;
  }

  closePopup();
};

function showMessage(cls) {
  message = document.querySelector(`#${cls}`).cloneNode(true).content.querySelector(`.${cls}`);
  popupContainer.insertAdjacentElement('afterbegin', message);
  message.classList.remove('hidden');

  message.addEventListener('click', (evt) => onMessageClick(evt, cls));

  document.addEventListener('keydown', onDocumentKeydown);
}

export { showMessage, isError };
