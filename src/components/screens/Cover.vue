<template>
	<div class="cover">
		<div class="animation-underlay"/>
		<wave-scene class="animation-tile" :framesPerSecond="30"/>
		<div class="cover-text">Rachel Frantsen Lee</div>
		<div class="clickable-overlay" @click="navigateNext"/>
	</div>
</template>

<script>
import WaveScene from '../WaveScene.vue';

export default {
	name: 'cover',
	components: {
		WaveScene,
	},
	methods: {
		scrollToScreen(screenName) {
			const element = document.getElementById(`screen-${screenName}`);
			if (element) {
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
				// Emit after scroll animation completes (approximate 300ms duration)
				setTimeout(() => {
					this.$emit('navigate', screenName);
				}, 300);
			}
		},
		navigateNext() {
			const screenName = 'intro';
			this.scrollToScreen(screenName);
		},
	},
};
</script>

<style>
.cover {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}

.animation-tile, .animation-underlay {
	width: 65%;
	height: 65%;
	margin: auto;
	position: absolute;
	flex: 1;
}

.animation-underlay {
	background-color: lightslategray;
}

.animation-tile {
	opacity: .3;
}

.clickable-overlay {
	position: absolute;
	height: 100%;
	width: 100%;
	flex: 1;
	cursor: crosshair;
}

.cover-text {
	position: absolute;
	width: 61%;
	color: #fff;
	text-align: center;
	font-size: 42pt;
	font-weight: bold;
	letter-spacing: .5vw;
}

@media (max-width: 500px) and (orientation: portrait) {
	.cover-text {
		font-size: 11vmin;
	}
}
</style>
