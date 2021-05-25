<template>
  <section class="main__wrapper">
    <nav class="main__wrapper--search has-shadow">
      <div class="container">
        <div class="field">
        <p class="control has-icons-left">
          <input
            v-model="search_input"
            class="input"
            type="text"
            placeholder="Search">
            <span class="icon is-small is-left">
              <i class="far fa-search"></i>
            </span>
        </p>
      </div>

      </div>
    </nav>

    <div v-if="!see_list_favorite" class="main__wrapper__info">

      <ul v-if="search_message.length !== 0" class="main__wrapper__info--list">
        <li
          @click="info_pokemon( item )"
          v-for="( item, idx ) in search_message"
          :key="item"
          class="main__wrapper__info--list--item"
          data-target="modal-ter">
          <p>{{ item }}</p>
          <figure :id="idx" @click.stop="toggle_favorite( idx, item )">
            <svg width="44" height="44" class="unset" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#F5F5F5"/>
              <path d="M20.6052 9.90444L17.4318 16.627L10.3316 17.7086C9.05834 17.9015 8.54806 19.5415 9.47142 20.4809L14.6082 25.7107L13.3933 33.0984C13.1746 34.4338 14.5208 35.4341 15.6482 34.8096L22 31.3213L28.3518 34.8096C29.4792 35.429 30.8254 34.4338 30.6067 33.0984L29.3918 25.7107L34.5286 20.4809C35.4519 19.5415 34.9417 17.9015 33.6684 17.7086L26.5682 16.627L23.3948 9.90444C22.8262 8.70615 21.1787 8.69092 20.6052 9.90444Z"/>
          </svg>
          </figure>
        </li>
      </ul>

      <div
        v-else-if="search_message.length === 0 && search_input !== '' "
        class="main__wrapper__info">
          <h2 class="main__wrapper__info--title"> Uh Oh! </h2>
          <p class="main__wrapper__info--text"> You look lost on your journey! </p>
          <router-link to="/" class="main__wrapper__info--button"> Go Back Home </router-link>
      </div>
      <view-loading v-else></view-loading>
    </div>

    <div v-else class="main__wrapper__info">

      <ul v-if="list_favorite.length !== 0" class="main__wrapper__info--list">
        <li
          @click="info_pokemon( item )"
          @touchstart="info_pokemon( item )"
          v-for="( item, idx ) in list_favorite"
          :key="item"
          class="main__wrapper__info--list--item"
          data-target="modal-ter">
          <p>{{ item }}</p>
          <figure :id="idx" @click.stop="toggle_favorite( idx, item )">
            <svg width="44" height="44" class="favorite" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="22" fill="#F5F5F5"/>
              <path d="M20.6052 9.90444L17.4318 16.627L10.3316 17.7086C9.05834 17.9015 8.54806 19.5415 9.47142 20.4809L14.6082 25.7107L13.3933 33.0984C13.1746 34.4338 14.5208 35.4341 15.6482 34.8096L22 31.3213L28.3518 34.8096C29.4792 35.429 30.8254 34.4338 30.6067 33.0984L29.3918 25.7107L34.5286 20.4809C35.4519 19.5415 34.9417 17.9015 33.6684 17.7086L26.5682 16.627L23.3948 9.90444C22.8262 8.70615 21.1787 8.69092 20.6052 9.90444Z"/>
          </svg>
          </figure>
        </li>
      </ul>

      <div
        v-else-if="list_favorite.length === 0 && search_input !== '' "
        class="main__wrapper__info">
          <h2 class="main__wrapper__info--title"> Uh Oh! </h2>
          <p class="main__wrapper__info--text"> You look lost on your journey! </p>
          <router-link to="/" class="main__wrapper__info--button"> Go Back Home </router-link>
      </div>
      <view-loading v-else></view-loading>
    </div>
  </section>

  <view-footer @list_favorite="favorites_list"></view-footer>

  <view-modal-pokemon
    v-if="see_modal_pokemon"
    :info="list_info_for_pokemon"
    @close_modal="close_modal_info">
  </view-modal-pokemon>

</template>

<script>
import footer from '../components/layout/footer.vue';
import modal_pokemon from '../components/modal_pokemon/modal_pokemon.vue';
import loading from '../components/loading/loading.vue';

import { get_info_pokemon, get_list_pokemon } from '../services/config.js';


export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },


  components: {
    'view-modal-pokemon': modal_pokemon,
    'view-loading': loading,
    'view-footer': footer
  },


  data () {
    return {
      search_input: '',

      see_modal_pokemon: false,
      see_list_favorite: false,

      list_info_for_pokemon: {},

      persist_favorites_color: [],
      list_pokemon_name: [],
      copy_list_pokemon_name: [],
      list_favorite: [],
    }
  },

  computed: {
    search_message () {
      return this.search();
    }
  },

  methods: {
    search () {

      if ( this.search_input !== '' ) {
        if ( !this.see_list_favorite ) {
          let filtered = Object.values(this.list_pokemon_name);
          return this.list_pokemon_name = filtered.filter( item => item.includes( this.search_input ));
        } else {
          return this.favorites_list;
        }
      }

      this.list_pokemon_name = this.copy_list_pokemon_name;
      return this.see_list_favorite ? this.favorites_list : this.list_pokemon_name;
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
    },

    toggle_favorite ( id, name ) {
      let elm = document.getElementById( id );

      let img_start = elm.childNodes[0];
      let has_name = this.list_favorite.indexOf( name );


      img_start.classList.toggle( 'favorite' );

      if ( has_name === -1 ) {
        this.list_favorite.push( name );
        this.persist_favorites_color.push({ id, name });
      }

      if ( img_start.classList.contains( 'favorite' ) === false ) {
        let idx = this.list_favorite.indexOf( name );
        delete this.list_favorite[ idx ];
        this.persist_favorites_color = this.persist_favorites_color.filter( item => item.id !== id );
      }
      console.log( this.list_favorite.indexOf( name ), this.list_favorite );
    },

    favorites_list ( value ) {
      this.see_list_favorite = value;

      if ( value === false ) {
        this.persist_favorites();
      }
    },

    persist_favorites() {
      for ( let i = 0; i < this.persist_favorites_color.length; i++ ) {
          let v = Object.values( this.persist_favorites_color[i] );
          setTimeout( () => {
            this.toggle_favorite( v[0], v[1] );
          }, 0);
      }
    }
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
        this.copy_list_pokemon_name = this.list_pokemon_name;

      });
  },


  unmounted() {
    this.list_pokemon_name = []
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
            position: relative;
            z-index: 3;
          }

        }
      }

      &--title {
        font-family: lato;
        font-weight: 700;
        font-size: 36px;
        margin: 0 0 20px 0;
      }

      &--text {
        font-family: lato;
        font-weight: 500;
        font-size: 20px;
        margin: 0 0 15px 0;
      }

      &--button {
        width: 155px;
				height: 44px;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				border-radius: 60px;
        font-size: 18px;
				color: white;
				border: none;
				outline: none;
				cursor: pointer;
        background-color: #F22539;
      }
    }

  }

  .unset {
    fill: #BFBFBF;
  }

  .favorite {
    fill: #ECA539;
  }

</style>
