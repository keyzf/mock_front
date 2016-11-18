import Vue from 'vue'

// Api
exports.getApi = function (id) {
	return Vue.http.get('/api/' + id + '/getApi')
}

exports.addApi = function (api) {
	return Vue.http.post('/api/addApi', api)
}

exports.deleteApi = function (id) {
	return Vue.http.delete('/api/' + id)
}

exports.updateApi = function (api) {
	return Vue.http.put('/api/' + api._id + '/updateApi', api)
}

exports.getApiList = function (id) {
	return Vue.http.get('/api/getApiListByCategoryId?categoryId=' + id)
}

// Category
exports.getCategory = function (id) {
	return Vue.http.get('/category/' + id + '/getCategory')
}

exports.addCategory = function (options) {
	return Vue.http.post('/category/addCategory', options)
}

exports.deleteCategory = function (id) {
	return Vue.http.delete('/category/' + id)
}

exports.updateCategory = function (id, category) {
	return Vue.http.put('/category/' + category._id + '/updateCategory', category)
}

exports.getCategoryList = function (page) {
	return Vue.http.get('/category/getCategoryList?itemsPerPage=20&currentPage=' + page)
}
