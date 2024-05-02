<script>
	import { counter } from '$lib/store';
</script>

<button on:click={() => counter.set(0)}> Reset </button>
