import Vue from 'vue';
import Router from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Home from '../components/Home';
import Error404 from '../components/screens/Error404';
import Experiment from '../components/Experiment';
import Experiment2 from '../components/Experiment2';

Vue.use(Router);
Vue.use(VueScrollTo);

export default new Router({
	mode: 'history',
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
			path: '/experiment',
			component: Experiment,
			meta: {
				title: 'Three.js Experiment'
			}
		},
		{
			name: 'secondthreeJSattempt',
			path: '/experiment2',
			component: Experiment2,
			meta: {
				title: 'Three.js Experiment'
			}
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
