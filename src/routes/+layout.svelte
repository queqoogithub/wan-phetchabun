<script>
	import Nav from '../components/Nav.svelte';
	import "../app.css";
	export let segment;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200&display=swap" rel="stylesheet">
</svelte:head>

<style>
	main {
		position: relative;
		max-width: 68em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		border-radius: 8px;
	}
	* {
        font-family: 'Prompt', sans-serif;
    }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<footer class="m-4">
	<div class="text-gray-800 text-center p-4 ffont-medium">
		© 2023 Copyright - ร้านแว่นเพชรบูรณ์
	</div>
</footer>
