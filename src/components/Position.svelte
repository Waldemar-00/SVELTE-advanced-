<script>
	// @ts-nocheck

	let positions = {
		x: 0,
		y: 0
	};
	function changePosition(e) {
		positions.x = e.clientX.toFixed();
		positions.y = e.clientY.toFixed();
	}
</script>

<h2>Position</h2>
<div on:pointermove={(e) => changePosition(e)}></div>
<span>position X = {positions.x} position Y = {positions.y}</span>

<style>
	div {
		width: 40vw;
		height: 35vh;
		border: 2px solid green;
		margin-bottom: 1rem;
	}
</style>
