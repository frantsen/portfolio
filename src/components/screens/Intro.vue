<template>
	<div class="intro">
		<div class="stripe" @click="shortDesc=!shortDesc">
			<div class="img-wrapper" v-show="shortDesc">
				<img :src="fullImgPath('portrait.png')" alt="Portrait"/>
			</div>
			<div class="stripe-intro" v-show="shortDesc">
				<p>
					currently geeking out<br>
					about scientific<br>
					computing, the<br>
					science of computing,<br>
					and engineering<br>
					as art.
				</p>
				<p>
					click for more...
				</p>
			</div>
			<div class="stripe-story" v-show="!shortDesc">
				<p>
					Before discovering the creative universe of code, I was a musician.
					Once I started my first CS course, though, I was hooked.
					In the next 2 years I crammed in a CS major and as much work experience
					as I could, and to my surprise, I found myself thriving.
				</p>
				<p>
					As a software engineer, I get to be the writer-scientist-artist
					I always dreamed of becoming!
				</p>
				<p>
					I am hungry for the struggles that make me better.
					I strive to create elegance in engineering.
					I am lucky the software world has no shortage of
					new things to learn - enough to satisfy a lifelong addiction!
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'intro',
	data: () => ({
		shortDesc: true,
	}),
	methods: {
		fullImgPath(name) {
			let imagePath = require.context('../../assets', false, /\.png$/);
			return imagePath('./' + name);
		},
	},
};
</script>

<style lang="scss" scoped>
.intro {
	height: 100%;
	width: 100%;
	display: flex;
}

.stripe {
	background-color: slategray;
	height: 50%;
	margin: auto;
	flex: 1;
	transition: background-color .2s;
	display: flex;
	justify-content: center;
	min-height: 310px;

	&:hover {
		background-color: rgba(112, 128, 144, .9);
		cursor: crosshair;
	}

	.img-wrapper {
		flex: 1;
		height: 100%;
		text-align: right;

		img {
			height: 100%;
			display: inline-block;
		}
	}
}

.stripe-intro, .stripe-story {
	height: calc(100%-20px);
	color: #fff;
	text-align: left;
	font-size: 16pt;
	padding: 10px 15px;
	flex: 1;

	p {
		margin: 12px;
	}
}

.stripe-story {
	max-width: 900px;
	margin: auto;
}

@media (max-width: 552px) {
	.stripe-story p {
		font-size: 3.8vmin;
	}
}

@media (max-width: 499px) {
	.stripe-intro {
		p {
			font-size: 3.9vmin;
		}

		br {
			display: none;
		}
	}
}
</style>
