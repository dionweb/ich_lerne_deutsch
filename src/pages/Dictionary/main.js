import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import { rtdbPlugin } from 'vuefire'

Vue.use(VueMeta)
Vue.use(rtdbPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')