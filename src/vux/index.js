import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger' // 打印日志

Vue.use(Vuex)

const debug = process.env.NODE_ENVN !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})