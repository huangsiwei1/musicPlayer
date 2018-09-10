import formatTime from '../../utils/formatTime.js'
export default {
  leftTime(state){
    return formatTime(state.duration-state.currentTime)
  },
  currentPercentAbsoulte(state){
    return `${state.currentTime/state.duration*100}%`
  }
}
