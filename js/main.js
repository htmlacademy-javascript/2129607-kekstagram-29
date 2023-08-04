import './render-upload-form.js';
import './sort-photo.js';
import { closeUploadForm, setOnFormSubmit } from './form.js';
import { getData, sendData } from './fetch.js';
import { showAlertError } from './util.js';
import { getFilters } from './sort-photo.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { renderGallery } from './render-galery.js';

let data = null;
try {
  data = await getData();
  //console.log(data);
  renderGallery(data);
  getFilters(data);
} catch {
  showAlertError('Попробуйте перезагрузить страницу!');
}

const onSendDataSuccess = () => {
  closeUploadForm();
  showSuccessMessage();
};

const onSendDataError = () => {
  showErrorMessage();
};

setOnFormSubmit(async (datas) => {
  await sendData(onSendDataSuccess, onSendDataError, 'POST', datas);
});
