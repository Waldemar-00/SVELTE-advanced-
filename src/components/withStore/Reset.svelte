<script>
	import { counter } from '$lib/store';
	import { number } from '$lib/store';
</script>

<button
	on:click={() => {
		counter.set(0);
		number.set(1);
	}}
>
	Reset
</button>
