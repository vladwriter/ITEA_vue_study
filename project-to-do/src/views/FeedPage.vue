<template>
  <div class="about" :style="{'background-color': colors.light}">
    <h1>This is Feed Page</h1>
    <ul>
      <li v-for="feed in feeds" :style="{'color': colors.hard}">{{feed}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  inject: ['colors'],
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
