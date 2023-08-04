import { renderFullSize } from './render-full-size.js';
import { renderMiny } from './render-miny.js';
import { isEscapeKey, getTargetArrayElement } from './util.js';

const renderGallery = (photoArray) => {
  if (photoArray.length) {
    const pageBody = document.querySelector('body');
    const minyList = document.querySelector('.pictures');

    const bigPhoto = document.querySelector('.big-picture');
    const closingElement = bigPhoto.querySelector('.big-picture__cancel');
    const minisListFragment = document.createDocumentFragment();
    const title = document.querySelector('.pictures__title');

    title.classList.remove('visually-hidden');

    photoArray.forEach((minyPhoto) => minisListFragment.appendChild(renderMiny(minyPhoto)));
    minyList.appendChild(minisListFragment);

    const onCloseClick = () => {
      bigPhoto.classList.add('hidden');
      pageBody.classList.remove('modal-open');
      closingElement.removeEventListener('click', onCloseClick);// eslint-disable-next-line no-use-before-define
      document.removeEventListener('keydown', onCloseKeydown);
    };

    const onCloseKeydown = (evt) => {
      if (isEscapeKey(evt)) {
        onCloseClick();
      }
    };

    const onMinyClick = (evt) => {
      const targetElement = evt.target.closest('.picture');

      if (targetElement) {
        evt.preventDefault();
        const galleryPhotoId = targetElement.dataset.photoId;
        const targetMiny = getTargetArrayElement(galleryPhotoId, photoArray);

        renderFullSize(targetMiny, bigPhoto);
        bigPhoto.classList.remove('hidden');
        pageBody.classList.add('modal-open');

        closingElement.addEventListener('click', onCloseClick);
        document.addEventListener('keydown', onCloseKeydown);
      }
    };

    minyList.addEventListener('click', onMinyClick);
  }
};

export { renderGallery };
