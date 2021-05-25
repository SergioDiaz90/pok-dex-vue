<template>
	<div class="modal">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<figure>
					<img :src="info.img" alt="">
				</figure>
				<button @click="close_modal" class="delete" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				<ul class="modal-card-body__list">
					<li class="modal-card-body__list--items">
						<strong> Name: </strong> {{ info.name }}
					</li>
					<li class="modal-card-body__list--items">
						<strong> Width: </strong> {{ info.weight }}
					</li>
					<li class="modal-card-body__list--items">
						<strong> Height: </strong> {{ info.height }}
					</li>
					<li class="modal-card-body__list--items">
						<strong> Types </strong>
						<span v-for="( item ) in info.types" :key="item"> {{ item }},  </span>
					</li>
				</ul>
			</section>
			<footer class="modal-card-foot">
				<div class="modal-card-foot__container">
					<button @click="clipboard_info" class="modal-card-foot__container--button">Share to my friends</button>
					<figure class="button">
						<img src="../../assets/img/start-unset.svg" alt="">
					</figure>
				</div>
			</footer>
		</div>
	</div>

</template>

<script>

export default {

	data () {
		return {}
	},

	props: {
		info: { type: Object, required: false }
	},

	methods: {
		close_modal () {
			this.$emit('close_modal', false );
		},

		clipboard_info() {
			const input_transition = document.createElement('input');
			let string_info = `${ this.info.name }, ${ this.info.weight },  ${ this.info.height }, ${ this.info.types[0] }, ${ this.info.types[1]}`;
			input_transition.setAttribute('value', string_info );
			document.body.appendChild(input_transition);
			input_transition.select();
			document.execCommand('copy');
			document.body.removeChild(input_transition);
		}
	},

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.modal {
		display: block;

		&-card {

			&-head {
			width: 100%;
			height: 331px;
			background-image: url('../../assets/img/bg-modal.svg');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;

				.delete {
					max-width: 26px;
					max-height: 26px;
					width: 26px;
					height: 26px;
					position:absolute;
					top: 0;
					right: 0;
					margin: 12px 12px 0 0;
				}

				figure {
					width: 70%;
					margin: 0 auto;
					position: relative;

					img {
						width: 200px;
						height: 200px;
						position: absolute;
						top: -42px;
						left: 25%;;
					}
				}
			}

			&-body {
				&__list {
					width: 90%;
					margin: 0 auto;

					&--items{
						padding: 3% 0;
						border-bottom: 1px solid black;
						text-align: start;
					}
				}
			}

			&-foot{
				&__container {
					width: 90%;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;
					&--button {
						width: 160px;
						height: 40px;
						padding: 2px 4px;
						background-color: #F22539;
						border-radius: 60px;
						color: white;
						font-weight: 700;
						border: none;
						outline: none;
						cursor: pointer;
					}

					.button {
						border: none;
						outline: none;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
