import Vue from 'vue';
import Router from 'vue-router';
import Prices from './components/Prices.vue'
import Home from './components/Home.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
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

        }
    ]
});