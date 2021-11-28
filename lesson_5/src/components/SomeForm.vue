<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="form-group card">
      <h2>Task 1</h2>
      <label for="first_name" class="form-label mt-4">First name</label>
      <input type="text" class="form-control" id="first_name" placeholder="Enter your first name" v-model="first_name">
      <label for="last_name" class="form-label mt-4">Last name</label>
      <input type="text" class="form-control" id="last_name" placeholder="Enter your last name" v-model="last_name">   
      <btn-save
      :firstName = first_name
      :lastName = last_name
      />
    </div>
      
  </form>
</template>

<script>
import CSubmit from './CSubmit.vue'
import { BtnSave } from './../hoc/BtnSave'

export default {
  components: { 
    BtnSave:  BtnSave(CSubmit)
    },
  name: 'SomeForm',
  data(){
    return{
      first_name: '',
      last_name: ''
    }
  },
  methods:{
    onSubmit(){
      console.log('On submit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-group{
    max-width: 25rem;
    padding: 10px;
    margin: auto;
  }
</style>
