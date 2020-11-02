import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prices: [],
    categories: [],
  },
  getters: {
    getPrices(state) {
      return state.prices;
    },
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    setPrices(state, fetchedPrices) {
      state.prices = fetchedPrices;
    },
    setCategories(state, fetchedCategories) {
      state.categories = fetchedCategories;
    },
  },
  actions: {
    async fetchData({ commit }) {
      fetch("/data.json")
        .then(async (res) => {
          const data = await res.json();
          if (!res.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || res.statusText;
            return Promise.reject(error);
          } else {
            commit("setPrices", await data.prices);
            commit("setCategories", await data.categories);
          }
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  },
  modules: {},
});
