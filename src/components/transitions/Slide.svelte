<script>
	import { slide, fade } from 'svelte/transition';
	let show = true;
	const items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	let i = 3;
</script>

<label for="show">show</label>
<input type="checkbox" id="show" name="show" bind:checked={show} />
<label for="range">range</label>
<input type="range" id="range" name="range" bind:value={i} min="1" step="1" max={items.length} />
{#if show}
	<!-- <div in:fade out:fade class="itemBlock"> -->
	{#each items.slice(0, i) as item, index (index)}
		<div transition:slide|global class="item">{item}</div>
	{/each}
	<!-- </div> -->
{/if}

<style>
	/* .itemBlock {
		margin: 1rem;
	} */
	[type='range'] {
		margin-bottom: 2rem;
	}
	.item {
		border-top: 1px solid grey;
		width: 20vw;
		padding: 0.5rem;
	}
</style>
