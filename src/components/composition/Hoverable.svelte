<script>
	// @ts-nocheck

	let hovered;
	let props = 'Props!';
	function toggleHoverHandler() {
		hovered = hovered ? false : true;
	}
</script>

<article on:mouseenter={toggleHoverHandler} on:mouseleave={toggleHoverHandler}>
	<slot {hovered} {props} />
</article>

<style>
	article {
		border: 4px solid green;
		padding: 0.5em;
		background-color: goldenrod;
	}
</style>
