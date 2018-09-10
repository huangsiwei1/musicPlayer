<template>
  <div class="main">
    <transition :name="direction">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  beforeRouteUpdate (to, from, next) { //组件路由改变写在改变的组件的父级组件上
    if(to.meta.index>from.meta.index){
      this.direction="slider1"
    }else{
      this.direction="slider"
    }
    next()
  },
  data(){
    return {
      direction: 'slider'
    }
  }


}
</script>

<style lang="scss">
  .main{
    flex:1;
    overflow: hidden;
  }
  .slider-enter-active,.slider-leave-active{
    position:absolute;
    transition:all 1s
  }
  .slider-leave-to{
    // opacity: 0;
    transform:translate3d(100%,0,0)
  }
  .slider-enter{
    // opacity: 0;
    transform: translate3d(-100%,0,0)
  }
  .slider1-enter-active,.slider1-leave-active{
    position:absolute;
    transition:all 1s
  }
  .slider1-leave-to{
    // opacity: 0;
    transform:translate3d(-100%,0,0)
  }
  .slider1-enter{
    // opacity: 0;
    transform: translate3d(100%,0,0)
  }
</style>

