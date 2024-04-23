<script>
	// @ts-nocheck

	// import Progress from '../components/Progress.svelte';
	// import Position from '../components/Position.svelte';
	// import Form from '../components/Form.svelte';
	// import InputBind from '../components/InputBind.svelte';
	import IfStatement from '../components/IfStatement.svelte';
	import EachStatement from '../components/EachStatement.svelte';
	let persons = [
		{ name: 'John', age: 17, id: 177 },
		{ name: 'Laura', age: 21, id: 387 },
		{ name: 'Peter', age: 23, id: 777 }
	];
</script>

<h1>Advanced Svelte!</h1>
<!-- <Progress />
<Position />
<Form />
<InputBind /> -->
<IfStatement />
<EachStatement {persons} />
