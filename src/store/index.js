import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugins/axios.js/'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,

  },

  mutations: {
    SET_USER(state, user){
      state.user = user
    }
  },

  actions: {
    async LOGIN({commit}, userData) {
      const response = await axios.post('/auth/login', userData)
      commit('SET_USER', response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user))
    }
  }
})
