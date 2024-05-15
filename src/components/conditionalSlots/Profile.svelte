<article>
	<div>
		{#each Object.entries($$slots) as slot, i}
			{#if i === 0}
				<div>{JSON.stringify($$slots)}</div>
			{/if}
		{/each}
	</div>
	{#if $$slots.name}
		<slot name="name" />
	{/if}
	{#if $$slots.phone}
		<slot name="phone" />
	{/if}
	{#if $$slots.email}
		<slot name="email" />
	{/if}
</article>

<style>
	article {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		margin-bottom: 2rem;
	}
	div {
		margin-bottom: 0.5rem;
	}
</style>
