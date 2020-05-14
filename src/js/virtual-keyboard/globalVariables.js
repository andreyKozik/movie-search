// array for rendering keyboard
// the zero element subarray is an English small letter
// the first element is a Russian small letter
// the second element is the event.code key
// the third element is a special symbol of the English layout
// the fourth element is a special symbol of the Russian layout

export const arrayRow1 = [['`', 'ё', 'Backquote', '~', 'Ё'], [1, 1, 'Digit1', '!', '!'], [2, 2, 'Digit2', '@', '"'],
  [3, 3, 'Digit3', '#', '№'], [4, 4, 'Digit4', '$', ';'], [5, 5, 'Digit5', '%', '%'], [6, 6, 'Digit6', '^', ':'],
  [7, 7, 'Digit7', '&', '?'], [8, 8, 'Digit8', '*', '*'], [9, 9, 'Digit9', '(', '('], [0, 0, 'Digit0', ')', ')'],
  ['-', '-', 'Minus', '_', '_'], ['=', '=', 'Equal', '+', '+'],
  ['&#8592 Back', '&#8592 Back', 'Backspace', '&#8592 Back', '&#8592 Back']];

export const arrayRow2 = [['q', 'й', 'KeyQ', 'q', 'й'], ['w', 'ц', 'KeyW', 'w', 'ц',], ['e', 'у', 'KeyE', 'e', 'у'], 
  ['r', 'к', 'KeyR', 'r', 'к'], ['t', 'е', 'KeyT', 't', 'е'], ['y', 'н', 'KeyY', 'y', 'н'], 
  ['u', 'г', 'KeyU', 'u', 'г'], ['i', 'ш', 'KeyI', 'i', 'ш'], ['o', 'щ', 'KeyO', 'o', 'щ'],
  ['p', 'з', 'KeyP', 'p', 'з'], ['[', 'х', 'BracketLeft', '{', 'Х'], [']', 'ъ', 'BracketRight', '}', 'Ъ'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock']];

export const arrayRow3 = [['a', 'ф', 'KeyA', 'a', 'ф'], ['s', 'ы', 'KeyS', 's', 'ы'], ['d', 'в', 'KeyD', 'd', 'в'], 
  ['f', 'а', 'KeyF', 'f', 'а'], ['g', 'п', 'KeyG', 'g', 'п'], ['h', 'р', 'KeyH', 'h', 'р'], 
  ['j', 'о', 'KeyJ', 'j', 'о'], ['k', 'л', 'KeyK', 'k', 'л'], ['l', 'д', 'KeyL', 'l', 'д'], 
  [';', 'ж', 'Semicolon', ':', 'Ж'], ['&#8242;', 'э', 'Quote', '"', 'Э'],
  ['\\', '\\', 'Backslash', '|', '/'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter',]];

export const arrayRow4 = [['z', 'я', 'KeyZ', 'z', 'я',], ['x', 'ч', 'KeyX', 'x', 'ч',], ['c', 'с', 'KeyC', 'c', 'с'], 
  ['v', 'м', 'KeyV', 'v', 'м'], ['b', 'и', 'KeyB', 'b', 'и'], ['n', 'т', 'KeyN', 'n', 'т'], 
  ['m', 'ь', 'KeyM', 'm', 'ь'], [',', 'б', 'Comma', '<', 'Б'], ['.', 'ю', 'Period', '>', 'Ю'], 
  ['/', '.', 'Slash', '?', ','], ['&#8592', '&#8592', 'ArrowLeft','&#8592', '&#8592'],
  ['&#8594', '&#8594', 'ArrowRight', '&#8594', '&#8594',]];

export const arrayRow5 = [['Ctrl + Alt', 'Ctrl + Alt', 'CtrlAlt', 'Ctrl + Alt', 'Ctrl + Alt'],
  ['Space', 'Space', 'Space', 'Space', 'Space'], ['Ru', 'En', 'Lang', 'Ru', 'En']];

export function specialButton(id) {

  if (id === 'Backspace' || id === 'Enter' || id === 'Lang' || id === 'CapsLock' || id === 'CtrlAlt' || 
    id === 'Space' || id === 'Lang' || id === 'row1' || id === 'row2' || id === 'row3' || 
    id === 'row4' || id === 'row5' || id === 'ArrowLeft' || id === 'ArrowRight') return true;
    
  return false;
  
}