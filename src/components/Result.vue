<template>
  <div>
    <div class="container border rounded border-secondary my-3">
        <div class="row d-flex align-items-center justify-content-center p-3" v-if="this.result.thumbnail!=undefined">
            <div class="col-md-5 thumbnail">
                <img :src="imgUrl" :alt="imgAlt" class="picture">
            </div>
            <div class="col-md-7 information">
                <h2>{{result.title}}</h2>
                <p>{{result.extract}}</p>
            </div>
        </div>
        <div v-else class="container information d-flex align-items-center justify-content-center flex-column">
            <h2 class="mt-3">{{result.title}}</h2>
            <p>{{result.extract}}</p>
        </div>
    </div>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name:'Result',
  props:['result','url','message'],
  computed:{
      imgUrl:function(){
          return `${this.result.thumbnail.source}`
      },
      imgAlt:function(){
          return `${this.result.title}`
      }
  }
}
</script>

<style scoped>
.thumbnail{
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%
}
.picture{
    width:100%;
    min-width: 200px;
}
.information{
    font-size: large
}
</style>

