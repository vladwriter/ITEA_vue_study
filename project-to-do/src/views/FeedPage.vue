<template>
  <div class="about">
    <h1>This is Feed Page</h1>
    <ul>
      <li v-for="feed in feeds">{{feed}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FeedPage',
  computed:{
    feeds(){
      return this.$store.state.feeds.reverse()
    }
  }
}
</script>

<style>
ul{
  text-align: left;
}
li {
  list-style-type: none;
  color: #2c3e50;
}
</style>
