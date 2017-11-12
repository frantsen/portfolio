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
}

.background-tile {
	position: absolute;
	width: 65vw;
	margin: 17.5vh 17.5vw;
	background-color: lightslategray;
	height: 65vh;
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
	width: 61vw;
	padding: calc(50vh - 21px * 1.825) 2vw;
	color: #fff;
	text-align: center;
	font-size: 7vmin;
	font-weight: bold;
	letter-spacing: 5px;
	margin: 0vh 17.5vw;
}
</style>
