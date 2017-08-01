import Vue from 'vue';
import Router from 'vue-router';
import Placeholder from '../components/screens/Placeholder';
import Cover from '../components/screens/Cover';
import Intro from '../components/screens/Intro';
import Skills from '../components/screens/Skills';
import Projects from '../components/screens/Projects';
import Blog from '../components/screens/Blog';
import Contact from '../components/screens/Contact';
import Navigation from '../components/Navigation';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Placeholder',
            component: Placeholder,
        },
        {
            path: '/home',
            name: 'home',
            component: Cover,
        },
        {
            path: '/intro',
            name: 'intro',
            component: Intro,
            meta: {
                title: 'Intro',
            },
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills,
            meta: {
                title: 'Skills',
            },
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            meta: {
                title: 'Projects',
            },
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,
            meta: {
                title: 'Blog',
            },
        },
        {
            path: '/connect',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Connect',
            },
        },
    ],
});
