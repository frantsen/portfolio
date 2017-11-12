<template>
    <div id="social">
        <div class="social-container">
            <span v-for="(link, index) in links" :key="`social-link-${index}`">
                <a :href="link.url" class="social-link">
                    <img :src="fullImgPath(link.label)" :alt="link.label"></img>
                    <div class="social-description">{{link.description}}</div>
                </a><br>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'social',
    data() {
        return {
            links: [
                {
                    label: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/rachelfrantsen/',
                    description: 'Connect with me on LinkedIn',
                },
                {
                    label: 'GitHub',
                    url: 'https://github.com/frantsen',
                    description: 'Explore my open source contributions on GitHub',
                },
                {
                    label: 'Twitter',
                    url: 'https://twitter.com/rachelfrantsen',
                    description: 'Follow me on Twitter',
                },
                {
                    label: 'Email',
                    url: 'mailto:rachelfrantsen@gmail.com',
                    description: 'Send me a good old-fashioned email',
                },
            ],
        };
    },
    methods: {
        fullImgPath(name) {
            let imagePath = require.context('../../assets/social', false, /\.svg$/);
            return imagePath('./' + name.toLowerCase() + '.svg');
        },
    },
};
</script>

<style scoped>
#social {
    text-align: center;
}

.social-container {
    width: 480px;
    display: inline-block;
    margin-top: 150px;
}

.social-link {
    margin: 0px 20px;
    display: table;
}

a {
    color: inherit;
    text-decoration: none;
    cursor: crosshair;
    display: inline-block;
}

.social-description {
    display: table-cell;
    vertical-align: middle;
    opacity: 0.2;
    transition-duration: 300ms;
    padding: 0px 20px;
}

.social-link:hover .social-description{
    opacity: 1.0;
}

.social-link img {
    width: 50px;
}
</style>
