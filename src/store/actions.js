import util from '../util'
import moment from 'moment'
import config from '../config'

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
export const getApiList = ({ commit }, options) => {
  util.getApiList(options.categoryId).then((res) => {
    commit('getApiList', {res: res, index: options.index})
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
    }, (res) => {
      reject(false)
    })
  })
}

export const selectApi = ({ commit }, api) => {
    commit('selectApi', api)
}

export const changeStatus = ({ commit }, status) => {
    commit('changeStatus', status)
}

export const testApi = ({ commit }, path) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      util.testApi(path).then((res) => {
        commit('testApi', {url: `${config.api_root}${path}`, response: res.data})
        resolve()
      }, (res) => {
        reject(false)
      })
    }, 2000)
  })
}

export const setFetching = ({ commit }, status) => {
  commit('setFetching', status)
}

export const setTesting = ({ commit }, status) => {
  commit('setTesting', status)
}