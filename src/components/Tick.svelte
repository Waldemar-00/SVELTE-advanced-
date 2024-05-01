<script>
	// @ts-nocheck

	import { tick } from 'svelte';

	let text = 'Select some text and hit the tab key to toggle uppercase';
	async function textUppercaseHandleTab(e) {
		if (e.key !== 'Tab') return;
		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);
		const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection;
		text = value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);
		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>

<h1>Tick</h1>
<hr />
<textarea name="text" bind:value={text} on:keydown|preventDefault={textUppercaseHandleTab}
></textarea>

<style>
	textarea {
		width: 40vw;
		height: 10vh;
		margin-top: 1rem;
	}
</style>
