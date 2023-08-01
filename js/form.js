import { isEscapeKey } from './util.js';
import { isValidCount, isValidTag, validateTags, commentLen } from './validate.js';

const FILE_FORMATS = ['jpg', 'jpeg', 'png'];
const MAX_TAGS_COUNT = 5;

const uploadForm = document.querySelector('.img-upload__form');
const overlay = document.querySelector('.img-upload__overlay');
const pageBody = document.querySelector('body');
const tagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const fileField = document.querySelector('.img-upload__input');
const photoPreview = document.querySelector('.img-upload__preview img');
const effectsPreviews = document.querySelectorAll('.effects__preview');
const cancelButton = document.querySelector('.img-upload__cancel');
const submitButton = uploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__error-message'
});

const openUploadForm = () => {
  overlay.classList.remove('hidden');
  pageBody.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
};

const closeUploadForm = () => {
  overlay.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  uploadForm.reset();
  pristine.reset();
  document.removeEventListener('keydown', onEscKeydown);
};

const onEscKeydown = (evt) => {
  if (isEscapeKey() && !(document.activeElement === tagsField || document.activeElement === commentField)) {
    evt.preventDefault();
    closeUploadForm();
  }
};

const isValidFileFormat = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_FORMATS.some((format) => fileName.endsWith(format));
};

const onCancelButtonClick = () => {
  closeUploadForm();
};

const onFileInputChange = () => {
  const file = fileField.files[0];

  if (file && isValidFileFormat(file)) {
    photoPreview.src = URL.createObjectURL(file);
    effectsPreviews.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  }
  openUploadForm();
};

pristine.addValidator(tagsField, isValidCount, `Максимум ${MAX_TAGS_COUNT} хештегов`);

pristine.addValidator(tagsField, isValidTag, 'Неверный хештег');

pristine.addValidator(tagsField, validateTags, 'Хештеги должны быть уникальными');

pristine.addValidator(commentField, commentLen, 'Комментарий слишком длинный!');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setOnFormSubmit = (cb) => {
  uploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(uploadForm));
      unblockSubmitButton();
    }
  });
};

fileField.addEventListener('change', onFileInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);

export { openUploadForm, setOnFormSubmit, closeUploadForm };
