import { getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const MIN_COMMENTS = 1;
const MAX_COMMENTS = 2;
const AVATAR_COUNT = 6;
const NAMES = [
  'Вадим',
  'Лена',
  'Ирочка',
  'Петр',
  'Павлик',
  'Эля',
  'Виталина',
  'Викусик',
  'Андрей',
  'Саша',
  'Женя',
  'Руслан',
  'Леонид'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const getRandomMessage = () => Array.from(
  {length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)},
  () => getRandomArrayElement(MESSAGES),
).join(' ');

const createCommentId = createIdGenerator();

const createComment = () => ({
  id : createCommentId(),
  avatar : `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message : getRandomMessage(),
  name : getRandomArrayElement(NAMES),
});

export { createComment };
