<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import axios from 'axios';
	let photos = [];
	onMount(async () => {
		const respone = await axios.get('https://jsonplaceholder.typicode.com/photos');
		photos = respone.data;
	});
</script>

<h2>onMount</h2>
{#await photos}
	<p>Downloading...</p>
{:then photos}
	<div>
		{#each photos as { url, title, id } (id)}
			<figure>
				<img src={url} alt="JSONPlaceholder" />
				<figcaption>{title}</figcaption>
			</figure>
		{:else}
			<p>No photos...something wrong!</p>
		{/each}
	</div>
{:catch error}
	<p>{error.message}</p>
{/await}

<style>
	div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100vw;
	}
	figure {
		display: flex;
		flex-direction: column;
		border: 2px #c0c0c0 solid;
		padding: 5px;
	}
	img {
		width: 300px;
		height: 300px;
	}
	figcaption {
		background-color: #7b7b7b;
		color: #fff;
		font: italic smaller sans-serif;
		padding: 3px 0;
		text-align: center;
		width: 300px;
		height: 2rem;
		vertical-align: center;
		text-align: center;
	}
</style>
