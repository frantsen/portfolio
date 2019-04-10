<template>
	<div>
		<div id="my-animation"></div>
	</div>
</template>

<style>
#your-element-selector {
	width: 100vw;
	height: 100vh;
}
</style>

<script>
import Vue from 'vue';
import '../scripts/vanta.dots.js';

const VantaComponent = Vue.extend({
	mounted() {
		this.effect = VANTA.DOTS('#inner-id')
	},
	beforeDestroy() {
		if (this.effect) this.effect.destroy()
	},
	template: '<div id="inner-id"></div>'
});

export default {
	name: 'experiment',
	mounted() {
		new VantaComponent().$mount('#my-animation');
	}
}


// class MyComponent extends React.Component {
//     componentDidMount() {
//       this.effect = window.VANTA.BIRDS({
//         el: "#my-element"
//       })
//     }
//     componentWillUnmount() {
//       if (this.effect) this.effect.destroy()
//     }
//     render() {
//       return <div id="my-element"></div>
//     }
//   }
</script>

<!-- <script>
import * as THREE from 'three';
import VantaBase, {VANTA} from './_base.js'
import {rn, ri, sample, mobileCheck} from './helpers.js'
import Vue from 'vue';

class Effect extends VantaBase {
  static initClass() {
    this.prototype.defaultOptions = {
      color: 0xff8820,
      color2: 0xff8820,
      backgroundColor: 0x222222,
      size: 3,
      spacing: 35,
    };
  }

  onInit() {
    var camera = this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.1, 5000)
    camera.position.x = 0
    camera.position.y = 250
    camera.position.z = 50
    camera.tx = 0
    camera.ty = 50
    camera.tz = 350
    camera.lookAt(0,0,0)
    this.scene.add(camera)

    var starsGeometry = this.starsGeometry = new THREE.Geometry()
    var i,j,k,l,star,starsMaterial,starField
    var space = this.options.spacing
    for (i = k = -30; k <= 30; i = ++k) {
      for (j = l = -30; l <= 30; j = ++l) {
        star = new THREE.Vector3()
        star.x = i * space + space/2
        star.y = rn(0, 5) - 150
        star.z = j * space + space/2
        starsGeometry.vertices.push(star)
      }
    }
    starsMaterial = new THREE.PointsMaterial({
      color: this.options.color,
      size: this.options.size
    });
    starField = this.starField = new THREE.Points(starsGeometry, starsMaterial)
    this.scene.add(starField)

    var material = new THREE.LineBasicMaterial( { color: this.options.color2 } );
    var linesGeo = new THREE.Geometry()
    for (i = 0; i < 200; i ++) {
      var f1 = rn(40,60)
      var f2 = f1 + rn(12,20)
      // https://math.stackexchange.com/questions/1585975/how-to-generate-random-points-on-a-sphere
      var z = rn(-1,1)
      var r = Math.sqrt(1 - z*z)
      var theta = rn(0, Math.PI * 2)
      var y = Math.sin(theta) * r
      var x = Math.cos(theta) * r
      linesGeo.vertices.push(new THREE.Vector3( x*f1, y*f1, z*f1) )
      linesGeo.vertices.push(new THREE.Vector3( x*f2, y*f2, z*f2) )
    }
    this.linesMesh = new THREE.LineSegments( linesGeo, material )
    this.scene.add(this.linesMesh)

    // this.geometry = new THREE.BoxGeometry( 10, 10, 10 );
    // this.material = new THREE.MeshLambertMaterial({
    //   color: this.options.color,
    //   emissive: this.options.color,
    //   emissiveIntensity: 0.75
    // });
    // this.cube = new THREE.Mesh( this.geometry, this.material );
    // this.scene.add(this.cube);

    // const c = this.camera = new THREE.PerspectiveCamera( 75, this.width/this.height, 0.1, 1000 );
    // c.position.z = 30;
    // this.scene.add(c);

