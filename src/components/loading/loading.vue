<template>
	<section class="loading__wrapper">
		<figure class="loading__wrapper--img">
			<img src="../../assets/img/poquebola.svg" alt="image poquebola" aria-label="image-poquebola">
		</figure>
	</section>
</template>

<script>
	export default {
		name: 'footer',

		data() {
			
		},
	}
</script>

<style lang="scss">
	.loading__wrapper {
		position:absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		padding: 45vh 0;
		background-color: #E5E5E5;
		z-index: 3;

	}
</style>