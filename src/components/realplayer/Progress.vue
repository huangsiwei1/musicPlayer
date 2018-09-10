<template>
  <div class="components-progress" @click="changeProgress" ref="progressbar">
    <div class="progress" :style="{width:value}" ></div>
  </div>
</template>
<script>
export default {
  props:{
    value:{
      type:String,
      default:0
    }
  },
  methods:{
    changeProgress(e){
      let progress=(e.clientX-this.$refs.progressbar.getBoundingClientRect().left)/this.$refs.progressbar.clientWidth
      this.$emit('changeProgress',progress)
    }
  }
}
</script>
<style lang="scss">
  .components-progress{
    width:100%;
    height: 3px;
    background: #ddd;
  }
  .progress{
    width: 50%;
    height: 3px;
    background: #2f9842
  }
</style>


