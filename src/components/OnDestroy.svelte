<script>
	import { onDestroy } from 'svelte';

	let seconds = 0;
	const interval = setInterval(() => (seconds += 1), 1000);
	onDestroy(() => clearInterval(interval));
</script>

<h2>This page has been open for {seconds} {seconds === 1 ? 'second' : 'seconds'}</h2>
