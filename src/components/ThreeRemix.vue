<template>
	<div class='three-remix'>
		<perspective-viewport class="frame"/>
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
import * as Three from 'three';
import PerspectiveViewport from './PerspectiveViewport';

export default {
		name: 'experiment',
		components: {
			PerspectiveViewport,
		},
		data: () => ({
			count: 0,
			particles: new Three.Points(),
			SEPARATION: 100,
			AMOUNTX: 50,
			AMOUNTY: 50,
		}),
		mounted() {
			this.$nextTick(() => {
				// Build the Three.js scene:
				let numParticles = this.AMOUNTX * this.AMOUNTY;

				var positions = new Float32Array( numParticles * 3 );
				var scales = new Float32Array( numParticles );
				
				var i = 0, j = 0;
				for ( var ix = 0; ix < this.AMOUNTX; ix ++ ) {
					for ( var iy = 0; iy < this.AMOUNTY; iy ++ ) {
						positions[ i ] = ix * this.SEPARATION - ( ( this.AMOUNTX * this.SEPARATION ) / 2 ); // x
						positions[ i + 1 ] = 0; // y
						positions[ i + 2 ] = iy * this.SEPARATION - ( ( this.AMOUNTY * this.SEPARATION ) / 2 ); // z
						scales[ j ] = 1;
						i += 3;
						j ++;
					}
				}
				
				var geometry = new Three.BufferGeometry();
				geometry.addAttribute( 'position', new Three.BufferAttribute( positions, 3 ) );
				geometry.addAttribute( 'scale', new Three.BufferAttribute( scales, 1 ) );

				var material = new Three.ShaderMaterial({
					uniforms: {
						color: { value: new Three.Color( 0xffffff ) },
					},
					vertexShader: `attribute float scale;
						void main() {
							vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
							gl_PointSize = scale * ( 300.0 / - mvPosition.z );
							gl_Position = projectionMatrix * mvPosition;
						}`,
					fragmentShader: `uniform vec3 color;
						void main() {
							if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
							gl_FragColor = vec4( color, 1.0 );
						}`
					});

				this.particles = new Three.Points( geometry, material );
				this.particles.name = "myParticles";
				this.$store.state.scene.add( this.particles );

				setInterval( () => this.loop(), 1000 / 60 );
			});
		},
		methods: {
			loop() {
				var position = this.particles.geometry.attributes.position;
				var scale = this.particles.geometry.attributes.scale;
				var i = 0, j = 0;
				for ( var ix = 0; ix < this.AMOUNTX; ix ++ ) {
					for ( var iy = 0; iy < this.AMOUNTY; iy ++ ) {
						position.array[ i + 1 ] = ( Math.sin( ( ix + this.count ) * 0.3 ) * 50 ) +
										( Math.sin( ( iy + this.count ) * 0.5 ) * 50 );
						scale.array[ j ] = ( Math.sin( ( ix + this.count ) * 0.3 ) + 1 ) * 8 +
										( Math.sin( ( iy + this.count ) * 0.5 ) + 1 ) * 8;
						i += 3;
						j ++;
					}
				}
				position.needsUpdate = true;
				scale.needsUpdate = true;
				this.count += 0.1;
			}
		}
	};

</script>

<style lang="scss" scoped>
.three-remix {
	position: relative;
}

.frame {
	background-color: #000;
	height: 100vh;
	width: 100vw;
	position: absolute;
	overflow: hidden;
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

/* .viewport {
	width: 100%;
	height: 100%;
	position: relative;
}

.viewport.perspective {
	background: #CCC; // For browsers that do not support gradients
	background: -webkit-linear-gradient(var(--background-viewport-top), var(--background-viewport-bottom)); // For Safari 5.1 to 6.0
	background: -o-linear-gradient(var(--background-viewport-top), var(--background-viewport-bottom)); // For Opera 11.1 to 12.0
	background: -moz-linear-gradient(var(--background-viewport-top), var(--background-viewport-bottom)); // For Firefox 3.6 to 15
	background: linear-gradient(var(--background-viewport-top), var(--background-viewport-bottom)); // Standard syntax
}

.viewport .layer2D, .viewport .layer3D {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}

.layer2D {
	color: white;
	font-size: 11px;
	box-sizing: border-box;
	padding: 8px;
	font-weight: 300;
} */
</style>
