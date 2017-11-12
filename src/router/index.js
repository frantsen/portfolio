import Vue from 'vue';
import Router from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Home from '../components/Home';
import Error404 from '../components/screens/Error404';

Vue.use(Router);
Vue.use(VueScrollTo);

export default new Router({
	routes: [
		{
			name: 'home',
			path: '/',
			component: Home,
		},
		{
			path: '/*',
			name: 'error',
			component: Error404,
			meta: {
				title: 'Not Found',
			},
		}
	],
});
