import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import './registerServiceWorker'

import VueTippy from 'vue-tippy'
Vue.config.productionTip = false

import '../public/img/desktop/wood-pattern.png'
import router from './router'

//  = new Vue();

require('@/assets/css/normalize.css')

Vue.use(VueTippy)
export const EventBus = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Start with $> npm run serve