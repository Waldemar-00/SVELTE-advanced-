<script>
	import { counter } from '$lib/store';
</script>

<button on:click={() => counter.update((c) => c - 1)}>Decrement</button>