    // const light = new THREE.HemisphereLight( 0xffffff, this.options.backgroundColor , 1 );
    // this.scene.add(light);
  }

  onUpdate() {
    const starsGeometry = this.starsGeometry
    const starField = this.starField
    for (var j = 0; j < starsGeometry.vertices.length; j++) {
      var i = starsGeometry.vertices[j]
      i.y += 0.1 * Math.sin(i.z * 0.02 + i.x * 0.015 + this.t * 0.02)
    }
    starsGeometry.verticesNeedUpdate = true
    const c = this.camera
    const rate = 0.003
    c.position.x += (c.tx - c.position.x) * rate
    c.position.y += (c.ty - c.position.y) * rate
    c.position.z += (c.tz - c.position.z) * rate
    c.lookAt(0,0,0)

    this.linesMesh.rotation.z += 0.002
    this.linesMesh.rotation.x += 0.0008
    this.linesMesh.rotation.y += 0.0005
    // starField.rotation.y += (this.mouseX * 0.1 - starField.rotation.y) * 0.01
  }

  onMouseMove(x,y) {
    this.camera.tx = (x - 0.5) * 100 // -50 to 50
    this.camera.ty = 50 + y * 50 // 50 to 100
  }

  onRestart() {
    this.scene.remove( this.starField )
  }
}
Effect.initClass()
VANTA.register('DOTS', Effect)

let myComponent = new Vue({
  name: 'myComponent',
  el: '#my-element',
  mounted() {
    this.effect = window.VANTA.DOTS({
      el: "#my-element"
    })
  },
  beforeDestroy() {
    if (this.effect) this.effect.destroy()
  },
  render: h => h,
  template: '<myComponent/>',
});
</script> -->

<!-- <script>
// import OrbitControlModule from "three-orbit-controls";
// import * as Three from "three";
// const OrbitControls = OrbitControlModule( Three );
// import resize from "vue-resize-directive";
// import Stats from "stats-js";

// export default {
// 	name: "PerspectiveViewport",
// 	directives: {
// 		resize
// 	},
// 	// props: [ "options" ],
// 	data() {
// 		return {
// 			raycaster: new Three.Raycaster(),
// 			mouse: new Three.Vector2(),
// 			width: 1000,
// 			height: 1000,
// 			shaded: true,
// 			zoom: 3,
// 			scene: new Three.Scene(),

// 			SEPARATION: 100,
// 			AMOUNTX: 50,
// 			AMOUNTY: 50,
// 			container: {},
// 			stats: {},
// 			camera: {},
// 			scene: {},
// 			renderer: {},
// 			particles: {},
// 			count: 0,
// 			mouseX: 0,
// 			mouseY: 0,
// 			windowHalfX: .5,
// 			windowHalfY: .5,
// 		};
// 	},
// 	mounted() {
// 		this.width = this.$el.offsetWidth;
// 		this.height = this.$el.offsetHeight;
// 		// this.aspect = this.width / this.height;

// 		this.camera = new Three.PerspectiveCamera( 45, this.aspect, 1, 1024 );
// 		this.camera.position.set( this.zoom, this.zoom, this.zoom );
// 		this.camera.up.set( 0, 0, 1 );
// 		this.camera.lookAt( new Three.Vector3( 0, 0, 0 ) );
// 		this.renderer = new Three.WebGLRenderer({
// 			alpha: true,
// 			antialias: false,
// 			canvas: this.$el.getElementsByTagName("canvas")[ 0 ]
// 		});
// 		this.renderer.setPixelRatio( window.devicePixelRatio );
// 		this.renderer.setSize( this.width, this.height );
// 		this.controls = new OrbitControls( this.camera, this.$el );
// 		this.controls.enabled = true;

// 		this.stats = new Stats();
// 		container.appendChild( this.stats.dom );

// 		this.init();

// 		// Start the rendering loop:
// 		this.loop();
// 	},
// 	render: h => h(this.stats),
// 	computed: {
// 		aspect() {
// 			return this.width / this.height;
// 		}
// 	},
// 	methods: {
// 		init() {
// 			// this.windowHalfX = window.innerWidth / 2;
// 			// this.windowHalfY = window.innerHeight / 2;
// 			this.container = document.createElement( 'div' );
// 			// document.body.appendChild( container );
// 			// camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
// 			// camera.position.z = 1000;
// 			this.scene = new Three.Scene();
// 			// var AMOUNTX = 50;
// 			// var AMOUNTY = 50;
// 			var numParticles = this.AMOUNTX * this.AMOUNTY;

