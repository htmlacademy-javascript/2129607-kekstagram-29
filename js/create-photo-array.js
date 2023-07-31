import { createDescriptions } from './create-descriptions.js';

const createPhotoArray = (count) => Array.from({ length: count}, createDescriptions);

export { createPhotoArray };
