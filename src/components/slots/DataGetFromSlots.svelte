<script>
	import DataUpSlots from './DataUpSlots.svelte';
</script>

<DataUpSlots let:co={color}>
	<li style:color style:border-color={color}>{color}</li>
	<p slot="article">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis praesentium mollitia possimus,
		ab dolore eum dignissimos eos quaerat cum? Fuga esse accusamus exercitationem ullam iste aliquid
		harum ea nisi consequatur? Sapiente maxime aliquid laudantium est saepe voluptatem dignissimos
		libero, sit reiciendis commodi, consectetur eligendi? Voluptatibus neque eveniet nostrum quae.
		Facere ullam delectus, amet temporibus dignissimos eius nostrum odio velit enim? Dicta
		doloremque, itaque, dolor ex saepe dolores sapiente quaerat porro cumque, nam ut quod in
		doloribus. Fugit porro voluptatum est explicabo nesciunt. Nihil voluptates aut possimus odit in
		esse quasi? Vel debitis laboriosam, aspernatur hic tempora dicta assumenda veniam ducimus
		possimus recusandae beatae nulla ut. Incidunt perspiciatis omnis doloribus est eligendi sit
		inventore magni illum, maiores, in qui, ab accusantium! Impedit totam quas, tempora non dicta
		iste nesciunt, eius blanditiis fugiat laborum eos? Ipsum accusantium nisi at asperiores laborum
		provident eum dolorem consequatur iure dicta dolore incidunt voluptas, aut laboriosam.
	</p>
	<h3 slot="parting">Have a good day!</h3>
</DataUpSlots>

<style>
	li {
		width: 40vmin;
		height: 7vmin;
		padding: 1rem;
		border: 2px solid #eee;
		margin-bottom: 0.5rem;
		border-radius: 3.5vmin;
	}
	p {
		border: 2px solid olivedrab;
		padding: 1rem;
		border-radius: 50px;
		margin-top: 3rem;
	}
	h3 {
		color: red;
		margin: 0 auto;
		width: 50vmin;
		text-align: center;
	}
</style>
