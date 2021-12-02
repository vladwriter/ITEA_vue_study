<template>
<div class="posts">
    <h1>This is the Posts</h1>
      <p v-for="(post, index) in posts">{{ index+1 }}.
        <router-link :to='createUrl(index)'>{{post.title}}</router-link>
      </p>
  </div>
</template>

<script>
export default {
  name: 'CSubmit',
  data(){
    return{
      posts:[],
    }
  },
  methods:{
    createUrl(idx){
      return `/posts/${idx+1}`
    }
  },
  beforeCreate() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {this.posts = posts
        })
  }
}
</script>
<style>
  .posts p{
    text-align: start;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
  }
</style>
