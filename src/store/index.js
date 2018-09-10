import vuex from 'vuex'
import Vue from 'vue'
import list from './list/index.js'
import player from './player/index.js'
Vue.use(vuex)
export default new vuex.Store({
  modules: {
    list,
    player
  }
})
