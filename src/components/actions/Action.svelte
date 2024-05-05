<script>
	// @ts-nocheck
	let success = false;
	function submitHandle(e) {
		const formData = new FormData(e.target);
		console.log(formData);
		e.target.remove();
	}
	function formAction(node, success) {
		node.addEventListener('submit', submitHandle);
		return {
			update() {
				console.log(success);
			},
			destroy() {
				console.log('destroy');
				node.removeEventListener('submit', submitHandle);
			}
		};
	}
</script>

<h2>Action</h2>
{#if success}
	<h2>{success}</h2>
{/if}
<form action="#" use:formAction={success}>
	<label for="name"></label>
	<input id="name" type="text" name="name" placeholder="name" />
	<label for="email"></label>
	<input id="email" type="email" name="email" placeholder="e-mail" />
	<label for="pass"></label>
	<input
		id="pass"
		type="password"
		name="password"
		placeholder="password"
		current-password="1234567890"
		autocomplete="on"
	/>
	<button>Log in</button>
</form>
<button on:click={() => (success = !success)}>Toggle success</button>

<style>
	form {
		display: flex;
		flex-flow: column;
		gap: 1rem;
		width: 40vw;
		margin: 4rem auto;
	}
	button {
		align-self: center;
		margin-top: 1rem;
		width: 20vw;
	}
</style>
