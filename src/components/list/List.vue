<template>
  <ul class="list" v-swipeleft=swipeleft>
    <MusicItem v-for="(item,index) in musicList" :key="index" :musicItem="item" :focus="index==currentIndex" @delete="delete1"></MusicItem>
  </ul>
</template>
<script>
import MusicItem from './MusicItem'
import {mapState,mapMutations} from 'vuex'
import './List.scss'
export default {
  computed:{
    ...mapState('list',['musicList','currentIndex']),
  },
  methods:{
    ...mapMutations('list',['delete1']),
    swipeleft(){
      this.$router.push({name: 'Play'})
    }
  },
  components:{
    MusicItem
  },
}
</script>
<style lang="scss">
  .list{
    width: 100%;
    // background: red
  }
</style>


