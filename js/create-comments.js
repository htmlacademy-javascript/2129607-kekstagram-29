import { createComment } from './create-comment.js';
import { getRandomInteger } from './util.js';

const COMMENT_COUNT = 30;

const createComments = () => Array.from({length: getRandomInteger(0, COMMENT_COUNT)}, createComment);

export { createComments };
