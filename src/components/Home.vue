<template>
    <div id="home">
        <cover class="screen"></cover>
        <div v-for="(screen, index) in screens"
            :key="`screen-index-${index}`"
            :id="`screen-${screen.name}`">
            <div :class="{ 'screen': (screen.name === 'contact') }">
                <div :class="{ 'screen': (screen.name !== 'contact')}">
                    <nav-menu :title="screen.title" :items="screens" @click="jump"></nav-menu>
                    <hello v-if="screen.name === 'hello'"></hello>
                    <skills v-if="screen.name === 'skills'"></skills>
                    <projects v-if="screen.name === 'projects'"></projects>
                    <contact v-if="screen.name === 'contact'"></contact>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                {
                    name: 'hello',
                    title: 'Hello',
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
                    name: 'contact',
                    title: 'Get Connected',
                },
            ],
        };
    },
    methods: {
        jump(section) {
            this.$scrollTo(`#screen-${section}`, 1000, {
                easing: 'ease-in-out',
                cancelable: true,
            });
        },
    },
};
</script>

<style scoped>

</style>
