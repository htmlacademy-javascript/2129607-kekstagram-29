const checkLenght = function (chekingString, maxLenght) {
  return chekingString.length <= maxLenght;
};

checkLenght ('Погром', 6);
checkLenght ('Погром', 5);
checkLenght ('Погром', 9);

const normalizeString = function (string) {
  return string.replaceAll(' ', '').toLowerCase();
};

const isPalindrom = function (chekingString) {
  const normalString = normalizeString(chekingString);
  let invertedString = '';
  const len = normalString.length - 1;

  for (let i = len; i >= 0; i--) {
    invertedString += normalString[i];
  }
  return normalString === invertedString;
};

isPalindrom('Дом Мод');
isPalindrom('Сон носа');
