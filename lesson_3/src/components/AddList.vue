<template>
  <div>
    <slot name="addTaskForm">
    <form @submit.prevent="onSubmit">
    <c-input
      placeholder="Title"
      v-model="title"
    />
    <c-input
      placeholder="Description"
      v-model="description"
    />
    <c-input
      placeholder="Img"
      v-model="img"
    />
    <p class="text-danger">{{ validationMessage }}</p>
    <button type="submit" class="btn btn-success btn-lg"
      >Add task</button>
      <button type="button" class="btn btn-warning btn-lg"
      @click="setTypeOfList"
      >Show tasks as {{getTypeOfList}}</button>
      </form>
      </slot>
  </div>
</template>

<script>
import CInput from './CInput.vue'

export default {
  name: 'AddList',
  components:{
    CInput,
  },
  data(){
    return{
      title:"",
      description:"",
      img:"",
      id: 0,
      isList: true,
      validationMessage: ''
    }
  },
  computed: {
    getTypeOfList(){
      if(this.isList){
        return "cards"
      } else {
        return "list"
      }
    }
  },
  methods:{
    onSubmit(){
      let tail = this.img.split('.')
      tail = tail[tail.length-1]
      console.log(tail)
      if(tail === 'jpg' || tail === 'png' || !tail){
      this.validationMessage = ''
      const dateTime = new Date()
      let minutes = dateTime.getMinutes()
      let hours = dateTime.getHours()
      let day = dateTime.getDate()
      let month = dateTime.getMonth()+1
      let year = dateTime.getFullYear()
      let currentDateTime = `${hours}:${minutes} ${day}.${month}.${year}`
      const newTask = {
        id: this.id,
        title: this.title,
        description: this.description,
        img: this.img,
        isCompleted: false,
        isEdited: false,
        dateTime: currentDateTime
      }
      this.$emit('add-task', newTask)
      this.id++
      } else {
        this.validationMessage = "Image format is only 'jpg' or 'png'"
      }
      
    },
    setTypeOfList(){
      this.isList = !this.isList
      this.$emit('list-type', this.isList)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>