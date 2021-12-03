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

import { actions, getters } from '../store'

export default {
  name: 'Posts',
  computed: {
    ...getters
  },
  methods:{
    ...actions,
    createUrl(idx){
      return `/posts/${idx}`
    }
  },
   beforeCreate() {
    const vm = this
    setTimeout(() => {
      vm.getPosts()
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
