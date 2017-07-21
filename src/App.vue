<template>
    <div id="app">
        <navigation :screen="this.$route.name" :title="this.$route.meta.title"></navigation>
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './components/Navigation';

export default {
    name: 'app',
    components: {
    	Navigation,
    },
}
</script>

<style>
body {
    margin: 0px;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
