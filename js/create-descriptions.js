import {getRandomInteger, getRandomArrayElement} from './util.js';

const AVATAR_COUNT = 6;
const COMMENT_COUNT = 30;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const PHOTO_COUNT = 25;
const MIN_COMMENTS = 1;
const MAX_COMMENTS = 2;

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

const DESCRIPTIONS = [
  'Моё первое фото',
  'Круто провожу время',
  'Юху!',
  'Что скажете?',
  'Думаю, это отличная фотка'
];

//возвращает случайные комментарии из заданного количества строк
// const getRandomMessage = (count) => {
//   let message = getRandomArrayElement(MESSAGES);

//   for (let i = 2; i <= count; i++) {
//     message += ` ${getRandomArrayElement(MESSAGES)}`;
//   }

//   return message;
// };

//join метод склеивает строку из элементов массива с разделителем-параметром
const getRandomMessage = () => Array.from(
  {length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)},
  () => getRandomArrayElement(MESSAGES),
).join(' ');

//создает номер по возрастающей
const getId = () => {
  let id = 0;

  return function () {
    id++;
    return id;
  };
};

//генераторы Id для разных блоков
const createCommentId = getId();

//создает комментарий со случайным наполнением
const getComment = () => ({
  id : createCommentId(),
  avatar : `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message : getRandomMessage(),
  name : getRandomArrayElement(NAMES),
});

//создаёт массив из случайного количество комментариев
const createComments = () => Array.from({length: getRandomInteger(0, COMMENT_COUNT)}, getComment);

//создает блок описания фото со случайным наполнением
const getPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(),
});

const createDescriptions = () => Array.from({length: PHOTO_COUNT}, (_, picIndex) => getPhotoDescription(picIndex + 1));

export {createDescriptions};
