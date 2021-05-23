<template>
	<section class="footer__wrapper">
		<div class="footer__wrapper--buttons">
			<button class="footer__wrapper--buttons--red">
				<figure>
					<img src="../../assets/img/all-tems.svg" alt="Menu lista" aria-label="Menu lista">
				</figure>
				<span> All </span>
			</button>
			<button class="footer__wrapper--buttons--gray">
				<figure>
					<img src="../../assets/img/start-items.svg" alt="Favorites" aria-label="Favorites">
				</figure>
				<span> Favorites </span>
			</button>
		</div>
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

	.footer__wrapper {
		width: 100%;
		height: 80px;
		position:absolute;
		bottom: 0;
		background-color: #FFFFFF;

		&--buttons {
			width: 70%;
			margin: 0 auto;
			padding: 18px 0;

			&--red, &--gray {
				width: 275px;
				height: 44px;
				margin: 0 20px 0 0;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				border-radius: 60px;
				color: white;
				border: none;
				outline: none;
				cursor: pointer;

				figure {
					margin: 0 5px 0 0;
				}
			}

			&--red {
				background-color: #F22539;
			}

			&--gray{
				background-color: #BFBFBF;
			}
		}
	}

	@media (max-width: 380px) {
			.footer__wrapper {

				&--buttons {
					width: 95%;
				}

		}
	}

</style>