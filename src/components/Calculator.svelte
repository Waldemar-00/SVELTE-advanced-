<script>
	// @ts-nocheck

	let a = 1;
	let b = 2;
	import { counter } from '$lib/index';
	import { object } from '$lib/index';
</script>

<label for="inputCalc">
	<input id="inputCalc" type="number" bind:value={a} min="0" max="10" />
	<input id="inputCalc" type="range" bind:value={a} min="0" max="10" />
</label>
<label for="inputCalc2">
	<input id="inputCalc2" type="number" bind:value={b} min="0" max="10" />
	<input id="inputCalc2" type="range" bind:value={b} min="0" max="10" />
</label>
<div>{a} + {b} = {a + b}</div>
<button on:click={() => counter.update((n) => n + 1)}>Increment</button>
<button on:click={() => counter.set(100)}>Set</button>
<button on:click={() => counter.update((n) => n - 1)}>Decrement</button>
<hr />
<button on:click={() => object.update((obj) => (obj = { ...obj, name: 'Sofia' }))}
	>Change name</button
>

<style>
	div {
		margin: 1rem 2rem;
	}
	label {
		margin: 2rem;
	}
	input {
		margin-right: 0.7rem;
	}
</style>
