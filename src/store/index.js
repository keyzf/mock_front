import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
	category: {list: [], count: 0},
	apiList: [],
	currentApi: {},
	status: '',
	test: {url: '', response: null},
	fetching: false,
	testing: false
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store