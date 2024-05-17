<script>
	import DataUpSlots from './DataUpSlots.svelte';
</script>

<DataUpSlots let:co={color}>
	<li style:color style:border-color={color}>{color}</li>
</DataUpSlots>

<style>
	li {
		width: 40vmin;
		height: 7vmin;
		padding: 1rem;
		border: 2px solid #eee;
		margin-bottom: 0.5rem;
		border-radius: 3.5vmin;
	}
</style>
