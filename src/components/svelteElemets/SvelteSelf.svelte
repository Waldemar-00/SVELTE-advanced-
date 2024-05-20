<script>
	let repeat = false;
	console.log(repeat);
</script>

<button on:click={() => (repeat = !repeat)}>Repeate Me!</button>
{#if repeat}
	<h2>Repeate Me!</h2>
	<svelte:self />
{/if}

<style>
	button {
		display: block;
	}
</style>
