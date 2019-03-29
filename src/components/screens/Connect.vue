<template>
	<div class="connect">
		<div class="social-container">
			<a v-for="(link, index) in links" :key="`social-link-${index}`" :href="link.url">
				<div class="social-link">
					<img :src="fullImgPath(link.label)" :alt="link.label"></img>
					<div class="social-description" :class="{'opacity-mobile': !mobile}">{{link.description}}</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'connect',
	// props: ['mobile'],
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
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
}

.social-container {
	display: table;
}

.social-link {
	display: table-row;
	width: 100%;
}

a {
	max-width: 50vw;
	min-width: 36vh;
	display: block;
	color: inherit;
	text-decoration: none;
	cursor: crosshair;
	padding: 2vh;

	&:hover .social-description {
		opacity: 1.0;
	}
}

.opacity-mobile {
	opacity: 0.2;
}

.social-description {
	display: table-cell;
	transition-duration: 300ms;
	font-size: 1.5vmax;
	vertical-align: middle;
	padding-left: 20px;
	width: 100%;
}

.social-link img {
	width: 5vmax;
	max-width: 55px;
	display: table-cell;
}
</style>
