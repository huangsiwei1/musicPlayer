import {mapGetters, mapMutations} from 'vuex'
export default {
  // render(){
  //   return
  // }
  props:{
    musicItem:{
      type:Object,
      required: true
    },
    focus:{
      type:Boolean
    }
  },
  methods:{
    ...mapMutations('list',['changeCurrentIndex'])
  },
  render () {
    return (
      <li class={`row ${this.focus ? 'focus' : ''}`} >
        <p class="title" onClick={()=>{this.changeCurrentIndex(this.musicItem)}}>{this.musicItem.title}</p>
        <p class="lrclink">
          <router-link to={{name:'Lyc'}}>歌词</router-link>
        </p>
        <p class="delete" onClick={()=>{this.$emit('delete',this.musicItem)}}>x</p>
      </li>
    )
  }
}
