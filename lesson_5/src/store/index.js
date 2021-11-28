import Vue from 'vue'

const state = Vue.observable({
  animes: [],
  isLoaded: false
})

export const actions = {
  async getAnimes() {
    mutations.setIsLoaded(false)
    try {
      let data = fetch('https://api.jikan.moe/v3/top/anime')
      .then((response) => {
        return response.json();
      }).then((data) => {
        mutations.setAnimes(data.top)
      })
      mutations.setIsLoaded(true)
    } catch (err) {
      console.log(err)
    }
  }
}

export const mutations = {
  setAnimes: payload => state.animes = payload,
  setIsLoaded: payload => state.isLoaded = payload
}

export const getters = {
  animes: () => state.animes,
  isLoaded: () => state.isLoaded
}
