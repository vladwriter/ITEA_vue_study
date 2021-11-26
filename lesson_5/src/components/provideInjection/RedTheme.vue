<template>
  <div>
    <slot></slot>
  </div>

</template>

<script>


export default {
  name: 'RedTheme',
  components: {
  },
  provide() {
    return {
      form: this.form
    }
  },
  data() {
    return {
      form: {
        text: '',
        bg: 'red',
        clr: 'yellow',
        btnClr: 'orange'
      }
    }
  },
}
</script>
