import Vue from 'vue'

const state = Vue.observable({
  posts: [],
  isLoaded: false
})

export const actions = {
  async getPosts() {
    mutations.setIsLoaded(false)
    try {
      let data = fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json();
      }).then((data) => {
        mutations.setPosts(data)
      })
      mutations.setIsLoaded(true)
    } catch (err) {
      console.log(err)
    }
  }
}

export const mutations = {
  setPosts: payload => state.posts = payload,
  setIsLoaded: payload => state.isLoaded = payload
}

export const getters = {
  posts: () => state.posts,
  isLoaded: () => state.isLoaded
}
