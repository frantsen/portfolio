import Vue from 'vue';
import Router from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import Home from '../components/Home';

Vue.use(Router);
Vue.use(VueScrollTo);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
	],
});
