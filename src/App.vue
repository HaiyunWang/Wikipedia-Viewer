<template>
  <div id="app" class="container d-flex align-items-center justify-content-center flex-column">
    <h1 class="title mt-5">Wikipedia viewer</h1>
    <!--<button class="randomArticle" @click="displayRandomArticle()">Random article</button>
    <form @submit.prevent>
      <input type="text" placeholder="Search..." name="search" v-model="message" @keyup.enter="searchMessage()">
      <P class="serchTitle mt-3">You are looking for {{message}}</P>
      <Result v-for="result in results" :key = 'result.pageid' :result = 'result' :url='url' :message = 'message'/>
    </form>-->
    <div class="row">
      <div class="col-md-6 ">
        <svg width="150" height="271" viewBox="0 0 150 271" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="randomIcon">
          <path id="Vector 1" d="M105.28 58.1019C94.575 37.2035 65.688 39.1808 49.2136 58.1019C35.4258 73.9374 42.941 91.4497 20.873 87.8265C1.58449 84.6597 -0.691102 61.3846 2.97702 51.5873C30.0251 -20.6565 133.908 -10.659 147.438 42.3629C155.875 75.4243 123.938 109.431 118.201 162.214C112.464 214.997 83.7822 199.518 79.7107 189.889C66.1318 157.777 115.986 79.0003 105.28 58.1019Z" fill="#F4F8F8"/>
          <path id="Ellipse 1" d="M123.236 243.783C121.15 258.269 107.716 268.321 93.2295 266.236C78.7434 264.15 68.6908 250.716 70.7765 236.23C72.8622 221.743 86.2963 211.691 100.783 213.776C115.269 215.862 125.321 229.296 123.236 243.783Z" fill="#F4F8F8"/>
          </g>
        </svg>
        <h3>Random</h3>
      </div>
      <div class="col-md-6 d-flex align-items-center justify-content-center flex-column">
        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="searchIcon">
          <g id="Union">
          <mask id="path-1-inside-1" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45.069 36.9858C47.2419 33.3937 48.4924 29.1814 48.4924 24.6769C48.4924 11.524 37.8299 0.861435 24.6769 0.861435C11.524 0.861435 0.861435 11.524 0.861435 24.6769C0.861435 37.8299 11.524 48.4924 24.6769 48.4924C29.1814 48.4924 33.3937 47.2419 36.9858 45.069L47.2427 55.3259C49.4748 57.558 53.0938 57.558 55.3259 55.3259C57.558 53.0938 57.558 49.4748 55.3259 47.2427L45.069 36.9858Z"/>
          </mask>
          <path d="M45.069 36.9858L42.5021 35.4331L41.2853 37.4447L42.9477 39.1071L45.069 36.9858ZM36.9858 45.069L39.1071 42.9477L37.4447 41.2853L35.433 42.5021L36.9858 45.069ZM47.2427 55.3259L45.1213 57.4472V57.4472L47.2427 55.3259ZM55.3259 55.3259L53.2046 53.2046L53.2046 53.2046L55.3259 55.3259ZM55.3259 47.2427L53.2046 49.364V49.364L55.3259 47.2427ZM45.4924 24.6769C45.4924 28.6187 44.3996 32.2962 42.5021 35.4331L47.6359 38.5385C50.0841 34.4913 51.4924 29.744 51.4924 24.6769H45.4924ZM24.6769 3.86143C36.173 3.86143 45.4924 13.1808 45.4924 24.6769H51.4924C51.4924 9.86714 39.4867 -2.13857 24.6769 -2.13857V3.86143ZM3.86143 24.6769C3.86143 13.1808 13.1808 3.86143 24.6769 3.86143V-2.13857C9.86714 -2.13857 -2.13857 9.86714 -2.13857 24.6769H3.86143ZM24.6769 45.4924C13.1808 45.4924 3.86143 36.173 3.86143 24.6769H-2.13857C-2.13857 39.4867 9.86714 51.4924 24.6769 51.4924V45.4924ZM35.433 42.5021C32.2962 44.3996 28.6187 45.4924 24.6769 45.4924V51.4924C29.744 51.4924 34.4913 50.0841 38.5385 47.6359L35.433 42.5021ZM49.364 53.2046L39.1071 42.9477L34.8645 47.1903L45.1213 57.4472L49.364 53.2046ZM53.2046 53.2046C52.144 54.2651 50.4245 54.2651 49.364 53.2046L45.1213 57.4472C48.525 60.8509 54.0435 60.8509 57.4472 57.4472L53.2046 53.2046ZM53.2046 49.364C54.2651 50.4245 54.2651 52.144 53.2046 53.2046L57.4472 57.4472C60.8509 54.0435 60.8509 48.525 57.4472 45.1213L53.2046 49.364ZM42.9477 39.1071L53.2046 49.364L57.4472 45.1213L47.1903 34.8645L42.9477 39.1071Z" fill="#F4F8F8" mask="url(#path-1-inside-1)"/>
          </g>
          <circle id="Ellipse 4" cx="25" cy="25" r="12.5" stroke="#F4F8F8" stroke-width="3"/>
          </g>
        </svg>
        <h3>Search</h3>
        <form @submit.prevent>
        <input type="text" placeholder="Search..." name="search" v-model="message" @keyup.enter="searchMessage()">
          <P class="serchTitle mt-3">You are looking for {{message}}</P>
          <Result v-for="result in results" :key = 'result.pageid' :result = 'result' :url='url' :message = 'message'/>
      </form>
      </div>
    </div>
  </div>  
