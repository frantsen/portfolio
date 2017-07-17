<template>
    <div id="navigation">
        <div class="title-wrapper">
            <div class="title">
                Rachel Frantsen
                <span v-if="title">| {{title}}</span>
            </div>
            <!-- <div class="menuIcon">≡</div> -->
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
                    name: 'contact',
                    label: 'Get Connected',
                },
            ],
        };
    },
};
</script>

<style scoped>


</style>
