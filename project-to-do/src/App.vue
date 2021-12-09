<template>
  <div id="app">
    <link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.min.css">
    <div id="nav">
      <template  v-if="$store.state.authUser"><router-link to="/todos">ToDo List</router-link> | </template>
      <router-link to="/auth">Authorization</router-link> |
      <router-link to="/feed">Feed page</router-link>
    </div>
    <transition name="pageAnimation" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Home',
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
.pageAnimation-enter-active, .pageAnimation-leave-active {
  transition: all .5s;
}
.pageAnimation-enter, .pageAnimation-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
