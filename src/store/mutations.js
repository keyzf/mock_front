import util from '../util'
import moment from 'moment'
import Vue from 'vue'

export const getCategoryList = (state, res) => {
	console.log(res.data)
	state.category.list = res.data.data.map((item => {
		item.updatedAt = moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')
		item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')
		return item
	}))
	state.category.count = res.data.count
}

// Api
export const getApiList = (state, res) => {
	state.apiList = res.data.data.map((item => {
		item.updatedAt = moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss')
		item.createdAt = moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss')
		return item
	}))
	state.currentApi = state.apiList[0]
}

export const selectApi = (state, api) => {
	state.currentApi = api
}

export const changeStatus = (state, status) => {
	state.status = status
}
