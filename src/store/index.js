import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import sidebar from './modules/layout'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    sidebar,
    app
  },
  getters
})

export default store