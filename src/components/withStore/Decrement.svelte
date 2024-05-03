<script>
	import { counter } from '$lib/store';
	import { number } from '$lib/store';
</script>

<button
	on:click={() => {
		counter.update((c) => c - 1);
		number.update((n) => n / 2);
	}}>Decrement</button
>
