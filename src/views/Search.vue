<template>
    <div class="Search">
      <form @submit.prevent>
        <input type="text" placeholder="Search..." name="search" v-model="message" @keyup.enter="search">
      </form>
      <Result v-for="result in results" :key = 'result.pageid' :result = 'result' :urlBase='urlBase' :message = 'message'/>
  </div>
</template>
<script>
import Result from '../components/Result.vue'
export default {
  name:'Search',
  data(){
    return {
      message:'',
      results:[],
      urlBase:'https://en.wikipedia.org/wiki/',
      count:0
    }
  },
  components:{
    Result
  },
  methods:{
    search:function(){
      this.$emit('searchMessage');
      var searchInfo = this.message;
      var url =`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages%7Cextracts&continue=gsroffset%7C%7C&titles=${searchInfo}&generator=search&redirects=1&exsentences=3&exlimit=10&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=300&gsrsearch=${searchInfo}&gsrlimit=4&gsroffset=5`
      this.results=[];
      this.count = 0;
      fetch(url)
      .then(response => response.json())
      .then(
        data =>{
        this.results=[];
        this.results=Object.values(data.query.pages).filter(x=>{
          return Object.keys(x).includes('pageid');
        })
        this.results.forEach(x=>{
          // x['canBeSeen']=false;
          this.$set(x, 'canBeSeen', false)
        })
        // this.count = this.results.length;
        this.recursiveDelay(0,800,this.displayEl);
      })
      .catch(err=>console.log(err));//catch errors
    },
   recrusiveRun:function(n,delay,todoFunc){
    todoFunc();
    if (n<this.results.length){
        setTimeout(this.recrusiveRun,delay,n+1,delay,todoFunc);
    }
   },
   recursiveDelay:function(n,delay,todo){
    setTimeout(this.recrusiveRun,delay,n,delay,todo);
   },
   displayEl:function(){
    // this.results[this.count-1].canBeSeen = true;
    if(this.count<=this.results.length-1){
      this.$set(this.results[this.count],'canBeSeen',true);
      this.count++;
    }
   }
  }
}
</script>
<style scoped>
.Search{
  width: 80%;
}
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input[type=text] {
  width: 200px;
  box-sizing: border-box;
  border: 2px solid #fcf8ec;
  color: #fcf8ec;
  border-radius: 4px;
  font-size: 18px;
  background-color: transparent;
  background-image: url('../assets/searchIcon.svg');
  background-size: 25px;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  cursor: pointer;
}
input[type=text]:focus {
  box-shadow: 0 0 10px #d0e8f2; 
  border:none;
  outline: none;
}
::placeholder{
    color:#fcf8ec;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:#fcf8ec;
}
::-ms-input-placeholder { /* Microsoft Edge */
    color:#fcf8ec;
}
@media only screen and (max-width: 768px){
  .Search{
    width: 100%;
  }
}
</style>


