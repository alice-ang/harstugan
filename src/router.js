import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
const Prices = () => import("./components/Prices.vue");
const Gallery = () => import("./components/Gallery.vue");
const Products = () => import("./components/Products.vue");
const About = () => import("./components/About.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Hem",
      component: Home,
    },
    {
      path: "/priser",
      name: "Priser",
      component: Prices,
    },
    {
      path: "/galleri",
      name: "Galleri",
      component: Gallery,
    },
    {
      path: "/produkter",
      name: "Produkter",
      component: Products,
    },
    {
      path: "/om-oss",
      name: "Om oss",
      component: About,
    },
  ],
});
