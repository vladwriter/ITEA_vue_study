import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import {SET_AUTH_USER, SET_TASKS, SET_LAST_TASK_ID, UPDATE_TASK_COMPLETE} from "../../../project-to-do/src/types/mutations";

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
      [SET_AUTH_USER](state, payload){
          state.authUser = payload
      },
      [SET_TASKS](state, payload){
          state.tasks.push(payload)
      },
      [SET_LAST_TASK_ID]: state => state.lastTaskId++,
      [UPDATE_TASK_COMPLETE](state, id){
          for(let i = 0; i<this.state.tasks.length; i++){
              if(this.state.tasks[i].id === id){
                  this.state.tasks[i].isCompleted = !this.state.tasks[i].isCompleted
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
