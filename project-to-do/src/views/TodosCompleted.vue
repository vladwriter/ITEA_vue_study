<template>
  <div>
    <button @click="showAllTasks">Show all tasks</button>
    <to-do-list
        :tasks = tasks
    >
    </to-do-list>
  </div>
</template>

<script>

import ToDoList from "../components/ToDoList";

export default {
  name: 'TodosCompleted',
  components:{
    ToDoList,
  },
  data(){
    return{
    }
  },
  computed:{
    tasks(){
      return this.$store.state.tasks.filter(task => task.isCompleted)
    }
  },
  methods:{
    showAllTasks(){
      this.$router.push('todos')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
