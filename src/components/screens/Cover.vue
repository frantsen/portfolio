<template>
	<div class="cover">
		<div class="background-tile">
		</div>
		<div class="canvas-wrapper viewport perspective"
			v-on:mousemove="mousemove">
			<!-- v-resize.debounce="onResize"> -->
			<div class="layer2D">
				<!-- <p>Perspective</p> -->
			</div>
			<canvas class="layer3D"></canvas>
		</div>
		<div class="cover-text">
			Rachel Frantsen
		</div>
		<div class="clickable-overlay" @click="navigateNext">
		</div>
	</div>
</template>

<script>
import * as Three from 'three';
// Vision: 3d particlescape with lines drawn only between nodes within a vertical zone
// Z-faded for depth and x/y boundary, opacity based on proximity to visible vertical zone
export default {
	name: 'cover',
	data() {
		return {
			raycaster: new Three.Raycaster(),
			mouse: new Three.Vector2(),
			width: 0,
			height: 0,
			shaded: true,
			zoom: 1000,
			scene: new Three.Scene(),
		};
	},
	render() {
		var SEPARATION = 100, AMOUNTX = 50, AMOUNTY = 50;
		var container, stats;
		var camera, scene, renderer;
		var particles, count = 0;
		var mouseX = 0, mouseY = 0;
		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;
		
		var numParticles = AMOUNTX * AMOUNTY;
		var positions = new Float32Array( numParticles * 3 );
		var scales = new Float32Array( numParticles );
		var i = 0, j = 0;
		for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
			for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
				positions[ i ] = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 ); // x
				positions[ i + 1 ] = 0; // y
				positions[ i + 2 ] = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 ); // z
				scales[ j ] = 1;
				i += 3;
				j ++;
			}
		}
		var geometry = new Three.BufferGeometry();
		geometry.addAttribute( 'position', new Three.BufferAttribute( positions, 3 ) );
		geometry.addAttribute( 'scale', new Three.BufferAttribute( scales, 1 ) );
		var material = new Three.ShaderMaterial( {
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
		} );
		//
		particles = new Three.Points( geometry, material );
		this.scene.add( particles );
	},
	mounted() {
		this.width = this.$el.offsetWidth;
		this.height = this.$el.offsetHeight;
		// this.aspect = this.width / this.height;

		this.camera = new Three.PerspectiveCamera( 75, this.aspect, 1, 1024 );
		this.camera.position.set( this.zoom, this.zoom, this.zoom );
		this.camera.up.set( 0, 0, 1 );
		this.camera.lookAt( new Three.Vector3( 0, 0, 0 ) );
		this.renderer = new Three.WebGLRenderer({
			alpha: true,
			antialias: false,
			canvas: this.$el.getElementsByTagName("canvas")[ 0 ]
		});
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( this.width, this.height );
		// this.controls = new OrbitControls( this.camera, this.$el );
		// this.controls.enabled = true;

		// Start the rendering loop:
		this.loop();
	},
	computed: {
		aspect() {
			return this.width / this.height;
		},
	},
	methods: {
		loop() {
			this.renderer.render( this.scene, this.camera );
			requestAnimationFrame( this.loop );
		},

		// Returns position in 2D coordinates for point in 3D space:
		getPosition2D: function( point, camera, callback ) {
			let result = point.clone().project( camera );
			if ( typeof callback === "function" ) {
				callback( result );
				return;
			}
			return result;
		},
		// Normalize 2D coordinates to center (camera):
		normalizeToCenter( point, el, callback ) {
			let result = new Three.Vector2();
			result.x = ( point.x / el.clientWidth ) * 2 - 1;
			result.y = -( point.y / el.clientHeight ) * 2 + 1;
			if ( typeof callback === "function" ) {
				callback( result );
				return;
			}
			return result;
		},
		// Normalize 2D coordinates to corner (typical HTML):
		normalizeToCorner( point, el ) {
			return new Three.Vector2(
				point.x * (el.clientWidth / 2) + el.clientWidth / 2,
				-1 * point.y * (el.clientHeight / 2) + el.clientHeight / 2
			);
		},
		// raycast(type) {
		// 	let intersects, position;
		// 	position = this.normalizeToCenter( this.mouse, this.$el );
		// 	this.raycaster.setFromCamera( position, this.camera );
			// intersects = this.raycaster.intersectObjects( this.$store.state.scene.children, true );
			// if ( intersects.length > 0 ) {
			// 	// Emit event to parent component to handle!
			// }
		// },
		// Mouse move:
		mousemove(e) {
			this.mouse.x = e.offsetX;
			this.mouse.y = e.offsetY;
			this.raycast("mousemove");
		},
		// onResize(e) {
		// 	this.width = this.$el.offsetWidth;
		// 	this.height = this.$el.offsetHeight;
		// 	this.camera.aspect = this.width / this.height;
		// 	this.camera.updateProjectionMatrix();
		// 	this.renderer.setSize( this.width, this.height );
		// },
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

.viewport {
	width: 100%;
	height: 100%;
	position: relative;
}

.viewport.perspective {
	background: #CCC; /* For browsers that do not support gradients */
	background: -webkit-linear-gradient(var(--background-viewport-top), var(--background-viewport-bottom)); /* For Safari 5.1 to 6.0 */
	background: -o-linear-gradient(var(--background-viewport-top), var(--background-viewport-bottom)); /* For Opera 11.1 to 12.0 */
	background: -moz-linear-gradient(var(--background-viewport-top), var(--background-viewport-bottom)); /* For Firefox 3.6 to 15 */
	background: linear-gradient(var(--background-viewport-top), var(--background-viewport-bottom)); /* Standard syntax */
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
}

@media (max-width: 500px) and (orientation: portrait) {
	.cover-text {
		font-size: 11vmin;
	}
}
</style>
