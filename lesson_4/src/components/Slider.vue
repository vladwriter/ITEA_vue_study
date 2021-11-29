<template>
<div class="slider">
  <div class="wrapper">
    <transition-group
        tag="div" class="carousel">
    <div v-for="slide in slides"
         class="slide"
         :key="slide.id" >
      <img :src="slide.url" alt="">
    </div>
    </transition-group>
  </div>
  <div class="nav"><button @click = "previous">Previous</button><button @click = "next">Next</button></div>
</div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
  },
  data(){
    return{
      slides:[
        {
          'id':0,
          'url':"https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg"
        },
        {
          'id':1,
          'url':"https://galoptur.com/wp-content/uploads/2019/02/novo_img17.jpg"
        },
        {
          'id':2,
          'url':"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNmQZFtzWtwQrMD5ID7l9yJgqIVr6VWcwWQ&usqp=CAU"
        },
        {
          'id':3,
          'url':"https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg"
        },
        {
          'id':4,
          'url':"https://galoptur.com/wp-content/uploads/2019/02/novo_img17.jpg"
        }
      ],
    }
  },
  methods:{
    next () {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous () {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slider{
    width: 50vw;
    margin: auto;
  }
  .wrapper{
    width: 50vw;
    height: 50vh;
    display: flex;
    overflow: hidden;
    position: relative;
  }
  .nav{
    margin-top: 10px;
    text-align: center;
  }
  img{
    width: 50vw;
    height: 100%;
    position: absolute;
  }
  .carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 50vw;
    min-height: 25em;
  }
  .slide {
    flex: 0 0 50vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform .6s ease-in-out;
  }
  .slide:first-of-type {
    opacity: 0;
  }
  .slide:last-of-type {
    opacity: 0;
  }
</style>
