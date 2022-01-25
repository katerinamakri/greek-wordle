import './css/App.css';
import Table from './components/Table.jsx';
import Logo from './images/logo_small.png';
import Keyboard from './components/Keyboard.jsx';

function App() {
	return (
		<div className="text-center background h-screen">
			<header>
				<div className="flex justify-between py-2 px-2">
					<img src={Logo} alt="logo" width="150"/>
					<div className="flex justify-between">
						<button className="mr-3 info-button px-2">
							<i className="fas fa-info"></i>
						</button>
						<button className="chart-button mt-1">
							<i className="fas fa-chart-line"></i>
						</button>
					</div>
				</div>
			</header>

			<main className="container mx-auto">
				<Table/>
				<Keyboard/>
			</main>

			<footer>
				<p>Copyright 2022</p>
			</footer>
		</div>
	);
}

export default App;
