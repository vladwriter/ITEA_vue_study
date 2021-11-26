<template>
  <div>
    <button class="btn btn-success" 
    @click="changeTheme('green')">Green theme</button>
    <button class="btn btn-danger"
    @click="changeTheme('red')">Red theme</button>
    <default-theme
        v-if="theme==='green'">
      <vision-methods-form />
    </default-theme>
    <red-theme
        v-if="theme==='red'"
    >
      <vision-methods-form />
    </red-theme>
  </div>
</template>

<script>
import VisionMethodsForm from "./VisionMethodsForm";
import DefaultTheme from './provideInjection/DefaultTheme'
import RedTheme from './provideInjection/RedTheme'

export default {
  name: 'ProvideInjection',
  components: {
    VisionMethodsForm,
    DefaultTheme,
    RedTheme,
  },
  data(){
    return{
      theme: 'green'
    }
  },
  methods:{
    changeTheme(theme){
      this.theme = theme
    }
  }
}
</script>

<style scoped>

</style>