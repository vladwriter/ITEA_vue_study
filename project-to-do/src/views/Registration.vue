<template>
  <div>
    <div class="modal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Authorization</h5>
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
            <button type="button" class="btn btn-primary" @click="checkForm">Ok</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authorization',
  props: {
  },
  data(){
    return{
      login:"",
      password:"",
      message:"",
      users:[
        {
          id: 1,
          login: "user1",
          password: "user1"
        },
        {
          id: 2,
          login: "user2",
          password: "user2",
        }
      ]
    }
  },
  methods:{
    checkForm(){
      for(let i=0; i<this.users.length; i++){
        if(this.users[i].login == this.login && this.users[i].password == this.password){
          this.message =""
          this.$emit('auth-id', i+1)
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