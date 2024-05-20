<script>
	// @ts-nocheck

	import First from './elements/First.svelte';
	import Second from './elements/Second.svelte';
	import Third from './elements/Third.svelte';
	import Fourth from './elements/Fourth.svelte';
	import Fifth from './elements/Fifth.svelte';

	let options = [
		{ text: 'TEXT_1', element: First, class: 'red' },
		{ text: 'TEXT_2', element: Second, class: 'chocolate' },
		{ text: 'TEXT_3', element: Third, class: 'darkslateblue' },
		{ text: 'TEXT_4', element: Fourth, class: 'brown' },
		{ text: 'TEXT_5', element: Fifth, class: 'green' }
	];
	let element = options[0];
</script>

<select bind:value={element}>
	{#each options as option}
		<option class={`${option.class} option`} value={option}>{option.text}</option>
	{/each}
</select>
<svelte:component this={element.element} />

<style>
	select {
		display: block;
		width: 40vmin;
		height: 5vmin;
		margin: 3rem auto;
		border-radius: 2vmin;
		border: 2px solid orange;
		padding: 0.5rem;
		outline-color: red;
	}
	.red {
		background-color: red;
	}
	.chocolate {
		background-color: chocolate;
	}
	.darkslateblue {
		background-color: darkslateblue;
	}
	.brown {
		background-color: brown;
	}
	.green {
		background-color: green;
	}
	.option {
		font-style: italic;
	}
</style>
