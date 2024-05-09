<script>
	// @ts-nocheck
	import { fade } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	let visible = true;
	let status = 'waiting...';
	function spin(node, { duration }) {
		return {
			duration,
			css(t) {
				const ease = elasticOut(t);
				return `
          transform: scale(${ease}) rotate(${ease * 1800}deg);
          color: hsl(
            ${Math.trunc(t * 360)},
            ${Math.min(100, 1000 * (1 - t))}%,
            ${Math.min(50, 500 * (1 - t))}%
          );`;
			}
		};
	}
</script>

<h3>{status}</h3>
<label for="visible">visible</label>
<input type="checkbox" id="visible" name="visible" bind:checked={visible} />
{#if visible}
	<div
		in:spin={{ duration: 8000 }}
		out:fade={{ duration: 700, delay: 200 }}
		on:introstart={() => (status = 'introstart')}
		on:introend={() => (status = 'introend')}
		on:outrostart={() => (status = 'outrostart')}
		on:outroend={() => (status = 'outroend')}
	>
		<span>Transition</span>
	</div>
{/if}

<style>
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 48px;
		font-weight: bold;
	}
</style>
