<template>
    <div id="navigation">
        <div class="title nav-text">
            Rachel Frantsen <span v-if="title !== 'Hello'">| {{title}}</span>
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
                    name: 'hello',
                    label: 'Hello',
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
                    name: 'contact',
                    label: 'Get Connected',
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
    transition: .6s ease-out;
    transform: scaleY(0);
    color: #fff;
    background-color: #fff;
}

#navigation:hover .nav-wrapper {
    transition: .6s ease-out;
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
    transition: 2s ease-out;
    position: absolute;
    transform-origin: top;
}

.nav-wrapper {
    position: absolute;
    /* transform: translateX(100%); */
    transform: scaleY(0);
    background-color: rgba(150,150,150,1);
    transition: 2s ease-out;
    width: 100%;
    transform-origin: bottom;
}

.nav-item {
    display: inline-block;
    width: calc(100%/4);
    transition: background-color .3s;
}

.nav-item:hover {
    background-color: #fafafa;
}

.active {
    color: #777777;
}
</style>
