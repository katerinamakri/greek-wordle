import '../css/Keyboard.css';
import Key from './Key.jsx';
import { keys } from '../data/keys.js';

function Keyboard() {

	return (
		<div className="keyboard-container mx-auto mb-5 w-24">
			<div className="first-row flex justify-center w-10">
				{
					keys.slice(0, 9).map((item) => (
						<Key letter={item} key={item}/>
					))
				}
			</div>

			<div className="second-row flex justify-center w-10 my-2">
				{
					keys.slice(9, 19).map((item) => (
						<Key letter={item} key={item}/>
					))
				}
			</div>

			<div className="third-row flex justify-center w-10">
				{
					keys.slice(19, 27).map((item) => (
						<Key letter={item} key={item}/>
					))
				}
			</div>
		</div>
	);
}

export default Keyboard;