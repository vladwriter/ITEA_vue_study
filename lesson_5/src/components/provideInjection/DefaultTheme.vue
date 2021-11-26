<script>
export default {
  name: 'DefaultTheme',
  provide: {
    form: {
      bg: 'green',
      clr: '#fff'
    }
  },
  render(h) {
    return this.$slots.default
  }
}
</script>
