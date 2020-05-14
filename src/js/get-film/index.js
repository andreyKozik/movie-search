import yandexTranslate  from './yandex-translate/index';
import createSlide from './create-slide/index';


export async function getFilm(filmName, numberPage) {

  let films = [];
  let valueSearch = document.querySelector('.search-movie').value
  const regexp = /[а-яё]/ig;

  try {

    if (valueSearch.match(regexp)) {

      yandexTranslate();

      return
  
    }
    
    const url = `https://www.omdbapi.com/?s=${filmName}&page=${numberPage}&type=movie&apikey=2cbc6f5b`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.Error === 'Movie not found!') {
        throw new SyntaxError(`No results for: ${document.querySelector('.search-movie').value}`);
    } else if (data.Error) {
        throw new SyntaxError(`${data.Error}`);
    }

    localStorage.setItem('previousFilm', filmName);

    let amountAllPage = Math.ceil(data.totalResults / 10);
    localStorage.setItem('amountAllPage', amountAllPage);

    films = data.Search;

    films.map((film) => {
      createSlide(film)
    });

    if (films.length === 2 || films.length === 3) {
      
      document.querySelector('.swiper-container').style.width = '200vw';
  
    }

  } catch (error) {

    getFilm(localStorage.getItem('previousFilm'), 1)

    document.querySelector('.error').innerHTML = error.message;

  }

}