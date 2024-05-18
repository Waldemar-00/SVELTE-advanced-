<script>
	// @ts-nocheck
	let parting = true;
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
<slot name="article">
	<p>(article)</p>
</slot>
{#if parting && $$slots.parting}
	<slot name="parting" />
{:else}
	<p>Good bye</p>
{/if}
<button on:click={() => (parting = !parting)}>Toggle parting</button>

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
		margin: 1rem auto;
		width: 40vmin;
		height: 4vmin;
		padding: 0.4rem;
		background-color: darkorange;
		color: #fff;
		border-radius: 2vmin;
		border: none;
		box-shadow: 3px 3px 3px 0 rgb(255 140 0 / 0.7);
		cursor: pointer;
		margin-bottom: 0.7rem;
	}
	button:nth-child(2) {
		background-color: red;
		box-shadow: 3px 3px 3px 0 rgb(255 0 0 / 0.7);
	}
	p {
		margin: 2rem auto;
		color: red;
		width: 70vmin;
		text-align: center;
	}
</style>
