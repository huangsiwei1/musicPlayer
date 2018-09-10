<template>
  <div class="container">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="realplayer"></router-view>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters('list', ['currentItem']),
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0
  }
  html,body{
    height: 100%;
    overflow: hidden;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .container{
    height: 100%;
    display:flex;
    flex-direction: column;
    // background-size: auto 100%;
    // :style="{ 'background-image': `url(${currentItem.cover})`}"
    .play,.list,.lyc{
      height: 100%;
    };
  }
</style>
