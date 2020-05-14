export function space(textareaElement) {

  document.addEventListener('click', (event) => {

    if (event.toElement.id === 'Space') {

      if (textareaElement.selectionStart === textareaElement.selectionEnd) {

        document.querySelector('.search-movie').focus();

        textareaElement.setRangeText(" ", textareaElement.selectionStart, textareaElement.selectionEnd, "end");
        
        textareaElement.focus();

      }
    }
    
  });

}
