import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueResource)
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);

Vue.http.options.root = "https://domnno-75266.firebaseio.com/"

new Vue({
  el: '#app',
  render: h => h(App),
})
