const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const showSuccessMessage = () => {
  body.append(successMessage);// eslint-disable-next-line no-use-before-define
  body.addEventListener('keydown', onEscDown);// eslint-disable-next-line no-use-before-define
  body.addEventListener('click', onBodyClick);// eslint-disable-next-line no-use-before-define
  successMessage.querySelector('.success__button').addEventListener('click', hideMessage);
};

const showErrorMessage = () => {
  body.append(errorMessage);// eslint-disable-next-line no-use-before-define
  body.addEventListener('keydown', onEscDown);// eslint-disable-next-line no-use-before-define
  body.addEventListener('click', onBodyClick);// eslint-disable-next-line no-use-before-define
  errorMessage.querySelector('.error__button').addEventListener('click', hideMessage);
};

const hideMessage = () => {
  const messageElement =
    document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();// eslint-disable-next-line no-use-before-define
  body.removeEventListener('keydown', onEscDown);// eslint-disable-next-line no-use-before-define
  body.removeEventListener('click', onBodyClick);
};

const onBodyClick = (evt) => {
  if (
    evt.target.closest('.success__inner') || evt.target.closest('.error__inner')
  ) {
    return;
  }
  hideMessage();
};

const onEscDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    evt.stopPropagation();
    hideMessage();
  }
};

export { showSuccessMessage, showErrorMessage };
