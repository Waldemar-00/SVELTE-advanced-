<script>
	// @ts-nocheck

	import { spring } from 'svelte/motion';
	let coords = spring({ x: 50, y: 50 });
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

<style>
	svg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
