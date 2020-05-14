export function CtrlAltMouseDown(specialButton, arrayRow1, arrayRow2, arrayRow3, arrayRow4, arrayRow5) {
  
  document.querySelector('#CtrlAlt').addEventListener('click', (event) => {

    function upCase(numberRow, element) {
      
      const row = document.querySelectorAll(`#${numberRow} > section`);
      const lang = document.querySelector('#Lang');
      let i = 0;

      row.forEach(button => {
        if (!specialButton(button.id) && button.classList.contains('upperCase') && button.classList.contains('ctrlAlt')) {

          button.classList.remove('upperCase');
          button.classList.add('lowerCase');

        } else if (!specialButton(button.id) && !button.classList.contains('upperCase') && !button.classList.contains('ctrlAlt')) {

          button.classList.add('upperCase');
          button.classList.remove('lowerCase');

        }
      });

      for (let button of row) {
        if (lang.innerHTML === 'En' && !button.classList.contains('ctrlAlt')) {

          button.innerHTML = element[i][4]
          button.classList.add('ctrlAlt')

        } else if (lang.innerHTML === 'Ru' && !button.classList.contains('ctrlAlt')) {

          button.innerHTML = element[i][3];
          button.classList.add('ctrlAlt')

        } else if (lang.innerHTML === 'En' && button.classList.contains('ctrlAlt')) {

          button.innerHTML = element[i][1];
          button.classList.remove('ctrlAlt')

        } else if (lang.innerHTML === 'Ru' && button.classList.contains('ctrlAlt')) {

          button.innerHTML = element[i][0];
          button.classList.remove('ctrlAlt')

        }

        i += 1

      }

    };

    upCase('row1', arrayRow1)
    upCase('row2', arrayRow2)
    upCase('row3', arrayRow3)
    upCase('row4', arrayRow4)
    upCase('row5', arrayRow5)

  });
}

