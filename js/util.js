//возвращает случайное число из заданного диапазона
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//возвращает случайный элемент из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomInteger, getRandomArrayElement};
