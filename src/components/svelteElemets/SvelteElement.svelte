<script>
	// @ts-nocheck

	let options = [
		{ text: 'TEXT_1', element: 'h1', class: 'red' },
		{ text: 'TEXT_2', element: 'h2', class: 'chocolate' },
		{ text: 'TEXT_3', element: 'section', class: 'darkslateblue' },
		{ text: 'TEXT_4', element: 'p', class: 'brown' },
		{ text: 'TEXT_5', element: 'button', class: 'green' }
	];
	let selected = options[0].element;
	let selectedText = '';
	let themes = ['dark', 'light', 'grey'];
	let selectedTheme = themes[1];
</script>

<svelte:head>
	<link rel="stylesheet" href="./styles/{selectedTheme}.css" type="text/css" />
</svelte:head>
{#each options as option}
	<svelte:element this={option.element}>{option.text}</svelte:element>
{/each}
<hr />
<select bind:value={selected}>
	{#each options as option}
		<option value={option.element}>Tag: {option.element.toUpperCase()}</option>
	{/each}
</select>
{#if selected === 'button'}
	<svelte:element
		this={selected}
		on:click={() => alert('I am a button!')}
		role="button"
		tabindex="0">I am a {selected} element or tag</svelte:element
	>
{:else}
	<svelte:element this={selected}>I am a {selected} element or tag</svelte:element>
{/if}
<svelte:document on:selectionchange={() => (selectedText = document.getSelection())} />
<h2>{selectedText}</h2>
<hr />
<h2>Change Your theme!</h2>
<select bind:value={selectedTheme}>
	{#each themes as theme}
		<option value={theme}>{theme.toLocaleUpperCase()}</option>
	{/each}
</select>
