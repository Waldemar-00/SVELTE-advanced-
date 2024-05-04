<script>
	// @ts-nocheck

	let li;
	let active = false;
	let passive = true;
	let isOpen = false;
	function addLiHandler() {
		li = '<li>InnerHTML</li><li>InnerHTML</li><li>InnerHTML</li><li>InnerHTML</li>';
		isOpen = !isOpen;
	}
	function toggleClassesHandler() {
		active = !active;
		passive = !passive;
	}
</script>

<ul class:active class:passive contenteditable="true" bind:textContent={li} />
<ul contenteditable="true" bind:innerHTML={li} />
<ul class:active class:passive contenteditable="true" bind:innerText={li} />
<button on:click={addLiHandler}>Add li with textContent, innerHTML, innerText </button>
<hr />
<details bind:open={isOpen}>
	<summary>details</summary>
	<summary>details</summary>
	<summary>details</summary>
	<summary>details</summary>
	<p>Something small enough to escape casual notice.</p>
</details>
<button on:click={toggleClassesHandler}>Toggle acive and passive</button>

<style>
	.active {
		color: red;
	}
	.passive {
		color: green;
	}
</style>
