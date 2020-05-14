import { mySwiper } from '../index';
import { getFilm } from '../get-film/index';
import { globalVariable } from '../global-variables/index';


export default function loaderNextPage(areaInteraction, mouseEvent) {
  document.querySelector(areaInteraction).addEventListener(mouseEvent, () => {

    const amountAllPage = +localStorage.getItem('amountAllPage');

    if (amountAllPage === 1) {
      return
    } else if (globalVariable.amountPageDownload === amountAllPage) { return }

    if ((globalVariable.amountPageDownload * globalVariable.amountFilmsInOneRequest) < mySwiper.realIndex + globalVariable.amountFilmsInOneRequest) {

      getFilm(globalVariable.filmName, globalVariable.amountPageDownload + 1 );
      globalVariable.amountPageDownload += 1;
      
    } 

  });
}