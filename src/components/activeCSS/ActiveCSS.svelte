<script>
	import Wrapper from '../../components/Wrapper.svelte';
	import AddresTemplate from '../../components/AddresTemplate.svelte';
	let active = false;
	let big = false;
	function toggleActiveHandler() {
		active = !active;
	}
	function toggleBigHandler() {
		big = !big;
	}
</script>

<div class="block">
	<Wrapper>
		<h2 class:active class:big>Class Active</h2>
		<hr />
		<button on:click={toggleActiveHandler}>Toggle color H2</button>
		<button on:click={toggleBigHandler}>Toggle size H2</button>
	</Wrapper>
	<Wrapper>
		<h2>Wrapper 2</h2>
	</Wrapper>
	<AddresTemplate>
		<span class="name" slot="name">P. Sherman</span>
		<span class="addres" slot="addres">42 Wallaby Way Sydney</span>
		<span class="email" slot="email">psherman@outlook.com</span>
	</AddresTemplate>
</div>

<style>
	.block {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.name {
		color: rgb(255, 69, 0);
	}
	.addres {
		color: orange;
	}
	.email {
		color: purple;
	}
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
