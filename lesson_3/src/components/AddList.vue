<template>
  <div>
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
      const newTask = {
        id: this.id,
        title: this.title,
        description: this.description,
        img: this.img,
        isCompleted: false
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