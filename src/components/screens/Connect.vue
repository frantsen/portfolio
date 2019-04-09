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

    "three": "^0.103.0",
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

<style lang="scss" scoped>
.connect {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
}

.social-container {
	flex: 1;
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
	opacity: 0.5;

	&:hover {
		opacity: 1.0;
	}

	.social-link {
		display: table-row;
		width: 100%;

		img {
			width: 5vmax;
			max-width: 55px;
			display: table-cell;
		}
	}

	.social-description {
		display: table-cell;
		vertical-align: middle;
		padding-left: 20px;
		width: 100%;
	}
}

@media (max-width: 500px) and (orientation: portrait) {
	.social-description {
		opacity: 1.0;
	}
}
</style>
