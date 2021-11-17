<template>
  <div>
    <add-list
      @add-task="addTask"
    />
    <div>
      <list-item
        v-for="item in taskList" 
        :key="item.id"
        :id = "item.id"
        :img="item.img"
        :title="item.title"
        :description="item.description"
        @complete="completeTask"
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
      taskList: [],
      id: ''
    }
  },
  computed:{
  },
  methods:{
    addTask(task){
      this.taskList.push(task) 
    },
    completeTask(id){
      debugger
      console.log(id)
      this.id = id.id
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
