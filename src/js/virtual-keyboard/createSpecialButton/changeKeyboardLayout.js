export function changeKeyboardLayout(arrayRow1, arrayRow2, arrayRow3, arrayRow4, arrayRow5) {
  document.querySelector('#Lang').addEventListener('click', () => {

    function upCase(numberRow, element) {
      
      const row = document.querySelectorAll(`#${numberRow} > section`);
      const lang = document.querySelector('#Lang');
      let i = 0;

      for (let button of row) {

        if (lang.innerHTML === 'En' && !button.classList.contains('ctrlAlt')) {

          button.innerHTML = element[i][0]

        } else if (lang.innerHTML === 'Ru' && !button.classList.contains('ctrlAlt')) {

          button.innerHTML = element[i][1];

        } else if (lang.innerHTML === 'En' && button.classList.contains('ctrlAlt')) {

          button.innerHTML = element[i][3];

        } else if (lang.innerHTML === 'Ru' && button.classList.contains('ctrlAlt')) {

          button.innerHTML = element[i][4];

        }

        i += 1
        
      };

    }

    upCase('row1', arrayRow1)
    upCase('row2', arrayRow2)
    upCase('row3', arrayRow3)
    upCase('row4', arrayRow4)
    upCase('row5', arrayRow5)

  });
}


