import '../css/Key.css';

function Key(props) {
	const { letter } = props;

	const enterButtonClass = (letter === 'ENTER') ? 'px-7 py-3' : 'p-3';
	const backspaceButtonClass = (letter === 'BACKSPACE') ? 'px-11 py-3' : 'p-3';

	return (
		<div className={`border rounded flex justify-center mx-1 w-14 ${enterButtonClass} ${backspaceButtonClass}`}>
			<button>{letter}</button>
		</div>
	);
}

export default Key;