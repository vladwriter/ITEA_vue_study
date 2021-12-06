<template>
  <div class="about">
    <h1>Counter: {{ count }}</h1>
    <button @click="minusOne">-</button><button @click="plusOne">+</button>
  </div>
</template>

<script>

import {PLUS_ONE, MINUS_ONE} from "../types/mutations";

export default {
  name: 'Counter',
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    plusOne(){
      this.$store.commit(PLUS_ONE)
    },
    minusOne(){
      this.$store.commit(MINUS_ONE)
    }
  }
}

</script>