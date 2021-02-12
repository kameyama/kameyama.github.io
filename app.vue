<template>
  <div id="app">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in rows" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">{{ col }}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <div>
      <button @click='move(15)'>Move</button>
      <button @click='increment'>Increment +1</button>
      <button @click='decrement'>Decrement -1</button>
      <h3>Count is {{ count }}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'move'
    ])
  },
  computed: {
    ...mapGetters({
      count: 'getCount',
      rows: 'getRows'
    })
  }
}
</script>import Vue from 'vue'
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
