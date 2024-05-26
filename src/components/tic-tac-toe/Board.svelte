<section>
	<slot name="btn" />
</section>

<slot name="reset" />

<style>
	section {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		gap: 2px;
		border: 5px solid purple;
		width: 50vmin;
		height: 50vmin;
		margin: 5rem auto;
		background-color: purple;
	}
</style>
