<template>
  <div id="app">
    <router-view></router-view>
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'


export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
