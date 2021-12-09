<template>
  <div id="app">
    <link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.min.css">
    <div id="nav">
      <template  v-if="$store.state.authUser"><router-link to="/todos">ToDo List</router-link> | </template>
      <router-link to="/auth">Authorization</router-link> |
      <router-link to="/feed">Feed page</router-link>
      <button class="btn btn-info" @click="changeTheme">{{btnName}}</button>
    </div>
    <template v-if="isBlueTheme">
      <blue-theme>
        <transition name="pageAnimation" mode="out-in">
          <router-view/>
        </transition>
      </blue-theme>
    </template>
    <template v-else>
      <default-theme>
        <transition name="pageAnimation" mode="out-in">
          <router-view/>
        </transition>
      </default-theme>
    </template>
  </div>
</template>
<script>
import BlueTheme from "./components/themes/BlueTheme";
import DefaultTheme from "./components/themes/DefaultTheme";

export default {
  name: 'Home',
  components: {BlueTheme, DefaultTheme},
  data(){
    return{
      isBlueTheme: true,
      btnName: 'Blue theme'
    }
  },
  methods:{
    changeTheme(){
      if(this.isBlueTheme){
        this.btnName = 'Blue theme'
      }else{
        this.btnName = 'Default theme'
      }
      this.isBlueTheme = !this.isBlueTheme
    }
  },
  beforeCreate() {
    if(!this.$store.state.authUser){
      this.$router.push('auth')
    }else{
      this.$router.push('todos')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px 20px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.btn{
  margin-left: 200px;
}
.pageAnimation-enter-active, .pageAnimation-leave-active {
  transition: all .5s;
}
.pageAnimation-enter, .pageAnimation-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
