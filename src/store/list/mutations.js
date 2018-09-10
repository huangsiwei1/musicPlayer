export default {
  proNext(state,type){
    let num = state.musicList.length
    if (state.repeatType === 'cycle' || state.repeatType === 'once') {
      if (type == 'prev') {
        state.currentIndex = (state.currentIndex - 1 + num) % num
      } else {
        state.currentIndex = (state.currentIndex + 1) % num
      }
    }else{
      if(Math.floor(Math.random()*state.musicList.length)==state.currentIndex){
        state.currentIndex = (state.currentIndex + 1) % num
      }else{
        state.currentIndex=Math.floor(Math.random()*state.musicList.length)
      }
    }
  },
  changeCurrentIndex(state,musicItem){
    state.currentIndex=state.musicList.indexOf(musicItem)
  },
  next(state){
    let num = state.musicList.length
    state.currentIndex = (state.currentIndex + 1) % num
  },
  random(state,num){
    state.currentIndex=num
  },
  changeRepeatType(state,type){
    if(type=="cycle"){
      state.repeatType="once"
    }else if(type=="once"){
      state.repeatType="random"
    }else{
      state.repeatType="cycle"
    }
    console.log(state.repeatType)
  },
  delete1(state,musicItem){
    var a=state.musicList.indexOf(musicItem)
    var b=state.musicList.length
    state.musicList.splice(a,1)
    if(state.currentIndex>a){
      state.currentIndex--
    }else{
      if(state.currentIndex==b-1){
          state.currentIndex=0
      }else{
        state.currentIndex=state.currentIndex
      }
    }

  }
}
