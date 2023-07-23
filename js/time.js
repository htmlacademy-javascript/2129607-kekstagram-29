const normilizeTime = (string) => string.split(':');

const minutesToHours = (time) => [Math.floor(time / 60), time % 60]; //переводит длительность встречи в минутах в часы и минуты (массив)

//считает длину рабочего дня, возвращает массив из часов и минут
const dayLength = (start, end) => {
  let hours = 0;
  let minutes = 0;
  const dayStart = normilizeTime(start);
  const dayEnd = normilizeTime(end);

  if (dayEnd[1] < dayStart[1]) {
    minutes = 60 - dayEnd[1];
    hours -= 1;
  } else {
    minutes = dayEnd[1] - dayStart[1];
  }

  hours += dayEnd[0] - dayStart[0];

  return [hours, minutes];
};

const isEqualLengthArrays = (array1, array2) => (array1.length === array2.length);

const isEqualContenthArrays = (array1, array2) => {
  if (!isEqualLengthArrays(array1, array2)) {
    return false;
  }
  const len = array1.length;
  let result;

  for (let i = 0; i < len; i++) {
    if (array1[i] !== array2[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

const isBiggerTime = (array1, array2) => {
  if (isEqualContenthArrays(array1, array2)) {
    return false;
  }
  const len = array1.length;

  for (let i = 0; i < len; i++) {
    if (array1[i] > array2[i]) {
      return true;
    }
    if (array1[i] < array2[i]) {
      return false;
    }
  }
};

const meetingEnd = (start, length) => {
  const len = minutesToHours(length);
  const result = [];

  result[0] = start[0] + len[0];
  result[1] = start[1] + len[1];
  if (result[1] === 60) {
    result[1] = 0;
    result[0] += 1;
  }
  if (result[1] > 60) {
    result[1] = result[1] - 60;
    result[0] += 1;
  }
  return result;
};

const isMeetingInTime = (dayStart, dayEnd, meetingStart, meetingLength) => {
  //сравнивает продолжительность встречи и прододжительность дня
  if (isBiggerTime(minutesToHours(meetingLength), dayLength(dayStart, dayEnd))) {
    return false;
  }
  //сравнивает время начала встречи и время окончания дня
  if (isBiggerTime(normilizeTime(meetingStart), normilizeTime(dayEnd)) || isEqualContenthArrays(normilizeTime(meetingStart), normilizeTime(dayEnd))) {
    return false;
  }
  //сравнивает время начала дня и время начала встречи???
  if (isBiggerTime(normilizeTime(dayStart), normilizeTime(meetingStart))) {
    return false;
  }
  //сложить время начала встречи и ее длину, сравнить время окончания встречи с окончанием дня
  if (isBiggerTime(meetingEnd(meetingStart, meetingLength), normilizeTime(dayEnd))) {
    return false;
  }
  return true;
};

export {isMeetingInTime};

// isMeetingInTime('08:00', '17:30', '14:00', 90); // true
//isMeetingInTime('8:0', '10:0', '8:0', 120); // true ошибка
// isMeetingInTime('08:00', '14:30', '14:00', 90); // false ошибка
// isMeetingInTime('14:00', '17:30', '08:0', 90);  // false
// isMeetingInTime('8:00', '17:30', '08:00', 900); // false
