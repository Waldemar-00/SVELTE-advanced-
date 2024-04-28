<script>
	// @ts-nocheck

	let controls = false;
	function toggleShowControls(bool) {
		controls = bool;
	}
</script>

<h2>Video</h2>

<video
	poster="https://sveltejs.github.io/assets/caminandes-llamigos.jpg"
	src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
	{controls}
	preload="metadata"
	width="720px"
	height="420px"
	muted
	on:mousemove={() => toggleShowControls(true)}
	on:mouseout={() => toggleShowControls(false)}
>
	Your browser does not support the video tag.
	<track kind="captions" />
</video>

<style>
	video {
		cursor: auto;
	}
</style>
