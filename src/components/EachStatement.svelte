<script>
	// @ts-nocheck

	export let persons = [];
	let number = 0;
	let value = '';
	function addPersonHandler() {
		persons = [...persons, { name: value, age: number, id: Math.random().toFixed(4) }];
	}
	function deleteLastPersonHandler() {
		persons.pop();
		persons = persons;
	}
	function deleteFirstPersonHandler() {
		persons = persons.slice(1);
	}
</script>

<form on:submit={addPersonHandler}>
	<input type="text" bind:value placeholder="name" />
	<input type="number" bind:value={number} />
	<button>Add person</button>
</form>
<button on:click={deleteLastPersonHandler}>Remove last person</button>
<button on:click={deleteFirstPersonHandler}>Remove first person</button>
<hr />
{#each persons as { name, age, id } (id)}
	<ul>
		<li><b>{name}</b></li>
		{#if age > 18}
			<li>Welcom to our resours!</li>
		{:else}
			<li class="denied">You have been denied! Sorry...</li>
		{/if}
	</ul>
{:else}
	<p>No people at all!</p>
{/each}

<style>
	ul {
		list-style: none;
		border-bottom: 2px solid grey;
		width: fit-content;
	}
	.denied {
		color: red;
	}
</style>
