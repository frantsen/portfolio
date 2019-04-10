// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store';
import GoogleAnalytics from './scripts/google_analytics';

Vue.use(Vuex)

Vue.config.productionTip = false;

router.afterEach((to, from) => {
	ga('set', 'page', to.fullPath);
	ga('send', 'pageview');
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store: store,
	router: router,
	template: '<App/>',
	components: { App }
});
