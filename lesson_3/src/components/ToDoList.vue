<template>
  <div>
    <add-list
      @add-task="addTask"
    />
    <div>
      <list-item
      @do-task="completeTask"
        v-for="item in taskList" 
        :key="item.id"
        :id = "item.id"
        :img="item.img"
        :title="item.title"
        :description="item.description"
        :isCompleted="item.isCompleted"
      />
    </div>
  </div>
</template>

<script>
import AddList from './AddList.vue'
import ListItem from './ListItem.vue'

export default {
  name: 'ToDoList',
  components:{
      AddList,
      ListItem
    },
  props: {
  },
  data(){
    return{
      taskList: []
    }
  },
  computed:{
  },
  methods:{
    addTask(task){
      this.taskList.push(task) 
    },
    completeTask(id){
      for(let i = 0; i<this.taskList.length; i++){
        if(this.taskList[i].id === id){
          this.taskList[i].isCompleted = true
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
