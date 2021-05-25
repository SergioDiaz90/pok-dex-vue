<template>
	<section class="loading__wrapper">
		<figure class="loading__wrapper--img">
			<svg width="106" height="106" class="svg_pokebola_animation " viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="53" cy="53" r="51" fill="white" stroke="#333333" stroke-width="4"/>
				<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="106" height="53">
				<rect width="106" height="53" fill="#C4C4C4"/>
				</mask>
				<g mask="url(#mask0)">
				<circle cx="53" cy="53" r="51" fill="#F22539" stroke="#333333" stroke-width="4"/>
				</g>
				<path d="M0.392578 53H105.607" stroke="#333333" stroke-width="4"/>
				<circle cx="53" cy="52.9998" r="20.8074" fill="white"/>
				<circle cx="53" cy="52.9998" r="18.8074" stroke="#333333" stroke-width="4"/>
				<path d="M91.731 36.7077C86.9398 25.3318 77.283 16.5081 65.3667 12.8428" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
				<circle cx="53.0001" cy="53.0004" r="10.3852" stroke="#808080" stroke-width="2"/>
			</svg>
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

	.svg_pokebola_animation {
		position: relative;
		animation-duration: 3s;
		animation-name: bounceIn;
		animation-iteration-count: infinite;
	}

	@keyframes bounceIn {
		from {
			left: -30%;
		}

		to {
			left: 30%;
		}
	}
</style>