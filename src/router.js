import Vue from 'vue';
import Router from 'vue-router';

const Prices = () => import ('./components/Prices.vue')
//import Prices from './components/Prices.vue'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import About from './components/About.vue'
const Products = () => import ('./components/Products.vue')
//import Products from './components/Products.vue'

Vue.use(Router);

export default new Router({
   // mode: 'history',
   base: process.env.BASE_URL,
    routes: [
      {
            path: '/',
            name: 'Home',
            component: Home
      },
        {
            path: '/priser',
            name: 'Prices',
            component: Prices

        },
        {
            path: '/galleri',
            name: 'Gallery',
            component: Gallery
        },
        {
            path: '/om-oss',
            name: 'About',
            component: About
        },
        {
            path: '/produkter',
            name: 'Products',
            component: Products
        }
    ]
});