<template>
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  <view-welcome v-if="false"></view-welcome>
  <view-loading v-if="false"></view-loading>
  <view-main msg="Welcome to Your Vue.js App"/>
  <view-footer></view-footer>
</template>

<script>

  import Main from './components/main.vue';
  import footer from './components/layout/footer.vue';
  import welcome from './components/welcome/welcome.vue';
  import loading from './components/loading/loading.vue';

export default {
  name: 'App',
  components: {
    'view-welcome': welcome,
    'view-loading': loading,
    'view-main': Main,
    'view-footer': footer
  }
}
</script>

<style lang="scss">
  @import './assets/scss/index.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #F9F9F9;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

</style>
