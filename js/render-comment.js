const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const renderComment = ({avatar, name, message}) => {
  const newComment = commentTemplate.cloneNode(true);

  newComment.querySelector('.social__picture').src = avatar;
  newComment.querySelector('.social__picture').alt = name;
  newComment.querySelector('.social__text').textContent = message;

  return newComment;
};

export { renderComment };
