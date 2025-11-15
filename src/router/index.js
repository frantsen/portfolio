import Vue from '@vue/compat';
import Router from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Home from '../components/Home';
import Error404 from '../components/screens/Error404';
import ThreeRemix from '../components/ThreeRemix';

Vue.use(Router);
Vue.use(VueScrollTo);

export default new Router({
	mode: 'hash',
	routes: [
		{
			name: 'home',
			path: '/',
			component: Home,
		},
		{
			name: 'threeJSattempt',
			path: '/three-remix',
			component: ThreeRemix,
			meta: {
				title: 'MrDoob x IanPaschal - Three.js + WebGL + Vue'
			},
		},
		{
			name: 'error',
			path: '*',
			component: Error404,
			meta: {
				title: 'Not Found',
			},
		},
	],
});
