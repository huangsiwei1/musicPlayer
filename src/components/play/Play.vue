<template>
  <div class="play" v-swipeleft=swipeleft v-swiperight=swiperight>
    <div class="col">
      <router-link :to="{name:'List'}">
        <img :src="currentItem.cover" :alt="currentItem.title">
      </router-link>
    </div>
    <div class="song">
      <h2>{{currentItem.title}}</h2>
      <h3>{{currentItem.artist}}</h3>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters('list', ['currentItem']),
  },
  methods:{
    swipeleft(){
      this.$router.push({name:'Lyc'})
    },
    swiperight(){
      this.$router.push({name:'List'})
    }
  }
}
</script>
<style lang="scss">
  .play{
    // background: yellow;
    width: 100%;
    .col{
      width: 3.2rem;
      height: 3.2rem;
      margin:0 auto;
      padding-top:.2rem;
      img{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        animation: rotate 15s linear forwards infinite;
        border:10px solid white;
        @keyframes rotate {
          100%{
            transform: rotate(360deg)
          }
        }
      }
    };
    .song{
      margin-top: .3rem;
      h2,h3{
        text-align:center
      }
    };
  }
</style>


