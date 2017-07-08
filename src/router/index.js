import Vue from 'vue';
import Router from 'vue-router';
import Placeholder from '../components/Placeholder';
import Home from '../components/Home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Placeholder',
            component: Placeholder,
        },
        {
            path: '/wip',
            name: 'WIP',
            component: Home,
        }
    ],
});
