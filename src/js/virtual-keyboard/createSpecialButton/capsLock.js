export function capsLock(specialButton) {
  document.querySelector('#CapsLock').addEventListener('click', (event) => {

    function upCase(numberRow) {
      const row = document.querySelectorAll(`#${numberRow} > section`);
      const capsLock = document.querySelector('#CapsLock');

      row.forEach(button => {
        if (!specialButton(button.id) && button.classList.contains('upperCase')) {

          button.classList.remove('upperCase');
          button.classList.add('lowerCase');
          capsLock.classList.remove('changeCaps');

        } else if (!specialButton(button.id) && !button.classList.contains('upperCase')) {

          button.classList.add('upperCase');
          button.classList.remove('lowerCase');
          capsLock.classList.add('changeCaps');
          
        }
      });
    }

    upCase('row1')
    upCase('row2')
    upCase('row3')
    upCase('row4')
    upCase('row5')

  });
}