const mongoose = require('mongoose');
const Api = mongoose.model('Api');

exports.addApi = async (ctx, next) => {
	const result = await Api.create(ctx.request.body)
	ctx.body = {success: true, api_id: result._id}
}

exports.getApi = async (ctx) => {
	const id = ctx.params.id
	const api = await Api.findOne({_id: id}).exec()
	ctx.body = {data: api}
}

exports.updateApi = async (ctx) => {
	const id = ctx.params.id
	const api = await Api.findByIdAndUpdate(id, ctx.request.body, {new: true}).exec()
	ctx.body = {success: true, api_id: api._id}
}

exports.destroy = async (ctx) => {
	const id = ctx.params.id
	const api = await Api.remove({_id: id})
	ctx.body = {success: true}
}

exports.getApiList = async (ctx) => {
	let currentPage = parseInt(ctx.query.currentPage > 0 ? ctx.query.currentPage : 1)
	let itemsPerPage = parseInt(ctx.query.itemsPerPage > 0 ? ctx.query.itemsPerPage : 10)
	let startRow = (currentPage - 1) * itemsPerPage

	let sortName = String(ctx.query.sortName) || "publish_time"
	let sortOrder = ctx.query.sortOrder
	if(sortOrder === 'false'){
		sortName = "-" + sortName;
	}

	const ApiList = await Api.find()
																		.skip(startRow)
																		.sort({ create_time: -1 })
																		.limit(itemsPerPage)
																		.exec()
  const count = await Api.count()
  ctx.body = {data: ApiList, count: count}
}

exports.getApiListByCategoryId = async (ctx) => {
	let currentPage = parseInt(ctx.query.currentPage > 0 ? ctx.query.currentPage : 1)
	let itemsPerPage = parseInt(ctx.query.itemsPerPage > 0 ? ctx.query.itemsPerPage : 10)
	let startRow = (currentPage - 1) * itemsPerPage
	let categoryId = ctx.query.categoryId

	let sortName = String(ctx.query.sortName) || "publish_time"
	let sortOrder = ctx.query.sortOrder
	if(sortOrder === 'false'){
		sortName = "-" + sortName;
	}

	const ApiList = await Api.find({categoryId: categoryId})
																		.skip(startRow)
																		.sort({ create_time: -1 })
																		.limit(itemsPerPage)
																		.exec()
	console.log(ApiList)
  const count = await Api.count()
  ctx.body = {data: ApiList, count: count}
}

