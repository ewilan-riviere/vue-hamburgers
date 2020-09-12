import hamburger from './lib/hamburger.vue'
import 'hamburgers/dist/hamburgers.min.css'

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options, isServer) {
    if (options) {
      // Vue.prototype.$option = options.option
    }
    Vue.component('hamburger', hamburger)
  }
}
