<template>
  <label class="form-label mt-4">{{label}}<input type="text"
                                                 @input="$emit('change-data')"
                                                 v-bind="$attrs"
  /></label>
</template>

<script>
export default {
  name: 'CInput',
  props: {
    label: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  width: 80%;
  margin: 2%;
}
</style>
