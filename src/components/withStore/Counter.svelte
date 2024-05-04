<script>
	// @ts-nocheck

	import Increment from './Increment.svelte';
	import Decrement from './Decrement.svelte';
	import Reset from './Reset.svelte';
	import { onDestroy } from 'svelte';
	import { counter } from '$lib/store';
	import { number } from '$lib/store';
	import { derivedStore } from '$lib/store';
	import { customStore } from '$lib/store';
	$: {
		console.log(derivedStore);
	}
	let changedCounter;
	const unsubscribe = counter.subscribe((c) => {
		changedCounter = c * 2;
	});
	onDestroy(unsubscribe);
</script>

{@debug changedCounter, number, derivedStore}
<!-- <h1>{$counter}</h1> -->
{#if changedCounter > 40}
	{@const newCounter = changedCounter * 4}
	<h3>{newCounter}</h3>
{:else}
	<h3>{changedCounter}</h3>
{/if}
<h3>{$number}</h3>
<h2>{$derivedStore}</h2>
<Increment />
<Decrement />
<Reset />

{#key $customStore}
	<h1>{$customStore}</h1>
{/key}
<button on:click={customStore.increment}>Increment</button>
<button on:click={customStore.decrement}>Decrement</button>
<button on:click={customStore.reset}>Reset</button>

<style>
	h1 {
		animation: fadeIn 3s;
	}
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
