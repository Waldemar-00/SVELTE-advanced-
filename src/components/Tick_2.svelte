<script>
	// @ts-nocheck

	import { tick } from 'svelte';

	let count = 1;
	$: double = count * 2;
	let div;
	let text = 'TEXT';
	async function increment() {
		count++;
		console.log(double, 'Before await');
		await tick();
		console.log(double, 'After await');
	}
	async function addTextHandler() {
		count++;
		await tick();
		text = `${text} ${double}`;
		div.querySelectorAll('div').forEach((div) => (div.innerText = text));
	}
</script>

<h1>{double}</h1>
<button on:click={increment}>Increment</button>

<div class="wrapper" bind:this={div}>
	add here
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
<button on:click={addTextHandler}>Add text</button>

<style>
	.wrapper {
		background-color: grey;
		width: 40vw;
		height: fit-content;
		margin: 1rem 0;
		color: white;
	}
</style>
