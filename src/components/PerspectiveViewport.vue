<template>
	<div class="viewport perspective"
		v-on:mousedown="mousedown"
		v-on:mousemove="mousemove"
		v-on:mouseup="mouseup"
		v-resize.debounce="onResize">
		<canvas class="layer3D"/>
	</div>
</template>

<script>
import * as Three from "three";
import resize from "vue-resize-directive";
// import OrbitControlModule from "three-orbit-controls";
// const OrbitControls = OrbitControlModule(Three);

export default {
	name: 'perspective-viewport',
	directives: {resize},
	props: {
		mouseControlEnabled: {
			type: Boolean,
			required: false,
			default: false,
		},
	},
	data: () => ({
		renderer: new Three.WebGLRenderer(),
		raycaster: new Three.Raycaster(),
		mouse: new Three.Vector2(),
		width: 0,
		height: 0,
		shaded: true,
		zoom: 3,
	}),
	mounted() {
		this.updateDimensions();
		let aspect = this.width / this.height;
		let camera = new Three.PerspectiveCamera(50, aspect, 1, 10000);
		this.$store.state.scene.add(camera);
		this.$store.state.camera = camera;
		
		this.renderer = new Three.WebGLRenderer({
			alpha: true,
			antialias: false,
			canvas: this.$el.getElementsByTagName("canvas")[ 0 ]
		});
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( this.width, this.height );

		// this.controls = new OrbitControls(camera, this.$el);
		// this.controls.enabled = true;

		// Start the rendering loop:
		this.loop();
	},
	methods: {
		loop() {
			let scene = this.$store.state.scene;
			let camera = this.$store.state.camera;

			if (this.mouseControlEnabled) {
				camera.position.x += ( this.mouse.x - camera.position.x ) * .05;
				camera.position.y += ( - this.mouse.y - camera.position.y ) * .05;
				camera.lookAt( scene.position );
			}

			requestAnimationFrame( this.loop );
			this.renderer.render( scene, camera );
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
		raycast(type) {
			let intersects, position;
			position = this.normalizeToCenter( this.mouse, this.$el );
			this.raycaster.setFromCamera( position, this.$store.state.camera );
			intersects = this.raycaster.intersectObjects( this.$store.state.scene.children, true );
			if ( intersects.length > 0 ) {
				this.$emit('intersects', intersects.length);
			}
		},
		// Mouse move:
		mousemove(e) {
			if (!this.mouseControlEnabled) return;
			this.mouse.x = e.offsetX - this.width/2;
			this.mouse.y = e.offsetY - this.height/2;
			// this.mouse.x = e.offsetX;
			// this.mouse.y = e.offsetY;
			this.raycast("mousemove");
		},
		// Mouse down:
		mousedown(e) {
			if (!this.mouseControlEnabled) return;
			this.raycast("mousedown");
		},
		// Mouse up:
		mouseup(e) {
			if (!this.mouseControlEnabled) return;
			this.raycast("mouseup");
		},
		updateDimensions() {
			this.width = this.$el.offsetWidth;
			this.height = this.$el.offsetHeight;
		},
		onResize(e) {
			this.updateDimensions();

			let camera = this.$store.state.camera;
			camera.aspect = this.width/this.height;
			camera.updateProjectionMatrix();

			this.renderer.setSize( this.width, this.height );
		},
	}
};
</script>
