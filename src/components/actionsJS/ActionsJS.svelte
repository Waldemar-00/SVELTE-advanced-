<script>
	// @ts-nocheck
	function submit() {
		const formData = new FormData(this);
		console.log(formData);
	}
</script>

<h2>JS actions</h2>
<form action="" id="form" on:submit={submit}>
	<button>Submit</button>
</form>
<select name="option" id="seclect" form="form">
	<option>ONE OPTION</option>
	<option>TWO OPTION</option>
	<option>THREE OPTION</option>
	<option>FOUR OPTION</option>
	<option>FIVE OPTION</option>
	<option>SIX OPTION</option>
	<option>SEVEN OPTION</option>
</select>

<style>
	* {
		font-size: calc(112.5% + 0.25vw);
	}
	select {
		display: block;
		margin: 0 auto;
		width: 40vmin;
	}
	option {
		width: 40vmin;
		font-size: 1rem;
	}
</style>
