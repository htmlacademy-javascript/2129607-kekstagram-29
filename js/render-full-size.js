const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentLoad = bigPicture.querySelector('.comments-loader');
const pageBody = document.querySelector('body');

const renderFullSize = () => {


};

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

export { renderFullSize };
