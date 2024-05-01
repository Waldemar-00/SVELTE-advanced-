<script>
	// @ts-nocheck

	import Eliza from 'elizabot';
	import { beforeUpdate, afterUpdate } from 'svelte';
	let div;
	let autoscroll;

	beforeUpdate(() => {
		autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
	});
	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});
	const eliza = new Eliza();
	let comments = [{ author: 'eliza', text: eliza.getInitial() }];
	function handelKeydown(e) {
		const text = e.target.value;
		if (e.key === 'Enter' && text) {
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
								.concat({ author: 'eliza', text: reply });
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
		width: 35vw;
		height: 70vh;
		justify-content: space-between;
	}
	.scroll {
		flex-grow: 1 1 auto;
		border-top: 1px solid #acacac;
		overflow-y: auto;
		height: 40vh;
	}
	article {
		box-sizing: border-box;
		margin: 1.5rem 1rem;
	}
	.user {
		text-align: right;
	}
	span {
		padding: 0.5rem 1.2rem;
		color: black;
	}
	.eliza span {
		background-color: rgb(240, 240, 240);
		border-radius: 1rem 1rem 1rem 0;
		font-style: italic;
	}
	.user span {
		background-color: rgb(110, 110, 253);
		color: #fff;
		border-radius: 1rem 1rem 0 1rem;
	}
</style>
