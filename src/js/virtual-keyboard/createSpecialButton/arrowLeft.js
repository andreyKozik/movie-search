export function arrowLeft(textareaElement) {

  document.addEventListener('click', (event) => {

    if (event.toElement.id === 'ArrowLeft') {

      if (textareaElement.selectionStart === textareaElement.selectionEnd) {

        document.querySelector('.search-movie').focus();

        textareaElement.setRangeText("", textareaElement.selectionStart-1, textareaElement.selectionEnd-1, "end");
        
        textareaElement.focus();

      }

    }

  });

}