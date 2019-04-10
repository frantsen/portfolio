<template>
	<div class="cover">
		<div class="background-tile">
		</div>
		<div class="cover-text">
			Rachel Frantsen
		</div>
		<div class="clickable-overlay" @click="navigateNext">
		</div>
	</div>
</template>

<script>
export default {
	name: 'cover',
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

<style scoped>
.cover {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}

.background-tile {
	width: 65%;
	height: 65%;
	margin: auto;
	position: absolute;
	flex: 1;
	background-color: lightslategray;
}

.canvas-wrapper, .clickable-overlay {
	position: absolute;
	height: 100%;
	width: 100%;
	flex: 1;
}

.clickable-overlay {
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
