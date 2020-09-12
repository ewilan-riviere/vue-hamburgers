import hamburger from './lib/hamburger.vue'

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options, isServer) {
    if (options) {
      // Vue.prototype.$option = options.option
    }
    Vue.component('hamburger', hamburger)
  }
}
