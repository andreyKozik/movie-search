// collect the virtual keyboard and add the third element to the array id array for each element
export class CreateButtons {
  constructor() {
  }

  crateButtonRow(arrayRow, id) {

    arrayRow.map((buttonKeyboard) => {

      const button = document.createElement('section');
      document.querySelector(`#${id}`).append(button);
      button.id = buttonKeyboard[2];
      document.getElementById(button.id).innerHTML = buttonKeyboard[localStorage.getItem('second')
      || localStorage.getItem('first')];

    });

  }
}
