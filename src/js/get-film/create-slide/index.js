import { mySwiper } from '../../index';

export default async function createSlide(film) {

  const url = `https://www.omdbapi.com/?i=${film.imdbID}&apikey=2cbc6f5b`;
  const res = await fetch(url);
  const data = await res.json();

  film.Poster === "N/A" ? film.Poster = './assets/img/no-poster/noPoster.jpg' : film.Poster;

  data.imdbRating === "N/A" ? data.imdbRating = '0.0' : data.imdbRating;

  mySwiper.appendSlide([
    `<div class="swiper-slide">
    <div class="slide">
      <div class="container">
      <h1 class="name-film"><a href=https://www.imdb.com/title/${data.imdbID}/videogallery/>${film.Title}</a></h1>
      <img src="${film.Poster}" alt="" class="poster">
      <div class="release-year">${film.Year}</div>
      <div class="rating">
        <img class="imgRating" src='./assets/img/rating/star.png' alt="">
        <div class="amountRating">${data.imdbRating}</div>
      </div>
      </div>
    </div>
    </div>`,
  ]);

  return 4

}
