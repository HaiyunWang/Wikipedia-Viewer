<template>
  <div id="app">
     <router-link to="/" class="link" :style="{'margin-top':`${marginTop}vh`}">
        <h1 class="title">Wikipedia Viewer</h1>
    </router-link> 
    <transition name="fade" mode="out-in">
      <router-view @searchMessage = 'searchMessage'/>
    </transition>
  </div>

</template>
<script>
export default {
  name:'App',
  data(){
    return {
      marginTop:30,
      scroll:'hidden',
      viewportWidth:0
    }
  },
  watch:{
    '$route' (){
      if(this.$route.name =='Search'){
        this.marginTop = 45;
      }else{
        this.marginTop = 30
        this.results = [];
      }
    }
  },
  methods:{
    searchMessage:function(){
    this.marginTop=0;
  }
  },
  mounted(){
    this.viewportWidth = window.innerWidth;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#fcf8ec;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /*overflow-x: hidden;*/
  /*overflow-y:scroll;*/
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateY(5rem)
}
.fade-enter-active,.fade-leave-active{
  transition: all .5s
}
.link,.link:hover{
  color: #fcf8ec;
  text-decoration: none;
  margin-top: 30vh;
  transition:  all .5s;
}
</style>
