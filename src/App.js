import './css/App.css';
import Table from './components/Table.jsx';
//import Keyboard from './components/Keyboard.jsx';

function App() {
	return (
		<div className="text-center">
			<header className="border-b">
				<div className="flex justify-between py-2">
					<button>Info</button>
					<h1 className="text-2xl">GREEK WORDLE</h1>
					<button>Stats</button>
				</div>
			</header>
			<Table/>
			{/*<Keyboard/>*/}
			<footer>
				<p>Copyright 2022</p>
			</footer>
		</div>
	);
}

export default App;
