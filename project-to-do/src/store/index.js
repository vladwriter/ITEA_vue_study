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

const getDateTime = () =>{
    const dateTime = new Date()
    const twoDigits = (data) => {
        return ('0' + data).slice(-2)
    }
    let minutes = twoDigits(dateTime.getMinutes())
    let hours = twoDigits(dateTime.getHours())
    let day = twoDigits(dateTime.getDate())
    let month = twoDigits(dateTime.getMonth()+1)
    let year = dateTime.getFullYear()
    return `${hours}:${minutes}   ${day}.${month}.${year}`
}



export default new Vuex.Store({
  state: {
    users:[],
      authUser: '',
      tasks: [],
      currentTaskList:[],
      lastTaskId: 0,
      feeds: []
  },
  mutations: {
      [SET_NEW_USER](state, newUser){
          if(state.users.length>0){
              newUser.id = state.users[state.users.length-1].id+ 1
          }else{
              newUser.id = 1
          }
          state.users.push(newUser)
          state.authUser = newUser.id
      },
      [SET_AUTH_USER](state, payload){
          state.authUser = payload
      },
      [SET_TASKS](state, payload){
          state.tasks.push(payload)
          //Add new feed
          let currentUser = state.users.find(user => user.id == state.authUser)
          let newFeed = `User ${currentUser.name} added the task '${payload.title}' [${getDateTime()}]`
          state.feeds.push(newFeed)
      },
      [SET_LAST_TASK_ID]: state => state.lastTaskId++,
      [UPDATE_TASK](state, {id, newTask, isChanged}){
          let currentUser = state.users.find(user => user.id === state.authUser)
          //Add new feed
          let keyword = 'edited'
          if(isChanged){
               if(newTask.isCompleted){
                  keyword = 'did'
              }else{
                   keyword = 'returned'
               }
          }
          //Add new feed
          let newFeed = `User ${currentUser.name} ${keyword} the task '${newTask.title}' [${getDateTime()}]`
          state.feeds.push(newFeed)
      },
      [DELETE_TASK](state, id){
          let taskTitle = ''
          for(let i = 0; i<state.tasks.length; i++){
              if(state.tasks[i].id === id){
                  taskTitle = state.tasks[i].title
                  state.tasks.splice(i, 1)
              }
          }
          //Add new feed
          let currentUser = state.users.find(user => user.id === state.authUser)
          let newFeed = `User ${currentUser.name} removed the task '${taskTitle}' [${getDateTime()}]`
          state.feeds.push(newFeed)
      }
  },
  actions: {
  },
  modules: {
  },
    plugins: [vuexPersist.plugin]
})
