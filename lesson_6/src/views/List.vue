<template>
<div class="list">
    <h1>This is a List</h1>
  <router-link to="/list/item-1">Item 1</router-link><br>
  <router-link to="/list/item-2">Item 2</router-link>
  </div>
</template>

<script>

export default {
  name: "Item"
}

</script>
<style scoped lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>