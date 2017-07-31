<template>
    <div id="navigation" v-if="screen !== undefined">
        <div id="menu-wrapper"
            v-show="active"
            @mouseover="cancelCollapse"
            @mouseleave="delayCollapse">
            <div v-for="(item, index) in topMenuItems"
                :key="`top-menu-${index}`"
                class="card"
                :style="{ 'margin-left' : `${cardMargin*index}px`,
                    'margin-top' : `${2*(cardMargin+menuItemPadding)*index}px`,
                    'padding' : `${cardMargin}px` }"
                @click="nextPage(item)">
                {{item.label}}
            </div>
        </div>
        <div :class="{ 'card': active }"
            style="width: 100vw;"
            :style="{ 'margin-left' : `${cardMargin*topMenuItems.length*active}px`,
                'margin-top' : `${2*(cardMargin+menuItemPadding)*topMenuItems.length*active}px` }">
            <div id="screen-wrapper">
                <div id="menu-icon" @click="expand">≡</div>
                <div id="screen-title">
                    Rachel Frantsen
                    <span v-if="screen !== 'home'">| {{title}}</span>
                </div>
            </div>
            <slot>Error</slot>
        </div>
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
            menuItemPadding: 10,
            cardMargin: 15,
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
            this.active = false;
        },
        delayCollapse() {
            this.wait = setTimeout(() => this.collapse(), 1000);
        },
        cancelCollapse() {
            clearTimeout(this.wait);
        },
        nextPage(routeName) {
            this.collapse();
            this.$router.push(routeName)
        }
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

.card {
    position: absolute;
    border: 1px solid #ddd;
    width: 100vw;
    height: 100vh;
}
</style>
