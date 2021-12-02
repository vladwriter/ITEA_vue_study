<template>
  <div>
    <h2>Post #{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <p class="userName">Author: <router-link :to='createUrl(post.userId)'>{{userName}}</router-link></p>
  </div>

</template>

<script>
export default {
  name: "Post",
  data(){
    return {
      post: {},
      userName: ''
    }
  },
  methods:{
    createUrl(idx){
      return `/users/${idx}`
    }
  },
  beforeMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.pathMatch}`)
        .then(response => response.json())
        .then(post => {
          this.post = post
          fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
              .then(response => response.json())
              .then(user => this.userName = user.name)
        })
    }
}
</script>

<style scoped>
  p{
    text-align: start;
  }
</style>