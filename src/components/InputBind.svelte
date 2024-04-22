<script>
	let name = 'Example';
	let agree = false;
	let text = 'Lorem ipsum';
	let option = '3';
	let sex = 'male';
</script>

<h2>{name}</h2>

<input type="text" bind:value={name} />
<hr />
<input type="checkbox" bind:checked={agree} />
{agree}
<hr />
<textarea bind:value={text}></textarea>
<p>{text}</p>
<hr />
<select name="option" id="option" bind:value={option}>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
</select>
<hr />
<input type="radio" value="Male" bind:group={sex} /> Male
<input type="radio" value="Female" bind:group={sex} /> Female
<div>Sex: {sex}</div>

<style>
	p {
		white-space: pre-wrap;
	}
</style>
