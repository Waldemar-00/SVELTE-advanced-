<script>
	// @ts-nocheck

	let files;
</script>

<div>
	<label>
		<input type="file" name="avatar" bind:files accept=".png, .jpeg" />
	</label>
	<label>
		<input type="file" bind:files accept="image/*" multiple />
	</label>
</div>
{#if files}
	{#each files as file, index (index)}
		<ol>
			<li>{file.name}</li>
			<li>{file.type}</li>
			<li>{file.size}</li>
		</ol>
	{:else}
		<p>Files didn't upload!</p>
	{/each}
{:else}
	<p>Select a single file or multiple files to begin with.</p>
{/if}
