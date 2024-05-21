<script>
	// @ts-nocheck

	let scrY = 0;
	let scrX = 0;
	let innerWidth = 0;
	let innerHeight = 0;
	let outerWidth = 0;
	let outerHeight = 0;
	let windowNavigatorOnline = 0;
</script>

<div>
	<h2>scrY: {scrY}</h2>
	<h2>scrX: {scrX}</h2>
	<h2>innerWidth: {innerWidth}</h2>
	<h2>innerHeight: {innerHeight}</h2>
	<h2>outerWidth: {outerWidth}</h2>
	<h2>outerHeight: {outerHeight}</h2>
	<h2>windowNavigatorOnline: {windowNavigatorOnline}</h2>
</div>
<svelte:window
	bind:scrollX={scrX}
	bind:scrollY={scrY}
	bind:innerHeight
	bind:innerWidth
	bind:outerHeight
	bind:outerWidth
	bind:online={windowNavigatorOnline}
/>

<style>
	* {
		margin: 0;
	}
	div {
		width: 150vw;
		color: white;
		background: url('https://img2.akspic.ru/crops/3/3/9/1/11933/11933-krug-abstraktnoe_iskusstvo-noch-graficeskij_dizajn-illustracia-1920x1080.jpg');
		background-size: cover;
		height: 150vh;
	}
	h2 {
		position: relative;
		top: 550px;
		left: 2rem;
	}
</style>
