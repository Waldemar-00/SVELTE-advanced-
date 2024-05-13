<script>
	// @ts-nocheck

	import { flip } from 'svelte/animate';
	import { crossfade, slide } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { v4 } from 'uuid';
	const [send, recieve] = crossfade({ duration: 1000, delay: 200 });
	let text = '';
	let todos = [
		{ do: 'Do the dishes', id: v4(), done: true },
		{ do: 'Do the chores', id: v4(), done: false },
		{ do: 'Make the bed', id: v4(), done: true },
		{ do: 'Make the bed and do your homework', id: v4(), done: true },
		{ do: 'Iron all clothes', id: v4(), done: false }
	];
	function enter(e) {
		if (e.key === 'Enter') {
			todos = [...todos, { do: text, id: v4(), done: false }];
		}
	}
	function checked(id) {
		const dial = todos.filter((t) => t.id === id);
		const newTodos = todos.filter((t) => t.id !== id);
		dial[0].done = !dial[0].done;
		todos = [...newTodos, ...dial];
	}
	function deleteNote(id) {
		const filteredTodos = todos.filter((t) => t.id !== id);
		todos = [...filteredTodos];
	}
</script>

<label for="enter">
	<input
		type="text"
		id="enter"
		name="enter"
		bind:value={text}
		on:keydown={enter}
		placeholder="what need to be done?"
	/>
</label>

<section>
	<div>
		<h2>TODO</h2>
		{#each todos.filter((t) => !t.done) as t (t.id)}
			<label
				in:recieve={{ key: t.id }}
				out:send={{ key: t.id }}
				animate:flip={{ delay: 850, duration: 1050, easing: backOut }}
				class="todo"
			>
				<input type="checkbox" on:click={() => checked(t.id)} transition:slide />
				{t.do}
				<button on:click={() => deleteNote(t.id)} aria-label="Remove"></button>
			</label>
		{/each}
	</div>
	<div>
		<h2>DONE</h2>
		{#each todos.filter((t) => t.done) as t (t.id)}
			<label
				in:recieve={{ key: t.id }}
				out:send={{ key: t.id }}
				animate:flip={{ delay: 850, duration: 1050, easing: backOut }}
				class="done"
			>
				<input
					type="checkbox"
					bind:checked={t.done}
					on:click={() => checked(t.id)}
					transition:slide
				/>
				{t.do}
				<button on:click={() => deleteNote(t.id)} aria-label="Remove"></button>
			</label>
		{/each}
	</div>
</section>

<style>
	#enter {
		display: block;
		margin: 0 auto;
		width: 50vmin;
		text-align: center;
		border: none;
		padding: 0.5rem;
	}
	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		max-width: 100vmin;
		margin: 0 auto;
	}
	section div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 0.5rem;
	}
	label {
		position: relative;
		user-select: none;
		display: flex;
		gap: 0.5rem;
		padding: 1rem;
		border: 1 solid grey;
		background-color: rgb(225, 225, 225);
		padding-right: 3rem;
	}
	button {
		flex-grow: 4;
		opacity: 0;
		position: absolute;
		top: center;
		right: 0.9rem;
		width: 1rem;
		height: 1rem;
		border: none;
		padding: 0.6rem;
		background-size: 1.4rem 1.4rem;
		background: no-repeat 50% 50%
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		transition: opacity 0.3s;
	}
	label:hover button {
		cursor: pointer;
		opacity: 1;
	}
	[type='checkbox']:checked {
		accent-color: black;
	}
	.done {
		background-color: #eee;
	}
</style>
