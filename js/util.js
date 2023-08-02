const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createIdGenerator = () => {
  let lastId = 0;

  return function () {
    lastId += 1;
    return lastId;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const getTargetArrayElement = (targetElement, array) => array.find((element) => element.id === Number(targetElement));

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const showAlertError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('error-alert');

  alertContainer.textContent = message;

  document.body.append(alertContainer);
};

export {getRandomInteger, getRandomArrayElement, createIdGenerator, isEscapeKey, isEnterKey, getTargetArrayElement, debounce, showAlertError};
