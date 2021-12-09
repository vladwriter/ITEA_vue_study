<template>
  <transition name="animateList" mode="in-out">
      <div class="item alert alert-dismissible" :class="{
        card: !isList,
      'alert-danger': status === 'red',
      'alert-success': status === 'green',
      'alert-warning': status === 'yellow',
      'alert-info': !status
      }" >
        <div  :class="{checked:isCompleted}">
          <div v-if="!editMode" class="d-flex" >
            <img v-bind:src=img>
            <div class="indicator" :class="{
            red: status === 'red',
            green: status === 'green',
            yellow: status === 'yellow'}"></div>
            <p class="text-secondary mx-3">{{title}}</p>
            <p class="text-secondary mx-3">{{description}}</p>
            <p class="text-secondary mx-3">{{dateTime}} <span v-if="isEdited">(edited)</span></p>
          </div>
          <div v-else class="d-flex">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput1" v-model="imgUrl">
              <label for="floatingInput1">img</label>
            </div>
            <div class="form-floating mb-3 d-flex">
              <input type="text" class="form-control" id="floatingInput2" v-model="taskTitle" required>
              <label for="floatingInput2">title</label>
            </div>
            <div class="form-floating mb-3 d-flex">
              <input type="text" class="form-control" id="floatingInput3" v-model="taskDescription" >
              <label for="floatingInput3">description</label>
            </div>
            <select class="form-select" v-model="taskStatus">
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="red">Red</option>
            </select>
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
    status: String,
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
      taskStatus: 'green',
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
      if(!this.imgUrl){
        this.imgUrl = 'https://cdn-icons-png.flaticon.com/512/906/906334.png'
      }
      const data = {
        id,
        img: this.imgUrl,
        title: this.taskTitle,
        description: this.taskDescription,
        status: this.taskStatus,
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
select{
  width: 150px;
  height: 50px;
}
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
.indicator{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.btn{
  height: 40px;
  margin: 0 5px;
}
.checked p{
  text-decoration: line-through;
}
.red{
  background-color: brown;
}
.green{
  background-color: darkgreen;
}
.yellow{
  background-color: #fdbd00;
}
.animateList-enter-active, .animateList-leave-active {
    transition: all .5s ease;
}
.animateList-enter, .animateList-leave-to{
    opacity: 0;
    transform: translateY(-100%);
}
</style>
