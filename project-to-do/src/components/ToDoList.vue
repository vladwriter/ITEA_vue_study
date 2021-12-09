<template>
  <div>
    <div>
      <button type="button" class="btn btn-success" @click="changeUser">Change user (Exit)</button>
      <add-list
          @add-task="addTask"
          @list-type="setListType"
      >
        <template #addTaskForm></template>
      </add-list>
      <c-input
          placeholder="Search..."
          v-model="query"
      />
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
import CInput from "./CInput";
import {DELETE_TASK, SET_AUTH_USER, SET_LAST_TASK_ID, SET_TASKS, UPDATE_TASK} from "../types/mutations";

export default {
  name: 'ToDoList',
  components:{
    AddList,
    ListItem,
    CInput
  },
  props:{
    tasks: Array
  },
  data(){
    return{
      currentTaskList:[],
      isList: true,
      query: ''
    }
  },
  computed:{
    authUser(){
      return this.$store.state.authUser
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
      for(let i = 0; i<this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          let newTask = this.tasks[i]
          let isChanged = true
          newTask.isCompleted = !newTask.isCompleted
          newTask.userId = this.authUser
          this.$store.commit(UPDATE_TASK, {id: id, newTask, isChanged})
        }
      }
    },
    editTask(data){
      for(let i = 0; i<this.tasks.length; i++) {
        if (this.tasks[i].id === data.id) {
          let newTask = this.tasks[i]
          newTask.img = data.img
          newTask.title = data.title
          newTask.description = data.description
          newTask.isEdited = true
          newTask.userId = this.authUser
          this.$store.commit(UPDATE_TASK, {id: data.id, newTask})
        }
      }
    },
    deleteTask(id){
      this.$store.commit(DELETE_TASK, id)
    },
    changeUser(){
      this.$store.commit(SET_AUTH_USER, false)
      this.$router.push('auth')
    },
    setListType(data){
      this.isList = data
    }
  },
  watch:{
    tasks(){
      this.currentTaskList = this.tasks.filter(task => task.userId == this.authUser)
    },
    query(){
      let obj = this.tasks;
      let newArray = [];
      const search = this.query.toLowerCase();
      for (let key in obj) {
        let el = obj[key]
        if (el.title.toLowerCase().indexOf(search) != -1) {
          newArray.push(el)
        } else if(el.description.toLowerCase().indexOf(search) != -1){
          newArray.push(el)
        }
      }
      this.currentTaskList = newArray
    }
  },
  beforeMount() {
    this.currentTaskList = this.tasks.filter(task => task.userId === this.authUser)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
