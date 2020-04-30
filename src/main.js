import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


import { chartXKCDLine } from 'chart.xkcd-vue'
Vue.component('chartxkcd-line', chartXKCDLine)

new Vue({
  render: h => h(App),
}).$mount('#app')
