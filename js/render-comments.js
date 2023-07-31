import { renderComment } from './render-comment.js';

const renderComments = (comments) => {
  const newCommentBlock = document.createDocumentFragment();

  comments.forEach((comment) => newCommentBlock.appendChild(renderComment(comment)));

  return newCommentBlock;
};

export { renderComments };
