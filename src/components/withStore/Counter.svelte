<script>
	// @ts-nocheck

	import Increment from './Increment.svelte';
	import Decrement from './Decrement.svelte';
	import Reset from './Reset.svelte';
	import { onDestroy } from 'svelte';
	import { counter } from '$lib/store';
	import { number } from '$lib/store';
	import { derivedStore } from '$lib/store';
	$: {
		console.log(derivedStore);
	}
	let changedCounter;
	const unsubscribe = counter.subscribe((c) => {
		changedCounter = c * 2;
	});
	onDestroy(unsubscribe);
</script>

<!-- <h1>{$counter}</h1> -->
<h3>{changedCounter}</h3>
<h3>{$number}</h3>
<h2>{$derivedStore}</h2>
<Increment />
<Decrement />
<Reset />
