<template>
    <div id="social">
        <div class="social-container">
            <a href="https://www.linkedin.com/in/rachelfrantsen/" class="social-link">
                    <img src="../../assets/linkedin.svg" alt="LinkedIn"></img>
                    <div class="social-description">
                        Connect with me on LinkedIn
                    </div>
            </a><br>
            <a href="https://github.com/frantsen" class="social-link">
                    <img src="../../assets/github.svg" alt="GitHub"></img>
                    <div class="social-description">
                        Explore my open source contributions on GitHub
                    </div>
            </a><br>
            <a href="https://twitter.com/rachelfrantsen" class="social-link">
                <img src="../../assets/twitter.svg" alt="Twitter"></img>
                <div class="social-description">
                    Follow me on Twitter
                </div>
            </a><br>
            <a href="mailto:rachelfrantsen@gmail.com" class="social-link">
                <img src="../../assets/email.svg" alt="Email"></img>
                <div class="social-description">
                    Send me a good old-fashioned email
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'social',
};
</script>

<style scoped>
#social {
    /* text-align: center; */
}

.social-container {
    width: 480px;
    margin: 100px auto;
    /* display: inline-block; */
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
