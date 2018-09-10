<template>
  <div class="player">
    <audio
    ref='audio'
    :src="currentItem.file"
    @loadedmetadata="loadedmetadata"
    @timeupdate="timeupdate"
    ></audio>
    <div class="row r1">
      <div class="-col-auto">-{{leftTime}}</div>
      <div class="volume-container">
        <i class="icon-volume"></i>
        <div class="volume-wrap">
          <Progress :value="volume1" @changeProgress="changeVolume"></Progress>
        </div>
      </div>
    </div>
    <div class="pro">
      <Progress :value="currentPercentAbsoulte" @changeProgress="changeProgress"></Progress>
    </div>
    <div class="row">
      <div class="ig"><i class=" icon prev" @click="proNext('prev')"></i><i class="icon" :class="paused?'play':'pause'" @click="pp"></i><i class="icon next" @click="proNext('next')"></i></div>
      <div class="-col-auto"><i class="icon rt" :class="`repeat-${repeatType}`" @click="changeRepeatType(repeatType)"></i></div>
    </div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
import Progress from './Progress.vue'
export default {
  components:{
    Progress
  },
  computed:{
    ...mapState('player',['paused','volume','currentTime','duration','changeTime']),
    ...mapState('list',['musicList','currentIndex','repeatType']),
    ...mapGetters('player',['leftTime','currentPercentAbsoulte']),
    ...mapGetters('list',['currentItem']),
    volume1(){
      return `${this.volume}%`
    },

  },
  methods:{
    ...mapMutations('player',['getDuration','getCurrentTime','pp','changeVolume','changeProgress']),
    ...mapMutations('list',['proNext','next','random','changeRepeatType']),
    loadedmetadata(){
      this.getDuration(this.$refs.audio.duration)
    },
    timeupdate(){
      this.getCurrentTime(this.$refs.audio.currentTime)
    }
  },
  watch:{
    paused(val){
      if(val){
        this.$refs.audio.pause()
      }else{
        this.$refs.audio.play()
      }
    },
    changeTime(val){
      this.$refs.audio.currentTime=val
    },
    volume(val){
      this.$refs.audio.volume = this.volume / 100
    },
    currentTime(val){
      if(val==this.duration){
        if(this.repeatType=="cycle"){
          this.next()
        }else if(this.repeatType=="once"){
          this.changeProgress(0)
        }else if(this.repeatType=="random"){
          const a=Math.floor(Math.random()*this.musicList.length)
          if(a==this.currentIndex){
            this.changeProgress(0)
          }else{
            console.log(1)
            this.random(a)
          }
        }
      }
    },
  },
  mounted(){
    this.$refs.audio.oncanplay=()=>{
      if(!this.paused){
        this.$refs.audio.play()
      }else{
        this.$refs.audio.pause()
      }
    }
    this.$refs.audio.volume = this.volume / 100
  }
}
</script>

<style lang="scss">
  .player{
    height: 1.2rem;
    .row>*{
      display: block!important;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
    }
    .row>.-col-auto{
      display: block!important;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
    }
    .row>.ig>i{
      margin-left: .2rem
    }
    .r1{
      transform: translateY(-.2rem);
      margin-left:.1rem;
    }
    .volume-container{
      margin-left: .2rem
    }
    .volume-wrap{
      display: inline-block;
      width: 20%;
      transform: translateY(-.04rem)
    }
    .icon-volume{
      display: inline-block;
      width: .16rem;
      height: .16rem;
      background: url(../../images/icons.png) no-repeat;
      background-size: .16rem auto;
      background-position: 0 -112px;
      transform: translateY(.02rem)
    }
    .icon {
      display: inline-block;
      width: .32rem;
      height: .32rem;
      background: url(../../images/icons.png) no-repeat;
      background-size: .32rem auto;
    }
    .icon.prev {
        background-position: 0 0;
    }
    .icon.next {
        background-position: 0 -32px;
    }
    .icon.pause {
        background-position: 0 -64px;
    }
    .icon.play {
        background-position: 0 -96px;
    }
    .icon.repeat-once {
    background-position: 0 -128px;
    }
    .icon.repeat-cycle {
        background-position: 0 -160px;
    }
    .icon.repeat-random {
        background-position: 0 -192px;
    }
    .rt{
      margin-right: .2rem
    }
    .pro{
      transform: translateY(-.07rem)
    }
  }
</style>
