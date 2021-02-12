import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  rows: [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8]
  ],
  count: 0
}

const mutations = {
  INCREMENT: (state) => {
    state.count++
  },

  DECREMENT: (state) => {
    state.count--
  },

  MOVE: (state, payload) => {
    state.rows[0][0] = payload
  }
}

export default function () {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters
  })
}
