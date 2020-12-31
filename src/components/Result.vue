<template>
    <transition-group name="fade" mode="out-in">
        <div v-show="result.canBeSeen" :key="result.title" class="Result">
            <a :href="`${this.urlBase}${this.result.title}`">
                <div class="container rounded my-3 resultContainer">
                    <div class="row d-flex align-items-center justify-content-center py-3" v-if="this.result.thumbnail!=undefined">
                        <div class="col-lg-5 col-md-6 col-sm-12 m-0 p-0 thumbnail">
                            <img :src="imgUrl" :alt="imgAlt" class="picture">
                        </div>
                        <div class="col-md-6 col-sm-12 m-0 p-0 information">
                            <h2>{{result.title}}</h2>
                            <p class="p-2">{{result.extract}}</p>
                        </div>
                    </div>
                    <div v-else class="container information d-flex align-items-center justify-content-center flex-column information">
                        <h2 class="mt-3">{{result.title}}</h2>
                        <p class="p-2">{{result.extract}}</p>
                    </div>
                </div>
            </a>
        </div>
    </transition-group>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    name:'Result',
    props:['result','urlBase','message'],
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
.Result{
    width: 100%;
}
.resultContainer{
    border: 2px solid #fcf8ec;
}
.resultContainer:hover{
    box-shadow: 0 0 10px #d0e8f2; 
}
.picture{
    width: fit-content;
}
.row{
    background:transparent;
    width: 100%;
    height: 100%;
}
.information{
    font-size: large;
    color:#fcf8ec;
    text-align: left
}
a{
    text-decoration: none;
    color: inherit;
}
a:hover{
    text-decoration: none;
    color: inherit;
}
h2{
    text-align: center;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active,.fade-leave-active{
  transition: all .6s
}
@media only screen and (max-width: 768px){
    .row{
        margin: 0;
        padding: 0;
    }
}
@media only screen and (max-width: 540px){
    .picture{
        width: 100%;
    }
}
</style>

