<template>
    <div class="intro">
        <div class="card">
            <img :src="fullImgPath('portrait.png')" alt="Portrait"></img>
            <div class="card-text">
                Hello
            </div>
        </div>
    </div>
</template>

<script>
export default {
    class: 'intro',
    methods: {
        fullImgPath(name) {
            let imagePath = require.context('../../assets', false, /\.png$/);
            return imagePath('./' + name);
        },
    },
};
</script>

<style scoped>
.intro {
    height: 100%;
    width: 100vw;
    position: absolute;
    margin: 62px 0 0;
    text-align: center;
}

.card {
    background-color: slategray;
    min-height: 30vh;
    max-height: 50vh;
    min-width: 50vw;
    max-width: 100vw;
    display: inline-block;
    padding: 5%;
    margin-top: 12vh;
}

.card img {
    max-width: 50%;
    max-height: 50vh;
    float: left;
}

.card-text {
    color: #fff;
    float: right;
    width: 50%;
    margin-left: 5%;
    text-align: left;
    font-size: 26pt;
}
</style>
