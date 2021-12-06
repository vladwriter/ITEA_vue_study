<template>
<div class="posts">
    <h1>This is the Posts</h1>
    <div v-if="!isLoaded">Loading...</div>
      <p v-for="(post, index) in posts" :key="post.id">{{ index+1 }}.
        <router-link :to='createUrl(post.id)'>{{post.title}}</router-link>
      </p>
  </div>
</template>

<script>

import {GET_POSTS, GET_USERS} from "../types/actions";

export default {
  name: 'Posts',
  computed: {
    posts() {
      return this.$store.state.posts
    },
    isLoaded() {
      return this.$store.state.isLoaded
    }
  },
  methods: {
    createUrl(idx) {
      return `/posts/${idx}`
    }
  },
  beforeCreate() {
    setTimeout(()=>{
      this.$store.dispatch(GET_POSTS)
      this.$store.dispatch(GET_USERS)
    }, 1000)
  },
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
