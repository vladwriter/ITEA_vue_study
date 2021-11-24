<template>
  <label class="form-label mt-4">{{label}}<input type="text"
                                                 @input="$emit(
                                                     'change-data', {
                                                          'value':$event.target.value,
                                                          'label': label
                                                          })"
                                                 :value="value"
  /></label>
</template>

<script>
export default {
  name: 'CInput',
  props: {
    label: String,
    value: String
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
