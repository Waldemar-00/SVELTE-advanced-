<script>
	import Box from './Box.svelte';
	let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'gray'];
</script>

<section>
	{#each colors as co}
		<Box --color={co} />
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5em;
	}
</style>
