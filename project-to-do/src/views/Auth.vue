<template>
  <div>
    <div class="modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Authorization</h5><router-link to="/registration">Registration</router-link>
          </div>
          <div class="modal-body">
            <p class="text-danger">{{ message }}</p>
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">Login</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter login" v-model="login">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="checkForm">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {SET_AUTH_USER} from "../types/mutations";

export default {
  name: 'Authorization',
  computed:{
    users() {
      return this.$store.state.users
    },
  },
  data(){
    return{
      login:"",
      password:"",
      message:"",
    }
  },
  methods:{
    checkForm(){
      for(let i=0; i<this.users.length; i++){
        if(this.users[i].login == this.login && this.users[i].password == this.password){
          this.message =""
          this.$store.commit(SET_AUTH_USER, this.users[i].id)
          this.$router.push('Todos')
        }else if(this.login == ""){
          this.message = "Login is empty"
        }else if(this.password == ""){
          this.message = "Password is empty"
        }else{
          this.message = "Login or password is incorrect"
        }
      }
    }
  }
}
</script>

<style scoped>
  .modal{
    display: block;
  }
  .modal-footer{
    justify-content: flex-start;
  }
</style>