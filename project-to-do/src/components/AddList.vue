<template>
  <div>
    <slot name="addTaskForm">
      <button type="button" class="btn btn-info" @click="openCreateTaskForm = !openCreateTaskForm">Create new task</button>
      <button type="button" class="btn btn-warning btn-lg"
              @click="setTypeOfList"
      >Show tasks as {{getTypeOfList}}</button>
      <transition name="show" mode="in-out">
    <form @submit.prevent="onSubmit"
    v-if="openCreateTaskForm">
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
      </form>
      </transition>
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
      isList: true,
      validationMessage: '',
      openCreateTaskForm: false
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
      if(!this.img){
        this.img = 'https://cdn-icons-png.flaticon.com/512/906/906334.png'
      }
      let tail = this.img.split('.')
      tail = tail[tail.length-1]
      if(tail === 'jpg' || tail === 'png' || !tail){
      this.validationMessage = ''
      const dateTime = new Date()
        const twoDigits = (data) => {
          return ('0' + data).slice(-2)
        }
        let minutes = twoDigits(dateTime.getMinutes())
        let hours = twoDigits(dateTime.getHours())
        let day = twoDigits(dateTime.getDate())
        let month = twoDigits(dateTime.getMonth()+1)
        let year = dateTime.getFullYear()
      let currentDateTime = `${hours}:${minutes} ${day}.${month}.${year}`
      const newTask = {
        title: this.title,
        description: this.description,
        img: this.img,
        isCompleted: false,
        isEdited: false,
        dateTime: currentDateTime
      }
      this.$emit('add-task', newTask)
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
.show-enter-active, .sh-leave-active {
  transition: all .5s ease-in-out;
}
.show-enter, .show-leave-to{
  opacity: 0;
  transform: translateY(-8%);
}
</style>