<script>
	import { time } from '$lib/store';
	import { someData } from '$lib/store';
	const formatter = new Intl.DateTimeFormat(['ru', 'en-US'], {
		// dateStyle: 'full',
		// dateStyle: 'medium',
		// dateStyle: 'short',
		// timeStyle: 'long',
		// timeStyle: 'medium',
		// timeStyle: 'short',
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
		// timeZone: 'Australia/Sydney'
	});
</script>

<h2>{formatter.format($time)}</h2>
<h3>{$someData}</h3>
