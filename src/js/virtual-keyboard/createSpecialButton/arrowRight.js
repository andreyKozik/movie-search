export function arrowRight(textareaElement) {

  document.addEventListener('click', (event) => {

    if (event.toElement.id === 'ArrowRight') {

      if (textareaElement.selectionStart === textareaElement.selectionEnd) {
        
          document.querySelector('.search-movie').focus();

          textareaElement.setRangeText("", textareaElement.selectionStart+1, textareaElement.selectionEnd+1, "end");

          textareaElement.focus();
          
      }

    }

  });

}