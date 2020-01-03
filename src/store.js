import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import {firebaseConfig} from '../secrets.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signup ({commit}, authData) {
      axios.post(`/accounts:signUp?key=${firebaseConfig.apiKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))

    },
    login ({commit}, authData) {
      axios.post(`/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  },
  getters: {

  }
})