import util from '../util'
import moment from 'moment'

export const getCategoryList = ({ commit }, page) => {
  util.getCategoryList(page).then((res) => {
    commit('getCategoryList', res)
  })
}

export const addCategory = ({ commit }, category) => {
  return new Promise((resolve, reject) => {
    util.addCategory(category).then((res) => {
      resolve()
    })
  })
}

export const deleteCategory = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    util.deleteCategory(id).then((res) => {
      resolve()
    })
  })
}

// Api
export const getApiList = ({ commit }, id) => {
  util.getApiList(id).then((res) => {
    commit('getApiList', res)
  })
}

export const addApi = ({ commit }, api) => {
  return new Promise((resolve, reject) => {
    util.addApi(api).then(() => {
      resolve()
    })
  })
}

export const deleteApi = ({ commit }, api) => {
  return new Promise((resolve, reject) => {
    util.deleteApi(api).then(() => {
      resolve()
    })
  })
}

export const updateApi = ({ commit }, api) => {
  return new Promise((resolve, reject) => {
    util.updateApi(api).then(() => {
      resolve()
    })
  })
}

export const selectApi = ({ commit }, api) => {
    commit('selectApi', api)
}

export const changeStatus = ({ commit }, status) => {
    commit('changeStatus', status)
}
