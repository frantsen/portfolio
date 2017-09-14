<template>
    <div class="intro">
        <div class="stripe">
            <div class="stripe-internal">
                <img :src="fullImgPath('portrait.png')" alt="Portrait">
                </img><div class="stripe-text">
                    currently geeking out<br>
                    about scientific<br>
                    computing, the<br>
                    science of computing,<br>
                    and engineering<br>
                    as art.
                </div>
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

.stripe {
    background-color: slategray;
    height: 40vh;
    padding: 5vw 0;
    margin-top: calc(20vh - 62px);
    position: relative;
}

.stripe-internal {
    min-width: 54vw;
    height: 100%;
    position: relative;
    float: right;
}

.stripe img {
    max-height: 40vh;
    max-width: 42.4vw;
    float: left;
    display: table-cell;
}

.stripe-text {
    color: #fff;
    margin-left: 5%;
    text-align: left;
    overflow: hidden;
    font-size: 3.5vmax;
    height: 45vh;
    width: 42.4vw;
    padding: 0 5vw;
    display: table-cell;
}
</style>
