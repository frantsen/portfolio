<template>
    <div id="app">
    	<navigation :title="screenTitle"></navigation>
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
    data() {
    	return {
    		screenTitle: '',
    	};
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
