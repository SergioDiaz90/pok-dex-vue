<template>
	<section class="welcome__wrapper">
		<figure class="welcome__wrapper--img">
			<img src="../../assets/img/picachu.svg" alt="picachu-image" aria-label="picachu-image">
		</figure>
		<h1 class="welcome__wrapper--title">Welcome to Pokédex</h1>
		<p class="welcome__wrapper--text">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
		<button class="welcome__wrapper--button"> Get started </button>
	</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	.welcome__wrapper {
		width: 37%;
		height: 100vh;
		margin: 0 auto;
		padding: 5% 0 5% 0;
		font-family: Lato;

		&--img {
			margin: 0 0 70px 0;
		}

		&--title {
			font-size: 26px;
			font-weight: 700;
			margin: 0 0 30px 0;
		}

		&--text {
			font-size: 18px;
			font-weight: 500;
			margin: 0 0 50px 0;
		}

		&--button {
			width: 131px;
			height: 44px;
			font-size: 18px;
			font-style: normal;
			font-weight: 700;
			border-radius: 60px;
			background-color: #F22539;
			color: #FFFFFF;
		}
	}

	@media (max-width: 380px) {
		.welcome__wrapper {
			width: 90%;
		}
	}
</style>