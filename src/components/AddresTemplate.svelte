<article>
	<h2>
		<slot name="name">Unknown name</slot>
	</h2>
	<h4>
		<slot name="addres">Unknown address</slot>
	</h4>
	<h4>
		<slot name="email">Unknown email</slot>
	</h4>
</article>

<style>
	article {
		align-self: center;
		display: flex;
		flex-direction: column;
		width: 60vmin;
		min-height: 200px;
		border: 0.5vmin solid orange;
		padding: 0.5rem;
	}
</style>
