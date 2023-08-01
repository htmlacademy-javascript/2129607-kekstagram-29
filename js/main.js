import { createPhotoArray } from './create-photo-array.js';
import { renderGallery } from './render-galery.js';
import './render-upload-form.js';

const PHOTOS_COUNT = 25;

const photoArray = createPhotoArray(PHOTOS_COUNT);
renderGallery(photoArray);

