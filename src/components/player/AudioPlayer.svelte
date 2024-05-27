<script context="module">
	import Button from './Button.svelte';
	/**
	 * @type {EventTarget & HTMLAudioElement}
	 */

	let current;
	export function stopMusic() {
		current?.pause();
	}
</script>

<script>
	import { tracks } from './tracks';
</script>

<section>
	<main>
		{#each tracks as { src, title, artist }, index (index)}
			<audio
				{src}
				controls
				loop
				on:play={(e) => {
					const audio = e.currentTarget;
					if (audio !== current) {
						current?.pause();
						current = audio;
					}
				}}
			></audio>
			<div><span>{title}</span> / <span>{artist}</span></div>
		{/each}
	</main>
	<Button />
</section>

<style>
	section {
		width: 90vmin;
		height: 50vmin;
		margin: calc(1.5rem + 5vmin) auto;
	}
	main {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-auto-rows: 1fr;
		align-items: center;
		gap: 1.5rem;
	}
</style>
