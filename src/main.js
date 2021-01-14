import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false;


const store = new Vuex.Store({
  state: {
    discover: {
      baseUrl: 'https://user-field.aylanetworks.com'
    },
    authentication: {
      token: '',
    },
    devices: {}
  },
  mutations: {
    setToken(state, token) {
      state.authentication.token = token;
    },
    setDevices(state, obj) {
      state.devices = obj;
    }
  },
});

new Vue({
  el: '#app',
  store,
  router,
  mounted() {},
  render: (h) => h(App),
}).$mount('#app');
