<script>
	import Increment from './Increment.svelte';
	import Decrement from './Decrement.svelte';
	import Reset from './Reset.svelte';
	import { counter } from '$lib/store';
</script>

<h1>{$counter}</h1>
<Increment />
<Decrement />
<Reset />
