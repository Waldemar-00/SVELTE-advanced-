<script>
	// @ts-nocheck

	// import Progress from '../components/Progress.svelte';
	// import Position from '../components/Position.svelte';
	// import Form from '../components/Form.svelte';
	// import InputBind from '../components/InputBind.svelte';
	// import IfStatement from '../components/IfStatement.svelte';
	// import EachStatement from '../components/EachStatement.svelte';
	// import Calculator from '../components/Calculator.svelte';
	// import FileUploader from '../components/FileUpload.svelte';
	// import Select from '../components/Select.svelte';
	import Todos from '../components/Todos.svelte';
	// import { counter } from '$lib/index';
	// import { object } from '$lib/index';
	// let persons = [
	// 	{ name: 'John', age: 17, id: 177 },
	// 	{ name: 'Laura', age: 21, id: 387 },
	// 	{ name: 'Peter', age: 23, id: 777 }
	// ];
	// let count;
	// const unsubscribe = counter.subscribe((value) => {
	// 	count = value;
	// });
</script>

<h1>Advanced Svelte!</h1>
<!-- <h2>{$counter}</h2>
<h3>{$object.name}</h3>
<h3>{$object.age}</h3> -->
<!-- <Progress />
<Position />
<Form /> -->
<!-- <InputBind /> -->
<!-- <IfStatement /> -->
<!-- <EachStatement
	{persons}
	on:mymsg={(e) => {
		console.log(e.detail);
		alert(`${e.detail.message} Name: ${e.detail.name}. Age: ${e.detail.age}`);
	}}
/>
<Calculator /> -->
<!-- <FileUploader />
<Select /> -->
<Todos />
