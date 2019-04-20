<template>
	<div class='three-remix'>
		<wave-scene class="frame" mouseControlEnabled/>
		<div class="overlay-text">
			<a href="https://github.com/mrdoob/three.js/blob/master/examples/webgl_points_waves.html">MrDoob</a> x
			<a href="https://github.com/ianpaschal/three-vue-viewport/blob/master/src/PerspectiveViewport.js">IanPaschal</a> x
			<a href="https://github.com/frantsen/portfolio/tree/master/src/components/ThreeRemix.vue">Frantsen</a><br>
			<div class="overlay-subtext">
				utilizing
				<a href="https://threejs.org">Three.js</a> +
				<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API">WebGL</a> +
				<a href="https://vuejs.org">Vue.js</a> +
				<a href="https://vuex.vuejs.org">Vuex</a>
			</div>
		</div>
	</div>
</template>

<script>
import WaveScene from './WaveScene';

export default {
	name: 'three-remix',
	components: {WaveScene},
	mounted() {
		let camera = this.$store.state.camera;
		camera.position.set(1290, 240, 2000);
		camera.rotation.set(-0.11979, 0.56976, 0.06484);
	},
};
</script>

<style lang="scss" scoped>
.three-remix {
	position: relative;
	height: 100vh;
	width: 100vw;
}

.frame {
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	background-color: #000;
}

.overlay-text {
	color: rgba(255, 255, 255, .2);
	font-weight: bold;
	font-size: 6vmax;
	position: absolute;
	padding: 10px;

	a {
		text-decoration: none;
		color: inherit;
	}

	.overlay-subtext {
		font-size: 4vmax;
	}
}
</style>
