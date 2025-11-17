<template>
	<div id="app">
		<component :is="currentComponent"></component>
	</div>
</template>

<script>
import Home from './components/Home.vue';
import ThreeRemix from './components/ThreeRemix.vue';
import Error404 from './components/screens/Error404.vue';

export default {
	name: 'app',
	components: {
		Home,
		ThreeRemix,
		Error404,
	},
	data() {
		return {
			currentRoute: this.getRouteFromHash(),
		};
	},
	computed: {
		currentComponent() {
			const routeMap = {
				'': 'Home',
				'/': 'Home',
				'/three-remix': 'ThreeRemix',
			};
			return routeMap[this.currentRoute] || 'Error404';
		},
	},
	mounted() {
		// Listen for hash changes
		window.addEventListener('hashchange', this.handleHashChange);
		// Handle initial hash
		this.handleHashChange();
	},
	beforeUnmount() {
		window.removeEventListener('hashchange', this.handleHashChange);
	},
	methods: {
		getRouteFromHash() {
			const hash = window.location.hash.slice(1) || '/';
			return hash;
		},
		handleHashChange() {
			this.currentRoute = this.getRouteFromHash();
			// Update Google Analytics
			if (typeof ga !== 'undefined') {
				ga('set', 'page', this.currentRoute);
				ga('send', 'pageview');
			}
		},
		navigateTo(route) {
			window.location.hash = route;
		},
	},
};
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
