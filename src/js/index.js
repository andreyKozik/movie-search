import Swiper from 'swiper';
import preload from './preload/index';
import virtualKeyboard from './virtual-keyboard/index';
import { getFilm } from './get-film/index';
import searchFilms from './search-films/index';
import openOrCloseKeyboard from './open-or-close-keyboard/index';
import loaderNextPage from './loader-next-page/index';
import voiceSearch from './voice-search/index';


export const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1020: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

preload();

getFilm('dream', 1);

virtualKeyboard();

searchFilms();

openOrCloseKeyboard();

loaderNextPage('.swiper-button-next', 'click');
loaderNextPage('.swiper-wrapper', 'touchstart');
loaderNextPage('.swiper-wrapper', 'mousedown');

voiceSearch();