// 			var positions = new Float32Array( numParticles * 3 );
// 			var scales = new Float32Array( numParticles );
// 			var i = 0, j = 0;
// 			for ( var ix = 0; ix < this.AMOUNTX; ix ++ ) {
// 				for ( var iy = 0; iy < this.AMOUNTY; iy ++ ) {
// 					positions[ i ] = ix * this.SEPARATION - ( ( this.AMOUNTX * this.SEPARATION ) / 2 ); // x
// 					positions[ i + 1 ] = 0; // y
// 					positions[ i + 2 ] = iy * this.SEPARATION - ( ( this.AMOUNTY * this.SEPARATION ) / 2 ); // z
// 					scales[ j ] = 1;
// 					i += 3;
// 					j ++;
// 				}
// 			}

// 			var geometry = new Three.BufferGeometry();
// 			geometry.addAttribute( 'position', new Three.BufferAttribute( positions, 3 ) );
// 			geometry.addAttribute( 'scale', new Three.BufferAttribute( scales, 1 ) );
// 			var material = new Three.ShaderMaterial( {
// 				uniforms: {
// 					color: { value: new Three.Color( 0xffffff ) },
// 				},
// 				vertexShader: `attribute float scale;
// 			void main() {
// 				vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
// 				gl_PointSize = scale * ( 300.0 / - mvPosition.z );
// 				gl_Position = projectionMatrix * mvPosition;
// 			}`,
// 				fragmentShader: `uniform vec3 color;
// 			void main() {
// 				if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;
// 				gl_FragColor = vec4( color, 1.0 );
// 			}`
// 			} );
// 			//
// 			this.particles = new Three.Points( geometry, material );
// 			this.scene.add( this.particles );

// 			setInterval( this.loop, 1000 / 60 );
// 		},
// 		loop() {
// 			this.renderer.render( this.scene, this.camera );
// 			this.stats.update();
// 			requestAnimationFrame( this.loop );
// 		},

// 		// Returns position in 2D coordinates for point in 3D space:
// 		getPosition2D: function( point, camera, callback ) {
// 			let result = point.clone().project( camera );
// 			if ( typeof callback === "function" ) {
// 				callback( result );
// 				return;
// 			}
// 			return result;
// 		},
// 		// Normalize 2D coordinates to center (camera):
// 		normalizeToCenter( point, el, callback ) {
// 			let result = new Three.Vector2();
// 			result.x = ( point.x / el.clientWidth ) * 2 - 1;
// 			result.y = -( point.y / el.clientHeight ) * 2 + 1;
// 			if ( typeof callback === "function" ) {
// 				callback( result );
// 				return;
// 			}
// 			return result;
// 		},
// 		// Normalize 2D coordinates to corner (typical HTML):
// 		normalizeToCorner( point, el ) {
// 			return new Three.Vector2(
// 				point.x * (el.clientWidth / 2) + el.clientWidth / 2,
// 				-1 * point.y * (el.clientHeight / 2) + el.clientHeight / 2
// 			);
// 		},
// 		raycast(type) {
// 			let intersects, position;
// 			position = this.normalizeToCenter( this.mouse, this.$el );
// 			this.raycaster.setFromCamera( position, this.camera );
// 			intersects = this.raycaster.intersectObjects( this.scene.children, true );
// 			if ( intersects.length > 0 ) {
// 				// Emit event to parent component to handle!
// 			}
// 		},
// 		// Mouse move:
// 		mousemove(e) {
// 			this.mouse.x = e.offsetX;
// 			this.mouse.y = e.offsetY;
// 			this.raycast("mousemove");
// 		},
// 		// Mouse down:
// 		mousedown(e) {
// 			this.raycast("mousedown");
// 		},
// 		// Mouse up:
// 		mouseup(e) {
// 			this.raycast("mouseup");
// 		},

// 		onResize(e) {
// 			this.width = this.$el.offsetWidth;
// 			this.height = this.$el.offsetHeight;
// 			this.camera.aspect = this.width / this.height;
// 			this.camera.updateProjectionMatrix();
// 			this.renderer.setSize( this.width, this.height );
// 		}
// 	}
// };
// </script>

// <style scoped>
// .viewport {
// 	background-color: #000;
// 	margin: 0px;
// 	overflow: hidden;
// 	font-family:Monospace;
// 	font-size:13px;
// 	text-align:center;
// 	font-weight: bold;
// 	text-align:center;
// }
// </style>
-->