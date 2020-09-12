import Vue from 'vue'
import App from './App.vue'
import Hamburger from '../index'

Vue.config.productionTip = false

Vue.use(Hamburger, {
  option: 'option'
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
