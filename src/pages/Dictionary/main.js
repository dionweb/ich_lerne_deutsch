import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import VueMeta from 'vue-meta'

Vue.use(VueFire)
Vue.use(VueMeta)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')