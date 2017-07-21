<template>
    <div id="navigation" v-if="screen !== undefined" @mouseleave="collapse">
        <div id="menu-wrapper"
            v-if="active"
            @mouseover="cancelCollapse">
            <div v-for="(item, index) in topMenuItems" :key="`top-menu-${index}`">
                {{item.label}}
            </div>
        </div>
        <div id="screen-wrapper">
            <div id="menu-icon" @click="expand">≡</div>
            <div id="screen-title">
                Rachel Frantsen
                <span v-if="screen !== 'home'">| {{title}}</span>
            </div>
        </div>
        <div class="menu">
        </div>
        <br>
        <br>
    </div>
</template>

<script>
export default {
    name: 'navigation',
    props: [
        'screen', 'title',
    ],
    data() {
        return {
            active: false,
            wait: {},
            menuItems: [
                {
                    name: 'home',
                    label: 'Home',
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
                    name: 'contact',
                    label: 'Get Connected',
                },
            ],
        };
    },
    computed: {
        splitIndex() {
            var i = 0;
            for (; this.screen !== this.menuItems[i].name; ++i);
            return i;
        },
        topMenuItems() {
            return this.menuItems.slice(0, this.splitIndex);
        },
        sideMenuItems() {
            return this.menuItems.slice(this.splitIndex);
        },
    },
    methods: {
        expand() {
            this.active = true;
        },
        collapse() {
            this.wait = setTimeout(() => this.active = false, 3000);
        },
        cancelCollapse() {
            clearTimeout(this.wait);
        },
    },
};
</script>

<style scoped>
#screen-wrapper {
    text-align: center;
}

#screen-wrapper:hover #menu-icon{
    opacity: 1.0;
    cursor: crosshair;
}

#menu-icon {
    position: absolute;
    width: 100%;
    background-color: #fafafa;
    opacity: 0.0;
    transition: 500ms;
    padding: 20px 0px;
}

#screen-title {
    padding: 20px 0px;
}

#menu-wrapper {
    cursor: crosshair;
}
</style>
