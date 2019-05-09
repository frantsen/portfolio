<template>
	<perspective-viewport :mouseControlEnabled="mouseControlEnabled"/>
</template>

<script>
import * as Three from 'three';
import PerspectiveViewport from './PerspectiveViewport';

export default {
	name: 'wave-scene',
	components: {
		PerspectiveViewport,
	},
	props: {
		mouseControlEnabled: {
			type: Boolean,
			required: false,
			default: false,
		},
		framesPerSecond: {
			type: Number,
			required: false,
			default: 60,
		},
	},
	data: () => ({
		count: 0,
		particles: new Three.Points(),
		SEPARATION: 100,
		AMOUNTX: 50,
		AMOUNTY: 50,
	}),
	mounted() {
		let camera = this.$store.state.camera;
		camera.position.set(-2064.68917, 346.34446, -1157.06702);
		camera.rotation.set(-2.85075, -1.04149, -2.88875);

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

			setInterval( () => this.loop(), 1000 / this.framesPerSecond );
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
