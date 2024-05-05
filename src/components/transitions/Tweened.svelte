<script>
	// @ts-nocheck

	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { interpolateLab } from 'd3-interpolate';
	const transition = tweened(0, {
		duration: 1000,
		easing: cubicInOut,
		delay: 300
	});
	const colors = ['red', 'green', 'blue', 'brown', 'orange'];
	const toggleColors = tweened(colors[0], {
		duration: 1000,
		interpolate: interpolateLab,
		delay: 2000
	});
	let count = 0;
	let color = 0;
</script>

<h2 style="color: {$toggleColors}">Color will toggle when will change progress</h2>
<progress value={$transition} />
<button
	on:click={() => {
		if (count === 1) {
			count = 0;
			color = 0;
			toggleColors.set(colors[color]);
			transition.set(count);
			return;
		}
		count += 0.25;
		color += 1;
		toggleColors.set(colors[+color]);
		transition.set(count);
	}}>Progress: {count}</button
>

<style>
	progress {
		width: 40vw;
		display: block;
		margin: 3rem auto;
	}
	button {
		display: block;
		margin: 3rem auto;
	}
</style>
