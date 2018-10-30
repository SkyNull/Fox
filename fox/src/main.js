// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  store
} from './vuex'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入swiper插件
import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
import axios from 'axios'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bac4eef8e6cec555097b875/foxpro';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
