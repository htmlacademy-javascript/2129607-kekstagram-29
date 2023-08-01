const scaleOptions = {
  MIN: 25,
  MAX: 100,
  DEFAULT: 100,
  STEP: 25
};

const lowButton = document.querySelector('.scale__control--smaller');
const riseButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const photo = document.querySelector('.img-upload__preview img');

const setScaleValue = (value) => {
  photo.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const resetScaleValue = () => {
  photo.style.transform = '';
  scaleValue.value = `${scaleOptions.DEFAULT}%`;
};

const onLowButtonClick = () => {
  const currentScale = parseInt(scaleValue.value, 10);
  let newScale = currentScale - scaleOptions.STEP;
  if (newScale < scaleOptions.MIN) {
    newScale = scaleOptions.MIN;
  }
  setScaleValue(newScale);
};

const onRiseButtonClick = () => {
  const currentScale = parseInt(scaleValue.value, 10);
  let newScale = currentScale + scaleOptions.STEP;
  if (newScale > scaleOptions.MAX) {
    newScale = scaleOptions.MAX;
  }
  setScaleValue(newScale);
};

lowButton.addEventListener('click', onLowButtonClick);
riseButton.addEventListener('click', onRiseButtonClick);

const resetScale = () => {
  resetScaleValue();
  setScaleValue();
};

export { resetScale };
