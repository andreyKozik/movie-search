export default function openOrCloseKeyboard() {

  document.querySelector(".virtual-keyboard-button").addEventListener("mousedown", () => {

    let virtualKeyboardButton = document.querySelector("#virtual-keyboard");

    virtualKeyboardButton.style.display === 'flex' ?
    virtualKeyboardButton.style.display = 'none' :
    virtualKeyboardButton.style.display = 'flex';

  });
  
}


