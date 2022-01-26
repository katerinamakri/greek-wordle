import { useContext } from 'react';
import '../css/Row.css';
import { WordContext } from '../context/WordContext.jsx';

function Row(props) {
	const [ wordArray ] = useContext(WordContext);
	
	console.log(wordArray)

	return (
		//has to be form and when click enter then trigger submit
		<ul className="flex justify-between align-middle first:mt-0 mt-4">

			{(wordArray) ? (
				wordArray.map((item, index) => (
				<li className="card" key={index}>
					<input type="text" value={item || ""} readOnly/>
				</li>
				))
			) : (
				<>
					<li className="card">K</li>
					<li className="card">Α</li>
					<li className="card">Φ</li>
					<li className="card">Ε</li>
					<li className="card">Σ</li>	
				</>
			)}
		</ul>
	);
}

export default Row;