import './css/App.css';
import Table from './components/Table.jsx';
import Logo from './images/logo_small.png';
//import Keyboard from './components/Keyboard.jsx';

function App() {
	return (
		<div className="text-center">
			<header className="border-b">
				<div className="flex justify-between py-2">
					<button>Info</button>
					<img src={Logo} alt="logo" width="190"/>
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
