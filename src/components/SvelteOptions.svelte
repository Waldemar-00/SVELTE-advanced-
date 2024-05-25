<script>
	// @ts-nocheck
	import Todo from './Todo.svelte';
	import { v4 } from 'uuid';

	let todos = [
		{ done: false, text: 'Ainish Svelte tutorial', id: v4() },
		{ done: false, text: 'Build an app', id: v4() },
		{ done: false, text: 'Corld domination', id: v4() }
	];
	function toggleCheckbox(id) {
		todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
	}
</script>

<div>
	<h1>TODO</h1>
	<ul>
		{#each todos as todo (todo.id)}
			<Todo {todo} on:change={() => toggleCheckbox(todo.id)} />
		{/each}
	</ul>
</div>

<style>
	div {
		width: 70vmin;
		height: 40vmin;
		margin: 3rem auto;
	}
	ul {
		list-style: none;
	}
</style>
