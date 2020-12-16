<template>
  <div id="app">
    <h1 class="title">Wikipedia viewer</h1>
    <form>
      <input type="text" placeholder="Search..." name="search">
    </form>
    <Result/>
  </div>  
</template>

<script>
import Result from './components/Result.vue'
export default {
  name: 'App',
  components:{
    Result
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input[type=text] {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  /*background-image: url('searchicon.png');*/
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
input[type=text]:focus {
  width: 100%;
}
</style>
