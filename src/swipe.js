import Vue from 'vue'
export default ()=>{
  function swipe(type){
    Vue.directive(type,{
      bind:(el,building)=>{
        var hammertime=new Hammer(el);
        hammertime.on(type,building.value)
      }
    })
  }
  swipe('swipeleft');
  swipe('swiperight')
}
