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

const rangesSliderContainer = document.querySelector('.effect-level');
const rangeSlider = document.querySelector('.effect-level__slider');
const rangeSliderField = document.querySelector('.effect-level__value');
const effectsList = document.querySelector('.effects');
const image = document.querySelector('.img-upload__preview img');

const resetDefault = () => {
  rangesSliderContainer.classList.add('hidden');
  image.style.cssText = 'transform: scale(1); filter: none';
};

let currentEffect = DEFAULT_EFFECT;

function showRangeSlider() {
  rangesSliderContainer.classList.remove('hidden');
}

function hideRangeSlider() {
  rangesSliderContainer.classList.add('hidden');
}

hideRangeSlider();

function updateSlider() {
  rangeSlider.noUiSlider.updateOptions({
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
    image.className = `img-upload__preview effects__preview--${currentEffect.name}`;

    updateSlider();

    if (currentEffect.name === 'none') {
      hideRangeSlider();
    } else {
      showRangeSlider();
    }
  }
}

function onRangeSliderUpdate() {
  const rangeSliderValue = rangeSlider.noUiSlider.get();
  rangeSliderField.value = rangeSliderValue;
  image.style.filter = `${currentEffect.style}(${rangeSliderValue}${currentEffect.unit})`;

  if (currentEffect.name === 'none') {
    image.style.filter = DEFAULT_EFFECT.style;
  }
}

noUiSlider.create(rangeSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.min,
});

effectsList.addEventListener('click', onEffectsListClick);
rangeSlider.noUiSlider.on('update', onRangeSliderUpdate);

export { resetDefault };

// const EFFECTS = [
//   {
//     name: 'none',
//     min: 0,
//     max: 100,
//     step: 1,
//   },
//   {
//     name: 'chrome',
//     style: 'grayscale',
//     step: 0.1,
//     min: 0,
//     max: 1,
//     ed: '',
//   },
//   {
//     name: 'sepia',
//     style: 'sepia',
//     step: 0.1,
//     min: 0,
//     max: 1,
//     ed: '',
//   },
//   {
//     name: 'marvin',
//     style: 'invert',
//     step: 1,
//     min: 0,
//     max: 100,
//     ed: '%',
//   },
//   {
//     name: 'phobos',
//     style: 'blur',
//     step: 0.1,
//     min: 0,
//     max: 3,
//     ed: 'px',
//   },
//   {
//     name: 'heat',
//     style: 'brightness',
//     step: 0.1,
//     min: 1,
//     max: 3,
//     ed: '',
//   }
// ];
// const imagePreview = document.querySelector('.img-upload__preview img');//само фото
// const effectList = document.querySelector('.img-upload__effects');//файлдсет эффектов
// const sliderElement = document.querySelector('.effect-level__slider');//полоска?
// const effectLevel = document.querySelector('.effect-level__value');//инпут со значением
// const sliderContainer = document.querySelector('.img-upload__effect-level');//файлдсет слайдера (предыдущие два) formSlider

// const defaultEffect = EFFECTS[0];
// let chosenEffect = defaultEffect;

// const isDefault = () => chosenEffect === defaultEffect;

// const showSlider = () => sliderContainer.classList.remove('hidden');

// const hideSlider = () => sliderContainer.classList.add('hidden');

// noUiSlider.create(sliderElement, {
//   range: {
//     min: defaultEffect.min,
//     max: defaultEffect.max,
//   },
//   start: defaultEffect.max,
//   step: defaultEffect.step,
//   connect: 'lower',
// });

// const updateSlider = () => {
//   showSlider();
//   sliderElement.noUiSlider.updateOptions({
//     range: {
//       min: chosenEffect.min,
//       max: chosenEffect.max,
//     },
//     step: chosenEffect.step,
//     start: chosenEffect.max,
//   });

//   if (isDefault()) {
//     hideSlider();
//   }
// };

// const onFormChange = (evt) => {
//   if (!evt.target.classList.contains('effects__radio')) {
//     return;
//   }
//   chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
//   updateSlider();
// };

// const onSliderUpdate = () => {
//   imagePreview.style.filter = 'none';
//   imagePreview.className = '';
//   effectLevel.value = '';
//   if (isDefault()) {
//     return;
//   }
//   const sliderValue = sliderElement.noUiSlider.get();
//   imagePreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
//   imagePreview.classList.add(`effects__preview--${chosenEffect.name}`);
//   effectLevel.value = sliderValue;
// };

// //export { resetEffects };
