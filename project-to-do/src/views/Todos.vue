<template>
  <div>
    <div>
      <button type="button" class="btn btn-success" @click="changeUser">Change user</button>
      <add-list
        @add-task="addTask"
        @list-type="setListType"
      >
      <template #addTaskForm></template>
      </add-list>
        <list-item
          v-for="(item, index) in currentTaskList"
          @do-task="completeTask"
          @edit-task="editTask"
          @delete-task="deleteTask"
          :key="index"
          :userId="item.userId"
          :id = "item.id"
          :img="item.img"
          :title="item.title"
          :description="item.description"
          :isCompleted="item.isCompleted"
          :isEdited="item.isEdited"
          :dateTime="item.dateTime"
          :isList = isList
        />
    </div>
  </div>
</template>

<script>
import AddList from '../components/AddList.vue'
import ListItem from '../components/ListItem.vue'
import {SET_LAST_TASK_ID, SET_TASKS, UPDATE_TASK_COMPLETE} from "../types/mutations";

export default {
  name: 'ToDoList',
  components:{
      AddList,
      ListItem
    },
  data(){
    return{
      currentTaskList:[],
      isList: true
    }
  },
  computed:{
    authUser(){
      return this.$store.state.authUser
    },
    tasks(){
      return this.$store.state.tasks
    }
  },
  methods:{
    addTask(task){
      let newTask = task
      newTask.id = this.$store.state.lastTaskId
      newTask.userId = this.authUser
      this.$store.commit(SET_TASKS, newTask)
      this.$store.commit(SET_LAST_TASK_ID)
    },
    completeTask(id){
      this.$store.commit(UPDATE_TASK_COMPLETE, id)
    },
    editTask(data){
      for(let i = 0; i<this.tasks.length; i++){
        if(this.tasks[i].id === data.id){
          this.tasks[i].img = data.img
          this.tasks[i].title = data.title
          this.tasks[i].description = data.description
          this.tasks[i].isEdited = true
        }
      }
    },
    deleteTask(id){
      for(let i = 0; i<this.tasks.length; i++){
        if(this.tasks[i].id === id){
          this.tasks.splice(i, 1)
        }
      }

    },
    changeUser(){
      this.authUser = ''
    },
    setListType(data){
      this.isList = data
    }
  },
  watch:{
    tasks(){
      this.currentTaskList = this.tasks.filter(task => task.userId == this.authUser)
    },
  },
  beforeMount() {
    console.log(this.tasks)
    console.log(this.authUser)
    this.currentTaskList = this.tasks.filter(task => task.userId === this.authUser)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animateList-enter-active, .animateList-leave-active {
  transition: all .5s ease;
}
.animateList-enter, .animateList-leave-to{
  opacity: 0;
  transform: translateY(-100%);
}
</style>
