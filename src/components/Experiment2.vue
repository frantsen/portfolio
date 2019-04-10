<template>
  <div>
    hello
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
					<OrthographicViewport view='top'/>
				</div>
				
			</div>
			<div class="frame-bottom"></div>
		</div>
	`
};

let cube;

export default {
    name: 'experiment-two',
    components: {
      Frame,
    },
		data: function() {
			return {
				windowWidth: 0,
        windowHeight: 0,
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
				let geometry = new Three.BoxGeometry( 1, 1, 1 );
				let material = new Three.MeshBasicMaterial({ color: 0x00ff00 });
				cube = new Three.Mesh( geometry, material );
				cube.name = "myCube";
				this.$store.state.scene.add( cube );

				setInterval( loop, 1000 / 60 );
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
		}
  };
  
  
function loop() {
  cube.rotation.z += 0.05;
}
</script>

