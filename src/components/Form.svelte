<script>
	// @ts-nocheck

	let recivedInputValue = '';
	function submitDataHandler() {
		console.log(recivedInputValue);
	}
	function changeValueHandler(e) {
		recivedInputValue = e.target.value;
		console.log(recivedInputValue);
	}
</script>

<!-- <form on:submit|preventDefault|once={submitDataHandler}> -->
<h2>Form</h2>
<form on:submit={submitDataHandler}>
	<label for="name">Name</label>
	<input
		type="text"
		name="name"
		id="name"
		value={recivedInputValue}
		on:input={changeValueHandler}
		placeholder="Write your name"
	/>
	<button>Submit</button>
</form>

<style>
	:global(h2) {
		color: green;
	}
	form {
		margin: 2rem 1rem;
	}
</style>
