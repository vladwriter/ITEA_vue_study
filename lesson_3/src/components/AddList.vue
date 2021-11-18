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
    <button type="submit" class="btn btn-success btn-lg"
      >Add task</button>
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
      id: 0
    }
  },
  computed: {
  },
  methods:{
    onSubmit(){
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>