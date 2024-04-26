<script>
	// @ts-nocheck

	let options = [
		{ question: 'What is your name?', qst: 'Name: ' },
		{ question: 'What is your sourname?', qst: 'Sourname: ' },
		{ question: 'How old are you?', qst: 'Age: ' }
	];
	let answ;
	let selected;
	let answers = [];
	$: {
		console.log(answers);
	}
	function addedAnswerHandler() {
		answers = [...answers, { answ, qst: selected.qst }];
	}
</script>

<form on:submit|preventDefault={addedAnswerHandler}>
	<select name="" id="" bind:value={selected}>
		{#each options as option, index (index)}
			<option value={option}>{option.question}</option>
		{:else}
			<p>No options!</p>
		{/each}
	</select>
	<hr />
	<input type="text" bind:value={answ} />
	<button disabled={!answ}>Add answer</button>
</form>

<ul>
	{#each answers as { answ, qst }, index (index)}
		<li>{qst}{answ}</li>
	{:else}
		'Your answers will be here'
	{/each}
</ul>
