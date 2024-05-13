<script>
	import Wrapper from '../../components/Wrapper.svelte';
	let active = false;
	let big = false;
	function toggleActiveHandler() {
		active = !active;
	}
	function toggleBigHandler() {
		big = !big;
	}
</script>

<Wrapper>
	<h2 class:active class:big>Class Active</h2>
	<hr />
	<button on:click={toggleActiveHandler}>Toggle color H2</button>
	<button on:click={toggleBigHandler}>Toggle size H2</button>
</Wrapper>
<Wrapper></Wrapper>

<style>
	button {
		margin-right: 1rem;
	}
	.active {
		color: red;
	}
	.big {
		font-size: 5rem;
	}
</style>
