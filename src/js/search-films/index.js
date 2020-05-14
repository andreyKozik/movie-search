import { getFilm } from '../get-film/index';
import { globalVariable } from '../global-variables/index';
import { mySwiper } from '../index';

export function searchMovie() {
  document.querySelector('.background-loader').style.display = 'block';

  document.querySelector('.error').innerHTML = '';

  mySwiper.removeAllSlides();

  globalVariable.filmName = document.querySelector('.search-movie').value;
  globalVariable.amountPageDownload = 1;
  getFilm(globalVariable.filmName, 1);

  document.querySelector("#virtual-keyboard").style.display = 'none'

  setTimeout(() => {
    document.querySelector('.background-loader').style.display = 'none'
  }, 2000);
}

export default function searchFilms() {
  document.querySelector('.button-search-movie').addEventListener('click', () => {
    searchMovie();
  })
}
