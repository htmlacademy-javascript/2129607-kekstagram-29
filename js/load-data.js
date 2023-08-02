import { renderGallery } from './render-galery.js';
import { getData } from './fetch.js';
import { showAlertError } from './util.js';

let data = null;

try {
  data = await getData();
  renderGallery(data);
} catch {
  showAlertError('Ваши данные очень важны для нас. В настоящий момент они не загружены. Попробуйте перезагрузить страницу!');
}

export { data };
