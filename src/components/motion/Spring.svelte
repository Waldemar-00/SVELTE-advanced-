<script>
	// @ts-nocheck

	import { spring } from 'svelte/motion';
	let coords = spring({ x: 50, y: 50 }, { stiffness: 0.1, damping: 1 });
	let r = spring(10);
</script>

<h2>Circle</h2>

<svg
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => r.set(30)}
	on:mouseup={() => r.set(10)}
	on:contextmenu|preventDefault={() => coords.set({ x: 50, y: 50 }, { hard: true })}
	role="presentation"
>
	<circle cx={$coords.x} cy={$coords.y} r={$r} stroke="red" fill="orange" />
</svg>
<div class="controls">
	<label for="stiffness">stiffness</label>
	<input
		type="range"
		id="stiffness"
		name="stiffness"
		min="0.1"
		max="1"
		step="0.1"
		bind:value={coords.stiffness}
	/>
	<label for="damping">damping</label>
	<input
		type="range"
		id="damping"
		name="damping"
		min="0.1"
		max="1"
		step="0.1"
		bind:value={coords.damping}
	/>
</div>

<style>
	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	circle {
		fill: coral;
		stroke: crimson;
	}
	.controls {
		display: flex;
		flex-flow: column;
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
	.controls input {
		margin-bottom: 1rem;
	}
</style>
