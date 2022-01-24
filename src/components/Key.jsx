import '../css/Key.css';

function Key(props) {
	const { letter } = props;

  const handleLetterClick = (e) => {
  	console.log(e.target.value)
  };

	const extraButtonClasses = (letter === 'ENTER') || (letter === 'BACKSPACE') ? 'px-7 py-3' : 'p-3';
	const checkEnterValue = (letter === 'ENTER') ? <i class="fas fa-level-down-alt"></i> : letter;
	const displayLetterOrSymbol = (letter === 'BACKSPACE') ? <i class="fas fa-backspace"></i> : checkEnterValue;
	return (
		<div className={`border rounded flex justify-center mx-1 w-14 ${extraButtonClasses}`}>
			<button onClick={handleLetterClick} value={letter}>
				{displayLetterOrSymbol}
			</button>
		</div>
	);
}

export default Key;