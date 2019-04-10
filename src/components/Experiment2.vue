<template>
  <div>
    <frame></frame>
  </div>
</template>

<script>
import * as Three from 'three';
import PerspectiveViewport from "../../external_modules/PerspectiveViewport.js";
import OrthographicViewport from "../../external_modules/OrthographicViewport.js";

let Frame = {
	name: "Frame",
	components: {
		PerspectiveViewport,
		OrthographicViewport
	},
	template: `
		<div id="frame-id">
			<div class="frame-top"></div>
			<div class="frame-mid">
				<div class='viewport-container'>
					<PerspectiveViewport/>
				</div>
			</div>
			<div class="frame-bottom"></div>
		</div>
  `,
};

export default {
    name: 'experiment-two',
    components: {
      Frame,
    },
		data: function() {
			return {
				windowWidth: 0,
        windowHeight: 0,
        cube: new Three.Mesh(),
        count: 0,
        particles: new Three.Points(),
        SEPARATION: 100,
        AMOUNTX: 50,
        AMOUNTY: 50,
			};
		},
		render: h => h( Frame ),
		beforeMount() {
			window.addEventListener("resize", this.getWindowWidth );
			window.addEventListener("resize", this.getWindowHeight );
		},
		mounted: function() {
			this.$nextTick(function() {

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
				this.particles = new Three.Points( geometry, material );
        this.particles.name = "myParticles";
				this.$store.state.scene.add( this.particles );

				setInterval( () => this.loop(), 1000 / 60 );
			});
		},
		beforeDestroy() {
			window.removeEventListener("resize", this.getWindowWidth );
			window.removeEventListener("resize", this.getWindowHeight );
		},
		methods: {
			getWindowWidth: function( e ) {
				this.windowWidth = document.documentElement.clientWidth;
			},
			getWindowHeight: function( e ) {
				this.windowHeight = document.documentElement.clientHeight;
      },
      loop() {
        // this.cube.rotation.x += 0.01;
        // this.cube.rotation.y += 0.02;
        var positions = this.particles.geometry.attributes.position.array;
				var scales = this.particles.geometry.attributes.scale.array;
				var i = 0, j = 0;
				for ( var ix = 0; ix < this.AMOUNTX; ix ++ ) {
					for ( var iy = 0; iy < this.AMOUNTY; iy ++ ) {
						positions[ i + 1 ] = ( Math.sin( ( ix + this.count ) * 0.3 ) * 50 ) +
										( Math.sin( ( iy + this.count ) * 0.5 ) * 50 );
						scales[ j ] = ( Math.sin( ( ix + this.count ) * 0.3 ) + 1 ) * 8 +
										( Math.sin( ( iy + this.count ) * 0.5 ) + 1 ) * 8;
						i += 3;
						j ++;
					}
				}
				this.particles.geometry.attributes.position.needsUpdate = true;
        this.particles.geometry.attributes.scale.needsUpdate = true;
        this.count += 0.1;
      }
		}
  };

</script>

<style>
.frame-mid {
  background-color: #000;
}
</style>
