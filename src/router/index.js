import Router from 'vue-router'
import Vue from 'vue'
import Main from '@/main/Main.vue'
import Header from '@/header/Header.vue'
import RealPlayer from '@/realplayer/RealPlayer.vue'
import Play from '@/play/Play.vue'
import List from '@/list/List.vue'
import Lyc from '@/lyc/Lyc.vue'
Vue.use(Router)
const routes = [
  {
    path: '/',
    components: {
      default: Main,
      header: Header,
      realplayer: RealPlayer
    },
    children: [
      {
        name: 'Play',
        path: '',
        component: Play,
        meta:{
          index:2
        }
      },
      {
        name: 'List',
        path: 'list',
        component: List,
        meta:{
          index:1
        }
      },
      {
        name: 'Lyc',
        path: 'lyc',
        component: Lyc,
        meta:{
          index:3
        }
      }]
  }
]
export default new Router({
  mode: 'history',
  routes
})
