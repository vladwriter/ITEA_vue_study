import Vue from 'vue'
import Vuex from 'vuex'
import {PLUS_ONE, MINUS_ONE, SET_IS_LOADED, SET_POSTS, SET_USERS} from "../types/mutations";
import {GET_POSTS, GET_USERS} from "../types/actions";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    posts: [],
    users: [],
    isLoaded: false,
  },
  mutations: {
    [PLUS_ONE]: state => state.count++,
    [MINUS_ONE]: state => state.count--,
    [SET_POSTS] (state, payload){
      state.posts = payload
    },
    [SET_IS_LOADED](state, payload){
      state.isLoaded = payload
    },
    [SET_USERS](state, payload){
      state.users = payload
    },
  },
  actions:{
    async [GET_POSTS]({ commit, state, dispatch, getters  }, params) {
      commit(SET_IS_LOADED, false)
      try {
        const data = fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
              return response.json();
            }).then((data) => {
              commit(SET_POSTS, data)
            }).then(commit(SET_IS_LOADED, true))
      } catch (err) {
        console.log(err)
      }
    },
    async [GET_USERS]({ commit, state, dispatch, getters  }, params) {
      try {
        const data = fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
              return response.json();
            }).then((data) => {
              commit(SET_USERS, data)
            })
      } catch (err) {
        console.log(err)
      }
    },

  },
  modules:{

  },
})

export default store
