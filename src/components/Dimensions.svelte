<script>
	// @ts-nocheck
	let w;
	let h;
	let size = 42;
	let text = 'edit me';
</script>

<input type="range" bind:value={size} />
<input type="text" bind:value={text} />

<div bind:clientHeight={h} bind:clientWidth={w}>
	<span style="font-size:{size}px; color: {text}">{text}</span>
</div>

<style>
	div {
		display: inline-block;
		color: #666;
	}
	input {
		display: block;
		margin: 1rem 0;
	}
</style>
