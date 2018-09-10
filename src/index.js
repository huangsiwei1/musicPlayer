import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import flexible from './flexible.js'
import swipe from './swipe.js'
flexible()
swipe()
/* eslint no-new: "off" */
new Vue({
  el: '#app',
  router,
  store,
  methods: {
    flexible
  },
  // beforeCreate () {
  //   flexible()
  // },
  components: {
    App
  },
  render: h => h('App')
})
