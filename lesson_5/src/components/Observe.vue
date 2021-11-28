<template>
  <div>
    <h1>Top anime </h1>
    <div v-if="!isLoaded">Loading...</div>
    <div class="row">
      <anime-preview
        v-for="item in animes"
        :key="item.id"
        :single-anime="item"
        class="col-4"
      />
    </div>

  </div>
</template>

<script>
import { actions, getters } from '../store'

import AnimePreview from './observe/AnimePreview'

export default {
  name: 'Observe',
  components: {
    AnimePreview
  },
  computed: {
    ...getters
  },
  beforeCreate() {
    const vm = this
    setTimeout(() => {
      vm.getAnimes()
    }, 1000)
  },
  methods: {
    ...actions
  }
}
</script>

<style scoped>

</style>