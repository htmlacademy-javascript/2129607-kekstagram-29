const minyTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderMiny = ({url, description, comments, likes, id}) => {
  const newElement = minyTemplate.cloneNode(true);
  const image = newElement.querySelector('.picture__img');

  image.src = url;
  image.alt = description;
  newElement.querySelector('.picture__comments').textContent = comments.length;
  newElement.querySelector('.picture__likes').textContent = likes;
  newElement.dataset.photoId = id;

  return newElement;
};

export { renderMiny };
