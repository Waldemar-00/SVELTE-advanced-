<script>
	// @ts-nocheck

	import { getContext } from 'svelte';

	const fn = getContext('context').alertContext;
	let count = getContext('count').count;
</script>

<section>
	<slot name="article" />
</section>
<button on:click={fn}>Get context</button>
<h2>{$count}</h2>

<style>
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
	h2 {
		width: 40vmin;
		margin: 0 auto;
		text-align: center;
	}
</style>
