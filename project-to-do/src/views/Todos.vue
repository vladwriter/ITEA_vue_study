<template>
  <div>
      <button class="btn btn-primary" @click="showCompletedTasks">Show completed tasks</button>
    <to-do-list
    :tasks = tasks
    >
    </to-do-list>
  </div>
</template>

<script>

import ToDoList from "../components/ToDoList";

export default {
  name: 'Todos',
  components:{
    ToDoList,
    },
  data(){
    return{
    }
  },
  computed:{
    tasks(){
      return this.$store.state.tasks.filter(task => task.isCompleted === false)
    }
  },
  methods:{
    showCompletedTasks(){
      this.$router.push('todos-completed')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
