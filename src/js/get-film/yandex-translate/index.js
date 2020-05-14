import { getFilm } from '../index'
import { globalVariable } from '../../global-variables/index';

export default async function yandexTranslate() {

  const translateElement = document.querySelector('.search-movie').value;

  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20191203T103541Z.38c6e09aef077e18.54727e162922872781a8693d29f6b65dc750ce22&text=${translateElement}&lang=en&format=plain&options=0`;
  const res = await fetch(url);
  const data = await res.json();

  document.querySelector('.error').innerHTML = `Showing results for '${data.text[0]}'`;

  document.querySelector('.search-movie').value = data.text[0];

  globalVariable.filmName = data.text[0];

  getFilm(data.text[0], 1)

}