<script>
	// @ts-nocheck
	import Hoverable from './Hoverable.svelte';
</script>

<Hoverable let:hovered={active} let:props>
	<div class:active>
		{#if active}
			<p class="paragraph">I am being hovered upon. {props} {active}</p>
		{:else}
			<p class="paragraph">Hover over me! {active}</p>
		{/if}
	</div>
</Hoverable>

<style>
	.active {
		background-color: red;
		color: white;
	}
	div {
		width: 60vmin;
		height: 20vmin;
		background-color: burlywood;
		text-align: center;
		margin: auto auto;
	}
	.paragraph {
		pointer-events: none;
		color: green;
		padding: 30px;
	}
	div.active p {
		color: white;
	}
</style>
