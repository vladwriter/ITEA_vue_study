<template>
<div class="posts">
  <div class="about">
    <h1>This is page of the User</h1>
    <p>User id {{user.id}}</p>
    <p>Name: {{user.name}}</p>
    <p>nickname: {{user.username}}</p>
    Address:
    <p>City: {{userAddress.city}}</p>
    <p>Street: {{userAddress.street}}</p>
    <p>Suite: {{userAddress.suite}}</p>
    <p>zipcode: {{userAddress.zipcode}}</p>
    Geo location
    <p>lat: {{userGeo.lat}}</p>
    <p>lng: {{userGeo.lng}}</p>
  </div>
  <div class="posts">
    <h2>Posts</h2>
    <p v-for="(post, index) in userPosts" :key='post.id'>{{ index+1 }}.
      <router-link :to='createUrl(post.id)'>{{post.title}}</router-link>
    </p>
  </div>
  </div>
</template>

<script>


import {GET_POSTS, GET_USERS} from "../types/actions";

export default {
  name: 'User',
  computed: {
    user(){
      return this.$store.state.users.find(user => user.id === Number(this.$route.params.pathMatch))
    },
    userAddress(){
      return this.user.address
    },
    userGeo(){
      return this.user.address.geo
    },
    userPosts(){
      return this.$store.state.posts.filter(post => post.userId === this.user.id)
    }
  },
  methods:{
    createUrl(idx){
      return `/posts/${idx}`
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
<style>
  .posts p{
    text-align: start;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
  }
  .about{
    border: 1px solid green;
    border-radius: 25px;
    margin: 0 20%;
    padding: 10px 10%;
  }
</style>
