import Vue from 'vue';
import Router from 'vue-router';
import Prices from './components/Prices.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/priser',
            name: 'Prices',
            component: Prices
        }
    ]
});