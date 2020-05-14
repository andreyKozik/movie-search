export default class CreateKeyboard {
  constructor() {
    this.virtualKeyboard = document.createElement('div');
    this.virtualKeyboard.id = 'virtual-keyboard';

    this.textarea = document.querySelector('.search-movie');

    this.main = document.querySelector('.main');

    this.keyboardContainer = document.createElement('div');
    this.keyboardContainer.id = 'keyboard';

  }

  init() {
    const { virtualKeyboard, main, keyboardContainer} = this;
    main.append(virtualKeyboard);
    virtualKeyboard.append( keyboardContainer);

    for(let i = 1; i <= 5; i+=1){
      let div = document.createElement('div');
      div.id = `row${i}`;
      keyboardContainer.append(div);
    }
  }
}