<script>
	import { fly } from 'svelte/transition';
	let visible = true;
</script>

<label for="visible">visible</label>
<input type="checkbox" bind:checked={visible} id="visible" name="visible" />
{#if visible}
	<p transition:fly={{ x: -100, y: -100, duration: 700, delay: 200 }}>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil omnis reiciendis, impedit quasi
		vitae veniam corrupti quam atque facilis enim neque deleniti, vero incidunt maiores iste sit
		amet quas cumque! Adipisci explicabo ipsum praesentium amet eos reiciendis officia quam,
		voluptas sit et asperiores similique molestias quae enim modi pariatur aperiam! Officiis
		mollitia voluptates nobis eaque asperiores corporis, cumque corrupti deleniti. Aperiam
		voluptates ex, maiores, dolore rem repudiandae alias cum qui saepe deserunt in natus eligendi
		voluptatibus atque reprehenderit corrupti amet laboriosam? Non aperiam vel veniam, corporis
		voluptatibus voluptatum rerum sapiente! Maiores error perspiciatis iure quod incidunt
		consequuntur natus cum. Beatae vero ab sapiente nesciunt laudantium molestiae dolorem neque et
		eveniet repellat. Incidunt nesciunt repellat quia temporibus laboriosam, quidem inventore quae.
		Iusto nemo, dolore maiores id quo optio dicta sint temporibus quis molestias deserunt provident
		dolorem! Doloribus, voluptatum provident dicta minus, porro omnis voluptate blanditiis earum
		optio quisquam, excepturi aliquam libero!
	</p>
{/if}
{#if visible}
	<p transition:fly={{ x: 100, duration: 700, delay: 200 }}>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil omnis reiciendis, impedit quasi
		vitae veniam corrupti quam atque facilis enim neque deleniti, vero incidunt maiores iste sit
		amet quas cumque! Adipisci explicabo ipsum praesentium amet eos reiciendis officia quam,
		voluptas sit et asperiores similique molestias quae enim modi pariatur aperiam! Officiis
		mollitia voluptates nobis eaque asperiores corporis, cumque corrupti deleniti. Aperiam
		voluptates ex, maiores, dolore rem repudiandae alias cum qui saepe deserunt in natus eligendi
		voluptatibus atque reprehenderit corrupti amet laboriosam? Non aperiam vel veniam, corporis
		voluptatibus voluptatum rerum sapiente! Maiores error perspiciatis iure quod incidunt
		consequuntur natus cum. Beatae vero ab sapiente nesciunt laudantium molestiae dolorem neque et
		eveniet repellat. Incidunt nesciunt repellat quia temporibus laboriosam, quidem inventore quae.
		Iusto nemo, dolore maiores id quo optio dicta sint temporibus quis molestias deserunt provident
		dolorem! Doloribus, voluptatum provident dicta minus, porro omnis voluptate blanditiis earum
		optio quisquam, excepturi aliquam libero!
	</p>
{/if}
