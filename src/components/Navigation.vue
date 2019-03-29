<template>
	<div class="navigation">
		<div class="title">Rachel Frantsen
			<span v-if="active !== 'intro'">| {{active | title}}</span>
		</div>
		<div class="nav-wrapper">
			<div v-for="(item, index) in items"
				:key="`nav-item-${index}`"
				class="nav-item"
				:class="{active: item === active}"
				@click="navigateTo(item)">
				{{item | title}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'navigation',
	props: ['active', 'items'],
	filters: {
		title(value) {
			return {
				'cover': 'Top',
				'intro': 'Intro',
				'skills': 'Skills',
				'projects': 'Projects',
				'blog': 'Blog',
				'connect': 'Connect',
			}[value];
		},
	},
	methods: {
		navigateTo(screenName) {
			this.$scrollTo(`#screen-${screenName}`, {
				onDone: () => {
					this.$emit('screenSet', screenName);
				},
				duration: 300,
				easing: 'ease-out',
				cancelable: true,
			});
		},
	},
};
</script>

<style scoped>
.navigation {
	width: 100%;
	position: relative;
	cursor: crosshair;
	text-align: center;
	font-variant: small-caps;
	letter-spacing: 3px;
}

.navigation:hover .title {
	transform: scaleY(0);
	color: rgba(255,255,255,.6);
	background-color: rgba(255,255,255,.6);
}

.navigation:hover .nav-wrapper {
	transform: scaleY(1);
	background-color: rgba(0,0,0,0);
}

.navigation:hover .title, .navigation:hover .nav-wrapper {
	transition: .25s ease-out;
}

.title, .nav-wrapper {
	transition: 1.3s ease-in-out;
}

.title {
	width: 100%;
	position: absolute;
	transform-origin: top;
	padding: 20px 0;
}

.nav-wrapper {
	position: absolute;
	transform: scaleY(0);
	background-color: rgba(0,0,0,.3);
	width: 100%;
	transform-origin: bottom;
}

.nav-item {
	display: inline-block;
	width: 20%;
	transition: background-color .3s;
	padding: 20px 0;
}

.nav-item:hover {
	background-color: rgba(0,0,0,.02);
}

.active {
	color: rgba(0,0,0,.53);
}
</style>
