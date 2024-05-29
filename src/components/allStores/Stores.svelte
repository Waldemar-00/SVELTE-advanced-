<script>
	import { wrt, rdb, rdo, drv } from './stores.js';
</script>

<h2>Writable value: {$wrt}</h2>
<h2>Readable value: {$rdb}</h2>
<h2>Readonly value: {$rdo}</h2>
<h2>Derived value: {$drv}</h2>
<button on:click={() => wrt.set(5000)}>Change to 5000</button>
