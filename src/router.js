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
      name: "Home",
      component: Home,
    },
    {
      path: "/priser",
      name: "Prices",
      component: Prices,
    },
    {
      path: "/galleri",
      name: "Gallery",
      component: Gallery,
    },
    {
      path: "/produkter",
      name: "Products",
      component: Products,
    },
    {
      path: "/om-oss",
      name: "About",
      component: About,
    },
  ],
});
