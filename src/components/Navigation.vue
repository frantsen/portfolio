<template>
    <div id="navigation">
        <div class="title-wrapper">
            <div class="title">
                Rachel Frantsen
                <span v-if="title !== 'Hello'">| {{title}}</span>
            </div>
        </div>
        <div class="nav-wrapper">
            <div
                v-for="(item, index) in menuItems"
                :key="`nav-item-${index}`"
                class="nav-item"
                v-on:click="$emit('click', item.name)">
                <div v-if="item.label === title" class="active">{{item.label}}</div>
                <div v-if="item.label !== title">{{item.label}}</div>
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
            active: false,
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
                    name: 'blog',
                    label: 'Blog',
                },
                {
                    name: 'contact',
                    label: 'Get Connected',
                },
            ],
        };
    },
    methods: {
        scrollTo(item) {
            alert(`goto ${item}`);
        },
    },
};
</script>

<style scoped>
#navigation {
    width: 100%;
    background-color: #fafafa;
}

#navigation:hover .title-wrapper {
    cursor: crosshair;
    transition: .6s ease-in-out;
}

#navigation:hover .title {
    left: -65%;
    transition: .6s ease-in-out;
}

#navigation:hover .nav-wrapper {
    transition: .6s ease-in-out;
    left: 0%;
    opacity: 1.0;
    cursor: crosshair;
}

.title-wrapper {
    position: absolute;
    width: 100%;
    text-align: center;
    transition: 2s ease-in-out;
}

.title {
    position: relative;
    left: 0%;
    font-variant: small-caps;
    padding: 20px 0px 20px 0px;
    letter-spacing: 3px;
    transition: 2s ease-in-out;
}

.nav-wrapper {
    position: relative;
    left: 65%;
    opacity: 0.0;
    transition: 2s ease-in-out;
}

.nav-item {
    letter-spacing: 3px;
    display: inline-block;
    text-align: center;
    width: 20%;
    padding: 20px 0px 20px 0px;
    font-variant: small-caps;
    display: inline-block;
    transition: background-color .3s;
}

.nav-item:hover {
    background-color: #f0f0f0;
}

.active {
    color: #777777;
}
</style>
