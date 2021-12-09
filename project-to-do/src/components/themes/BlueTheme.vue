<script>
export default {
  name: 'BlueTheme',
  provide: {
    colors: {
      light: '#c7fce9',
      middle: '#2581ea',
      hard: '#3f3578'
    }
  },
  render(h) {
    return this.$slots.default
  }
}
</script>
