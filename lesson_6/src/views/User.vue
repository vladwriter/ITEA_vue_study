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
    <p v-for="(post, index) in userPosts">{{ index+1 }}.
      <router-link :to='createUrl(post.id)'>{{post.title}}</router-link>
    </p>
  </div>
  </div>
</template>

<script>

export default {
  name: 'User',
  data(){
    return{
      user:{},
      userAddress:{},
      userGeo: {},
      userPosts: []
    }
  },
  methods:{
    createUrl(idx){
      return `/posts/${idx+1}`
    }
  },
  beforeCreate() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.pathMatch}`)
        .then(response => response.json())
        .then(user => {
          this.user = user
          this.userAddress = user.address
          this.userGeo = user.address.geo
        }).then(
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
              this.userPosts = posts.filter(item => item.userId == this.user.id)
            })
    )
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
