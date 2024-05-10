<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let instractions = [
		'2 яйца',
		'2 столовые ложки молока',
		'Соль и перец по вкусу',
		'1 столовая ложка масла',
		'Взбейте яйца в миске до однородности',
		'Добавьте молоко, соль и перец, и тщательно перемешайте',
		'Разогрейте сковороду на среднем огне',
		'Добавьте масло и дайте ему растопиться',
		'Полейте смесь яиц на разогретую сковороду',
		'Дайте омлету приготовиться снизу до тех пор, пока верхняя часть не станет плотной',
		'С помощью лопатки переверните омлет на другую сторону и дайте приготовиться',
		'Когда омлет готов, переложите его на тарелку и подавайте горячим',
		'Наслаждайтесь вашим классическим омлетом!'
	];
	let visible = true;
	let i = -1;
	onMount(() => {
		const interval = setInterval(() => {
			i = (i + 1) % instractions.length;
		}, 4500);
		return () => {
			clearInterval(interval);
		};
	});
	function typewriter(node, { speed = 1, delay }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
		if (!valid)
			throw new Error('This transition works only on element with a single text node child');
		const text = node.textContent;
		const duration = text.length / (speed * 0.01);
		return {
			duration,
			delay,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<hr />
<label for="check">visible</label>
<input type="checkbox" id="check" name="check" bind:checked={visible} />

{#if visible}
	{#key i}
		<p
			in:typewriter={{ speed: 2, delay: 200 }}
			out:fly|global={{ y: -200, delay: 200, duration: 700 }}
		>
			{instractions[i] || ''}
		</p>
	{/key}
{/if}

<style>
	p {
		font-size: 24px;
		margin-left: 2rem;
		text-align: left;
	}
</style>
