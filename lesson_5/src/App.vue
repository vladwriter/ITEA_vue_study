<template>
  <div id="app">
    <link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.min.css">
    <button type="button" class="btn btn-info"
    @click="showPosts=!showPosts">{{btnName}}</button>
    <some-form v-if="!showPosts"/>
<!--    <vision-methods-form/>-->
    <provide-injection v-if="!showPosts"/>
    <observe v-else/>
  </div>
</template>

<script>
import SomeForm from './components/SomeForm.vue'
import VisionMethodsForm from "./components/VisionMethodsForm";
import ProvideInjection from "./components/ProvideInjection";
import Observe from "./components/Observe";

export default {
  name: 'App',
  components: {
    ProvideInjection,
    VisionMethodsForm,
    SomeForm,
    Observe
  },
  data(){
    return{
      showPosts: false,
      btnName: 'Show Top Anime'
    }
  },
  watch:{
      showPosts(){
        if(this.showPosts){
          this.btnName = "Show forms (Task 1/2/3)"
        }else{
          this.btnName = "Show Top Anime"
        }
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
