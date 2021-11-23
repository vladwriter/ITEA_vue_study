<template>
  <form v-on:submit.prevent="onSubmit" class="wrapper">
    <div class="form-group card">
      <input-default
      :label = 'Object.keys(filter)[0]'
      :value="Object.keys(filter)[0]"
      />
      <input-default
          :label = 'Object.keys(filter)[1]'/>
      <c-input
          :label = 'Object.keys(filter)[2]'
      />

      <c-input
          :label = 'Object.keys(filter)[3]'/>
      <c-input
          :label = 'Object.keys(filter)[4]'/>
      <btn-save/>
    </div>
  </form>
</template>

<script>
import CInput from "./CInput.vue";
import CSubmit from './CSubmit.vue'
import { BtnSave } from './../hoc/BtnSave'
import { InputChange } from "../hoc/InputChange";

export default {
  components: { 
    BtnSave:  BtnSave(CSubmit),
    CInput,
    InputDefault: InputChange(CInput)
    },
  name: 'VisionMethodsForm',
  data(){
    return{
      filter: {'Name': '',
                'Last name': '',
                'Age': '',
                'City': '',
                'Country': ''},
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-group{
    max-width: 35rem;
    padding: 10px;
    margin: auto;
  }
</style>
