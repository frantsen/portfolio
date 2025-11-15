<template>
	<div id="home">
		<div v-for="(screen, index) in screens"
			:key="`screen-index-${index}`"
			:id="`screen-${screen}`"
			class="screen">
			<nav-menu v-if="screen !== 'cover'"
				:active="screen"
				:items="screens">
			</nav-menu>
			<component :is="screen"></component>
		</div>
	</div>
</template>

<script>
import NavMenu from './Navigation.vue';
import Cover from './screens/Cover.vue';
import Intro from './screens/Intro.vue';
import Skills from './screens/Skills.vue';
import Connect from './screens/Connect.vue';

export default {
	name: 'home',
	components: {
		Cover,
		NavMenu,
		Intro,
		Skills,
		Connect,
	},
	data: () => ({
		screens: ['cover', 'intro', 'skills', 'connect'],
	}),
};
</script>

<style scoped>
.screen {
	height: 100vh;
	width: 100vw;
}

@media (max-height: 571px) {
	.screen:not(#screen-cover){
		height: 571px;
	}
}
</style>
