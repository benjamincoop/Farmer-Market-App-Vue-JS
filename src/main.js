import Vue from 'vue';
import Vuex from 'vuex';
import FarmersMarketStore from './farmers_market_store.js'
import FarmersMarketApp from './FarmersMarketApp.vue';
import './styles.css';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app: FarmersMarketStore,
  },
});

new Vue({
  el: '#app',
  store,
  render: h => h(FarmersMarketApp),
});
