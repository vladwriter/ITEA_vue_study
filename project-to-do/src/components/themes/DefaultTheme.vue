<script>
export default {
  name: 'DefaultTheme',
  provide: {
    colors: {
      light: '#fff',
      middle: '#6bb327',
      hard: '#0c0202'
    }
  },
  render(h) {
    return this.$slots.default
  }
}
</script>
