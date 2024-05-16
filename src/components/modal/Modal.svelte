<script>
	// @ts-nocheck
	let co = false;
	function open() {
		co = !co;
		const dialog = document.querySelector('dialog');
		dialog.showModal();
		dialog.addEventListener('click', (e) => {
			if (!e.target.hasAttribute('paragraph')) {
				dialog.close();
				co = !co;
			}
		});
	}
</script>

<button on:click|self={open} style:color={co ? 'red' : 'inherit'}>Open Modal</button>
<dialog>
	<p paragraph>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio architecto alias facilis,
		rerum atque temporibus natus beatae repellendus quas saepe quam officia perspiciatis hic
		laboriosam tempora quos, pariatur earum neque? Repellat illo adipisci eum odit, debitis ab,
		totam suscipit omnis unde minima molestias excepturi soluta id nemo neque quia maxime autem
		consectetur esse quis fugiat? Nobis exercitationem corrupti id beatae. Perferendis, voluptatum?
		Natus, exercitationem? Porro repellat aperiam sunt vitae repudiandae culpa iusto commodi
		deleniti laboriosam magni nihil, animi voluptatem eligendi sapiente aspernatur, sequi velit
		assumenda ipsum earum adipisci. Porro, reprehenderit? Facere eos ipsum, et magni voluptate,
		corrupti ab, dolores veniam rem harum rerum hic delectus neque enim est alias numquam quidem.
		Fugit adipisci ducimus ad architecto quae dolores vel incidunt. Tempore, voluptatum
		perspiciatis? Quam itaque ea odit a, provident necessitatibus autem quasi repellat sit
		laboriosam, odio esse molestias iste. Incidunt quae expedita quibusdam illum similique veritatis
		sint omnis accusantium sunt.
	</p>
</dialog>

<style>
	dialog {
		width: 70%;
		padding: 0;
	}
	p {
		margin: 0;
		padding: 1.5rem;
	}
</style>
