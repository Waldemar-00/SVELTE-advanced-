<script>
	// @ts-nocheck
	let visible = true;
	function fade(node, { delay, duration }) {
		const op = +getComputedStyle(node).opacity;
		return {
			delay,
			duration,
			css: (t) => `opacity: ${t * op}`
		};
	}
</script>

<hr />
<div>
	<label for="check">check fade</label>
	<input type="checkbox" id="check" name="check" bind:checked={visible} />
</div>
{#if visible}
	<h2 out:fade={{ delay: 300, duration: 1000 }} in:fade={{ delay: 200, duration: 500 }}>
		Custom Fade
	</h2>
{/if}

<style>
	h2 {
		color: hsl(0, 59%, 41%);
	}
</style>
