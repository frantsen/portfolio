import Vue from 'vue';
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
		// {
		// 	name: 'blog',
		// 	path: '/blog',
		// 	component: Blog,
		// 	meta: {
		// 		title: 'Blog',
		// 	},
		// },
		{
			name: 'threeJSattempt',
			path: '/three-vue',
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
