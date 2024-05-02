<script>
	import { counter } from '$lib/store';
</script>

<button on:click={() => counter.update((c) => c + 1)}>Increment</button>

<style>
	:global(button) {
		display: block;
		margin: 0.7rem;
	}
</style>
