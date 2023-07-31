import { isEscapeKey, isEnterKey } from './util.js';

/*Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:
<li class="social__comment">
    <img
        class="social__picture"
        src="{{аватар}}"
        alt="{{имя комментатора}}"
        width="35" height="35">
    <p class="social__text">{{текст комментария}}</p>
</li>
*/

const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoad = bigPicture.querySelector('.comments-loader');
const pageBody = document.querySelector('body');
const openImg = document.querySelector('.pictures');
const closeImg = bigPicture.querySelector('.big-picture__cancel');

const openFullSize = (miniPhoto) => {
  //наполнение контентом
  bigPicture.querySelector('.big-picture__img').src = miniPhoto.url;
  bigPicture.querySelector('.likes-count').textContent = miniPhoto.likes;
  bigPicture.querySelector('.comments-count').textContent = miniPhoto.comments.length;
  bigPicture.querySelector('.social__comments').src = miniPhoto.url;
  bigPicture.querySelector('.social__caption').textContent = miniPhoto.description;
  //классы видимости
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
  if (evt.target.matches('.picture__img')) {
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
