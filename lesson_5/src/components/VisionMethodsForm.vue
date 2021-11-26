<template>
  <form v-on:submit.prevent="onSubmit" class="wrapper">
    <div class="form-group card"
         :style="{'background-color': form.bg}">
      <p v-if="changedFieldsCounter"
        :style="{'color': form.clr}">{{ message }}</p>
      <div>
        <button v-if="changedFieldsCounter" type="button" class="btn btn-info"
                @click="cleanFields"
        >Clean form
        </button>
        <button type="button" class="btn btn-primary"
                @click="isExtraFilters = !isExtraFilters"
                :style="{'background-color': form.btnClr}"
        >
          Show extra filters
        </button>
      </div>
      <c-input
        :label = 'Object.keys(filter)[0]'
        v-model="filter.Name"
        @change-data="setValue"

      />
      <c-input
          :label = 'Object.keys(filter)[1]'
          v-model="filter.Lastname"
          @change-data="setValue"
      />
      <transition name="animateList" mode="in-out">
          <c-input v-if="isExtraFilters"
              :label = 'Object.keys(filter)[2]'
              v-model="filter.Age"
              @change-data="setValue"
          />
      </transition>
        <transition name="animateList" mode="in-out">
          <c-input v-if="isExtraFilters"
              :label = 'Object.keys(filter)[3]'
              v-model="filter.City"
              @change-data="setValue"
          />
        </transition>
          <transition name="animateList" mode="in-out">
          <c-input v-if="isExtraFilters"
              :label = 'Object.keys(filter)[4]'
              v-model="filter.Country"
              @change-data="setValue"
          />
      </transition>
<!--      <btn-save/>-->
    </div>
  </form>
</template>

<script>
import CInput from "./CInput.vue";
import CSubmit from './CSubmit.vue'
import { BtnSave } from './../hoc/BtnSave'

export default {
  inject: ['form'],
  components: { 
    BtnSave:  BtnSave(CSubmit),
    CInput,
    },
  name: 'VisionMethodsForm',
  data(){
    return{
      defaultStatementOfForm: {'Name': 'Input name',
                              'Lastname': 'Input lastname',
                              'Age': '',
                              'City': '',
                              'Country': ''
                              },
      filter: '',
      message: '',
      changedFieldsCounter: 0,
      changedFields: [],
      isExtraFilters: false
    }
  },
  methods:{
    setValue(data){
      this.filter[data.label] = data.value
      this.changedFields.push(data.label)
      this.changedFields = [...new Set(this.changedFields)]
    },
    cleanFields(){
      this.changedFieldsCounter = 0
      this.changedFields = []
      this.filter = {...this.defaultStatementOfForm}
      this.isExtraFilters = false
    }
  },
  watch:{
    changedFields(){
      this.changedFieldsCounter = this.changedFields.length
      this.message = 'Fields was changed ' + this.changedFieldsCounter
    }
  },
  beforeMount() {
    this.filter = {...this.defaultStatementOfForm}
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
  .btn{
    width: 25%;
    margin: auto;
  }
  .animateList-enter-active, .animateList-leave-active {
    transition: all .8s ease;
  }
  .animateList-enter, .animateList-leave-to{
    opacity: 0;
    transform: translateY(-100%);
  }
</style>
