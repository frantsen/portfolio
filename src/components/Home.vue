<template>
    <div id="home">
        <div v-for="(screen, index) in screens" :key="`screen-index-${index}`" :id="`screen-${screen.name}`" class="screen">
            <nav-menu v-if="screen.name !== 'cover'" :title="screen.title" :items="screens" @click="jumpTo"></nav-menu>
            <cover v-if="screen.name === 'cover'"></cover>
            <intro v-if="screen.name === 'intro'"></intro>
            <skills v-if="screen.name === 'skills'"></skills>
            <projects v-if="screen.name === 'projects'"></projects>
            <connect v-if="screen.name === 'connect'"></connect>
        </div>
    </div>
</template>

<script>
import NavMenu from './Navigation';
import Cover from './screens/Cover';
import Intro from './screens/Intro';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Blog from './screens/Blog';
import Connect from './screens/Connect';

export default {
    name: 'home',
    components: {
        Cover,
        NavMenu,
        Intro,
        Skills,
        Projects,
        Blog,
        Connect,
    },
    data() {
        return {
            screens: [
                {
                    name: 'cover',
                    title: 'Cover',
                },
                {
                    name: 'intro',
                    title: 'Intro',
                },
                {
                    name: 'skills',
                    title: 'Skills',
                },
                {
                    name: 'projects',
                    title: 'Projects',
                },
                {
                    name: 'connect',
                    title: 'Connect',
                },
            ],
        };
    },
    methods: {
        jumpTo(section) {
            this.$scrollTo(`#screen-${section}`, 1000, {
                easing: 'ease-out',
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
