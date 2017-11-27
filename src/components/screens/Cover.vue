<template>
	<div class="cover">
		<div class="background-tile">
		</div>
		<div class="animation-wrapper">
		</div>
		<div class="cover-text">
			Rachel Frantsen
		</div>
		<div class="clickable-overlay" @click="$emit('overlayClick')">
		</div>
	</div>
</template>

<script>
export default {
	name: 'cover',
};
</script>

<style scoped>
.cover {
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}

.background-tile {
	position: absolute;
	width: 65%;
	height: 65%;
	background-color: lightslategray;
}

.animation-wrapper, .clickable-overlay {
	position: absolute;
	height: 100%;
	width: 100%;
}

.clickable-overlay {
	cursor: crosshair;
}

.cover-text {
	position: absolute;
	width: 61%;
	color: #fff;
	text-align: center;
	font-size: 7vmin;
	font-weight: bold;
	letter-spacing: .5vw;
}
</style>
