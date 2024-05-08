<script>
	// @ts-nocheck

	let visible = true;
	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
		if (!valid)
			throw new Error('This transition works only on element with a single text node child');
		const text = node.textContent;
		const duration = text.length / (speed * 0.01);
		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<hr />
<label for="check">visible</label>
<input type="checkbox" id="check" name="check" bind:checked={visible} />
{#if visible}
	<p transition:typewriter={1}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consectetur est vel
		repudiandae maiores. Iste excepturi voluptatem architecto debitis aspernatur quibusdam tempora,
		reprehenderit assumenda. Aliquam odit recusandae ullam fugiat ex. Eius, atque, voluptatum,
		facere suscipit quas est dolorum illo veritatis nemo provident odit ducimus tempora velit
		temporibus facilis corrupti autem ratione sequi dignissimos minima? Voluptas amet beatae
		veritatis maiores facere.
	</p>
{/if}

<style>
	p {
		font-size: 24px;
	}
</style>
