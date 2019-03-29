<template>
	<div id="home">
		<div v-for="(screen, index) in screens"
			:key="`screen-index-${index}`"
			:id="`screen-${screen}`"
			:class="['screen', {focused: currentScreen === screen}]">
			<nav-menu v-if="screen !== 'cover'"
				:active="screen"
				:items="screens"
				class="hide-on-mobile">
			</nav-menu>
			<component :is="screen"></component>
		</div>
		<div class="overlay">
			<div class="left-arrow" :style="`opacity: ${leftOpacity}`" @click="mobileBack"><</div>
			<div class="right-arrow" :style="`opacity: ${rightOpacity}`" @click="mobileNext">></div>
		</div>
	</div>
</template>

<script>
import NavMenu from './Navigation';
import Cover from './screens/Cover';
import Intro from './screens/Intro';
import Skills from './screens/Skills';
// import Projects from './screens/Projects';
// import Blog from './screens/Blog';
import Connect from './screens/Connect';

export default {
	name: 'home',
	components: {
		Cover,
		NavMenu,
		Intro,
		Skills,
		// Projects,
		// Blog,
		Connect,
	},
	data: () => ({
		screens: ['cover', 'intro', 'skills', 'connect'],
		leftOpacity: 1.0,
		rightOpacity: 1.0,
		navInProgress: false,
		currentScreen: 'cover',
	}),
	mounted() {
		this.remindNav();
		this.currentScreen = this.determineCurrentScreen(window.innerHeight, window.pageYOffset);
	},
	methods: {
		determineCurrentScreen(vh, pos) {
			let offset = vh * .2;
			let idx = Math.floor((pos + offset >= vh * this.screens.length ? pos : pos + offset) / vh);
			return this.screens[idx];
		},
		mobileNext() {
			if (this.navInProgress) {
				return;
			}
			this.navInProgress = true;
			let nextScreenIdx = this.screens.findIndex(s=>s===this.currentScreen)+1;
			if (nextScreenIdx >= this.screens.length) {
				this.navInProgress = false;
				return;
			}
			this.rightOpacity = 0.7;
			let hideArrow = setTimeout(() => this.rightOpacity = 0.0, 150);
			this.currentScreen = this.screens[nextScreenIdx];
			this.navInProgress = false;
		},
		mobileBack() {
			if (this.navInProgress) {
				return;
			}
			this.navInProgress = true;
			let prevScreenIdx = this.screens.findIndex(s=>s===this.currentScreen)-1;
			if (prevScreenIdx < 0) {
				this.navInProgress = false;
				let hideArrow = setTimeout(() => this.leftOpacity = 0.0, 90);
				return;
			}
			this.leftOpacity = 0.7;
			let hideArrow = setTimeout(() => this.leftOpacity = 0.0, 150);
			this.currentScreen = this.screens[prevScreenIdx];
			this.navInProgress = false;
		},
		remindNav() {
			this.leftOpacity = 1.0;
			this.rightOpacity = 1.0;
			let hideArrows = setTimeout(() => {
				this.leftOpacity = 0.0;
				this.rightOpacity = 0.0;
			}, 900);
		},
	},
};
</script>

<style scoped>
.screen {
	height: 100vh;
	width: 100vw;
}

.overlay {
	display: none;
}

@media (max-width: 500px) and (orientation: portrait) {
	.overlay {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
	}

	.hide-on-mobile, .screen:not(.focused) {
		display: none;
	}

	.screen {
		position: fixed;
	}

	.right-arrow, .left-arrow {
		height: 100%;
		font-size: 20vmin;
		align-items: center;
		justify-content: center;
		display: flex;
		transition: opacity 1s;
	}

	.right-arrow:active, .left-arrow:active {
		transition: opacity 0s;
	}

	.left-arrow {
		flex: 1;
		background-color: lightslategray;
		color: white;
	}

	.right-arrow {
		flex: 2;
		background-color: white;
		color: slategray;
	}
}
</style>
