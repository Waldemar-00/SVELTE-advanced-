<script>
	// @ts-nocheck

	import Increment from './Increment.svelte';
	import Decrement from './Decrement.svelte';
	import Reset from './Reset.svelte';
	import { onDestroy } from 'svelte';
	import { counter } from '$lib/store';
	let changedCounter;
	const unsubscribe = counter.subscribe((c) => {
		changedCounter = c * 2;
	});
	onDestroy(unsubscribe);
</script>

<!-- <h1>{$counter}</h1> -->
<h1>{changedCounter}</h1>
<Increment />
<Decrement />
<Reset />
