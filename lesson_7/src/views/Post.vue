<template>
  <div>
    <div v-if="isLoaded">
      <h2>Post #{{ post.id }} {{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <p class="userName">Author: <router-link :to='createUrl(post.userId)'>{{user.name}}</router-link></p>
    </div>
  </div>

</template>

<script>
import {GET_POSTS, GET_USERS} from "../types/actions";

export default {
  name: "Post",
  computed:{
    post() {
      return this.$store.state.posts.find(post => post.id === Number(this.$route.params.pathMatch))
    },
    user(){
      return this.$store.state.users.find(user => user.id === this.post.userId)
    },
    isLoaded(){
      return this.$store.state.isLoaded
    }
  },
  methods:{
    createUrl(idx){
      return `/users/${idx}`
    }
  },
  beforeCreate() {
      if(this.$store.state.posts.length < 1){
        this.$store.dispatch(GET_POSTS)
      }
      if(this.$store.state.users.length < 1){
        this.$store.dispatch(GET_USERS)
      }
  },
}
</script>

<style scoped>
  p{
    text-align: start;
  }
</style>