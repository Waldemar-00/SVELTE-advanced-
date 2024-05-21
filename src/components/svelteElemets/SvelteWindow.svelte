<script>
	// @ts-nocheck

	let key = '';
	let keyCode = '';
	let color = '#EEEEEE';
	function getKey(e) {
		if (e.key === ' ') key = 'Space';
		else key = e.key;
		keyCode = e.keyCode;
		if (e.target === e.currentTarget && e.target === this) alert('YES');
		if (this !== e.target) color = color === '#EEEEEE' ? 'purple' : '#EEEEEE';
		console.log(color);
	}
</script>

<svelte:window on:keydown={getKey} on:click={getKey} />

{#if key}
	<div>
		<h2>{key}</h2>
	</div>
	<h3>{keyCode}</h3>
{/if}
<div class="btn" style:background-color={color}>
	<button on:click={getKey} tabindex="-1">Ckilc me!</button>
</div>

<style>
	div {
		padding: 1.5rem;
		width: fit-content;
		height: fit-content;
		background-color: #eee;
		border: 2px solid grey;
		margin: 3rem auto;
		text-align: center;
		vertical-align: middle;
		font-size: 4rem;
		border-radius: 50%;
	}
	h2,
	h3 {
		margin: 0;
	}
	h3 {
		width: fit-content;
		margin: 1rem auto;
		font-size: 1.5rem;
		text-align: center;
	}
	.btn {
		padding: 15rem;
	}
</style>
