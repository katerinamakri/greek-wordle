import '../css/Keyboard.css';
import Key from './Key.jsx';
import { keys } from '../data/keys.js';

function Keyboard() {

	return (
		<div className="keyboard-container mx-auto mb-5 w-24">
			<div className="first-row flex justify-center w-10">
				{
					keys.slice(0, 10).map((item, index) => (
						<Key letter={item} key={index}/>
					))
				}
			</div>

			<div className="second-row flex justify-center w-10 my-2">
				{
					keys.slice(10, 20).map((item, index) => (
						<Key letter={item} key={index}/>
					))
				}
			</div>

			<div className="third-row flex justify-center w-10">
				{
					keys.slice(20, 26).map((item, index) => (
						<Key letter={item} key={index}/>
					))
				}
			</div>
		</div>
	);
}

export default Keyboard;