</template>

<script>
import Result from './components/Result.vue'
export default {
  name: 'App',
  components:{
    Result
  },
  data(){
    return{
      message:'',
      results:[],
      isSearched:false,
      url:'https://en.wikipedia.org/wiki/'
    }
  },
  methods:{
    //entry for random articles
    displayRandomArticle:function(){
      window.open('http://en.wikipedia.org/wiki/Special:Random')
    },
    //get results data
    searchMessage:function(){
    var searchInfo = this.message;
    this.isSearched = true;
    // var url =`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages%7Cextracts&continue=gsroffset%7C%7C&titles=${searchInfo}&generator=search&redirects=1&exsentences=5&exlimit=10&exintro=1&explaintext=1&gsrsearch=${searchInfo}&gsrlimit=5&gsroffset=5`
    var url =`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages%7Cextracts&continue=gsroffset%7C%7C&titles=${searchInfo}&generator=search&redirects=1&exsentences=3&exlimit=10&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=200&gsrsearch=${searchInfo}&gsrlimit=5&gsroffset=5`
    fetch(url)
    .then(response => response.json())
    .then(
      data =>{
      this.results=[];
      this.results=Object.values(data.query.pages).filter(x=>{
        return Object.keys(x).includes('pageid');
      })
    })
    .catch(err=>console.log(err));//catch errors
    this.message='';
    this.isSearched=false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#cbdade;
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
}
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}
input[type=text] {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #cbdade;
  border-radius: 4px;
  font-size: 18px;
  background-color: transparent;
  background-image: url('./assets/searchIcon.svg');
  background-size: 25px;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  cursor: pointer;
}
input[type=text]:focus {
  width: 90%;
  background:transparent;
  background-image: url('./assets/searchIcon.svg');
  background-size: 25px;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
}
::placeholder{
    color:#f4f8f8;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:#f4f8f8;
}
::-ms-input-placeholder { /* Microsoft Edge */
    color:#f4f8f8;
}
.randomArticle{
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #cbdade;
  border-radius: 4px;
  font-size: 18px;
  background:transparent;
  color:#f4f8f8;
  margin: 30px;
  cursor: pointer;
}
.serchTitle{
  font-size: 18px;
}
</style>
