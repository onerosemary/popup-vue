import Vue from 'vue'
import App from './App.vue'
import popupVue from './lib/index.js'
Vue.use(popupVue)


new Vue({
  el: '#app',
  render: h => h(App)
})
