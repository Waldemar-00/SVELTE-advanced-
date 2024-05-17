<script>
	// @ts-nocheck

	let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'grey'];
	function filterColors(fn) {
		colors = [...colors.sort(fn)];
	}
	// function filterColorsBack() {
	// 	colors = [...colors.sort((a, b) => (a < b ? 1 : -1))];
	// }
</script>

<ul>
	{#each colors as co, i (i)}
		<slot {co} />
	{/each}
</ul>
<button on:click={() => filterColors((a, b) => (a < b ? -1 : 1))}>Filter forward</button>
<!-- <button on:click={filterColorsBack}>Filter back</button> -->
<button on:click={() => filterColors((a, b) => (a < b ? 1 : -1))}>Filter back</button>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		list-style: none;
		margin: 5rem auto;
	}
	button {
		display: block;
		margin: 0 auto;
		width: 40vmin;
		height: 4vmin;
		padding: 0.4rem;
		background-color: darkorange;
		color: #fff;
		border-radius: 2vmin;
		border: none;
		box-shadow: 3px 3px 3px 0 rgb(255, 198, 128);
		cursor: pointer;
		margin-bottom: 0.7rem;
	}
	button:nth-child(2) {
		background-color: red;
		box-shadow: 3px 3px 3px 0 red;
	}
</style>
