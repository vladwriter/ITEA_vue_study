<template>
  <button type="submit" class="btn btn-success"
  @click="$emit('save-data')"
  >
    Save
  </button>
</template>

<script>
export default {
  name: 'CSubmit',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  width: 30%;
  margin: 2% 35%;
}
</style>
