<template>
  <section class="main__wrapper">
    <nav class="main__wrapper--search has-shadow">
      <div class="container">
        <div class="field">
        <p class="control has-icons-left">
          <input v-model="searchInput" class="input" type="text" placeholder="Search">
          <span class="icon is-small is-left">
            <i class="far fa-search"></i>
          </span>
        </p>
      </div>

      </div>
    </nav>

    <div class="main__wrapper__info">
      <ul class="main__wrapper__info--list">
        <li
          @click="info_pokemon( item )"
          v-for="( item ) in list_pokemon_name"
          :key="item"
          class="main__wrapper__info--list--item"
          data-target="modal-ter">
          <p>{{ item }}</p>
          <figure>
            <img src="../assets/img/start-unset.svg" alt="">
          </figure>
        </li>
      </ul>
    </div>

  </section>
  <view-modal-pokemon
    v-if="see_modal_pokemon"
    :info="list_info_for_pokemon"
    @close_modal="close_modal_info"
    ></view-modal-pokemon>
</template>

<script>

import modal_pokemon from '../components/modal_pokemon/modal_pokemon.vue';

import { get_info_pokemon, get_list_pokemon } from '../services/config.js';


export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  data () {
    return {
      searchInput: '',
      list_pokemon_name: [],
      list_info_for_pokemon: {},
      see_modal_pokemon: false
    }
  },

  computed: {
    search_message () {
      return `Encontrados: ${this.tracks.length}`;
    }
  },

  methods: {
    search () {
      console.log( 'tracks' , this.searchInput );
    },

    info_pokemon ( name ) {
      get_info_pokemon( name )
        .then( res => {
          this.list_info_for_pokemon.name = res.name;
          this.list_info_for_pokemon.weight = res.weight;
          this.list_info_for_pokemon.height = res.height;

          let types = [];
          for ( let i = 0; i < res.types.length; i++) {
            types.push( res.types[i].type.name );
          }

          this.list_info_for_pokemon.types = types;

        });
      this.see_modal_pokemon = true;
    },

    close_modal_info ( value ) {
      this.see_modal_pokemon = value
    }

  },


  components: {
    'view-modal-pokemon': modal_pokemon
  },

  beforeCreate() {
    get_list_pokemon()
      .then( res => {
        for ( let idx = 0; idx < res.length; idx++ ){
          let ansewer = res[idx].results;

          for( let index = 0; index < ansewer.length; index++) {
              this.list_pokemon_name.push( ansewer[ index ].name )
          }

        }

        this.list_pokemon_name.sort();
      });
  },

  mounted() {
    
  },

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .main__wrapper {
    max-width: 70%;
    margin: 0 auto;

    &--search {
      padding: 50px 0 0 0;
      margin: 0 0 70px 0;
    }

    &__info {
      width: 100%;
      height: 65vh;

      &--list {
        margin: 0;
        padding: 0;
        overflow-y: scroll;
        height: 65vh;;

        &--item {
          width: 100%;
          height: 60px;
          padding: 2%;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #FFFFFF;
          border-radius: 5px;
          cursor: pointer;

          p {
            font-size: 22px;
            font-weight: 500;
            color: #353535;
          }

          figure {
            width: 40px;
            height: 40px;
          }

        }
      }
    }
  }

</style>
