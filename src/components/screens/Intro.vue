<template>
	<div class="intro">
		<div class="stripe" @click="shortDesc=!shortDesc">
			<div class="stripe-internal" v-show="shortDesc">
				<img :src="fullImgPath('portrait.png')" alt="Portrait">
				</img><div class="stripe-intro">
					currently geeking out<br>
					about scientific<br>
					computing, the<br>
					science of computing,<br>
					and engineering<br>
					as art.<br><br>
					click for more...
				</div>
			</div>
			<div class="stripe-story" v-show="!shortDesc">
				<p>
					Before discovering the creative universe of code, I was a musician.
					Once I started my first CS course, though, I was hooked.
					In the next 2 years I crammed in a CS major and as much work experience
					as I could, and to my surprise, I found myself thriving.
				</p>
				<p>
					When I was a little kid I wanted to be a writer, a scientist, and an
					artist - and now I get to be all those things!
				<p>
					I love the theoretical and the technical.
					I'm hungry for the struggles that make me better.
					I strive to create elegance in engineering.
					I'm lucky the software world has no shortage of
					new things to learn - enough to satisfy a lifelong addiction!
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	class: 'intro',
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
	width: 100vw;
	position: absolute;
	margin: 62px 0 0;
	text-align: center;
}

.stripe {
	background-color: slategray;
	height: 40vh;
	padding: 5vh 0;
	margin-top: calc(20vh - 62px);
	position: relative;
	transition: .5s;
}

.stripe:hover {
	background-color: #91a0af;
	cursor: crosshair;
}

.closed {
	transform: scaleY(0);
}

.open {
	transform: scaleY(1);
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

.stripe-intro, .stripe-story {
	color: #fff;
	margin-left: 5%;
	text-align: left;
	max-height: 45vh;
	padding: 0 5vw;
	display: table-cell;
}

.stripe-intro {
	font-size: 18pt;
	width: 42.4vw;
	overflow: hidden;
}

.stripe-story {
	font-size: 3vmin;
	width: 80vw;
	padding: 0 10vw 5vh;
	background-color: inherit;
	overflow: visible;
}
</style>
