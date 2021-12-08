<template>
  <div>
    <div class="modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Registration</h5><router-link to="/auth">Authorization</router-link>
          </div>
          <div class="modal-body">
            <p class="text-danger">{{ message }}</p>
            <div class="form-group">
              <label for="exampleInputName" class="form-label mt-4">Your name</label>
              <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name" v-model="name" required>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">Login (nickname)</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter login" v-model="login" required>
            </div>
            <div class="form-group">
              <label for="email" class="form-label mt-4">Email</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" required>
            </div>
            <div class="form-group">
              <label for="repeatPass" class="form-label mt-4">Repeat your password</label>
              <input type="password" class="form-control" id="repeatPass" placeholder="Password" v-model="repPassword" required>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="checkUserData">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {SET_NEW_USER} from "../types/mutations";

export default {
  name: 'Registration',
  data(){
    return{
      name: "",
      login:"",
      email:"",
      password:"",
      repPassword:"",
      message:"",
    }
  },
  methods:{
    checkUserData(){
        if(this.name == ""){
          this.message = "Write your name"
        }else if(this.login == ""){
          this.message = "Write your nickname"
        }else if(this.password == ""){
          this.message = "Write your password"
        }else if(this.password !== this.repPassword){
          this.message = "Your password does not match"
        }else{
          this.message = ''
          let newUser = {
            id: '',
            name: this.name,
            login: this.login,
            email: this.email,
            password: this.password,
          }
          this.$store.commit(SET_NEW_USER, newUser)
          this.$router.push('Todos')
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