<template>
    <div class="cover">
        <div class="background-tile">
        </div>
        <div class="animation-wrapper">
        </div>
        <div class="cover-text">
            Rachel Frantsen
        </div>
    </div>
</template>

<script>
export default {
    name: 'cover',
};
</script>

<style scoped>
.class {
    position: relative;
}

.background-tile {
    position: absolute;
    width: 65vw;
    margin: 17.5vh 17.5vw;
    background-color: lightslategray;
    height: 65vh;
}

.animation-wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
}

.cover-text {
    position: absolute;
    width: 100%;
    padding-top: calc(50vh - 21px * 1.825);
    color: #fff;
    text-align: center;
    font-size: 42pt;
    font-weight: bold;
    letter-spacing: 5px;
}
</style>
