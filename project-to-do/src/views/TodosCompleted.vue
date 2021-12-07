<template>
  <div>
    <authorization
      @auth-id="getAuthId"
      v-if="!authorizedUser"
    />
    <div
      v-else>
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
import Authorization from './Auth.vue'

export default {
  name: 'ToDoList',
  components:{
      AddList,
      ListItem,
      Authorization
    },
  data(){
    return{
      authorizedUser: '',
      taskList: [],
      currentTaskList:[],
      isList: true
    }
  },
  computed:{
  },
  methods:{
    addTask(task){
      let newTask = task
      newTask.userId = this.authorizedUser
      this.taskList.push(newTask)
      this.currentTaskList = this.taskList.filter(task => task.userId == this.authorizedUser)
    },
    completeTask(id){
      for(let i = 0; i<this.taskList.length; i++){
        if(this.taskList[i].id === id){
          this.taskList[i].isCompleted = !this.taskList[i].isCompleted
        }
      }
      this.currentTaskList = this.taskList.filter(task => task.userId == this.authorizedUser)
    },
    editTask(data){
      for(let i = 0; i<this.taskList.length; i++){
        if(this.taskList[i].id === data.id){
          this.taskList[i].img = data.img
          this.taskList[i].title = data.title
          this.taskList[i].description = data.description
          this.taskList[i].isEdited = true
        }
      }
      this.currentTaskList = this.taskList.filter(task => task.userId == this.authorizedUser)
    },
    deleteTask(id){
      for(let i = 0; i<this.taskList.length; i++){
        if(this.taskList[i].id === id){
          this.taskList.splice(i, 1)
        }
      }
      this.currentTaskList = this.taskList.filter(task => task.userId == this.authorizedUser)
    },
    getAuthId(id){
      this.authorizedUser = id
      this.currentTaskList = this.taskList.filter(task => task.userId == id)
    },
    changeUser(){
      this.authorizedUser = ''
    },
    setListType(data){
      this.isList = data
    }
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
