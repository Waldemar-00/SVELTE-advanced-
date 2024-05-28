<script>
	let user = {
		firstname: '',
		lastname: ''
	};
</script>

<main>
	<label>
		<input bind:value={user.firstname} placeholder="first name" />
	</label>

	<label>
		<input bind:value={user.lastname} placeholder="last name" />
	</label>

	{(console.log(user), '')}
	{@debug user}
	<h1>Hello {user.firstname} {user.lastname}!</h1>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 70vmin;
		margin: 3rem auto;
	}
	input {
		padding: 0.5rem;
		font-size: 1.2rem;
		outline-color: grey;
	}
</style>
