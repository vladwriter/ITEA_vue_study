import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import {
    SET_AUTH_USER,
    SET_TASKS,
    SET_LAST_TASK_ID,
    UPDATE_TASK, DELETE_TASK, SET_NEW_USER
} from "../../../project-to-do/src/types/mutations";

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'my-app',
    storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    users:[
          {
            id: 1,
            login: "user1",
            password: "user1"
          },
          {
            id: 2,
            login: "user2",
            password: "user2",
          }
        ],
      authUser: '',
      tasks: [],
      currentTaskList:[],
      lastTaskId: 0,
  },
  mutations: {
      [SET_NEW_USER](state, newUser){
          newUser.id = state.users[state.users.length-1].id + 1
          state.users.push(newUser)
          state.authUser = newUser.id
      },
      [SET_AUTH_USER](state, payload){
          state.authUser = payload
      },
      [SET_TASKS](state, payload){
          state.tasks.push(payload)
      },
      [SET_LAST_TASK_ID]: state => state.lastTaskId++,
      [UPDATE_TASK](state, {id, newTask}){
          for(let i = 0; i<state.tasks.length; i++){
              if(state.tasks[i].id === id){
                  state.tasks[i] = newTask
              }
          }
      },
      [DELETE_TASK](state, id){
          for(let i = 0; i<state.tasks.length; i++){
              if(state.tasks[i].id === id){
                  state.tasks.splice(i, 1)
              }
          }
      }
  },
  actions: {

  },
  modules: {
  },
    plugins: [vuexPersist.plugin]
})
