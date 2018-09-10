export default {
  currentItem(state){
    return state.musicList[state.currentIndex]
  },
  parseLyric(state){
    var lyrics = state.musicList[state.currentIndex].lrc.split("\n");
    var lrcObj = {};
    for(var i=0;i<lyrics.length;i++){
        var lyric = decodeURIComponent(lyrics[i]); //解析歌词数组文件
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg); //找到匹配正则表达式的值，这里是返回歌词时间字符串的数组
        if(!timeRegExpArr)continue;
        var clause = lyric.replace(timeReg,'');  //将歌词数组里每一项的时间替换成空，返回的是歌词字符串
        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            lrcObj[time] = clause;
        }
    }
    return lrcObj;
  },
  // changeRepeatType(state){
  //   if(state.repeatType=="cycle"){

  //   }else if(state.repeatType=="once"){

  //   }else{

  //   }
  // }
}
