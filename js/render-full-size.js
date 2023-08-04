import { renderComments } from './render-comments.js';

const START_COMMENTS_COUNT = 5;

const renderFullSize = ({url, description, likes, comments}, bigPhoto) => {
  const bigPictureImage = bigPhoto.querySelector('.big-picture__img img');
  const commentCounter = bigPhoto.querySelector('.social__comment-count');
  const commentLoad = bigPhoto.querySelector('.comments-loader');
  const commentsBlock = bigPhoto.querySelector('.social__comments');
  const likesCounter = bigPhoto.querySelector('.likes-count');
  const photoCaption = bigPhoto.querySelector('.social__caption');
  const commentCount = comments.length;
  let shownCount = 0;

  const updateComments = () => {
    shownCount += START_COMMENTS_COUNT;
    if (shownCount >= commentCount) {
      shownCount = commentCount;
      commentLoad.classList.add('hidden');
      commentLoad.removeEventListener('click', updateComments);
    } else {
      commentLoad.classList.remove('hidden');
      commentLoad.addEventListener('click', updateComments);
    }

    commentsBlock.textContent = '';
    commentsBlock.appendChild(renderComments(comments.slice(0, shownCount)));
    commentCounter.innerHTML = `${shownCount} из <span class = "comments-count">${commentCount}</span> комментариев`;
  };

  bigPictureImage.src = url;
  bigPictureImage.alt = description;
  photoCaption.textContent = description;
  likesCounter.textContent = likes;

  if (commentCount) {
    updateComments();
  } else {
    commentsBlock.textContent = '';
    commentLoad.classList.add('hidden');
    commentCounter.textContent = 'Будьте первым!';
  }
};

export { renderFullSize };
