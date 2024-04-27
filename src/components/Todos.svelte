<script>
	// @ts-nocheck

	let todos = [
		{ done: false, text: 'Finish Svelte tutorial' },
		{ done: false, text: 'Build an app' },
		{ done: false, text: 'World domination' }
	];
	function addTodoHandler() {
		todos = [...todos, { done: false, tetx: '' }];
	}
	function clearDoneTodosHandler() {
		todos = todos.filter((t) => !t.done);
	}
</script>

<h2>Your Todos</h2>
<section>
	{#each todos as todo, index (index)}
		<div>
			<input type="checkbox" bind:checked={todo.done} />
			<input type="text" bind:value={todo.text} placeholder="What needs to be done?" />
		</div>
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
