import searchMovie from '../../search-films/index';

export function enter() {

  document.addEventListener('mousedown', (event) => {

    if (event.target.id === 'Enter') {

      searchMovie();

    }

  });

}