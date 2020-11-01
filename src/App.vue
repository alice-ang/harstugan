<template>
  <div id="app">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import store from "./store";
export default {
  name: "App",
  components: {
    appHeader: Nav,
    appFooter: Footer,
  },
  mounted() {
    store.dispatch("fetchData");
  },
};
</script>

<style>
:root {
  --primary: #a6a3a9;
  --secondary: #dbb5c3;
  --pink: #ff7799;
  --grey: rgb(239 239 239 / 78%);
}
body {
  margin: 0;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
  font-weight: 300;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Prata", serif;
}
</style>
