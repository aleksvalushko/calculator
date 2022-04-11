import Vue from 'vue'

import { regVuePlugins } from '@/00-low-lavel-stuff/vue-init'
import store from '../03-store'
import App from './App.vue'

const appInit = async () => {
  await regVuePlugins()
  new Vue({
    store,
    render: createElement => createElement(App)
  }).$mount('#app')
}

export {
  appInit
}
