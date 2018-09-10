<template>
  <div class="lyc" v-swiperight=swiperight>
    <div class="lyc-box">
      <ul class="lyric-box" ref="ul" style="margin-top:0rem">
        <li class="lyric" :class="{light:parseInt(currentTime)>=key}" :index="key" v-for="(lrc,key,index) in parseLyric" :key="index" ref="li">{{lrc}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
  computed:{
    ...mapState('player',['currentTime']),
    ...mapGetters('list',['parseLyric'])
  },
  methods:{
    swiperight(){
      this.$router.push({name:'Play'})
    }
  },
  watch:{
    currentTime(val,oldval){
      let li=this.$refs.li
      for(var i=0;i<li.length;i++){
        if(parseInt(val)>=li[i].getAttribute("index")){
          this.$refs.ul.style.marginTop=-0.5*i+"rem"
        }
      }
    }
  },
  mounted(){
    console.log(this.lyc)
  }
}
</script>
<style lang="scss">
 .lyc{
   height: 100%;
   width: 100%;
   overflow: hidden;
  //  background: green;
  .lyc-box{
    height: 3rem;
    margin-top:.8rem;
    overflow: hidden;
    .lyric{
      height: .3rem;
      font-size: .16rem;
      text-align: center;
      margin-bottom: .2rem;
      &.light{
        color:red;
        font-size:.19rem;
        font-weight: bold
      }
    }
  }
 }
</style>

