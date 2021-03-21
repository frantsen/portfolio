<template>
	<div class="intro">
		<div class="stripe">
			<div class="img-wrapper">
				<img :src="fullImgPath('portrait.png')" alt="Portrait"/>
			</div>
			<div class="stripe-intro">
				<main>
					<p>
						trilingual nerd fluent in human, musical, and computer languages,
						and passionate about becoming a better communicator in all three.
					</p>
					<p>
						bringing interdisciplinary perspectives and creativity to code since Hello world in 2015
					</p>
				</main>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'intro',
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
	direction: rtl;
}

.stripe {
	background-color: slategray;
	height: 50%;
	margin: auto;
	flex: 1;
	display: flex;
	justify-content: center;
	min-height: 310px;
	flex-direction: row-reverse;

	.img-wrapper {
		width: 50%;
		height: 100%;
		flex: 1;

		img {
			height: 100%;
			display: inline-block;
		}
	}
}

.stripe-intro {
	flex: 1;
	width: 50%;

	main {
		color: #fff;
		text-align: left;
		font-size: 16pt;
		direction: initial;

		p {
			max-width: 300px;
			margin: 10px 25px 15px 15px;
		}
	}
}

@media (max-width: 559px) {
	.stripe-intro > p {
		font-size: 3.85vmin;
	}
}

@media (max-width: 436px) {
	.stripe-intro > p {
		font-size: 13pt;
	}
}
</style>
