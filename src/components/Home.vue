<template>
	<div id="home">
		<div v-for="(screen, index) in screens" :key="`screen-index-${index}`" :id="`screen-${screen.name}`" class="screen">
			<nav-menu v-if="screen.name !== 'cover' && !mobile" :title="screen.title" :items="screens" @click="navigateTo"></nav-menu>
			<cover v-if="screen.name === 'cover'" @overlayClick="navigateTo('intro')"></cover>
			<intro v-if="screen.name === 'intro'"></intro>
			<skills v-if="screen.name === 'skills'"></skills>
			<projects v-if="screen.name === 'projects'"></projects>
			<connect v-if="screen.name === 'connect'"></connect>
		</div>
		<transition v-if="mobile" name="fade">
			<div class="overlay" :style="`opacity: ${arrowOpacity}`">
				<div class="left-arrow" @click="mobileBack"><</div>
				<div class="right-arrow" @click="mobileNext">></div>
			</div>
		</transition>
	</div>
</template>

<script>
import NavMenu from './Navigation';
import Cover from './screens/Cover';
import Intro from './screens/Intro';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Blog from './screens/Blog';
import Connect from './screens/Connect';

export default {
	name: 'home',
	components: {
		Cover,
		NavMenu,
		Intro,
		Skills,
		Projects,
		Blog,
		Connect,
	},
	data: () => ({
		screens: [
			{
				name: 'cover',
				title: 'Cover',
			},
			{
				name: 'intro',
				title: 'Intro',
			},
			{
				name: 'skills',
				title: 'Skills',
			},
			{
				name: 'connect',
				title: 'Connect',
			},
		],
		mobile: false,
		arrowOpacity: 1.0,
		navInProgress: false,
		currentScreen: 'cover',
	}),
	created() {
		let agent = navigator.userAgent;
		this.mobile = (agent.match(/Android/i)
			|| agent.match(/webOS/i)
			|| agent.match(/iPhone/i)
			|| agent.match(/iPad/i)
			|| agent.match(/iPod/i)
			|| agent.match(/BlackBerry/i)
			|| agent.match(/Windows Phone/i)) ? true : false;
		if (this.mobile) {
			document.body.addEventListener('touchmove', (event) => this.preventMobileScroll);
		}
	},
	mounted() {
		if (this.mobile) {
			this.remindNav();
		}
	},
	methods: {
		preventMobileScroll(event) {
			this.remindNav();
			event.preventDefault();
			event.stopPropagation();
		},
		navigateTo(screenName, instant = false) {
			let duration = (this.mobile || instant) ? '0' : 300;
			this.$scrollTo(`#screen-${screenName}`, {
				onDone: () => {
					this.currentScreen = screenName;
				},
				duration: duration,
				easing: 'ease-out',
				cancelable: true,
			});
		},
		mobileNext() {
			if (this.navInProgress) {
				return;
			}
			this.navInProgress = true;
			let nextScreenIdx = this.screens.findIndex(s=>s.name===this.currentScreen)+1;
			if (nextScreenIdx >= this.screens.length) {
				this.navInProgress = false;
				return;
			}
			this.navigateTo(this.screens[nextScreenIdx].name);
			this.navInProgress = false;
		},
		mobileBack() {
			if (this.navInProgress) {
				return;
			}
			this.navInProgress = true;
			let prevScreenIdx = this.screens.findIndex(s=>s.name===this.currentScreen)-1;
			if (prevScreenIdx < 0) {
				this.navInProgress = false;
				return;
			}
			this.navigateTo(this.screens[prevScreenIdx].name);
			this.navInProgress = false;
		},
		remindNav() {
			this.arrowOpacity = 1.0;
			let removeArrows = setTimeout(() => this.arrowOpacity = 0.0, 900);
		},
	},
};
</script>

<style scoped>
.screen {
	height: 100vh;
}

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
	transition: .5s;
}

.right-arrow, .left-arrow {
	height: 100%;
	font-size: 20vmin;
	align-items: center;
	justify-content: center;
	display: flex;
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

.fade-leave-active {
	transition: opacity 1s;
}

.fade-enter, .fade-leave-to, .fade-leave-active {
	opacity: 0.0;
}

.nav-wrapper {
	position: relative;
	display: inline-block;
	height: 100%;
	width: 100%;
}

.nav-wrapper > div {
	position: absolute;
	width: 100%;
}

.forward-enter-active, .forward-leave-active,
.back-enter-active, .back-leave-active {
	transition: all .3s;
}

.forward-enter, .back-leave-to {
	transform: translateX(100vw);
}

.forward-leave-to, .back-enter {
	transform: translateX(-100vw);
}
</style>
