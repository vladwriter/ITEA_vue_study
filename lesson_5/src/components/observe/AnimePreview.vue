<template>
  <div>
    <div class="card border-1" 
    @click="showPopup">
      <div class="card-body">
        <div class="card-title">{{ singleAnime.title }}</div>
        <img :src="singleAnime.image_url"/>
      </div>
    </div>
  <anime-detail
    v-if="showInfo"
      @hide = "showPopup"
      :data="singleAnime"
      />
  </div>
</template>



<script>
import AnimeDetail from "./AnimeDetail"

export default {
  name: 'AnimePreview',
  components:{
    AnimeDetail
  },
  props: {
    singleAnime: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      showInfo: false
    }
  },
  methods:{
    showPopup(){
      this.showInfo = !this.showInfo
    }
  }
}
</script>

<style scoped>
.card{
  cursor: pointer;
}

</style>