<svelte:options immutable={true} />

<!--defaut false-->

<script>
	// @ts-nocheck
	import { afterUpdate } from 'svelte';
	import { flash } from '$lib/flash.js';
	export let todo;

	let element;
	afterUpdate(() => {
		flash(element);
	});
</script>

<li bind:this={element}>
	<label>
		<input type="checkbox" checked={todo.done} on:change />
		{todo.text}
	</label>
</li>

<style>
	li {
		margin-bottom: 0.5rem;
	}
</style>
