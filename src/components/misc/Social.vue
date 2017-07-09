<template>
    <div id="social">
        <a href="https://www.linkedin.com/in/rachelfrantsen/">
            <div class="social-link">
                <img src="../../assets/linkedin.svg" alt="LinkedIn"></img>
                <div class="social-description">
                    Connect with me on LinkedIn
                </div>
            </div>
        </a>
        <a href="https://github.com/frantsen">
            <div class="social-link">
                <img src="../../assets/github.svg" alt="GitHub"></img>
                <div class="social-description">
                    Explore my open source contributions on GitHub
                </div>
            </div>
        </a>
        <a href="https://twitter.com/rachelfrantsen">
            <div class="social-link">
                <img src="../../assets/twitter.svg" alt="Twitter"></img>
                <div class="social-description">
                    Follow me on Twitter
                </div>
            </div>
        </a>
        <a href="mailto:rachelfrantsen@gmail.com">
            <div class="social-link">
                <img src="../../assets/email.svg" alt="Email"></img>
                <div class="social-description">
                    Send me an email
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'social',
    methods: {
        redirect() {

        },
    },
};
</script>

<style scoped>
#social {
    margin: 20px 0px 20px 0px;
}

.social-link {
    margin: 10px 20px 10px 20px;
}

a {
    color: inherit;
    text-decoration: none;
}

.social-link:hover {
    cursor: crosshair;
}

.social-description {
    display: inline-block;
    opacity: 0.2;
    transition-duration: 300ms;
    padding: 20px 0px 20px 0px;
}

.social-link:hover .social-description{
    opacity: 1.0;
}

.social-link img {
    width: 50px;
}
</style>
