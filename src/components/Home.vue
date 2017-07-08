<template>
    <div id="home">
        <cover class="screen"></cover>
        <div>
            <nav-menu :title="'Hello'"></nav-menu>
            <hello class="screen"></hello>
        </div>
        <div>
            <nav-menu :title="'Skills'"></nav-menu>
            <skills class="screen"></skills>
        </div>
        <div>
            <nav-menu :title="'Projects'"></nav-menu>
            <projects class="screen"></projects>
        </div>
        <div>
            <nav-menu :title="'Blog'"></nav-menu>
            <blog class="screen"></blog>
        </div>
        <div class="screen">
            <nav-menu :title="'Get Connected'"></nav-menu>
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
};
</script>

<style scoped>
.screen {
    height: 100vh;
}
</style>
