import { isEscapeKey, isEnterKey } from './util.js';

/*окно должно открываться по клику на миниатюру, данные описания берём из объекта
для отображения: удалить ХИДДЕН у элемента биг-пикча и заполнить его соответствующим контентом
Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.
Количество лайков likes подставьте как текстовое содержание элемента .likes-count.
Количество комментариев comments подставьте как текстовое содержание элемента .comments-count.
Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:
<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>
Описание фотографии description вставьте строкой в блок .social__caption.
*/

const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoad = bigPicture.querySelector('.comments-loader');
const pageBody = document.querySelector('body');
const openImg = document.querySelector('.pictures'); //под вопросом
const closeImg = bigPicture.querySelector('.big-picture__cancel');

const openFullSize = () => {
  //наполнение контентом
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentLoad.classList.add('hidden');
  pageBody.classList.add('modal-open');
  //добавить обработчики для закрытия:
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
};

const closeFullSize = () => {
  bigPicture.classList.add('hidden');
  //обнулить контент биг-пикча
  pageBody.classList.remove('modal-open');
  //удалить обработчики для закрытия:
  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
};

openImg.addEventListener('click', (evt) => {
  if (evt.target.matches('.picture')) {
    openFullSize();
  }
});

closeImg.addEventListener('click', () => {
  closeFullSize();
});

closeImg.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeFullSize();
  }
});

openFullSize();
//closeFullSize();
