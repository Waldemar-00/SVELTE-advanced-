<script>
	// @ts-nocheck
	import { createEventDispatcher } from 'svelte';
	let dispatch = createEventDispatcher();
	let btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'submit'];
	let pin = '';
	let msg = 'Enter your password below';
	function createPasswordHandler(value) {
		pin += value;
	}
	function createNewEventHandler() {
		dispatch('sbm', {
			pin: pin
		});
	}
	function clearPinHandler() {
		pin = '';
	}
</script>

<h1>{pin ? pin : msg}</h1>
<div>
	{#each btns as value, index (index)}
		<button
			disabled={typeof value === 'number'
				? false
				: value === 'clear' && pin
					? false
					: value === 'submit' && pin.length > 7
						? false
						: true}
			on:click={() => {
				if (typeof value !== 'string') {
					createPasswordHandler(value);
				} else if (value === 'submit') {
					createNewEventHandler();
				} else if (value === 'clear') {
					clearPinHandler();
				}
			}}>{value}</button
		>
	{:else}
		<p>Something is broken...</p>
	{/each}
</div>

<style>
	h1 {
		font-size: 1rem;
		margin: 3rem 0 1rem 2rem;
	}
	div {
		display: grid;
		grid-template-columns: repeat(3, 4rem);
		grid-template-rows: repeat(4, 2.4rem);
		gap: 0.4rem;
		padding: 1rem;
		border: 2px solid black;
		width: fit-content;
		margin-left: 2rem;
	}
</style>
