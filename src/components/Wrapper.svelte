<div>
	<h3>Wrapper</h3>
	<slot>
		<p>
			For example you send a fetch, <br />but the fetch failed - you see this block - Fallback slot
		</p>
	</slot>
</div>

<style>
	div {
		border: 7px solid red;
		width: 700px;
		min-height: 200px;
		padding: 1rem;
	}
	p {
		font-size: 2rem;
	}
</style>
