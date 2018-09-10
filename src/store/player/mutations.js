export default {
  getDuration(state,time){
    state.duration=time
  },
  getCurrentTime(state,time){
    state.currentTime=time
  },
  pp(state){
    state.paused=!state.paused
  },
  changeVolume(state,volume){
    state.volume=volume*100
  },
  changeProgress(state,progress){
    state.changeTime=progress*state.duration
  },
}
