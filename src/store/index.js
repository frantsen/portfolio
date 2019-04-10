import * as Three from 'three';
// import Vue = require("vue/dist/vue.min.js");
// const Vuex = require("vuex");
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use( Vuex );

export default new Vuex.Store({
	state: {
		scene: new Three.Scene(),
		bounds: {
			x: 200,
			y: 200,
			z: 400
		},
		sliceThickness: 2,
		move: true,
		gui: {
			showObjectEdge: true,
			showGizmos: false,
			showSceneBorders: true,
			objectEdgeSize: 8,
			gizmoSize: 64
		}
	},
	getters: {},
	mutations: {
		price( state, payload ) {
			// state.price = payload;
		}
	},
	actions: {
		loadFile( context, path ) {
			// context.state.scene.add( slices );
		}
	}
});
