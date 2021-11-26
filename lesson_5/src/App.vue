<template>
  <div id="app">
    <link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.min.css">
    Task 1
    <some-form />
    Task 2
<!--    <vision-methods-form/>-->
    <provide-injection />
  </div>
</template>

<script>
import SomeForm from './components/SomeForm.vue'
import VisionMethodsForm from "./components/VisionMethodsForm";
import ProvideInjection from "./components/ProvideInjection";

export default {
  name: 'App',
  components: {
    ProvideInjection,
    VisionMethodsForm,
    SomeForm
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
