import '../css/Keyboard.css';
import Key from './Key.jsx';
import { keys } from '../data/keys.js';

function Keyboard() {

	return (
		<div className="flex justify-center mb-5">
			<div>
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
		</div>
	);
}

export default Keyboard;