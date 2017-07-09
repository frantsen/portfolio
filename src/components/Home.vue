<template>
    <div id="home">
        <cover class="screen"></cover>
        <div id="hello">
            <nav-menu :title="'Hello'" @click="jump"></nav-menu>
            <hello class="screen"></hello>
        </div>
        <div id="skills">
            <nav-menu :title="'Skills'" @click="jump"></nav-menu>
            <skills class="screen"></skills>
        </div>
        <div id="projects">
            <nav-menu :title="'Projects'" @click="jump"></nav-menu>
            <projects class="screen"></projects>
        </div>
        <!--
            <div id="blog">
            <nav-menu :title="'Blog'" @click="jump"></nav-menu>
            <blog class="screen"></blog>
            </div>
        -->
        <div id="contact" class="screen">
            <nav-menu :title="'Get Connected'" @click="jump"></nav-menu>
            <contact></contact>
        </div>
    </div>
</template>

<script>
import NavMenu from './Navigation';
import Cover from './screens/Cover';
import Hello from './screens/Hello';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Blog from './screens/Blog';
import Contact from './screens/Contact';

export default {
    name: 'home',
    components: {
        Cover,
        NavMenu,
        Hello,
        Skills,
        Projects,
        Blog,
        Contact,
    },
    data() {
        return {
            screens: [
                'hello',
                'skills',
                'projects',
                'blog',
                'contact',
            ],
        };
    },
    methods: {
        jump(section) {
            this.$scrollTo(`#${section}`, 1000, {
                easing: 'ease-in-out',
                cancelable: true,
            });
        },
    },
};
</script>

<style scoped>
.screen {
    height: 100vh;
}

#home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
