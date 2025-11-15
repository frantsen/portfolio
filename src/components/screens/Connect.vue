<template>
	<div class="connect">
		<div class="social-container">
			<a v-for="(link, index) in links" :key="`social-link-${index}`" :href="link.url">
				<div class="social-link">
					<img :src="fullImgPath(link.label)" :alt="link.label" />
					<div class="social-description">
						{{link.description}}
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'connect',
	data: () => ({
		links: [
			{
				label: 'LinkedIn',
				url: 'https://www.linkedin.com/in/rachelfrantsen/',
				description: 'Connect with me on LinkedIn',
			},
			{
				label: 'Twitter',
				url: 'https://twitter.com/rachelfrantsen',
				description: 'Say hello on Twitter',
			},
			{
				label: 'GitHub',
				url: 'https://github.com/frantsen',
				description: 'Explore code I\'ve written',
			},
			{
				label: 'Email',
				url: 'mailto:rachelfrantsen@gmail.com',
				description: 'Send me a good old-fashioned email',
			},
		],
		mobile: false,
	}),
	methods: {
		fullImgPath(name) {
			let imagePath = require.context('../../assets/social', false, /\.svg$/);
			return imagePath('./' + name.toLowerCase() + '.svg');
		},
	},
};
</script>

<style scoped>
.connect {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}

.social-container {
	margin: auto;
	display: table;
}

a {
	display: block;
	color: inherit;
	text-decoration: none;
	cursor: crosshair;
	padding: 2vh;
	transition-duration: 300ms;
	opacity: 0.7;
}

a:hover {
	opacity: 1.0;
}

a .social-link {
	display: table-row;
	width: 100%;
}

a .social-link img {
	width: 5vmax;
	max-width: 55px;
	display: table-cell;
}

a .social-description {
	display: table-cell;
	vertical-align: middle;
	padding-left: 20px;
	width: 100%;
}

@media (max-width: 500px) and (orientation: portrait) {
	.social-description {
		opacity: 1.0;
	}
}
</style>
