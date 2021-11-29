<template>
  <div>
    Afterloop
    <ul>
      <li 
      v-for="(item, index) in array" :key="index"
      v-afterloop="{ index, array, callBack }">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import afterloop from './Directives/afterLoop.js'

export default {
  name: 'AfterLoop',
  directives: {
    afterloop
  },
  props:{
    someArray: Array
  },
  data(){
    return{
      array: [1, 2, 3, 4, 5]
    }
  },
  methods:{
    callBack(){
      console.log('Array is over')
    }
  }
}
</script>

