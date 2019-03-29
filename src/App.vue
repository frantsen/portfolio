<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
}
</script>

<style>
body, html {
	margin: 0px;
	padding: 0px;
}

body {
	max-width: 100%;
	overflow-x: hidden;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
