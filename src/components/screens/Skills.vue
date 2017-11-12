<template>
	<div class="skills">
		<div class="job group">
			<div class="header">Professional</div>
			<div class="logo" v-for="(item, index) in professional" :key="`pro-tools-logo-${index}`">
				<img :src="fullImgPath(item.img)" :alt="item.label"></img>
			</div>
		</div>
		<div class="college group">
			<div class="header">Educational</div>
			<div class="logo" v-for="(item, index) in educational" :key="`edu-tools-logo-${index}`">
				<img :src="fullImgPath(item.img)" :alt="item.label"></img>
			</div>
		</div>
		<!-- <div class="personal group"></div> -->
	</div>
</template>

<script>
export default {
	name: 'skills',
	data: () => ({
		professional: [
			{
				img: 'braintree',
				label: 'Braintree Payments',
			},
			// {
			// 	img: 'powershell',
			// 	label: 'PowerShell',
			// },
			{
				img: 'jest',
				label: 'Jest unit testing framework',
			},
			{
				img: 'js',
				label: 'JavaScript',
			},
			{
				img: 'mss',
				label: 'Microsoft SQL Server',
			},
			{
				img: 'netcore',
				label: 'Microsoft .NET Core',
			},
			{
				img: 'vue',
				label: 'Vue.js',
			},
		],
		educational: [
			{
				img: 'cpp',
				label: 'C++',
			},
			{
				img: 'android',
				label: 'Java for Android',
			},
			{
				img: 'bash',
				label: 'Bash',
			},
			{
				img: 'vbox',
				label: 'VirtualBox',
			},
			{
				img: 'racket',
				label: 'Scheme',
			}
		],
	}),
    methods: {
        fullImgPath(name) {
            let imagePath = require.context('../../assets/tools', false, /\.png$/);
            return imagePath('./' + name + '.png');
        },
    },
};
</script>

<style lang="scss" scoped>
.skills {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
}

.group {
	flex: 1;
	text-align: center;
	transition: .3s;
	max-width: calc(100% /4);
	padding: 2em;
	min-width: 10%;
	position: relative;

	& .header {
		width: 100;
		padding-bottom: 2em;
		font-variant: small-caps;
		font-size: 2.5vmin;
		letter-spacing: 3px;
		color: #fff;
	}

	&:hover {
		transition: .5s;
		max-width: 40% !important;
		flex-grow: 3;
	}
}

.logo {
	display: inline-block;
	max-width: calc(100% /3);
	max-height: calc(100% /3);

	img {
		width: 80%;
		padding: 10%;
	}
}

.job {
	background: linear-gradient(90deg, rgba(132, 189, 0, .7), rgba(66, 157, 201, .7));
}

.personal {
	background-color: lightslategray;
}

.college {
	background-color: rgba(228, 160, 27, .7);
}
</style>
