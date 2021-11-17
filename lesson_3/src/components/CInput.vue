<template>
  <div>
    <input class="form-control"
    :placeholder=placeholder
    :value="value" @input="$emit('input', $event.target.value)" >
  </div>
</template>

<script>
export default {
  name: 'CInput',
  inheritAttrs: false,
  props: {
    placeholder:{
      type: String,
      default: 'default text'
    },
    value: String
  }
}
</script>

<style scoped>
  div{
    margin: 10px 0;
  }
</style>