import Vue from 'vue'
import App from './App.vue'
import Hamburger from '../index'

import '../src/assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(Hamburger, {
  option: 'option'
})

new Vue({
  render: (h) => h(App)
}).$mount('#app')
