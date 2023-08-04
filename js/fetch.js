const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

// const errorMessage = {
//   GET_MESSAGE: 'Не удалось загрузить данные. Попробуйте обновить страницу',
//   SEND_MESSAGE: 'Не удалось отправить форму. Попробуйте ещё раз',
// };

const getData = async (body = null) => {
  try {
    const response = await fetch(`${BASE_URL}${Route.GET_DATA}`, {method: 'GET', body});

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch {
    throw new Error('Не удалось загрузить данные. Попробуйте обновить страницу');
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(`${BASE_URL}${Route.SEND_DATA}`, {method: 'POST', body});

    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export {getData, sendData};
