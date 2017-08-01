<template>
    <div id="navigation" v-if="screen !== undefined">
        <div id="menu-wrapper"
            @mouseover="cancelCollapse"
            @mouseleave="delayCollapse"
            style="position: absolute"
            :style="{ 'height' : `${cardMargin+menuItemPadding*topMenuItems.length*active}px`}">
            <div v-for="(item, index) in topMenuItems"
                :key="`top-menu-${index}`"
                class="card"
                :style="{ 'margin-left' : `${cardMargin*index*active}px`,
                    'margin-top' : `${2*(cardMargin+menuItemPadding)*index*active}px`,
                    'padding' : `${cardMargin}px`,
                    'opacity' : `${1.0*active}`,
                    'border' : '1px solid #ddd' }"
                @click="nextPage(item)">
                {{item.label}}
            </div>
        </div>
        <div class="card"
            :style="{ 'margin-left' : `${cardMargin*topMenuItems.length*active}px`,
                'margin-top' : `${2*(cardMargin+menuItemPadding)*topMenuItems.length*active}px`,
                'border' : '1px solid #'+((active)?'ddd':'fff') }">
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
            this.cancelCollapse();
        },
        collapse() {
            this.active = false;
        },
        delayCollapse() {
            this.wait = setTimeout(() => this.collapse(), 2000);
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
    width: 100vw;
    height: 100vh;
    transition: 1s;
}
</style>
