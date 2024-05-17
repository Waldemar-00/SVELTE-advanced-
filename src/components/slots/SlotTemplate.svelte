<section>
	<header>
		<slot name="company">
			<h2><i>('Company')</i></h2>
		</slot>
		<slot name="greetings">
			<h2><i>('Hello everyone!')</i></h2>
		</slot>
	</header>
	<slot />
	<footer>
		<slot name="phone">
			<i>('+375 29 777 88 56')</i>
		</slot>
		<slot name="address">
			<i>('Planet Earth')</i>
		</slot>
		<div>
			<slot name="fb">
				<i>('Facebook')</i>
			</slot>
			<slot name="wa">
				<i>('Whatsapp')</i>
			</slot>
			<slot name="tg">
				<i>('Telegram')</i>
			</slot>
		</div>
	</footer>
</section>

<style>
	header {
		margin: 0;
		display: flex;
		justify-content: space-around;
		height: 4rem;
		background-color: #eee;
		border: 2px solid #b6b6b6;
		border-radius: 2rem;
	}
	footer {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 7rem;
		background-color: #eee;
		border: 2px solid #b6b6b6;
	}
	div {
		display: flex;
		flex-direction: column;
	}
</style>
