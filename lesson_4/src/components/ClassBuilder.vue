<template>
  <div class="demo">
    classBuilder testing: <br>
    <div class="block" v-classBuilder="'success'">Success block</div>
    <div class="block" v-classBuilder="'warning'">Warning block</div>
  </div>
</template>

<script>
import classBuilder from './Directives/classBuilder'

export default {
  name: 'ClassBuilder',
  directives: {
    classBuilder
  }
}
</script>

<style scoped>
.demo{
  width: 30%;
  margin: 10px auto;
}
.block{
  padding: 10px;
  margin: 5px;
  bottom: 1px solid #ccc;
  width: 40%;
  float: left;
}
.bg-success{
  background-color: rgb(124, 223, 124);
}
.bg-warning{
  background-color: rgb(247, 247, 95);
}
</style>
