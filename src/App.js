import './css/App.css';
import Table from './components/Table.jsx';
//import Keyboard from './components/Keyboard.jsx';

function App() {
	return (
		<div className="text-center">
			<header className="border-b">
				<div className="flex justify-between">
					<button>Info</button>
					<h1>Greek Wordle</h1>
					<button>Stats</button>
				</div>
			</header>
			<Table/>
			{/*<Keyboard/>*/}
		</div>
	);
}

export default App;
