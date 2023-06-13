function checkLenght (chekingString, maxLenght) {
  return chekingString.length <= maxLenght;
}

function replaceSpace (string) {
  return string.replaceAll(' ', '');
}

function toLower (string) {
  return string.toLowerCase();
}

function normalizeString (chekingString) {
  let result = replaceSpace(chekingString);
  result = toLower(result);
  return result;
}

function isPalindrom (chekingString) {
  const normalString = normalizeString(chekingString);
  let invertedString = '';

  for (let i = normalString.length - 1; i >= 0; i--) {
    invertedString += normalString[i];
  }
  return normalString === invertedString;
}
