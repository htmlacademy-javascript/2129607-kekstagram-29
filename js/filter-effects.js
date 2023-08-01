const EFFECTS = [
  {
    name: 'none',
    style: '',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];

const sliderContainer = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects');
const photoPrew = document.querySelector('.img-upload__preview img');

const resetEffects = () => {
  sliderContainer.classList.add('hidden');
  photoPrew.style.cssText = 'transform: scale(1); filter: none';
};

let currentEffect = DEFAULT_EFFECT;

function showSlider() {
  sliderContainer.classList.remove('hidden');
}

function hideSlider() {
  sliderContainer.classList.add('hidden');
}

hideSlider();

function updateSlider() {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    start: currentEffect.max,
  });
}

function onEffectsListClick(evt) {
  if (evt.target.classList.contains('effects__radio')) {
    currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
    photoPrew.className = `img-upload__preview effects__preview--${currentEffect.name}`;

    updateSlider();

    if (currentEffect.name === 'none') {
      hideSlider();
    } else {
      showSlider();
    }
  }
}

function onSliderUpdate() {
  const rangeSliderValue = sliderElement.noUiSlider.get();
  sliderValue.value = rangeSliderValue;
  photoPrew.style.filter = `${currentEffect.style}(${rangeSliderValue}${currentEffect.unit})`;

  if (currentEffect.name === 'none') {
    photoPrew.style.filter = DEFAULT_EFFECT.style;
  }
}

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.min,
});

effectsList.addEventListener('click', onEffectsListClick);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
