<script>
	// @ts-nocheck

	let value = '';
	$: error = isValid(value);
	function isValid(value) {
		return value.length > 0 && value.length < 4;
	}
</script>

<h1>If statement</h1>
<hr />
<div>
	<input type="text" bind:value class:red={error} class:green={!error} />
	{#if value.length > 0 && value.length < 4}
		<p>Your name is too short! Need more than 3 characters.</p>
	{:else if value.length > 4}
		<p>Well done!</p>
	{:else}
		<p>Write Your name!</p>
	{/if}
</div>

<style>
	div {
		margin: 3rem 0;
	}
	input {
		outline: none;
		padding: 0.5rem 1rem;
	}
	.red {
		border: 2px solid red;
	}
	.green {
		border: 2px solid grey;
	}
</style>
