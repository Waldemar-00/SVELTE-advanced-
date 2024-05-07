<script>
	import { fade, fly } from 'svelte/transition';
	let visible = true;
</script>

<label for="visible"></label>
<input type="checkbox" id="visible" name="visible" bind:checked={visible} />
{#if visible}
	<p in:fly={{ x: 100, y: 100, duration: 1000, delay: 200 }} out:fade>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id alias, minus hic iste quae enim
		laboriosam. Quaerat enim repellendus officiis fugiat, inventore necessitatibus expedita
		asperiores ex reiciendis eligendi, quod ea. Porro ipsum aliquam laboriosam voluptate commodi cum
		ab dolore quod blanditiis laborum at, suscipit amet harum qui, magni neque enim eaque
		consectetur accusantium, voluptatibus sunt veritatis? Dicta iure reiciendis quasi? Mollitia
		maxime ea ducimus officiis. Iste eius alias consectetur possimus expedita repellat omnis animi
		culpa, qui aliquam necessitatibus ipsa. Fugiat nam perspiciatis deserunt sed adipisci at
		exercitationem doloremque voluptates tempore? Dolor ipsa, tempora eum corporis at natus
		inventore id sunt velit repellat optio pariatur fuga, blanditiis error iusto amet hic ullam
		sequi veritatis quas ratione! Fugit est itaque perferendis explicabo. Tempora at suscipit
		deserunt libero distinctio illo laudantium blanditiis reiciendis inventore odio, cum est vel!
		Omnis doloremque quaerat autem ipsam sit nihil modi sequi rerum obcaecati earum! Optio, quidem
		commodi?
	</p>
{/if}
