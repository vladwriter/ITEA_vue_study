<template>
  <div id="app">
    <after-loop :someArray = "array"/>
    <class-builder />
    <slider />
  </div>
</template>

<script>

import AfterLoop from './components/AfterLoop.vue'
import ClassBuilder from './components/ClassBuilder.vue'
import Slider from './components/Slider.vue'

export default {
  name: 'App',
  components: {
    AfterLoop,
    ClassBuilder,
    Slider
  },
  data(){
    return{
      array: [1, 2, 3, 4, 5]
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
