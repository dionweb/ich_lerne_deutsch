import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import VueMeta from 'vue-meta'
Vue.config.productionTip = false

Vue.use(vueResource)
Vue.use(VueMeta)
new Vue({
  render: h => h(App),
}).$mount('#app')