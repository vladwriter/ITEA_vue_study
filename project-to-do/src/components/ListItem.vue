<template>
  <transition name="animateList" mode="in-out">
  <div class="item alert alert-dismissible alert-info" :class="{card: !isList}">
  <div  :class="{checked:isCompleted}">
    <div v-if="!editMode" class="d-flex">
        <img v-bind:src=img>
        <p class="text-secondary mx-3">{{title}}</p>
        <p class="text-secondary mx-3">{{description}}</p>
        <p class="text-secondary mx-3">{{dateTime}} <span v-if="isEdited">(edited)</span></p>
    </div>
    <div v-else class="d-flex">
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" v-model="imgUrl">
        <label for="floatingInput">img</label>
      </div>
      <div class="form-floating mb-3 d-flex">
        <input type="text" class="form-control" id="floatingInput" v-model="taskTitle" >
        <label for="floatingInput">title</label>
      </div>
      <div class="form-floating mb-3 d-flex">
        <input type="text" class="form-control" id="floatingInput" v-model="taskDescription" >
        <label for="floatingInput">description</label>
      </div>
    </div>
      <div class="nav">
        <button class="btn btn-info" @click="showActions">{{showActionsBtnName}} actions</button>
        <template v-if="isShowActions">
          <button v-if="!isCompleted" class="btn btn-info" @click="doTask(id)">Done</button>
          <button v-else class="btn btn-success" @click="doTask(id)">Return</button>
          <button v-if="!editMode" class="btn btn-warning" @click="editMode = !editMode">Edit</button>
          <button v-else class="btn btn-success" @click="editTask(id)">Save</button>
          <button class="btn btn-danger" @click="deleteTask(id)">Delete</button>
        </template>
      </div>
      </div>
  </div>
  </transition>
</template>

<script>

export default {
  name: 'ListItem',
  props: {
    userId:Number,
    id:Number,
    img: String,
    title: String,
    description:String,
    isCompleted: {
      type: Boolean,
      default: false
      },
    isEdited: {
      type: Boolean,
      default: false
      },
    dateTime: String,
    isList: Boolean
  },
  data(){
    return{
      imgUrl: '',
      taskTitle: '',
      taskDescription: '',
      editMode: false,
      isShowActions: false,
      showActionsBtnName: 'Show'
    }
  },
  methods:{
    doTask(id){
      this.$emit("do-task", id)
    },
    editTask(id){
      const data = {
        id,
        "img": this.imgUrl,
        "title": this.taskTitle,
        "description": this.taskDescription
      }
      this.$emit("edit-task", data)
      this.editMode = !this.editMode
    },
    deleteTask(id){
      this.$emit("delete-task", id)
    },
    showActions(){
      this.isShowActions = !this.isShowActions
      if(this.showActionsBtnName === 'Show'){
        this.showActionsBtnName = 'Hide'
      }else{
        this.showActionsBtnName = 'Show'
      }
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
.card{
  width: 31%;
  float: left;
  margin: 0.5%;
  height: 30vh;
}
img {
  width: 100px;
}
.btn{
  height: 40px;
  margin: 0 5px;
}
.checked p{
  text-decoration: line-through;
}
.animateList-enter-active, .animateList-leave-active {
    transition: all .5s ease;
}
.animateList-enter, .animateList-leave-to{
    opacity: 0;
    transform: translateY(-100%);
}
</style>
