<script>
	import SlotTemplate from './SlotTemplate.svelte';
</script>

<SlotTemplate>
	<h3 slot="company">Paradise</h3>
	<h3 slot="greetings">You are welcom to Paradise!</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo iste dignissimos libero
		ipsum perferendis modi voluptate magni rem hic accusantium ratione, placeat quaerat aperiam,
		temporibus mollitia quis excepturi similique. Voluptate quaerat facere incidunt eius eveniet eos
		a, facilis ab, quisquam sint accusamus odit vel deleniti quae architecto eligendi, cupiditate
		voluptates eum unde. Quam mollitia doloremque error nisi doloribus asperiores. Velit deleniti
		repudiandae voluptatum quibusdam cupiditate tempora. Minima possimus, maiores at quis iure nam
		non molestiae quibusdam optio, quia inventore dignissimos voluptatum veniam, debitis commodi
		odit consequuntur facilis! Unde, amet. Maxime pariatur omnis dicta rem. Fugiat dignissimos
		asperiores neque cumque laboriosam iure saepe ducimus necessitatibus reiciendis! Sequi,
		laudantium, similique esse, nostrum quisquam molestiae praesentium quo quaerat corrupti eveniet
		neque ipsam. Aliquid laboriosam doloribus quae velit aspernatur quidem voluptatibus fugiat vitae
		itaque, ea atque ipsum neque et deleniti hic non quis tempora. Quasi mollitia pariatur ipsam est
		officia dicta voluptatibus nihil? Sunt, voluptatibus unde. Porro quo hic labore aperiam numquam
		quod reprehenderit ut natus provident! Nisi porro assumenda aut in soluta natus! Inventore
		quibusdam quod aspernatur, deleniti praesentium maiores ad nulla? Voluptatibus, minus nemo?
		Numquam, amet provident illo mollitia iure magnam quibusdam, commodi veniam aperiam consequatur
		quidem perspiciatis error nemo sint cum voluptatibus modi impedit ex veritatis velit unde
		dolorum. Mollitia.
	</p>
	<h3 slot="phone">+1 987 345 67 89</h3>
	<!-- <h3 slot="address">New York</h3> -->
	<h3 slot="fb" class="social">Instagram</h3>
	<h3 slot="wa" class="social">WhatsApp</h3>
	<h3 slot="tg" class="social">Telegram</h3>
</SlotTemplate>

<style>
	.social {
		margin: 0;
		margin-bottom: 0.4rem;
	}
</style>
