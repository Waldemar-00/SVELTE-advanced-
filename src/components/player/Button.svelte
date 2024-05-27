<script>
	import { stopMusic } from './AudioPlayer.svelte';
</script>

<button on:click={stopMusic}> Stop Music </button>

<style>
	button {
		display: block;
		width: 50vmin;
		padding: calc(0.5em + 1vmin);
		margin: calc(1rem + 5vmin) auto;
		cursor: pointer;
	}
</style>
