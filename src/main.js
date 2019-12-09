import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.css'
import qs from 'qs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Swiper from "swiper"
// import "../node_modules/swiper/dist/css/swiper.css"

Vue.use(ElementUI);

import { Button, Select, Input } from 'element-ui';

Vue.use(Select,Input,Button);

Vue.prototype.$qs = qs;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
