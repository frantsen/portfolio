<template>
	<div class="navigation">
		<div class="title">Rachel Frantsen<span v-if="title !== 'Intro'"> | {{title}}</span></div>
		<div class="nav-wrapper">
			<div v-for="(item, index) in menuItems"
				:key="`nav-item-${index}`"
				class="nav-item"
				:class="{active: item.label === title}"
				@click="$emit('click', item.name)">
				{{item.label}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'navigation',
	props: [
		'title',
	],
	data: () => ({
		menuItems: [
			{
				name: 'cover',
				label: 'Top',
			},
			{
				name: 'intro',
				label: 'Intro',
			},
			{
				name: 'skills',
				label: 'Skills',
			},
			{
				name: 'connect',
				label: 'Connect',
			},
		],
	}),
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
	/* background-color: rgba(255,255,255,.08); */
	background-color: rgba(0,0,0,.02);
}

.active {
	color: rgba(0,0,0,.53);
}
</style>
