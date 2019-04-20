<template>
	<div class="cover">
		<div class="animation-underlay"/>
		<wave-scene class="animation-tile"/>
		<div class="cover-text">Rachel Frantsen</div>
		<div class="clickable-overlay" @click="navigateNext"/>
	</div>
</template>

<script>
import WaveScene from '../WaveScene';

export default {
	name: 'cover',
	components: {
		WaveScene,
	},
	methods: {
		navigateNext() {
			const screenName = 'intro';
			let vm = this;
			this.$scrollTo(`#screen-${screenName}`, {
				onDone() {
					vm.$emit('navigate', screenName);
				},
				duration: 300,
				easing: 'ease-out',
				cancelable: true,
			});
		},
	},
};
</script>

<style lang="scss">
.cover {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}

.animation-tile, .animation-underlay {
	width: 75%;
	height: 75%;
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
