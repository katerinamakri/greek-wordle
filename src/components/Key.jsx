import { useContext } from 'react';
import '../css/Key.css';
import { WordContext } from '../context/WordContext.jsx';

function Key(props) {
	const { letter } = props;

	const [wordArray, setWordArray] = useContext(WordContext);

  function validateRow() { }

  const handleLetterClick = (e) => {
  	console.log(e.target.value)
  	if (wordArray.length < 5) {
  		setWordArray(oldArray => [...oldArray, e.target.value])
  	}

  	if (e.target.value === 'ENTER') {
  		// validate row
  		validateRow(); 

  		// start filling new row 		

  		// color correct letters
  	}

  	if (e.target.value === 'BACKSPACE') {
  		// remove last letter from list
  	}
  };

	const extraButtonClasses = (letter === 'ENTER') || (letter === 'BACKSPACE') ? 'px-7 py-3' : 'p-3';
	const checkEnterValue = (letter === 'ENTER') ? <i className="fas fa-level-down-alt"></i> : letter;
	const displayLetterOrSymbol = (letter === 'BACKSPACE') ? <i className="fas fa-backspace"></i> : checkEnterValue;
	return (
		<div className={`custom-colors border rounded flex justify-center mx-1 w-14 ${extraButtonClasses}`}>
			<button onClick={handleLetterClick} value={letter}>
				{displayLetterOrSymbol}
			</button>
		</div>
	);
}

export default Key;