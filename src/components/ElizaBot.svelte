<script>
	// @ts-nocheck

	const Eliza = require('elizabot');
	import { beforeUpdate, afterUpdate } from 'svelte';
	const eliza = new Eliza();
	let comments = [{ author: 'aliza', text: aliza.getInitial() }];
	let div;
	let autoscroll;
	beforeUpdate(() => {
		autoscroll = div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
	});
	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});
	function handelKeydown(e) {
		if (e.target.key === 'Enter' && e.target.value) {
			const text = e.target.value;
			comments = comments.concat({ author: 'user', text });
			e.target.value = '';
			const reply = eliza.transform(text);
			setTimeout(
				() => {
					comments = comments.concat({ author: 'aliza', text: '...', placeholder: true });
					setTimeout(
						() => {
							comments = comments
								.filter((comment) => !comment.placeholder)
								.concat({ author: 'aliza', text: reply });
						},
						500 + Math.random() * 500
					);
				},
				200 + Math.random() * 200
			);
		}
	}
</script>

<div class="chat">
	<h1>Elisa</h1>
	<div class="scroll" bind:this={div}>
		{#each comments as comment, index (index)}
			<article class={comment.author}>
				<span>{comment.text}</span>
			</article>
		{/each}
	</div>
	<input type="text" on:keydown={handelKeydown} />
</div>

<style>
	.chat {
		display: flex;
		flex-direction: column;
		max-width: 700px;
		height: 100vh;
		justify-content: space-between;
	}
	/* .scroll {
	} */
</style>
