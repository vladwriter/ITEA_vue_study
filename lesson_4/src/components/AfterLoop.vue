<template>
  <div>
    Open console and click this button
    <button v-afterloop="someArray">afterLoop testing</button>
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
  }
}
</script>
