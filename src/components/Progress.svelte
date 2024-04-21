<script>
	// @ts-nocheck
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	let progress = writable(0);
</script>

<progress value={$progress}></progress>
<button on:click={() => progress.set(0.25)}> Set progress </button>

<style>
	progress {
		width: 50%;
		display: block;
		height: 2rem;
		margin: 2rem auto;
	}
	button {
		display: block;
		margin: 2rem auto;
	}
</style>
