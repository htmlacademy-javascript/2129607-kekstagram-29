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
  'Леонид'];//13

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

//возвращает случайное число из заданного диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//возвращает случайный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//возвращает случайные комментарии в случайном количестве
const getRandomMessage = (count) => {
  let message = getRandomArrayElement(MESSAGES);

  if (count === 2) {
    message += ` ${getRandomArrayElement(MESSAGES)}`;
  }

  return message;
};

//создает номер по возрастающей
const getId = () => {
  let commentId = 0;

  return function () {
    commentId++;
    return commentId;
  };
};

//генераторы Id для разных блоков
const createCommentId = getId();
const createPhotoId = getId();
const createUrl = getId();

//создает комментарий со случайным наполнением
const getComment = () => ({
  id : createCommentId(),
  avatar : `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message : getRandomMessage(getRandomInteger(1, 2)),
  name : getRandomArrayElement(NAMES),
});

//создаёт массив из случайного количество комментариев
const createComments = () => Array.from({length: getRandomInteger(0, 30)}, getComment);

//создает блок описания фото со случайным наполнением
const getPhotoDescription = () => ({
  id: createPhotoId(),
  url: `photos/${createUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

const createDescriptions = () => Array.from({length: 25}, getPhotoDescription);
