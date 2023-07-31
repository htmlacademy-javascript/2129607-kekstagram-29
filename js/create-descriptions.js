import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';
import { createComments } from './create-comments.js';

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const DESCRIPTIONS = [
  'Моё первое фото',
  'Круто провожу время',
  'Юху!',
  'Что скажете?',
  'Думаю, это отличная фотка'
];

const generatePhotoId = createIdGenerator();
const generateObjectId = createIdGenerator();

const createDescriptions = () => ({
  id: generateObjectId(),
  url: `photos/${generatePhotoId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(),
});

export {createDescriptions};
