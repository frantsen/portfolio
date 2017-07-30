// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import GoogleAnalytics from './scripts/google_analytics';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	let siteName = 'Rachel Frantsen';
	if (to.meta.title === undefined) {
		document.title = siteName;
	} else {
		if (to.name === 'intro') {
			document.title = siteName + ' | ' + to.meta.title;
		} else {
			document.title = to.meta.title + ' | ' + siteName;
		}
	}
	next();
});

router.afterEach((to, from) => {
  ga('set', 'page', to.fullPath);
  ga('send', 'pageview');
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
});
