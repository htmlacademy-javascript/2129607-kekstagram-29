const minyTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderMiny = ({url, description, comments, likes, id}) => {
  const newElement = minyTemplate.cloneNode(true);

  newElement.querySelector('.picture__img').src = url;
  newElement.querySelector('.picture__img').alt = description;
  newElement.querySelector('.picture__comments').textContent = comments.length;
  newElement.querySelector('.picture__likes').textContent = likes;
  newElement.dataset.photoId = id;

  return newElement;
};

export { renderMiny };
