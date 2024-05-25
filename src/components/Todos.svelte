<script>
	// @ts-nocheck
	import { v4 } from 'uuid';
	import flash from '$lib/flash.js';
	import { afterUpdate } from 'svelte';

	let todos = [
		{ done: false, text: 'Finish Svelte tutorial', id: v4() },
		{ done: false, text: 'Build an app', id: v4() },
		{ done: false, text: 'World domination', id: v4() }
	];
	function addTodoHandler() {
		todos = [...todos, { done: false, tetx: '' }];
	}
	function clearDoneTodosHandler() {
		todos = todos.filter((t) => !t.done);
	}
	function toggleChecked(id) {
		todos.forEach((t) => {
			if (t.id === id) {
				return {
					done: (t.done = !t.done),
					text: t.text,
					id: t.id
				};
			}
			return t;
		});
	}
	let element;
	afterUpdate(() => {
		flash(element);
	});
</script>

<h2>Your Todos</h2>
<section bind:this={element}>
	{#each todos as { done, text, id } (id)}
		<label>
			<input type="checkbox" checked={done} on:change={() => toggleChecked(id)} />
			<input type="text" bind:value={text} placeholder="What needs to be done?" />
		</label>
	{:else}
		<p>Your not have any todo!</p>
	{/each}
</section>
<div class="btnBlock">
	<button on:click={addTodoHandler}>Add new</button>
	<button on:click={clearDoneTodosHandler}>Clear done todos</button>
</div>

<style>
	section {
		display: inline-flex;
		flex-direction: column;
		gap: 1rem;
	}
	.btnBlock {
		display: inline-flex;
		flex-direction: column;
		gap: 1rem;
		margin-left: 2rem;
	}
</style>
