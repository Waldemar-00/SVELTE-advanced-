<script>
	function getMessageHandler() {
		alert('Modifiers - once');
	}
</script>

<div>
	<h3>Wrapper</h3>
	<button on:click|once={getMessageHandler}>Modifiers</button>
</div>

<style>
	div {
		border: 7px solid red;
		width: 700px;
		height: 200px;
	}
</style>
