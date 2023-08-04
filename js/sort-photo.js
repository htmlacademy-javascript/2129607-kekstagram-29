import { renderGallery } from './render-galery.js';
import { debounce } from './util.js';

const RANDOM_COUNT = 10;

const filters = document.querySelector('.img-filters');
const filterButtons = filters.querySelector('.img-filters__form');
const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const discussedButton = document.querySelector('#filter-discussed');

const clearGallery = (array) => {
  for (const element of array) {
    element.remove();
  }
};

const getRandomPhotos = (photos) => {
  const randomPhotos = [];
  for (let i = 0; i < RANDOM_COUNT; i++) {
    const randomId = Math.floor(Math.random() * photos.length);
    if (!randomPhotos.some((photo) => photo.id === randomId)) {
      randomPhotos.push(photos[randomId]);
    } else {
      i--;
    }
  }
  return randomPhotos;
};

const getDiscussedPhotos = (photos) => photos.sort((a, b) => b.comments.length - a.comments.length);

const getFilters = (array) => {
  filters.classList.remove('img-filters--inactive');
  renderGallery(array);

  const filterId = {
    'filter-default': array,
    'filter-random': getRandomPhotos(array),
    'filter-discussed': getDiscussedPhotos (array)
  };

  const getFilterData = (id) => filterId[id];

  const setActiveButton = (evt) => {
    filterButtons.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  };


  const onFilterClick = (evt) => {
    const minis = document.querySelectorAll('.picture');
    const gallery = getFilterData(evt.target.id);
    setActiveButton(evt);
    clearGallery(minis);
    debounce(renderGallery(gallery));
  };

  defaultButton.addEventListener('click', onFilterClick);
  randomButton.addEventListener('click', onFilterClick);
  discussedButton.addEventListener('click', onFilterClick);
};

export { getFilters };
