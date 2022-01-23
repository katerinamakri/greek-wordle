import '../css/Row.css'

function Row() {
	return(
		<ul id="game-board" class="deck">
			<li class="card">
				<i class="fa fa-paper-plane-o"></i>
			</li>
			<li class="card">
				<i class="fa fa-anchor"></i>
			</li>
			<li class="card">
				<i class="fa fa-diamond"></i>
			</li>
			<li class="card">
				<i class="fa fa-diamond"></i>
			</li>
			<li class="card">
				<i class="fa fa-diamond"></i>
			</li>
		</ul>
	);
}

export default Row;