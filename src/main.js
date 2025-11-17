import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import GoogleAnalytics from './scripts/google_analytics';

const app = createApp(App);

// Use Vuex store (Vuex 4)
app.use(store);

// Add navigation helper to global properties
app.config.globalProperties.$navigateTo = function(route) {
	window.location.hash = route;
};

app.mount('#app');
