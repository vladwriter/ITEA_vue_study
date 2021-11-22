<template>
<div class="slider">
  <div class="wrapper">
    <div v-for="(slide, index) in slides" :key="index" class="slide" mode="in-out">
      <transition :name="typeOfAnimation" >
      <img :src="slide" alt="" v-if="currentSlide === index">
      </transition>
    </div>
    
    
  </div>
  <div class="nav"><button @click = "slideLeft">Left</button><button @click = "slideRight">Right</button></div>
  
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
        "https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg",
        "https://galoptur.com/wp-content/uploads/2019/02/novo_img17.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNmQZFtzWtwQrMD5ID7l9yJgqIVr6VWcwWQ&usqp=CAU"
      ],
      currentSlide: 0,
      typeOfAnimation: ''
    }
  },
  methods:{
    slideRight(){
      this.typeOfAnimation = 'swipeRight'
      if(this.currentSlide === this.slides.length-1){
        this.currentSlide = 0;
      }else{
        this.currentSlide = this.currentSlide+1
      }
    },
    slideLeft(){
      this.typeOfAnimation = 'swipeLeft'
      if(this.currentSlide === 0){
        this.currentSlide = this.slides.length-1;
      }else{
        this.currentSlide = this.currentSlide-1
      }
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
  .swipeLeft-enter-active, .swipeLeft-leave-active {
    transition: all .8s ease;
  }
  .swipeLeft-enter, .swipeLeft-leave-to{
    transform: translateX(-50vw);
  }
  .swipeRight-enter-active, .swipeRight-leave-active {
    transition: all .8s ease;
  }
  .swipeRight-enter, .swipeRight-leave-to{
    transform: translateX(50vw);
  }
</style>
