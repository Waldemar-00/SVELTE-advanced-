<script>
	let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'grey'];
</script>

<ul>
	{#each colors as co, i (i)}
		<slot {co} />
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		list-style: none;
		margin: 5rem auto;
	}
</style>
