import '../css/Table.css';
import Row from './Row.jsx';

function Table() {
	return (
		<div className="flex justify-center mt-5">
			<div className="gaming-board">
				<Row/>
				<Row/>
				<Row/>
				<Row/>
				<Row/>
			</div>
		</div>
	)
}

export default Table;