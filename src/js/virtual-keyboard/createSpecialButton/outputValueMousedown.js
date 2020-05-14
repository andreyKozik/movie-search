// displaying values from the virtual keyboard when you click the mouse
export function outputValueMousedown(specialButton, textareaElement) {

  document.querySelector('#keyboard').addEventListener('click', (event) => {

    if (specialButton(event.target.id) === false) {
      
      textareaElement.setRangeText(event.target.outerText,
      textareaElement.selectionStart, textareaElement.selectionEnd, "end");
      textareaElement.focus();

      event.target.classList.add('change');
    }

  });

  document.addEventListener('mouseup', (event) => {

    event.target.classList.remove('change');

  });
  
}
