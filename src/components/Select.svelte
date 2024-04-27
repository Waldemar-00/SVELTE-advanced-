<script>
	// @ts-nocheck

	let options = [
		{ question: 'What is your name?', qst: 'Name: ' },
		{ question: 'What is your sourname?', qst: 'Sourname: ' },
		{ question: 'How old are you?', qst: 'Age: ' }
	];
	let answ;
	let selected = [];
	let answers = [];
	let disabled = true;
	$: {
		console.log(selected);
		console.log(answers);
	}
	function addedAnswerHandler() {
		answers = [...answers, { answ, qst: selected }];
		disabled = false;
	}
</script>

<form on:submit|preventDefault={addedAnswerHandler}>
	<select
		name="selectedQuestions"
		multiple
		bind:value={selected}
		on:change={() => (disabled = true)}
	>
		{#each options as option, index (index)}
			<option value={option.qst}>{option.question}</option>
		{:else}
			<p>No options!</p>
		{/each}
	</select>
	<hr />
	<input type="text" bind:value={answ} />
	<button disabled={!(answ && selected.length > 0 && disabled)}>Add answer</button>
</form>

<ul>
	{#each answers as { answ, qst }, index (index)}
		<li>{qst}{answ}</li>
	{:else}
		'Your answers will be here'
	{/each}
</ul>
