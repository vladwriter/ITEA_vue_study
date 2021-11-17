<template>
  <div id="app">
    <link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.min.css">

    <to-do-list/>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    ToDoList,
  },
  data(){
    return{
      checkBoxBool:true
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 30px;
}
</style>
