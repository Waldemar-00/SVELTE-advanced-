<script>
	// @ts-nocheck

	import CreateContext from './UseContext.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	const count = writable(10);
	function alertContext() {
		alert('Counter will changed');
		count.update((c) => c + 1);
	}
	setContext('context', {
		alertContext
	});
	setContext('count', { count });
</script>

<CreateContext>
	<p slot="article">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sapiente, illo enim
		perspiciatis alias libero vitae, atque debitis iusto, dolorem explicabo minus animi quos odio
		tenetur placeat rem aperiam similique. Porro repudiandae neque explicabo corrupti error aut
		tenetur pariatur. Architecto nisi explicabo tempore repudiandae, nemo quia fugiat natus aliquid
		voluptate sed dicta mollitia impedit placeat iure magnam nobis sit consequuntur! Voluptate
		officiis, harum tempora minus debitis dicta! Magnam, debitis eaque. Odit adipisci sunt
		exercitationem harum dolores recusandae iure earum! Alias minima debitis, reiciendis nisi
		commodi id magni quasi doloremque ea? Unde voluptatibus optio labore fuga deleniti quis magni
		obcaecati, laboriosam voluptas dolorem ex dolore, illum, illo placeat excepturi ut voluptates
		nemo atque necessitatibus facilis rem ipsum quaerat distinctio. Distinctio, ullam.
	</p>
</CreateContext>

<style>
	p {
		border: 2px solid olivedrab;
		padding: 1rem;
		border-radius: 50px;
		margin-top: 3rem;
	}
</style>
