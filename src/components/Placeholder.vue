<template>
    <div class="placeholder">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'placeholder',
    data() {
        return {
            message: 'Hi! This is my personal site and it\'s brand new! I plan to have it up and running soon.',
        };
    },
};
</script>

<style scoped>
.placeholder {
    margin: 10px;
}
</style>
