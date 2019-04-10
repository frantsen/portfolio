<template>
  <div>
    <frame></frame>
  </div>
</template>

<script>
import Stats from "stats-js";
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
	`
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
				// let geometry = new Three.BoxGeometry( 1, 1, 1 );
        // let material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
        
				let geometry = new Three.CubeGeometry(200, 200, 200);
        let material = new Three.MeshNormalMaterial();

        this.cube = new Three.Mesh(geometry, material);
				this.cube.name = "myCube";
				this.$store.state.scene.add( this.cube );

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
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.02;
      }
		}
  };

</script>

