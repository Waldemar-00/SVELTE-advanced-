<script>
	let a = 1;
	let b = 2;
</script>

<label for="inputCalc">
	<input id="inputCalc" type="number" bind:value={a} min="0" max="10" />
	<input id="inputCalc" type="range" bind:value={a} min="0" max="10" />
</label>
<label for="inputCalc2">
	<input id="inputCalc2" type="number" bind:value={b} min="0" max="10" />
	<input id="inputCalc2" type="range" bind:value={b} min="0" max="10" />
</label>
<div>{a} + {b} = {a + b}</div>

<style>
	div {
		margin: 1rem 2rem;
	}
	label {
		margin: 2rem;
	}
	input {
		margin-right: 0.7rem;
	}
</style>
