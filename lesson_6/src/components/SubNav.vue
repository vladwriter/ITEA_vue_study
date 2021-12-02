<template>
  <div>
      <button @click="goByHistoryNext">next</button>
      <button @click="goByHistoryPrev">prev</button>
  </div>
</template>

<script>
export default {
  name: 'SubNav',
  methods: {
    goByHistoryNext() {
      this.$router.go(1)
    },
    goByHistoryPrev() {
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>

</style>