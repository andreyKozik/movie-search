import { getFilm } from '../get-film/index';
import { globalVariable } from '../global-variables/index';

function speech() {
	const recognizer = new webkitSpeechRecognition();// eslint-disable-line no-undef, new-cap

	// put an option so that recognition starts even before the user finishes talking
	recognizer.interimResults = true;

	// Start listening to the microphone and recognize the voice
	recognizer.start();

	// use the callback to process the results
	recognizer.onresult = function (ev) {// eslint-disable-line func-names
    const result = ev.results[ev.resultIndex];

		if (result.isFinal) {
      document.querySelector('.search-movie').value = result[0].transcript;

      document.querySelector('.background-loader').style.display = 'block';

      document.querySelector('.error').innerHTML = '';

      const elementOfSlider = document.querySelector(".swiper-wrapper");

      while (elementOfSlider.firstChild) {
        elementOfSlider.removeChild(elementOfSlider.firstChild);
      }

      globalVariable.filmName = result[0].transcript;
      globalVariable.amountPageDownload = 1;

      getFilm(globalVariable.filmName, 1);

      document.querySelector("#virtual-keyboard").style.display = 'none'

      setTimeout(() => {
        document.querySelector('.background-loader').style.display = 'none'
      }, 2000);
    } 
    
	}
}

export default function voiceSearch() {
	document.querySelector('.microphone').addEventListener('mousedown', () => {
    speech(globalVariable.filmName, globalVariable.amountPageDownload, getFilm);
	});
}

