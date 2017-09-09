<template>
    <div id="navigation">
        <div class="title nav-text">
            Rachel Frantsen
            <span v-if="title !== 'Intro'">| {{title}}</span>
        </div>
        <div class="nav-wrapper">
            <div v-for="(item, index) in menuItems"
                :key="`nav-item-${index}`"
                class="nav-item nav-text"
                :class="{active: item.label === title}"
                @click="$emit('click', item.name)">
                {{item.label}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    props: [
        'title',
    ],
    data() {
        return {
            menuItems: [
                {
                    name: 'cover',
                    label: 'Top',
                },
                {
                    name: 'intro',
                    label: 'Intro',
                },
                {
                    name: 'skills',
                    label: 'Skills',
                },
                {
                    name: 'projects',
                    label: 'Projects',
                },
                {
                    name: 'connect',
                    label: 'Connect',
                },
            ],
        };
    },
};
</script>

<style scoped>
#navigation {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: calc(12pt + 40px);
    cursor: crosshair;
}

#navigation:hover .title {
    transition: .25s ease-out;
    transform: scaleY(0);
    color: rgba(255,255,255,.6);
    background-color: rgba(255,255,255,.6);
}

#navigation:hover .nav-wrapper {
    transition: .25s ease-out;
    transform: scaleY(1);
    background-color: rgba(0,0,0,0);
}

.nav-text {
    text-align: center;
    font-variant: small-caps;
    padding: 20px 0;
    letter-spacing: 3px;
}

.title {
    width: 100%;
    height: 100%;
    transition: .7s ease-in-out;
    position: absolute;
    transform-origin: top;
}

.nav-wrapper {
    position: absolute;
    transform: scaleY(0);
    background-color: rgba(0,0,0,.3);
    transition: .7s ease-in-out;
    width: 100%;
    transform-origin: bottom;
}

.nav-item {
    display: inline-block;
    width: calc(100%/5);
    transition: background-color .3s;
}

.nav-item:hover {
    background-color: rgba(0,0,0,.02);
}

.active {
    color: rgba(0,0,0,.53);
}
</style>
