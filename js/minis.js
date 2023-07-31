import {createDescriptions} from './create-descriptions.js';
import './full-size.js';

const minisList = document.querySelector('.pictures');
const minisTemplate = document.querySelector('#picture').content.querySelector('.picture');
const minis = createDescriptions();
const minisListFragment = document.createDocumentFragment();

minis.forEach(({url, description, comments, likes}) => {
  const minisElement = minisTemplate.cloneNode(true);
  minisElement.querySelector('.picture__img').src = url;
  minisElement.querySelector('.picture__img').alt = description;
  minisElement.querySelector('.picture__comments').textContent = comments.length;
  minisElement.querySelector('.picture__likes').textContent = likes;
  minisListFragment.appendChild(minisElement);
});

title.classList.remove('visually-hidden');
minisList.appendChild(minisListFragment);
