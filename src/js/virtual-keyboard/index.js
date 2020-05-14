import {
  array, arrayRow1, arrayRow2, arrayRow3, arrayRow4, arrayRow5, map, specialButton,
} from './globalVariables';
import { filmName, amountPageDownload, getFilm } from '../index';
import { CreateButtons } from './createButtons';
import { space } from './createSpecialButton/space';
import { CtrlAltMouseDown } from './createSpecialButton/CtrlAltMouseDown';
import { backspace } from './createSpecialButton/backspace';
import { enter } from './createSpecialButton/enter';
import { capsLock } from './createSpecialButton/capsLock';
import { changeKeyboardLayout } from './createSpecialButton/changeKeyboardLayout';
import { outputValueMousedown } from './createSpecialButton/outputValueMousedown';
import { arrowLeft } from './createSpecialButton/arrowLeft';
import { arrowRight } from './createSpecialButton/arrowRight';
import CreateKeyboard from './createKeyboard';

export default function virtualKeyboard() {
  const createKeyboard = new CreateKeyboard();
  const { textarea, keyboardContainer } = createKeyboard;
  createKeyboard.init();

  localStorage.setItem('first', '0');

  const createButtons = new CreateButtons();
  createButtons.crateButtonRow(arrayRow1, 'row1');
  createButtons.crateButtonRow(arrayRow2, 'row2');
  createButtons.crateButtonRow(arrayRow3, 'row3');
  createButtons.crateButtonRow(arrayRow4, 'row4');
  createButtons.crateButtonRow(arrayRow5, 'row5');

  arrowLeft(textarea);
  arrowRight(textarea);
  outputValueMousedown(specialButton, textarea);
  changeKeyboardLayout(arrayRow1, arrayRow2, arrayRow3, arrayRow4, arrayRow5);
  capsLock(specialButton);
  backspace('click', textarea);
  space(textarea);
  enter(filmName, amountPageDownload, getFilm);
  CtrlAltMouseDown(specialButton, arrayRow1, arrayRow2, arrayRow3, arrayRow4, arrayRow5);
}