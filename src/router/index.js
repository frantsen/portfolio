import Vue from 'vue';
import Router from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Home from '../components/Home';
import Error404 from '../components/screens/Error404';

Vue.use(Router);
Vue.use(VueScrollTo);

export default new Router({
	mode: 'history',
	routes: [
		{
			name: 'cover',
			path: '/',
			component: Home,
		},
		{
			name: 'intro',
			path: '/intro',
			component: Home,
			meta: {
				title: 'Intro',
			},
		},
		{
			name: 'skills',
			path: '/skills',
			component: Home,
			meta: {
				title: 'Skills',
			},
		},
		{
			name: 'connect',
			path: '/connect',
			component: Home,
			meta: {
				title: 'Connect',
			},
		},
		{
			name: 'error',
			path: '*',
			component: Error404,
			meta: {
				title: 'Not Found',
			},
		}
	],
});
