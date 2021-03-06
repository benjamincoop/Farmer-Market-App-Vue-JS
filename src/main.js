import Vue from 'vue';
import Vuex from 'vuex';
import FarmersMarketStore from './farmers_market_store.js'
import FarmersMarketApp from './FarmersMarketApp.vue';
import '../service-worker.js'
import '../market128.png';
import '../market512.png';
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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}
