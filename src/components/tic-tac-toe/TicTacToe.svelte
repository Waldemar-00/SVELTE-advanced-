<script>
	// @ts-nocheck

	import Board from './Board.svelte';
	import { utils } from './utils';
	import { writable } from 'svelte/store';
	let win = writable(utils.win);
	let sqrs = new Array(9).fill('');
</script>

<h1>{$win}</h1>
<Board>
	<svelte:fragment slot="btn">
		{#each sqrs as sq, index (index)}
			<button
				on:click={() => {
					sqrs = utils.step(sqrs, index);
					win.set(utils.getWin());
				}}>{sq}</button
			>
		{/each}
	</svelte:fragment>
	<button
		slot="reset"
		class="reset"
		on:click={() => {
			sqrs = new Array(9).fill('');
			win.set('New Game');
			utils.reset();
		}}>Reset</button
	>
</Board>

<style>
	h1 {
		width: 70vmin;
		text-align: center;
		margin: 2rem auto;
		color: rgb(211, 9, 211);
		font-size: calc(1.2rem + 2vmin);
	}
	button {
		background-color: #fff;
		border: none;
		font-size: calc(1.2rem + 2vmin);
		color: rgb(83, 1, 83);
	}
	.reset {
		display: block;
		margin: 0.5rem auto;
		padding: calc(0.3rem + 0.5vmin) 1rem;
		background-color: red;
		color: #fff;
		border-radius: 0.5rem;
		font-size: calc(1rem + 1vmin);
	}
</style>
