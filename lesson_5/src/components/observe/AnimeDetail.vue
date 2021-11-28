<template>
  <div class="wrapper">
  <div class=bg-popup @click="hidePopup"></div>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">{{ data.title }}</h2>
      <img :src="data.image_url"/>
      <div class="card-text"><p>Type: {{ data.type }}</p>
      <p>Episodes: {{ data.episodes }}</p>
      <p class="text-muted">Start date: {{ data.start_date }}<br>
      End date: {{ data.end_date }}</p>
      <p class="text-success">Members: {{ data.members }}</p>
      <p class="text-info">Score: {{ data.score }}</p>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: 'AnimeDetail',
  props: {
    data: Object
  },
  methods:{
    hidePopup(){
      this.$emit('hide', false)
    }
  }
}
</script>

<style scoped>
.wrapper{
  position: absolute;
  top: 0;
  left:0;
}
.bg-popup{
  z-index:10;
  cursor: pointer;
  position:fixed;
  width: 100vw;
  height: 100vh;
  background: #ccc;
  opacity: 0.8;
}
.card{
  z-index:20;
  position: fixed;
  left: 30vw;
  top: 5vh;
  width: 40vw;
}
img{
  float:left;
}
</style>