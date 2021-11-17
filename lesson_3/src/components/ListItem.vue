<template>
  <div class="item alert alert-dismissible alert-info" :class="{checked:isCompleted}">
    <img v-bind:src=img>
      <span class="text-secondary">{{id}} {{title}}</span> 
      <span class="text-secondary">{{description}}</span><br>
      <div class="nav">
        <button v-if="!isCompleted" class="btn btn-info" @click="doTask(id)">Done</button>
        <button v-else class="btn btn-success" @click="doTask(id)">Return</button>
        <button class="btn btn-warning">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'ListItem',
  props: {
    id:{
      type:Number
    },
    img:{
      type: String,
      default: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1995344.jpg"
    },
    title:{
      type: String,
      default: "Default title"
    },
    description:{
      type: String,
      default: "Default description"
    },
    isCompleted: Boolean
  },
  data(){
    return{
    }
  },
  methods:{
    doTask(id){
      this.$emit("do-task", id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.item{
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
img {
  width: 100px;
}
.btn{
  height: 40px;
  margin: 0 5px;
}
.checked span{
  text-decoration: line-through;
}
</style>
